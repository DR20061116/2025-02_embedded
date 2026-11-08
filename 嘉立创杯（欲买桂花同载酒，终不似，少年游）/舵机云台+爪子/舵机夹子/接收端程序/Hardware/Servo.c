#include "stm32f10x.h"                  // Device header
#include "PWM.h"

void Servo_Init(void)
{
	PWM_Init();									//初始化舵机的底层PWM(三路)
}

void Servo_SetAngle1(float Angle1)
{
	PWM_SetCompare1(Angle1 / 180 * 2000 + 500);	//0~180°对应500~2500us
}

void Servo_SetAngle2(float Angle2)
{
	PWM_SetCompare2(Angle2 / 180 * 2000 + 500);	//0~180°对应500~2500us
}

// 新增第三路舵机角度设置函数
void Servo_SetAngle3(float Angle3)
{
	PWM_SetCompare3(Angle3 / 180 * 2000 + 500);	//0~180°对应500~2500us，与前两路一致
}
