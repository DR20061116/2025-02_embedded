#ifndef __SPO2_ALGORITHM_H
#define __SPO2_ALGORITHM_H

#include "main.h"

// 采样缓冲区大小（100Hz采样率下，3秒约300个点）
#define SAMPLE_BUFFER_SIZE    300

// 定义数据结构
typedef struct {
    uint32_t red_buf[SAMPLE_BUFFER_SIZE];
    uint32_t ir_buf[SAMPLE_BUFFER_SIZE];
    uint16_t head;
    uint16_t count;
} PPG_Buffer_t;

// 函数声明
void PPG_Data_Push(uint32_t red, uint32_t ir);
uint8_t PPG_Calculate(float *heart_rate, float *spo2);

#endif /* __ALGORITHM_H */
