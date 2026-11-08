#include "stm32f10x.h"
#include "Delay.h"
#include "Trace.h"
#include "MOTOR.h"

// ===================== 精细化优化参数 =====================
// 提速：基础速度提升至3300（直道缓弯赛道可尝试3400，急弯赛道保持3300）
#define BASE_SPEED    3400
// 微调节PID参数，仅消除残余微抖，保留转向灵敏度
#define KP            200      // 小幅下调比例系数，柔化响应
#define KD            400     // 微降微分系数，抑制高频微抖
#define KI            5       // 维持积分系数，保证直道稳态
// PWM限幅范围（TB6612额定上限）
#define MAX_PWM       6500
#define MIN_PWM       -6500
// 丢线判定阈值
#define LOST_LINE_CNT  5
// 滤波系数微幅调整，增强一点点滤波效果，不卡顿
#define FILTER_COEF    0.25f
// 偏差死区微幅放宽，过滤传感器底噪带来的微抖
#define ERROR_DEADZONE 4

// ===================== 全局变量 =====================
int Trace_Error = 0;    // 循迹偏差值
int PID_Out = 0;        // PID输出值
int Last_Error = 0;     // 上一次偏差
int Integral = 0;       // 积分累加值
int Last_PID_Out = 0;   // 上一次PID输出（滤波用）
uint8_t LostLineCnt = 0;// 丢线计数

// ===================== 静态函数声明 =====================
static void Trace_CalcError(void);    // 加权计算偏差
static int Position_PID(int error);   // 带滤波的PID控制器
static void Trace_DiffControl(void);  // 差速输出控制

/**
 * @brief  8路循迹传感器初始化
 */
void Trace_Init(void)
{
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA | RCC_APB2Periph_GPIOB, ENABLE);
	
	GPIO_InitTypeDef GPIO_InitStructure;
	
	// 配置PA1、PA2 下拉输入
	GPIO_InitStructure.GPIO_Mode  = GPIO_Mode_IPD;
	GPIO_InitStructure.GPIO_Pin   = GPIO_Pin_1 | GPIO_Pin_2;
	GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOA, &GPIO_InitStructure);
	
	// 配置PB相关引脚 下拉输入
	GPIO_InitStructure.GPIO_Pin   = GPIO_Pin_0  | GPIO_Pin_1  | GPIO_Pin_10 | GPIO_Pin_11 |
                                    GPIO_Pin_14 | GPIO_Pin_15;
	GPIO_Init(GPIOB, &GPIO_InitStructure);
}

/**
 * @brief  PID参数初始化
 */
void Trace_PID_Init(void)
{
    Trace_Error = 0;
    PID_Out = 0;
    Last_Error = 0;
    Integral = 0;
    Last_PID_Out = 0;
    LostLineCnt = 0;
}

/**
 * @brief  获取当前循迹偏差值
 */
int Trace_Get_Error(void)
{
    return Trace_Error;
}

/**
 * @brief  加权计算循迹偏差，加入死区抑制微抖
 */
static void Trace_CalcError(void)
{
    uint8_t s[8] = {X1, X2, X3, X4, X5, X6, X7, X8};
    int weight[8] = {-40, -30, -20, -10, 10, 20, 30, 40};
    
    int sum_weight = 0;
    int valid_sensor = 0;

    for(int i=0; i<8; i++)
    {
        if(s[i] == 0)  // 检测到黑线（低电平有效）
        {
            sum_weight += weight[i];
            valid_sensor++;
        }
    }

    if(valid_sensor > 0)
    {
        Trace_Error = sum_weight / valid_sensor;
        // 偏差死区处理：小偏差置0，消除车身微抖
        if(Trace_Error > -ERROR_DEADZONE && Trace_Error < ERROR_DEADZONE)
        {
            Trace_Error = 0;
        }
        LostLineCnt = 0;
    }
    else
    {
        LostLineCnt++;
        if(LostLineCnt > LOST_LINE_CNT)
        {
            // 丢线保持当前方向，不突变
            Trace_Error = Trace_Error;
        }
    }
}

/**
 * @brief  带一阶滤波的位置式PID，抑制残余微抖
 */
static int Position_PID(int error)
{
    int Pwm;
    // 维持小范围积分限幅，防止积分饱和
    Integral += error;
    if(Integral > 300)   Integral = 300;
    if(Integral < -300)  Integral = -300;
    
    // 基础PID运算
    Pwm = KP * error + KI * Integral + KD * (error - Last_Error);
    Last_Error = error;

    // 一阶滞后滤波：平滑PID输出，消除微抖
    PID_Out = (int)(Pwm * FILTER_COEF + Last_PID_Out * (1 - FILTER_COEF));
    Last_PID_Out = PID_Out;

    return PID_Out;
}

/**
 * @brief  差速控制，安全限幅输出
 */
static void Trace_DiffControl(void)
{
    int Left_PWM, Right_PWM;

    // 差速计算
    Left_PWM  = BASE_SPEED + PID_Out;
    Right_PWM = BASE_SPEED - PID_Out;

    // PWM限幅保护，禁止反转避免顿挫抖动
    if(Left_PWM > MAX_PWM)   Left_PWM = MAX_PWM;
    if(Left_PWM < 0)         Left_PWM = 0;
    if(Right_PWM > MAX_PWM)  Right_PWM = MAX_PWM;
    if(Right_PWM < 0)        Right_PWM = 0;

    // 输出到电机
    Set_Car_Speed(Left_PWM, Right_PWM);
}

/**
 * @brief  循迹主任务
 */
void Trace_task(void)
{
    Trace_CalcError();
    PID_Out = Position_PID(Trace_Error);
    Trace_DiffControl();
}
