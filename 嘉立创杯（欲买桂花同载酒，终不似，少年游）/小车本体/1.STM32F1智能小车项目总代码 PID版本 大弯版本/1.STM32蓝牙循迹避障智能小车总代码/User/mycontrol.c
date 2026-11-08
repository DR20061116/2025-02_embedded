#include "stm32f10x.h"
#include "Delay.h"
#include "Trace.h"
#include "MOTOR.h"
#include "HCSR04.h"
#include "Servo.h"

void HCSR04_getData(void);

uint16_t HCSR04_M=0;  //转到中间 超声波测到的距离
uint16_t HCSR04_L=0;  //转到左边 超声波测到的距离
uint16_t HCSR04_R=0;  //转到右边 超声波测到的距离

void Avoidance(void)
{
    HCSR04_M = HCSR04_GetValue();    //单位厘米
    
    if(HCSR04_M>0 && HCSR04_M<=20)
    {
        Set_Car_Speed(0,0);    //停车
        HCSR04_getData();      //读取左右距离
        
        if(HCSR04_L >= HCSR04_R)
        {
            Set_Car_Speed(-2600, -2600);
            Delay_ms(500);
            Set_Car_Speed(0,0);
            Delay_ms(200);
            Set_Car_Speed(-2500, 2500);  //左转
            Delay_ms(600);
        }
        else
        {
            Set_Car_Speed(-2600, -2600);
            Delay_ms(500);
            Set_Car_Speed(0,0);
            Delay_ms(200);
            Set_Car_Speed(2500, -2500);  //右转
            Delay_ms(600);
        }
    }
    else
    {
        Set_Car_Speed(2800, 2800);  //直行
    }
}

// 超声波读取前面、左边、右边的距离
void HCSR04_getData(void)
{
    Servo_SetAngle(90);
    Delay_ms(300);
    HCSR04_M = HCSR04_GetValue();    //单位厘米
    
    Servo_SetAngle(150);
    Delay_ms(300);
    HCSR04_L = HCSR04_GetValue();    //单位厘米
    
    Servo_SetAngle(30);
    Delay_ms(300);
    HCSR04_R = HCSR04_GetValue();    //单位厘米
    
    Servo_SetAngle(90);
    Delay_ms(300);
}
