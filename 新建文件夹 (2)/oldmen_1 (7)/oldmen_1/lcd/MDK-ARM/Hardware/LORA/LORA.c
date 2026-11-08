#include "LORA.h"
#include <stdio.h>
#include <string.h>

extern UART_HandleTypeDef huart4; 

// 关键点：必须是 static 全局缓冲区，防止函数退出后内存被释放
static char dma_tx_buf[128];

void UART4_SendData_DMA(double latitude, char lat_dir, double longitude, char lon_dir,
                        float temp, uint8_t fall_state, long heart_rate, long spo2)
{
    // 1. 检查 UART4 的发送状态。如果上一次 DMA 还没传完，直接退出，防止冲刷缓冲区导致数据错乱
    if (huart4.gState == HAL_UART_STATE_READY)
    {
        // 2. 打包数据为 CSV 字符串
        int len = snprintf(dma_tx_buf, sizeof(dma_tx_buf),
                           "$DATA,%.6f,%c,%.6f,%c,%.2f,%d,%ld,%ld\r\n",
                           latitude,
                           lat_dir ? lat_dir : 'N', // 避免空字符截断
                           longitude,
                           lon_dir ? lon_dir : 'E',
                           temp,
                           fall_state,
                           heart_rate,
                           spo2);

        // 3. 调用 HAL 库的 DMA 发送函数，非阻塞，瞬间执行完毕
        HAL_UART_Transmit_DMA(&huart4, (uint8_t *)dma_tx_buf, len);
    }
}



