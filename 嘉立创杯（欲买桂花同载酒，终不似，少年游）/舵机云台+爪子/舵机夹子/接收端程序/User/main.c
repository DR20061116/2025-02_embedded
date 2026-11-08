#include "stm32f10x.h"               
#include "Delay.h"
#include "OLED.h"
#include "Serial.h"
#include "Servo.h"   
#include "LED.h"  
#include <math.h>

//STM32蓝牙无线控制多功能三自由度舵机云台
//MPU6050控制  三电位器控制  设备控制
//原有双自由度逻辑完全保留，新增第三路舵机

// 系统工作模式定义
#define MODE_SERVO_CONTROL 0    // MPU6050姿态控制舵机模式
#define MODE_DEVICE_CONTROL 1   // 红外蜂鸣器外设控制模式
#define MODE_POT_CONTROL 2      // 电位器调节舵机模式

// 外设控制指令码定义
#define INFRARED_ON   0x01      // 红外发射开启指令
#define INFRARED_OFF  0x02      // 红外发射关闭指令
#define BUZZER_ON     0x03      // 蜂鸣器鸣响开启指令
#define BUZZER_OFF    0x04      // 蜂鸣器鸣响关闭指令

// 舵机控制参数
#define SMALL_ANGLE      3.0f   // 小角度阈值
#define LARGE_ANGLE     20.0f   // 大步长阈值
#define SMALL_STEP       1.5f   // 最小步长
#define LARGE_STEP       10.0f  // 最大步长
#define ANGLE_DEAD_ZONE  0.5f   // 死区
#define SERVO1_MIN      0.0f   // 舵机1机械限位最小角度
#define SERVO1_MAX     180.0f   // 舵机1机械限位最大角度
#define SERVO2_MIN       0.0f   // 舵机2机械限位最小角度
#define SERVO2_MAX     180.0f   // 舵机2机械限位最大角度
#define SERVO3_MIN       0.0f   // 舵机3机械限位最小角度(新增)
#define SERVO3_MAX     180.0f   // 舵机3机械限位最大角度(新增)

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
// 初始化舵机状态，默认90°中位（新增第三路舵机3）
static ServoState servo1 = {90.0f, 90.0f, SERVO1_MIN, SERVO1_MAX};
static ServoState servo2 = {90.0f, 90.0f, SERVO2_MIN, SERVO2_MAX};
static ServoState servo3 = {90.0f, 90.0f, SERVO3_MIN, SERVO3_MAX}; // 新增第三路

// 函数声明
void UpdateModeIndicator(void);           // 更新模式指示LED
void Parse_AngleFrame(void);              // 解析舵机角度数据帧（修改为三路）
void Parse_DeviceFrame(void);             // 解析外设控制指令帧（无修改）
void Parse_ModeFrame(void);               // 解析模式切换指令帧（无修改）
static float CalculateStep(float absDiff);// 计算舵机动态调节步长（无修改）
void Servo_SmoothControl(void);           // 舵机平滑追位控制（新增第三路）
void Mode_ResetState(void);               // 模式切换状态重置（新增第三路）

int main(void)
{
    OLED_Init();
    Serial_Init();
    Servo_Init();
    LED_Init();  

    // 初始显示（新增第三路舵机C的显示）
    OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
    OLED_ShowString(22, 24, "Mode:Servo", OLED_8X16);
    OLED_ShowString(0, 48, "A:", OLED_8X16);
    OLED_ShowString(40, 48, "B:", OLED_8X16);
    OLED_ShowString(80, 48, "C:", OLED_8X16); // 新增第三路C
    OLED_Update();

    // 初始舵机位置(中位，新增第三路)
    Servo_SetAngle1((uint16_t)servo1.current);
    Servo_SetAngle2((uint16_t)servo2.current);
    Servo_SetAngle3((uint16_t)servo3.current); // 新增
    UpdateModeIndicator();  // 初始化模式指示LED

    while (1)
    {
        // 检测串口接收完成标志
        if (Serial_RxFlag == 1)
        {
            // 根据帧类型解析对应数据
            if (Serial_FrameType == 0)
            {
                Parse_AngleFrame();      // 解析角度帧（三路）
            }
            else if (Serial_FrameType == 1)
            {
                Parse_DeviceFrame();     // 解析外设帧（无修改）
            }
            else if (Serial_FrameType == 2)
            {
                Parse_ModeFrame();       // 解析模式帧（无修改）
            }
            Serial_RxFlag = 0;           // 清除接收标志
        }

        // 模式切换时重置状态
        Mode_ResetState();

        // MPU姿态控制模式逻辑（新增第三路显示）
        if (currentMode == MODE_SERVO_CONTROL)
        {
			OLED_Clear();
            Servo_SmoothControl();                              // 舵机平滑追位（三路）
            OLED_ClearArea(0, 48, 128, 16);                     // 清空角度显示区域
			OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
            OLED_ShowString(22, 24, "Mode:Servo", OLED_8X16);   // 显示当前模式
            OLED_ShowString(0, 48, "A:", OLED_8X16);            // 舵机1标签
            OLED_ShowString(40, 48, "B:", OLED_8X16);           // 舵机2标签
            OLED_ShowString(80, 48, "C:", OLED_8X16);           // 舵机3标签(新增)
            OLED_ShowNum(20, 48, (uint16_t)servo1.current, 3, OLED_8X16); // 舵机1角度
            OLED_ShowNum(60, 48, (uint16_t)servo2.current, 3, OLED_8X16); // 舵机2角度
            OLED_ShowNum(100, 48, (uint16_t)servo3.current, 3, OLED_8X16); // 舵机3角度(新增)
        }
        // 外设控制模式逻辑（无修改）
        else if (currentMode == MODE_DEVICE_CONTROL)
        {
			OLED_Clear();
            OLED_ClearArea(0, 48, 128, 16);                     // 清空外设状态显示区域
			OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
            OLED_ShowString(22, 24, "Mode:Device", OLED_8X16);  // 显示当前模式
            OLED_ShowString(0, 48, "IR:", OLED_8X16);           // 红外标签
            OLED_ShowString(35, 48, infraredState ? "ON " : "OFF", OLED_8X16); // 红外状态
            OLED_ShowString(70, 48, "BZ:", OLED_8X16);          // 蜂鸣器标签
            OLED_ShowString(100, 48, buzzerState ? "ON" : "OFF", OLED_8X16); // 蜂鸣器状态
        }
        // 电位器控制模式逻辑（新增第三路显示）
        else if (currentMode == MODE_POT_CONTROL)
        {
			OLED_Clear();
            Servo_SmoothControl();                              // 舵机平滑追位（三路）
			OLED_ShowString(25, 0, "Servo Ctrl", OLED_8X16);
            OLED_ClearArea(0, 48, 128, 16);                     // 清空角度显示区域
            OLED_ShowString(30, 24, "Mode: Pot", OLED_8X16);     // 显示当前模式
            OLED_ShowString(0, 48, "A:", OLED_8X16);            // 舵机1标签
            OLED_ShowString(40, 48, "B:", OLED_8X16);           // 舵机2标签
            OLED_ShowString(80, 48, "C:", OLED_8X16);           // 舵机3标签(新增)
            OLED_ShowNum(20, 48, (uint16_t)servo1.current, 3, OLED_8X16); // 舵机1角度
            OLED_ShowNum(60, 48, (uint16_t)servo2.current, 3, OLED_8X16); // 舵机2角度
            OLED_ShowNum(100, 48, (uint16_t)servo3.current, 3, OLED_8X16); // 舵机3角度(新增)
        }

        OLED_Update();  // 刷新OLED显示
        Delay_ms(3);
    }
}

// 解析三路舵机角度数据帧（核心修改：从双路改为三路）
// 帧格式: [0xAA + S1低 + S1高 + S2低 + S2高 + S3低 + S3高 + 0x55]
// 角度值放大10倍传输，需除以10还原实际角度
void Parse_AngleFrame(void)
{
    // 校验帧尾确保数据完整性
    if (Serial_RxPacket[7] == ANGLE_FRAME_TAIL)
    {
        // 拼接16位角度值(低8位+高8位)
        uint16_t s1_int = (uint16_t)Serial_RxPacket[1] | ((uint16_t)Serial_RxPacket[2] << 8);
        uint16_t s2_int = (uint16_t)Serial_RxPacket[3] | ((uint16_t)Serial_RxPacket[4] << 8);
        uint16_t s3_int = (uint16_t)Serial_RxPacket[5] | ((uint16_t)Serial_RxPacket[6] << 8);

        // 还原实际角度（除以10），并限制在舵机有效角度范围内
        servo1.target = (float)s1_int / 10.0f;
        servo2.target = (float)s2_int / 10.0f;
        servo3.target = (float)s3_int / 10.0f;

        // 角度限幅保护
        servo1.target = (servo1.target < servo1.min) ? servo1.min :
                        (servo1.target > servo1.max) ? servo1.max : servo1.target;
        servo2.target = (servo2.target < servo2.min) ? servo2.min :
                        (servo2.target > servo2.max) ? servo2.max : servo2.target;
        servo3.target = (servo3.target < servo3.min) ? servo3.min :
                        (servo3.target > servo3.max) ? servo3.max : servo3.target;
    }
}

// 解析外设控制指令帧（无修改）
void Parse_DeviceFrame(void)
{
    if (Serial_RxPacket[3] == DEVICE_FRAME_TAIL)
    {
        uint8_t cmd = Serial_RxPacket[1];
        switch (cmd)
        {
            case INFRARED_ON:
                infraredState = 1;
                break;
            case INFRARED_OFF:
                infraredState = 0;
                break;
            case BUZZER_ON:
                buzzerState = 1;
                break;
            case BUZZER_OFF:
                buzzerState = 0;
                break;
            default:
                break;
        }
    }
}

// 解析模式切换指令帧（无修改）
void Parse_ModeFrame(void)
{
    if (Serial_RxPacket[3] == MODE_FRAME_TAIL)
    {
        uint8_t mode_cmd = Serial_RxPacket[1];
        switch (mode_cmd)
        {
            case 0x00:
                currentMode = MODE_SERVO_CONTROL;
                break;
            case 0x01:
                currentMode = MODE_DEVICE_CONTROL;
                break;
            case 0x02:
                currentMode = MODE_POT_CONTROL;
                break;
            default:
                break;
        }
        UpdateModeIndicator();
    }
}

// 计算动态调节步长：角度差越大，步长越大，实现快慢结合的平滑控制
static float CalculateStep(float absDiff)
{
    if (absDiff < SMALL_ANGLE)
    {
        return SMALL_STEP;
    }
    else if (absDiff < LARGE_ANGLE)
    {
        // 线性插值计算中间步长
        return SMALL_STEP + (LARGE_STEP - SMALL_STEP) * (absDiff - SMALL_ANGLE) / (LARGE_ANGLE - SMALL_ANGLE);
    }
    else
    {
        return LARGE_STEP;
    }
}

// 三路舵机平滑追位控制（新增第三路逻辑）
void Servo_SmoothControl(void)
{
    // 舵机1平滑控制
    float diff1 = servo1.target - servo1.current;
    float absDiff1 = fabs(diff1);
    if (absDiff1 > ANGLE_DEAD_ZONE)
    {
        float step1 = CalculateStep(absDiff1);
        servo1.current += (diff1 > 0) ? fmin(step1, diff1) : fmax(-step1, diff1);
        Servo_SetAngle1(servo1.current);
    }

    // 舵机2平滑控制
    float diff2 = servo2.target - servo2.current;
    float absDiff2 = fabs(diff2);
    if (absDiff2 > ANGLE_DEAD_ZONE)
    {
        float step2 = CalculateStep(absDiff2);
        servo2.current += (diff2 > 0) ? fmin(step2, diff2) : fmax(-step2, diff2);
        Servo_SetAngle2(servo2.current);
    }

    // 舵机3平滑控制（新增）
    float diff3 = servo3.target - servo3.current;
    float absDiff3 = fabs(diff3);
    if (absDiff3 > ANGLE_DEAD_ZONE)
    {
        float step3 = CalculateStep(absDiff3);
        servo3.current += (diff3 > 0) ? fmin(step3, diff3) : fmax(-step3, diff3);
        Servo_SetAngle3(servo3.current);
    }
}

// 模式切换状态重置，避免角度跳变
void Mode_ResetState(void)
{
    if (currentMode != lastMode)
    {
        // 切换到舵机/电位器模式时，同步目标角度与当前角度，消除抖动
        if (currentMode == MODE_SERVO_CONTROL || currentMode == MODE_POT_CONTROL)
        {
            servo1.target = servo1.current;
            servo2.target = servo2.current;
            servo3.target = servo3.current;
        }
        lastMode = currentMode;
    }
}

// LED模式指示（根据不同模式点亮对应LED，可根据硬件引脚修改）
void UpdateModeIndicator(void)
{
    switch (currentMode)
    {
        case MODE_SERVO_CONTROL:
            LED1_ON();
            LED2_OFF();
            LED3_OFF();
            break;
        case MODE_POT_CONTROL:
            LED1_OFF();
            LED2_ON();
            LED3_OFF();
            break;
        case MODE_DEVICE_CONTROL:
            LED1_OFF();
            LED2_OFF();
            LED3_ON();
            break;
        default:
            break;
    }
}
