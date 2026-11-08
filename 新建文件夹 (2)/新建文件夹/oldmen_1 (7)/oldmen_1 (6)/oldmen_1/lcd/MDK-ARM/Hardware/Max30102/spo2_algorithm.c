#include "spo2_algorithm.h"
#include <math.h>

static PPG_Buffer_t ppg_data = {0};

/**
 * @brief  将最新的原始数据压入循环缓冲区
 */
void PPG_Data_Push(uint32_t red, uint32_t ir) {
    ppg_data.red_buf[ppg_data.head] = red;
    ppg_data.ir_buf[ppg_data.head]  = ir;
    
    ppg_data.head = (ppg_data.head + 1) % SAMPLE_BUFFER_SIZE;
    
    if (ppg_data.count < SAMPLE_BUFFER_SIZE) {
        ppg_data.count++;
    }
}

/**
 * @brief  心率与血氧核心计算函数
 * @param  heart_rate: 计算出的心率值指针 (BPM)
 * @param  spo2:       计算出的血氧值指针 (%)
 * @return 1: 计算成功并更新; 0: 数据未攒够或手指未放置
 */
uint8_t PPG_Calculate(float *heart_rate, float *spo2) {
    // 1. 数据未攒满缓冲区前，不进行计算
    if (ppg_data.count < SAMPLE_BUFFER_SIZE) {
        return 0; 
    }

    uint32_t red_min = 0xFFFFFFFF, red_max = 0;
    uint32_t ir_min = 0xFFFFFFFF,  ir_max = 0;
    
    // 用于心率计算的变量
    uint16_t peak_indices[20] = {0};
    uint16_t peak_count = 0;
    
    // 2. 找出直流分量(DC)与交流分量(AC)的基础极值
    // 同时为了简单滤波，这里采用简易的滑动窗口寻找局部峰值
    for (uint16_t i = 2; i < SAMPLE_BUFFER_SIZE - 2; i++) {
        uint32_t r_val = ppg_data.red_buf[i];
        uint32_t i_val = ppg_data.ir_buf[i];

        if (r_val < red_min) red_min = r_val;
        if (r_val > red_max) red_max = r_val;
        if (i_val < ir_min)  ir_min  = i_val;
        if (i_val > ir_max)  ir_max  = i_val;

        // 简易一阶差分检测红外信号的局部波峰 (100Hz 采样率下)
        if (ppg_data.ir_buf[i] > ppg_data.ir_buf[i-1] && ppg_data.ir_buf[i] > ppg_data.ir_buf[i-2] &&
            ppg_data.ir_buf[i] > ppg_data.ir_buf[i+1] && ppg_data.ir_buf[i] > ppg_data.ir_buf[i+2]) {
            
            // 确保波峰有足够的显著性，过滤掉微小噪声
            if (ppg_data.ir_buf[i] > (ir_min + (ir_max - ir_min) * 0.6)) { 
                if (peak_count == 0 || (i - peak_indices[peak_count - 1] > 40)) { // 限制两次心跳间隔不少于400ms(即心率不高于150)
                    peak_indices[peak_count++] = i;
                    if (peak_count >= 20) break;
                }
            }
        }
    }

    // 3. 判断手指是否移开 (如果全是一条直线或信号极其微弱)
    if ((ir_max - ir_min) < 500 || ir_min < 30000) {
        *heart_rate = 0;
        *spo2 = 0;
        return 1; // 返回1表示刷新了状态（未贴紧）
    }

    // 4. 计算心率 (基于波峰间距)
    if (peak_count >= 2) {
        uint32_t total_interval = 0;
        for (uint16_t j = 1; j < peak_count; j++) {
            total_interval += (peak_indices[j] - peak_indices[j-1]);
        }
        float avg_interval = (float)total_interval / (peak_count - 1); // 得到平均多少个点跳动一次
        
        // 假设采样率为 100Hz (每秒100个点)
        // 心率 = 60秒 * 100Hz / 平均点数间隔
        *heart_rate = (60.0f * 100.0f) / avg_interval;
    } else {
        *heart_rate = 0; // 没找到足够的波峰
    }

    // 5. 计算血氧 (SpO2)
    float red_ac = (float)(red_max - red_min);
    float red_dc = (float)red_min;
    float ir_ac  = (float)(ir_max - ir_min);
    float ir_dc  = (float)ir_min;

    if (red_dc > 0 && ir_dc > 0 && ir_ac > 0) {
        // 计算 R 比值
        float R = (red_ac / red_dc) / (ir_ac / ir_dc);
        
        // 经验公式计算血氧
        float spo2_val = 110.0f - 25.0f * R;
        
        // 边界限幅
        if (spo2_val > 100.0f) spo2_val = 100.0f;
        if (spo2_val < 50.0f)  spo2_val = 50.0f;
        
        *spo2 = spo2_val;
    } else {
        *spo2 = 0;
    }

    return 1;
}