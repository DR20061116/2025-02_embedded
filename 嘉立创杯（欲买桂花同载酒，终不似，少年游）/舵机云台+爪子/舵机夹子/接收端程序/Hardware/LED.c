#include "stm32f10x.h"                  // Device header


void LED_Init(void)
{
	/*开启时钟*/
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);		//开启GPIOA的时钟
	
	/*GPIO初始化*/
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode = GPIO_Mode_Out_PP;
	GPIO_InitStructure.GPIO_Pin = GPIO_Pin_2|GPIO_Pin_3|GPIO_Pin_4|GPIO_Pin_5|GPIO_Pin_6;
	GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOA, &GPIO_InitStructure);						//将PA1和PA2引脚初始化为推挽输出
	
	/*设置GPIO初始化后的默认电平*/
	GPIO_SetBits(GPIOA,GPIO_Pin_2|GPIO_Pin_3|GPIO_Pin_4|GPIO_Pin_5|GPIO_Pin_6);				
}

void LED1_ON(void)
{
	GPIO_ResetBits(GPIOA, GPIO_Pin_2);		
}


void LED1_OFF(void)
{
	GPIO_SetBits(GPIOA, GPIO_Pin_2);		
}


void LED2_ON(void)
{
	GPIO_ResetBits(GPIOA, GPIO_Pin_3);		
}


void LED2_OFF(void)
{
	GPIO_SetBits(GPIOA, GPIO_Pin_3);		
}


void LED3_ON(void)
{
	GPIO_ResetBits(GPIOA, GPIO_Pin_4);		
}


void LED3_OFF(void)
{
	GPIO_SetBits(GPIOA, GPIO_Pin_4);		
}


void Beep_ON(void)
{
	GPIO_ResetBits(GPIOA, GPIO_Pin_5);		
}


void Beep_OFF(void)
{
	GPIO_SetBits(GPIOA, GPIO_Pin_5);		
}

void HW_ON(void)
{
	GPIO_ResetBits(GPIOA, GPIO_Pin_6);		
}


void HW_OFF(void)
{
	GPIO_SetBits(GPIOA, GPIO_Pin_6);		
}
