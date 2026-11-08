#include "Buzzer.h"

// 蜂鸣器响（低电平有效）
void Buzzer_Start(void)
{
    HAL_GPIO_WritePin(GPIOB, GPIO_PIN_1, GPIO_PIN_RESET);
    HAL_Delay(100);
}

// 蜂鸣器停止（高电平）
void Buzzer_Stop(void)
{
    HAL_GPIO_WritePin(GPIOB, GPIO_PIN_1, GPIO_PIN_SET);
}


