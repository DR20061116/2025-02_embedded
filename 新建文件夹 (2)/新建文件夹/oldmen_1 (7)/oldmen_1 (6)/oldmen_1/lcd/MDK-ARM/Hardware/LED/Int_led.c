#include "Int_led.h"


extern TIM_HandleTypeDef htim1; // 确保在 main.c 中定义了 htim1
uint32_t pwm_data[DATA_LEN];

void WS2812_Init(void) {
    // 初始清空缓冲区
    for (int i = 0; i < DATA_LEN; i++) pwm_data[i] = 0;
}

uint8_t WS2812_Send(uint8_t R, uint8_t G, uint8_t B) {
    // 检查 DMA 是否忙碌，防止打断正在进行的传输
    if (HAL_DMA_GetState(htim1.hdma[TIM_DMA_ID_CC1]) != HAL_DMA_STATE_READY) {
        return 0; // 发送失败，忙碌中
    }

    uint32_t color = (G << 16) | (R << 8) | B; // WS2812 数据格式 GRB [cite: 238]
    
    for (int i = 0; i < 24; i++) {
        // 归零码：0码 CCR=50，1码 CCR=100 (基于ARR=209) [cite: 230]
        pwm_data[i] = (color & (1 << (23 - i))) ? 100 : 50;
    }
    
    // 补充复位信号 (低电平)
    for (int i = 24; i < DATA_LEN; i++) pwm_data[i] = 0;

    HAL_TIM_PWM_Start_DMA(&htim1, TIM_CHANNEL_1, pwm_data, DATA_LEN);
    return 1; // 发送成功
}

void WS2812_Blink_Process(void) {
    static uint32_t last_toggle_time = 0;
    static uint8_t is_led_on = 0;
    
    if (HAL_GetTick() - last_toggle_time >= 250) {
        last_toggle_time = HAL_GetTick();
        is_led_on = !is_led_on;

        if (is_led_on) WS2812_Send(255, 0, 0); // 红色 [cite: 129]
        else WS2812_Send(0, 0, 0);             // 熄灭
    }
}

