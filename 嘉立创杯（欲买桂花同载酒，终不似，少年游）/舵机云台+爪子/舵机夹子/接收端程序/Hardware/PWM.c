#include "stm32f10x.h"                  // Device header

/**
  * 函    数：PWM初始化
  * 参    数：无
  * 返 回 值：无
  */
void PWM_Init(void)
{
	/*开启时钟*/
	RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);	//开启TIM2的时钟
	RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM3, ENABLE);	//新增：开启TIM3的时钟
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);	//开启GPIOA的时钟
	
	/*GPIO初始化*/
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF_PP;
	// PA0(TIM2_CH1)、PA1(TIM2_CH2)、PA7(TIM3_CH2)
	GPIO_InitStructure.GPIO_Pin = GPIO_Pin_0 | GPIO_Pin_1 | GPIO_Pin_7;
	GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOA, &GPIO_InitStructure);
	
	/*配置TIM2为内部时钟，初始化时基单元（舵机1/2）*/
	TIM_InternalClockConfig(TIM2);
	TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStructure;
	TIM_TimeBaseInitStructure.TIM_ClockDivision = TIM_CKD_DIV1;
	TIM_TimeBaseInitStructure.TIM_CounterMode = TIM_CounterMode_Up;
	TIM_TimeBaseInitStructure.TIM_Period = 20000 - 1;		//20ms周期
	TIM_TimeBaseInitStructure.TIM_Prescaler = 72 - 1;		//计数频率1MHz
	TIM_TimeBaseInitStructure.TIM_RepetitionCounter = 0;
	TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStructure);
	
	/*TIM2 输出比较初始化（CH1/CH2）*/
	TIM_OCInitTypeDef TIM_OCInitStructure;
	TIM_OCStructInit(&TIM_OCInitStructure);
	TIM_OCInitStructure.TIM_OCMode = TIM_OCMode_PWM1;
	TIM_OCInitStructure.TIM_OCPolarity = TIM_OCPolarity_High;
	TIM_OCInitStructure.TIM_OutputState = TIM_OutputState_Enable;
	TIM_OCInitStructure.TIM_Pulse = 0;
	TIM_OC1Init(TIM2, &TIM_OCInitStructure);	//TIM2_CH1 -> PA0
	TIM_OC2Init(TIM2, &TIM_OCInitStructure);	//TIM2_CH2 -> PA1
	
	/*配置TIM3为内部时钟，初始化时基单元（与TIM2参数一致，保证舵机时序相同）*/
	TIM_InternalClockConfig(TIM3);
	TIM_TimeBaseInit(TIM3, &TIM_TimeBaseInitStructure);
	
	/*TIM3 输出比较初始化（CH2 -> PA7）*/
	TIM_OC2Init(TIM3, &TIM_OCInitStructure);
	
	/*使能定时器*/
	TIM_Cmd(TIM2, ENABLE);
	TIM_Cmd(TIM3, ENABLE);	//新增：使能TIM3
}

/**
  * 函    数：PWM设置CCR1
  */
void PWM_SetCompare1(uint16_t Compare)
{
	TIM_SetCompare1(TIM2, Compare);		//TIM2_CH1
}

/**
  * 函    数：PWM设置CCR2
  */
void PWM_SetCompare2(uint16_t Compare)
{
	TIM_SetCompare2(TIM2, Compare);		//TIM2_CH2
}

/**
  * 函    数：PWM设置CCR3  修正：映射为TIM3_CH2
  */
void PWM_SetCompare3(uint16_t Compare)
{
	TIM_SetCompare2(TIM3, Compare);		//核心修改：TIM3_CH2 控制PA7
}
