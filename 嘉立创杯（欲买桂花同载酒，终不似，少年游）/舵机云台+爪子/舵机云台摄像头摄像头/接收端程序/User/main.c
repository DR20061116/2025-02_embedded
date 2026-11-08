#include "stm32f10x.h"               
#include "Delay.h"
#include "OLED.h"
#include "Serial.h"
#include "Servo.h"   
#include "LED.h"  
#include <math.h>


//STM32蓝牙无线控制多功能二自由度舵机云台
//MPU6050控制  双电位器控制  设备控制

//程序基于 江协科技 模板程序上编写
//程序仅供学习交流
//ID：我的STM32又烧啦------抖音B站同名

//硬件连接  蓝牙模块:TX,RX/PA10,PA9   OLED:SCL/PB8  SDA/PB9     舵机：PA0,PA1  
//模式指示灯PA2 PA3 PA4   蜂鸣器：PA5    红外线：PA6

//串口蓝牙波特为115200，注意修改程蓝牙模块的波特率，使用前需要将两个HC05蓝牙模块进行主从配对。


// 系统工作模式定义
#define MODE_SERVO_CONTROL 0    // MPU6050姿态控制舵机模式
#define MODE_DEVICE_CONTROL 1   // 红外蜂鸣器外设控制模式
#define MODE_POT_CONTROL 2      // 电位器调节舵机模式

// 外设控制指令码定义
#define INFRARED_ON   0x01      // 红外发射开启指令
#define INFRARED_OFF  0x02      // 红外发射关闭指令
#define BUZZER_ON     0x03      // 蜂鸣器鸣响开启指令
#define BUZZER_OFF    0x04      // 蜂鸣器鸣响关闭指令

// 
#define SMALL_ANGLE      3.0f   // 小角度阈值
#define LARGE_ANGLE     20.0f   // 大步长阈值
#define SMALL_STEP       1.5f   // 最小步长
#define LARGE_STEP       10.0f  // 最大步长
#define ANGLE_DEAD_ZONE  0.5f   // 死区
#define SERVO1_MIN      0.0f   // 舵机1机械限位最小角度
#define SERVO1_MAX     180.0f   // 舵机1机械限位最大角度
#define SERVO2_MIN       0.0f   // 舵机2机械限位最小角度
#define SERVO2_MAX     180.0f   // 舵机2机械限位最大角度

// 全局状态变量
static uint8_t currentMode = MODE_SERVO_CONTROL;  // 当前系统工作模式
static uint8_t lastMode = MODE_SERVO_CONTROL;     // 上一工作模式
static uint8_t infraredState = 0;                 // 红外状态:0-关闭 1-开启
static uint8_t buzzerState = 0;                   // 蜂鸣器状态:0-关闭 1-开启

// 舵机状态结构体
typedef struct {
    float target;   // 舵机目标角度
    float current;  // 舵机当前角度
    float min;      // 角度下限
    float max;      // 角度上限
} ServoState;
// 初始化舵机状态，默认90°中位
static ServoState servo1 = {90.0f, 90.0f, SERVO1_MIN, SERVO1_MAX};
static ServoState servo2 = {90.0f, 90.0f, SERVO2_MIN, SERVO2_MAX};

// 函数声明
void UpdateModeIndicator(void);           // 更新模式指示LED
void Parse_AngleFrame(void);              // 解析舵机角度数据帧
void Parse_DeviceFrame(void);             // 解析外设控制指令帧
void Parse_ModeFrame(void);               // 解析模式切换指令帧
static float CalculateStep(float absDiff);// 计算舵机动态调节步长
void Servo_SmoothControl(void);           // 舵机平滑追位控制
void Mode_ResetState(void);               // 模式切换状态重置

int main(void) {
    OLED_Init();
    Serial_Init();
    Servo_Init();
    LED_Init();  
    

    // 初始显示
    OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
    OLED_ShowString(22, 24, "Mode:Servo", OLED_8X16);
    OLED_ShowString(15, 48, "A:", OLED_8X16);
    OLED_ShowString(65, 48, "B:", OLED_8X16);
    OLED_Update();

    // 初始舵机位置(中位)
    Servo_SetAngle1((uint16_t)servo1.current);
    Servo_SetAngle2((uint16_t)servo2.current);
    UpdateModeIndicator();  // 初始化模式指示LED

    while (1) {
        // 检测串口接收完成标志
        if (Serial_RxFlag == 1) {
            // 根据帧类型解析对应数据
            if (Serial_FrameType == 0) {
                Parse_AngleFrame();      // 解析角度帧
            } else if (Serial_FrameType == 1) {
                Parse_DeviceFrame();     // 解析外设帧
            } else if (Serial_FrameType == 2) {
                Parse_ModeFrame();       // 解析模式帧
            }
            Serial_RxFlag = 0;           // 清除接收标志
        }

        // 模式切换时重置状态
        Mode_ResetState();

        // MPU姿态控制模式逻辑
        if (currentMode == MODE_SERVO_CONTROL) { 
					 OLED_Clear();
            Servo_SmoothControl();                              // 舵机平滑追位
            OLED_ClearArea(0, 48, 128, 16);                     // 清空角度显示区域
					  OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
            OLED_ShowString(22, 24, "Mode:Servo", OLED_8X16);   // 显示当前模式
            OLED_ShowString(15, 48, "A:", OLED_8X16);           // 舵机1标签
            OLED_ShowString(65, 48, "B:", OLED_8X16);           // 舵机2标签
            OLED_ShowNum(35, 48, (uint16_t)servo1.current, 3, OLED_8X16); // 显示舵机1角度
            OLED_ShowNum(85, 48, (uint16_t)servo2.current, 3, OLED_8X16); // 显示舵机2角度
        } 
        // 外设控制模式逻辑
        else if (currentMode == MODE_DEVICE_CONTROL) {
					 OLED_Clear();
            OLED_ClearArea(0, 48, 128, 16);                     // 清空外设状态显示区域
				  	OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
            OLED_ShowString(22, 24, "Mode:Device", OLED_8X16);  // 显示当前模式
            OLED_ShowString(0, 48, "IR:", OLED_8X16);           // 红外标签
            OLED_ShowString(35, 48, infraredState ? "ON " : "OFF", OLED_8X16); // 显示红外状态
            OLED_ShowString(70, 48, "BZ:", OLED_8X16);          // 蜂鸣器标签
            OLED_ShowString(100, 48, buzzerState ? "ON" : "OFF", OLED_8X16); // 显示蜂鸣器状态
        }
        // 电位器控制模式逻辑
        else if (currentMode == MODE_POT_CONTROL) {
					  OLED_Clear();
					 
            Servo_SmoothControl();        
					// 舵机平滑追位
				  	OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
            OLED_ClearArea(0, 48, 128, 16);                     // 清空角度显示区域
            OLED_ShowString(30, 24, "Mode: Pot", OLED_8X16);     // 显示当前模式
            OLED_ShowString(15, 48, "A:", OLED_8X16);           // 舵机1标签
            OLED_ShowString(65, 48, "B:", OLED_8X16);           // 舵机2标签
            OLED_ShowNum(35, 48, (uint16_t)servo1.current, 3, OLED_8X16); // 显示舵机1角度
            OLED_ShowNum(85, 48, (uint16_t)servo2.current, 3, OLED_8X16); // 显示舵机2角度
        }

        OLED_Update();  // 刷新OLED显示
        Delay_ms(3);    // 
    }
}


  //数据帧角度帧格式: [0xAA + 舵机1低8位 + 舵机1高8位 + 舵机2低8位 + 舵机2高8位 + 0x55] 
  //角度值放大10倍传输，需除以10还原实际角度
void Parse_AngleFrame() {
    // 校验帧尾确保数据完整性
    if (Serial_RxPacket[5] == ANGLE_FRAME_TAIL) { 
        // 拼接16位角度值(低8位+高8位)
        uint16_t s1_int = Serial_RxPacket[1] | (Serial_RxPacket[2] << 8);
        uint16_t s2_int = Serial_RxPacket[3] | (Serial_RxPacket[4] << 8);
        // 还原实际角度值
        float new_s1 = (float)s1_int / 10.0f;
        float new_s2 = (float)s2_int / 10.0f;
        
        //目标角度渐变过滤
        servo1.target = servo1.target * 0.2f + new_s1 * 0.8f;
        servo2.target = servo2.target * 0.2f + new_s2 * 0.8f;
        
        // 角度限幅
        servo1.target = (servo1.target < SERVO1_MIN) ? SERVO1_MIN : 
                       (servo1.target > SERVO1_MAX) ? SERVO1_MAX : servo1.target;
        servo2.target = (servo2.target < SERVO2_MIN) ? SERVO2_MIN : 
                       (servo2.target > SERVO2_MAX) ? SERVO2_MAX : servo2.target;
    }
}

//解析外设控制指令帧  外设帧格式: [0xCC + 指令码 + 保留位 + 0x33]
void Parse_DeviceFrame() {
    // 校验帧尾确保指令有效性
    if (Serial_RxPacket[3] == DEVICE_FRAME_TAIL) { 
        uint8_t cmd = Serial_RxPacket[1]; // 提取指令码
        // 执行对应外设控制
        switch(cmd) {
            case INFRARED_ON:    HW_ON();  infraredState = 1; break;  // 开启红外
            case INFRARED_OFF:   HW_OFF(); infraredState = 0; break;  // 关闭红外
            case BUZZER_ON:      Beep_ON(); buzzerState = 1; break;   // 开启蜂鸣器
            case BUZZER_OFF:     Beep_OFF(); buzzerState = 0; break;  // 关闭蜂鸣器
        }
    }
}

//解析模式切换指令帧   模式帧格式: [0xBB + 模式值 + 保留位 + 0xEE]
void Parse_ModeFrame() {
    // 校验帧头+帧尾
    if (Serial_RxPacket[0] == MODE_FRAME_HEADER && Serial_RxPacket[3] == MODE_FRAME_TAIL) {
        currentMode = Serial_RxPacket[1]; // 更新当前模式
        UpdateModeIndicator();            // 同步更新模式指示LED
    }
}


//计算舵机动态调节步长
//差值越小步长越小，实现平滑追位；差值越大步长越大，实现快速响应
//目标角度与当前角度的绝对差值
//动态计算后的调节步长

static float CalculateStep(float absDiff) {
    if (absDiff < SMALL_ANGLE) {
        return SMALL_STEP; // 小差值用最小步长
    } else if (absDiff < LARGE_ANGLE) {
        // 中间差值线性插值计算步长
        return SMALL_STEP + (LARGE_STEP - SMALL_STEP) * (absDiff - SMALL_ANGLE) / (LARGE_ANGLE - SMALL_ANGLE);
    } else {
        return LARGE_STEP; // 大差值用最大步长
    }
}


 //舵机平滑追位控制
 //按动态步长调节，避免角度突变导致舵机抖动
void Servo_SmoothControl() { 
    // 舵机1平滑调节
    float diff1 = servo1.target - servo1.current; // 计算角度差值
   
    if (fabs(diff1) < ANGLE_DEAD_ZONE) {
        servo1.current = servo1.target;
    } else {
        float step1 = CalculateStep(fabs(diff1));     // 获取动态步长
        // 按步长更新当前角度
        servo1.current += (diff1 > 0) ? ((diff1 > step1) ? step1 : diff1) : ((diff1 < -step1) ? -step1 : diff1);
    }

    // 舵机2平滑调节
    float diff2 = servo2.target - servo2.current;
    if (fabs(diff2) < ANGLE_DEAD_ZONE) {
        servo2.current = servo2.target;
    } else {
        float step2 = CalculateStep(fabs(diff2));
        servo2.current += (diff2 > 0) ? ((diff2 > step2) ? step2 : diff2) : ((diff2 < -step2) ? -step2 : diff2);
    }

    Servo_SetAngle1((uint16_t)(servo1.current + 0.5f));  
    Servo_SetAngle2((uint16_t)(servo2.current + 0.5f));
}

//模式切换状态重置
//防止模式切换时舵机目标角度突变，保证状态连续性

void Mode_ResetState() {
    // 检测到模式切换时执行重置
    if (currentMode != lastMode) {
        // 进入外设模式时，锁定舵机当前角度(停止目标更新)
        if (currentMode == MODE_DEVICE_CONTROL) {
            servo1.target = servo1.current;
            servo2.target = servo2.current;
        }
        lastMode = currentMode; // 更新上一模式标记
    }
}

//更新模式指示LED(防状态残留)
void UpdateModeIndicator() {
   
    LED1_OFF();
    LED2_OFF();
    LED3_OFF();
    
  //根据当前模式点亮对应LED
    switch(currentMode) {
        case MODE_SERVO_CONTROL:
            LED3_ON();  // MPU6050模式→LED3亮
            break;
        case MODE_POT_CONTROL:
            LED2_ON();  // 电位器模式→LED2亮
            break;
        case MODE_DEVICE_CONTROL:
            LED1_ON();  // 外设控制模式→LED1亮
            break;
        default:
            LED3_ON();  // 异常模式默认回到MPU模式
            break;
    }
}
