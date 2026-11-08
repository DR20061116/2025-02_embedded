#include "stm32f10x.h"
#include "delay.h"

static u8  fac_us=0; // us延时倍乘数
static u16 fac_ms=0; // ms延时倍乘数

// 初始化延迟函数
void DelayInit()
{
    SysTick_CLKSourceConfig(SysTick_CLKSource_HCLK_Div8); // 选择外部时钟 HCLK/8
    fac_us = SystemCoreClock / 8000000;                     // 为系统时钟的1/8
    fac_ms = (u16)fac_us * 1000;                             // 非ucos下,代表每个ms需要的systick时钟数
}

// 延时 nus
void DelayUs(unsigned long nus)
{
    u32 temp;
    SysTick->LOAD = nus * fac_us; // 时间加载
    SysTick->VAL = 0x00;          // 清空计数器
    SysTick->CTRL |= SysTick_CTRL_ENABLE_Msk; // 开始倒数
    do
    {
        temp = SysTick->CTRL;
    } while ((temp & 0x01) && !(temp & (1 << 16))); // 等待时间到达
    SysTick->CTRL &= ~SysTick_CTRL_ENABLE_Msk;       // 关闭计数器
    SysTick->VAL = 0X00;                               // 清空计数器
}

// 延时 nms (修复版：去掉了未知的 SysTick_Info 结构体)
void DelayMs(unsigned int nms)
{
    u32 temp;
    SysTick->LOAD = (u32)nms * fac_ms; // 时间加载(SysTick->LOAD为24bit)
    SysTick->VAL = 0x00;                // 清空计数器
    SysTick->CTRL |= SysTick_CTRL_ENABLE_Msk; // 开始倒数
    do
    {
        temp = SysTick->CTRL;
    } while ((temp & 0x01) && !(temp & (1 << 16))); // 等待时间到达
    SysTick->CTRL &= ~SysTick_CTRL_ENABLE_Msk;       // 关闭计数器
    SysTick->VAL = 0X00;                               // 清空计数器
}

void DelayS(unsigned int ns)
{
    unsigned char i;
    for (i = 0; i < ns; i++)
    {
        DelayMs(1000);
    }
}
