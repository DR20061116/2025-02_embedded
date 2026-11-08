#ifndef __INT_LED_H
#define __INT_LED_H
#include "main.h"

// 根据单总线协议长度，每个LED 24bit，复位信号80us [cite: 79, 230]
#define LED_NUM 1
#define DATA_LEN (LED_NUM * 24 + 40)

void WS2812_Init(void);
// 设置LED颜色 (G, R, B顺序，型号要求) [cite: 238]
uint8_t WS2812_Send(uint8_t R, uint8_t G, uint8_t B);
// 闪烁状态机：单次闪烁循环 (闪烁频率应为250ms一次)
void WS2812_Blink_Process(void);

#endif
