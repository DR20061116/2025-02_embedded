#include "stm32f10x.h"
#include "Delay.h"
#include "Trace.h"
#include "MOTOR.h"

// ===================== 【修改】解决直线左右小摆动的参数 =====================
#define BASE_SPEED      3400
#define KP              160     // 【修改1】从250降到220：柔化过度修正
#define KI              4       // 【修改2】从1暂时设为0：排除积分干扰，不摆了再改回0.5
#define KD              240     // 【修改3】从350加到380：加强阻尼，压住震荡
#define MAX_PWM         7500
#define MIN_REV_PWM     -1200
#define LOST_LINE_CNT   18
#define FILTER_COEF     0.50f   // 【修改4】从0.38f加到0.40f：辅助平滑输出
#define ERROR_DEADZONE  5

// ===================== 全局变量 =====================
int Trace_Error = 0;
int PID_Out = 0;
int Last_Error = 0;
int Integral = 0;
int Last_PID_Out = 0;
uint8_t LostLineCnt = 0;
int Current_Base_Speed = BASE_SPEED;

// ===================== 静态函数声明 =====================
static void Trace_CalcError(void);
static int Position_PID(int error);
static void Trace_DiffControl(void);

/**
 * @brief  8路循迹传感器初始化
 */
void Trace_Init(void)
{
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA | RCC_APB2Periph_GPIOB, ENABLE);
    
    GPIO_InitTypeDef GPIO_InitStructure;
    GPIO_InitStructure.GPIO_Mode  = GPIO_Mode_IPD;
    GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
    
    GPIO_InitStructure.GPIO_Pin   = GPIO_Pin_1 | GPIO_Pin_2;
    GPIO_Init(GPIOA, &GPIO_InitStructure);
    
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
    Current_Base_Speed = BASE_SPEED;
}

/**
 * @brief  获取当前循迹偏差值
 */
int Trace_Get_Error(void)
{
    return Trace_Error;
}

/**
 * @brief  加权计算循迹偏差
 */
static void Trace_CalcError(void)
{
    uint8_t s[8] = {X1, X2, X3, X4, X5, X6, X7, X8};
    int weight[8] = {-50, -40, -20, -10, 10, 20, 40, 50};
    
    int sum_weight = 0;
    int valid_sensor = 0;

    for(int i=0; i<8; i++)
    {
        if(s[i] == 0)
        {
            sum_weight += weight[i];
            valid_sensor++;
        }
    }

    if(valid_sensor > 0)
    {
        Trace_Error = sum_weight / valid_sensor;
        if(Trace_Error > -ERROR_DEADZONE && Trace_Error < ERROR_DEADZONE)
            Trace_Error = 0;
        LostLineCnt = 0;
        Current_Base_Speed = BASE_SPEED;
    }
    else
    {
        LostLineCnt++;
        if(LostLineCnt > LOST_LINE_CNT)
        {
            Trace_Error = (Trace_Error > 0) ? 45 : -45;
            Current_Base_Speed = BASE_SPEED * 0.65f;
        }
    }
}

/**
 * @brief  带滤波的位置式PID
 */
static int Position_PID(int error)
{
    int Pwm;
    Integral += error;
    if(Integral > 300)   Integral = 300;
    if(Integral < -300)  Integral = -300;
    
    Pwm = KP * error + KI * Integral + KD * (error - Last_Error);
    Last_Error = error;

    PID_Out = (int)(Pwm * FILTER_COEF + Last_PID_Out * (1 - FILTER_COEF));
    Last_PID_Out = PID_Out;

    return PID_Out;
}

/**
 * @brief  差速控制
 */
static void Trace_DiffControl(void)
{
    int Left_PWM, Right_PWM;

    Left_PWM  = Current_Base_Speed + PID_Out;
    Right_PWM = Current_Base_Speed - PID_Out;

    if(Left_PWM > MAX_PWM)       Left_PWM = MAX_PWM;
    if(Left_PWM < MIN_REV_PWM)   Left_PWM = MIN_REV_PWM;
    if(Right_PWM > MAX_PWM)      Right_PWM = MAX_PWM;
    if(Right_PWM < MIN_REV_PWM)  Right_PWM = MIN_REV_PWM;

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
    Delay_ms(10);
}
