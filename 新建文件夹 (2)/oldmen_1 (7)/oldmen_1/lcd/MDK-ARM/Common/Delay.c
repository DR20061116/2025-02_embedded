#include "Delay.h"

volatile uint32_t ticksPerUs; // 每微秒的时钟周期数

// 初始化DWT
void Delay_Init(void) {
    // 启用DWT
    CoreDebug->DEMCR |= CoreDebug_DEMCR_TRCENA_Msk;
    // 复位并启用周期计数器
    DWT->CYCCNT = 0;
    DWT->CTRL |= DWT_CTRL_CYCCNTENA_Msk;
    // 计算每微秒的时钟周期数
    ticksPerUs = HAL_RCC_GetHCLKFreq() / 1000000;
}

// 微秒延时
void Delay_us(uint32_t us) {
    uint32_t start = DWT->CYCCNT;
    uint32_t cycles = us * ticksPerUs;
    while (DWT->CYCCNT - start < cycles); // 自动处理计数器溢出
}

// 毫秒延时
void Delay_ms(uint32_t ms) {
    Delay_us(ms * 1000); // 复用微秒延时
}
