#ifndef __LORA_H
#define __LORA_H
#include "stm32f4xx_hal.h"

#include "main.h" // 确保引入了 HAL 库和 huart4 的声明

/**
 * @brief  使用 DMA 异步发送打包好的传感器数据
 * @param  latitude   纬度
 * @param  lat_dir    纬度方向 (N/S)
 * @param  longitude  经度
 * @param  lon_dir    经度方向 (E/W)
 * @param  temp       当前温度
 * @param  fall_state 跌倒状态 (0-正常, 1-跌倒)
 * @param  heart_rate 心率 (传入计算好的最终值，如 my_heart_rate-50)
 * @param  spo2       血氧
 */
void UART4_SendData_DMA(double latitude, char lat_dir, double longitude, char lon_dir,
                        float temp, uint8_t fall_state, long heart_rate, long spo2);
#endif 
