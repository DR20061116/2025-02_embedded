#include "stm32f10x.h"          
#include "Delay.h"
#include "OLED.h"
#include "MPU6050.h"
#include "Serial.h"
#include "Key.h"
#include "ADC.h"
#include <math.h>


//STM32蓝牙无线控制多功能二自由度舵机云台
//MPU6050控制  双电位器控制  设备控制

//程序基于 江协科技 模板程序上编写包括（OLED显示屏，硬件读取MPU6050, ADC）
//程序仅供学习交流
//ID：我的STM32又烧啦------抖音B站同名

//硬件连接：  MPU6050:SCL/PB10, SDA/PB11      蓝牙模块:TX,RX/PA10,PA9   
//OLED:SCL/PB12  SDA/PB13     电位器 PA0 PA1     按键：PA3  PA4  PA5  按键采用非阻塞式
//串口蓝牙波特为115200，注意修改程蓝牙模块的波特率，使用前需要将两个HC05蓝牙模块进行主从配对。


// 模式枚举定义
#define MODE_SERVO_CONTROL 0    // MPU6050姿态控制模式
#define MODE_DEVICE_CONTROL 1   // 外设控制模式
#define MODE_POT_CONTROL 2      // 电位器舵机控制模式

// 蓝牙通信帧协议定义
#define MODE_FRAME_HEADER 0xBB  // 模式指令帧头
#define MODE_FRAME_TAIL   0xEE  // 模式指令帧尾
#define MODE_SERVO_CMD    0x00  // MPU模式指令码
#define MODE_DEVICE_CMD   0x01  // 外设模式指令码
#define MODE_POT_CMD      0x02  // 电位器模式指令码

#define DEVICE_FRAME_HEADER 0xCC// 外设指令帧头
#define DEVICE_FRAME_TAIL   0x33// 外设指令帧尾
#define INFRARED_ON   0x01      // 红外开启指令
#define INFRARED_OFF  0x02      // 红外关闭指令
#define BUZZER_ON     0x03      // 蜂鸣器开启指令
#define BUZZER_OFF    0x04      // 蜂鸣器关闭指令

#ifndef M_PI
#define M_PI 3.1415926535f      // 圆周率常量
#endif
#define FILTER_ALPHA 0.9f       // MPU滤波系数
#define LOOP_INTERVAL 5         // 主循环周期
#define SERVO1_MIN 0.0f         // 舵机1最小角度
#define SERVO1_MAX 180.0f       // 舵机1最大角度
#define SERVO2_MIN 0.0f         // 舵机2最小角度
#define SERVO2_MAX 180.0f       // 舵机2最大角度
#define ANGLE_FRAME_HEADER 0xAA // 角度数据帧头
#define ANGLE_FRAME_TAIL 0x55   // 角度数据帧尾

// 电位器控制参数
#define POT_FILTER_ALPHA 0.7f   // 滤波系数
#define POT_MIN_STEP 3.0f       // 电位器最小步长
#define POT_MAX_STEP 40.0f      // 电位器最大步长
#define POT_SEND_THRESHOLD 0.3f // 发送阈值

// 全局变量定义
uint8_t mpuID;                  // MPU6050设备ID
int16_t AX, AY, AZ;             // MPU6050原始加速度值
float AX_g, AY_g, AZ_g;         // 加速度值转换为g单位
float ThetaX, ThetaY;           // 计算得到的X/Y轴倾角
float S1_Angle, S2_Angle;       // 舵机原始目标角度
float S1_Filtered, S2_Filtered; // 滤波后的舵机角度
uint8_t currentMode;            // 当前工作模式
uint8_t lastMode;               // 上一工作模式
uint8_t cursorPos;              // 外设控制模式光标位置
uint8_t infraredState;          // 红外状态:0-关闭 1-开启
uint8_t buzzerState;            // 蜂鸣器状态:0-关闭 1-开启

// 电位器变量
uint16_t AD0, AD1;                      // 电位器原始AD值
uint16_t AD0_Filtered = 0, AD1_Filtered = 0; // 滤波后AD值
float Pot_S1_Target = 90.0f, Pot_S1_Current = 90.0f; // 舵机1目标/当前角度
float Pot_S2_Target = 90.0f, Pot_S2_Current = 90.0f; // 舵机2目标/当前角度
float Last_Pot_S1 = -1.0f, Last_Pot_S2 = -1.0f;       // 上一次发送的角度


// 发送模式切换指令
void Bluetooth_Send_ModeCmd(uint8_t mode) {
    uint8_t send_buf[4] = {MODE_FRAME_HEADER, mode, 0x00, MODE_FRAME_TAIL};
    Serial_SendArray(send_buf, 4);
}


//发送双舵机角度数据
void Bluetooth_Send_DualAngle(float s1, float s2) {
    uint16_t s1_int = (uint16_t)(s1 * 10); // 角度放大10倍转为整型传输
    uint16_t s2_int = (uint16_t)(s2 * 10);
    
    uint8_t send_buf[6] = {
        ANGLE_FRAME_HEADER,
        (uint8_t)s1_int, (uint8_t)(s1_int >> 8),
        (uint8_t)s2_int, (uint8_t)(s2_int >> 8),
        ANGLE_FRAME_TAIL
    };
    Serial_SendArray(send_buf, 6);
}


//发送外设控制指令

void Bluetooth_Send_DeviceCmd(uint8_t cmd) {
    uint8_t send_buf[4] = {DEVICE_FRAME_HEADER, cmd, 0x00, DEVICE_FRAME_TAIL};
    Serial_SendArray(send_buf, 4);
}

//电位器AD值滤波处理    rawValue 原始AD值       filtered 滤波值存储地址

uint16_t AD_Filter(uint16_t rawValue, uint16_t *filtered) {
    if (*filtered == 0) {
        *filtered = rawValue;
        return rawValue;
    }
    *filtered = (uint16_t)(rawValue * POT_FILTER_ALPHA + *filtered * (1 - POT_FILTER_ALPHA));
    return *filtered;
}


// OLED显示刷新控制
void OLED_RefreshDisplay() {
    static uint8_t refreshCnt = 0;
    if (refreshCnt < 2) {
        refreshCnt++;
        return;
    }
    refreshCnt = 0;

    OLED_Clear();
    switch(currentMode) {
        case MODE_SERVO_CONTROL:
            OLED_ShowString(32, 0, "MPU Mode", OLED_8X16);
            OLED_ShowString(27, 16, "MPU ID:", OLED_8X16);
            OLED_ShowHexNum(87, 16, mpuID, 2, OLED_8X16);
            OLED_ShowString(45, 32, "X:", OLED_8X16);
            OLED_ShowString(45, 48, "Y:", OLED_8X16);
            OLED_ShowNum(65, 32, (uint16_t)S1_Filtered, 3, OLED_8X16);
            OLED_ShowNum(65, 48, (uint16_t)S2_Filtered, 3, OLED_8X16);
            break;
        
        case MODE_DEVICE_CONTROL:
            OLED_ShowString(20, 0, "Device Mode", OLED_8X16);
            OLED_ShowString(25, 24, "1:HW", OLED_8X16);
            OLED_ShowString(80, 24, infraredState ? "ON" : "OFF", OLED_8X16);
            OLED_ShowString(25, 48, "2:FMQ", OLED_8X16);
            OLED_ShowString(80, 48, buzzerState ? "ON" : "OFF", OLED_8X16);
            OLED_ShowString(0, cursorPos == 0 ? 24 : 48, ">", OLED_8X16);
            break;
        
        case MODE_POT_CONTROL:
            OLED_ShowString(33, 0, "Pot Mode", OLED_8X16);
            OLED_ShowString(38, 24, "S1:", OLED_8X16);
            OLED_ShowString(38, 48, "S2:", OLED_8X16);
            OLED_ShowNum(70, 24, (uint16_t)Pot_S1_Current, 3, OLED_8X16);
            OLED_ShowNum(70, 48, (uint16_t)Pot_S2_Current, 3, OLED_8X16);
            break;
    }
    OLED_Update();
}

//模式切换状态重置,避免模式切换时角度/状态异常
void Mode_ResetState() {
    if (currentMode != lastMode) {
        if (currentMode == MODE_POT_CONTROL) {
            Pot_S1_Target = Pot_S1_Current;
            Pot_S2_Target = Pot_S2_Current;
        } else if (currentMode == MODE_SERVO_CONTROL) {
            S1_Filtered = S1_Angle;
            S2_Filtered = S2_Angle;
        }
        lastMode = currentMode;
        OLED_RefreshDisplay();
    }
}


int main(void) {
    // 外设初始化
    OLED_Init();
    Serial_Init();
    Key_Init();
    AD_Init();
    MPU6050_Init();
    mpuID = MPU6050_GetID();

    // MPU6050初始校准
    MPU6050_GetData(&AX, &AY, &AZ, 0, 0, 0);
    Delay_ms(20);
    MPU6050_GetData(&AX, &AY, &AZ, 0, 0, 0);
    AX_g = (float)AX * 32.0f / 65535.0f;
    AY_g = (float)AY * 32.0f / 65535.0f;
    AZ_g = (float)AZ * 32.0f / 65535.0f;
    AZ_g = (fabs(AZ_g) < 0.1f) ? 0.1f : AZ_g;
    ThetaX = atan(AX_g / AZ_g) * 180.0f / M_PI;
    ThetaY = atan(AY_g / AZ_g) * 180.0f / M_PI;
    S1_Angle = ((ThetaX + 30.0f) / 60.0f) * 120.0f + 30.0f;
    S2_Angle = ((ThetaY + 30.0f) / 60.0f) * 180.0f;
    S1_Filtered = S1_Angle;
    S2_Filtered = S2_Angle;

    // 初始发送MPU模式指令
    Bluetooth_Send_ModeCmd(MODE_SERVO_CMD);
    OLED_RefreshDisplay();
    OLED_Update();

    while (1) {
        uint8_t key = Key_GetTrigger();

        // 模式切换逻辑:MPU→电位器→外设→MPU循环
        if (key == 1) {
            if (currentMode == MODE_SERVO_CONTROL) {
                currentMode = MODE_POT_CONTROL;
            } else if (currentMode == MODE_POT_CONTROL) {
                currentMode = MODE_DEVICE_CONTROL;
            } else if (currentMode == MODE_DEVICE_CONTROL) {
                currentMode = MODE_SERVO_CONTROL;
            }
            // 发送对应模式指令
            uint8_t modeCmd = (currentMode == MODE_SERVO_CONTROL) ? MODE_SERVO_CMD :
                             (currentMode == MODE_POT_CONTROL) ? MODE_POT_CMD : MODE_DEVICE_CMD;
            Bluetooth_Send_ModeCmd(modeCmd);
            Delay_ms(10);
            Bluetooth_Send_ModeCmd(modeCmd);
        }

        // 模式切换状态重置
        Mode_ResetState();

        // MPU姿态控制模式
        if (currentMode == MODE_SERVO_CONTROL) {
            // 读取MPU加速度数据
            MPU6050_GetData(&AX, &AY, &AZ, 0, 0, 0);
            // 转换为g单位
            AX_g = (float)AX * 32.0f / 65535.0f;
            AY_g = (float)AY * 32.0f / 65535.0f;
            AZ_g = (float)AZ * 32.0f / 65535.0f;
            AZ_g = (fabs(AZ_g) < 0.1f) ? ((AZ_g > 0) ? 0.1f : -0.1f) : AZ_g;
            
            // 计算倾角(限幅-30~30°)
            ThetaX = atan(AX_g / AZ_g) * 180.0f / M_PI;
            ThetaY = atan(AY_g / AZ_g) * 180.0f / M_PI;
            ThetaX = (ThetaX < -30.0f) ? -30.0f : (ThetaX > 30.0f ? 30.0f : ThetaX);
            ThetaY = (ThetaY < -30.0f) ? -30.0f : (ThetaY > 30.0f ? 30.0f : ThetaY);
            
            // 转换为舵机角度(限幅)
            S1_Angle = ((ThetaX + 30.0f) / 60.0f) * (SERVO1_MAX - SERVO1_MIN) + SERVO1_MIN;
            S2_Angle = ((ThetaY + 30.0f) / 60.0f) * (SERVO2_MAX - SERVO2_MIN) + SERVO2_MIN;
            S1_Angle = (S1_Angle < SERVO1_MIN) ? SERVO1_MIN : (S1_Angle > SERVO1_MAX ? SERVO1_MAX : S1_Angle);
            S2_Angle = (S2_Angle < SERVO2_MIN) ? SERVO2_MIN : (S2_Angle > SERVO2_MAX ? SERVO2_MAX : S2_Angle);
            
            // 角度滤波
            S1_Filtered = S1_Angle * FILTER_ALPHA + S1_Filtered * (1 - FILTER_ALPHA);
            S2_Filtered = S2_Angle * FILTER_ALPHA + S2_Filtered * (1 - FILTER_ALPHA);
            // 发送角度数据
            Bluetooth_Send_DualAngle(S1_Filtered, S2_Filtered);
        }

        // 电位器控制模式
        else if (currentMode == MODE_POT_CONTROL) {
            // 读取电位器AD值
            AD0 = AD_GetValue(ADC_Channel_0);
            AD1 = AD_GetValue(ADC_Channel_1);
            
            // AD值滤波
            AD0_Filtered = AD_Filter(AD0, &AD0_Filtered);
            AD1_Filtered = AD_Filter(AD1, &AD1_Filtered);
            
            // 转换为舵机角度(0~180°限幅)
            Pot_S1_Target = (float)AD0_Filtered / 3400 * 180;
            Pot_S2_Target = (float)AD1_Filtered / 4050 * 180;
            Pot_S1_Target = (Pot_S1_Target < 0) ? 0 : (Pot_S1_Target > 180 ? 180 : Pot_S1_Target);
            Pot_S2_Target = (Pot_S2_Target < 0) ? 0 : (Pot_S2_Target > 180 ? 180 : Pot_S2_Target);
            
            // 舵机1平滑调节（增大步长加快响应）
            float diff1 = Pot_S1_Target - Pot_S1_Current;
            float absDiff1 = fabs(diff1);
            float step1 = (absDiff1 < 5.0f) ? POT_MIN_STEP :
                         (absDiff1 < 20.0f) ? POT_MIN_STEP + (POT_MAX_STEP - POT_MIN_STEP) * (absDiff1 - 5.0f) / 15.0f : POT_MAX_STEP;
            Pot_S1_Current += (diff1 > 0) ? ((diff1 > step1) ? step1 : diff1) : ((diff1 < -step1) ? -step1 : diff1);
            
            // 舵机2平滑调节（增大步长加快响应）
            float diff2 = Pot_S2_Target - Pot_S2_Current;
            float absDiff2 = fabs(diff2);
            float step2 = (absDiff2 < 5.0f) ? POT_MIN_STEP :
                         (absDiff2 < 20.0f) ? POT_MIN_STEP + (POT_MAX_STEP - POT_MIN_STEP) * (absDiff2 - 5.0f) / 15.0f : POT_MAX_STEP;
            Pot_S2_Current += (diff2 > 0) ? ((diff2 > step2) ? step2 : diff2) : ((diff2 < -step2) ? -step2 : diff2);
            
            // 角度变化超阈值才发送（降低阈值减少延迟）
            if (fabs(Pot_S1_Current - Last_Pot_S1) >= POT_SEND_THRESHOLD || 
                fabs(Pot_S2_Current - Last_Pot_S2) >= POT_SEND_THRESHOLD) {
                Bluetooth_Send_DualAngle(Pot_S1_Current, Pot_S2_Current);
                Last_Pot_S1 = Pot_S1_Current;
                Last_Pot_S2 = Pot_S2_Current;
            }
        }

        // 外设控制模式
        else if (currentMode == MODE_DEVICE_CONTROL) {
            // 按键2切换光标
            if (key == 2) {
                cursorPos = (cursorPos + 1) % 2;
            }
            // 按键3执行外设控制
            if (key == 3) {
                uint8_t cmd;
                if (cursorPos == 0) {
                    infraredState = !infraredState;
                    cmd = infraredState ? INFRARED_ON : INFRARED_OFF;
                } else {
                    buzzerState = !buzzerState;
                    cmd = buzzerState ? BUZZER_ON : BUZZER_OFF;
                }
                // 发送外设指令(重发确保接收)
                Bluetooth_Send_DeviceCmd(cmd);
                Delay_ms(10);
                Bluetooth_Send_DeviceCmd(cmd);
            }
        }

        // OLED显示刷新
        OLED_RefreshDisplay();
        Delay_ms(LOOP_INTERVAL);
    }
}
