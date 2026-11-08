#include "ADCSensor.h"
#include "delay.h"
#include <math.h>

// 初始化三个传感器引脚
void Sensor_Init(void)
{
    GPIO_InitTypeDef GPIO_InitStructure;
    
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE); // 使能PORTA时钟
    
    // 配置PA0（甲醛传感器）为模拟输入
    GPIO_InitStructure.GPIO_Pin = GPIO_Pin_0;
    GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AIN;
    GPIO_Init(GPIOA, &GPIO_InitStructure);
    
    // 配置PA1（光敏传感器）为模拟输入
    GPIO_InitStructure.GPIO_Pin = GPIO_Pin_1;
    GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AIN;
    GPIO_Init(GPIOA, &GPIO_InitStructure);
    
    // 配置PA4（MQ4传感器）为模拟输入
    GPIO_InitStructure.GPIO_Pin = GPIO_Pin_4;
    GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AIN;
    GPIO_Init(GPIOA, &GPIO_InitStructure);
    
    Adc_Init();
}

// 读取光敏传感器值（光照强度越大，百分比越大）
u16 LightSensor_GetValue(void)
{
    u16 adc_value;
    u32 temp_val = 0;
    u8 t;
    
    for(t = 0; t < SENSOR_READ_TIMES; t++)
    {
        temp_val += Get_Adc(ADC_LIGHT_CHANNEL);
        delay_ms(5);
    }
    temp_val /= SENSOR_READ_TIMES;
    adc_value = (u16)temp_val;
    
    // 光敏传感器特性：光照越强，ADC值越小，因此需要反相处理
    // 4095 - adc_value 得到光照强度越大值越大
    u32 light_strength = 4095 - adc_value;
    u32 percentage = light_strength * 100 / 4095;
    
    if(percentage > 100) percentage = 100;
    
    return (u16)percentage;
}

// 读取MQ4传感器值（百分比0-100）
u16 MQ4Sensor_GetValue(void)
{
    u16 adc_value;
    u32 temp_val = 0;
    u8 t;
    
    for(t = 0; t < SENSOR_READ_TIMES; t++)
    {
        temp_val += Get_Adc(ADC_MQ4_CHANNEL);
        delay_ms(5);
    }
    temp_val /= SENSOR_READ_TIMES;
    adc_value = (u16)temp_val;
    
    u32 percentage = (u32)adc_value * 100 / 4095;
    
    if(percentage > 100) percentage = 100;
    
    return (u16)percentage;
}

// 读取甲醛传感器值（ppm值1-1000）
u16 HCHOSensor_GetPPM(void)
{
    u16 adc_value;
    u32 temp_val = 0;
    u8 t;
    u32 ppm;
    
    for(t = 0; t < SENSOR_READ_TIMES; t++)
    {
        temp_val += Get_Adc(ADC_HCHO_CHANNEL);
        delay_ms(5);
    }
    temp_val /= SENSOR_READ_TIMES;
    adc_value = (u16)temp_val;
    
    // 使用整数运算：adc_value * 1000 / 4095 得到0-1000的值
    // 然后加1得到1-1001，再限制到1000
    ppm = (u32)adc_value * 1000UL / 4095UL;
    ppm += 1;  // 偏移1ppm
    
    if(ppm > 1000) ppm = 1000;
    
    return (u16)ppm;
}
