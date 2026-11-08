#ifndef __INT_LED_H
#define __INT_LED_H
#include "main.h"

// 根据灯珠数量配置长度：每个灯珠24bit，复位信号至少80us [cite: 79, 230]
#define LED_NUM 1
#define DATA_LEN (LED_NUM * 24 + 40) 

void WS2812_Init(void);
// 发送颜色数据 (G, R, B格式，符合手册要求) [cite: 238]
uint8_t WS2812_Send(uint8_t R, uint8_t G, uint8_t B);
// 闪烁逻辑：一秒闪烁两次 (调用频率应为250ms一次)
void WS2812_Blink_Process(void);

#endif
