#include "uart_receiver.h"
#include <string.h>

extern DMA_HandleTypeDef hdma_uart4_rx; // 对应 CubeMX 里的 DMA 名字

uint8_t g_rx_buf[RX_BUF_SIZE];
volatile Slave_Data_t g_slave_data = {0};

// 初始化接收：开启定长/空闲中断接收，并关闭半传输中断避免频繁进中断
void UART_Receiver_Init(UART_HandleTypeDef *huart) {
    memset(g_rx_buf, 0, RX_BUF_SIZE);
    HAL_UARTEx_ReceiveToIdle_DMA(huart, g_rx_buf, RX_BUF_SIZE);
    __HAL_DMA_DISABLE_IT(&hdma_uart4_rx, DMA_IT_HT); 
}

// HAL库标准的串口数据接收事件回调（当收到空闲中断时自动触发）
void HAL_UARTEx_RxEventCallback(UART_HandleTypeDef *huart, uint16_t Size) {
    if (huart->Instance == UART4) { // 确保是串口4
        if (Size >= 4) {
            uint16_t i = 0;
            // 循环解析，支持防粘包处理
            while (i <= Size - 4) {
                // 1. 锁准帧头
                if (g_rx_buf[i] == 0xAA) {
                    uint8_t msg_type = g_rx_buf[i + 1];
                    
                    // --- 药丸包 (长度4字节) ---
                    if (msg_type == 0x01) {
                        if (g_rx_buf[i + 3] == 0x55) {
                            g_slave_data.medicine_id = g_rx_buf[i + 2]; // 存入结构体
                            i += 4;
                            continue;
                        }
                    }
                    // --- SOS包 (长度4字节) ---
                    else if (msg_type == 0x02) {
                        if (g_rx_buf[i + 2] == 0xFF && g_rx_buf[i + 3] == 0x55) {
                            g_slave_data.sos_flag = 1; // 标记SOS触发
                            i += 4;
                            continue;
                        }
                    }
                    // --- 电话包 (针对8位手机号，长度12字节) ---
                    else if (msg_type == 0x03) {
                        if (i <= Size - 12 && g_rx_buf[i + 11] == 0x55) {
                            // 校验和验证
                            uint8_t sum = 0;
                            for (int j = 0; j < 10; j++) {
                                sum += g_rx_buf[i + j];
                            }
                            if (sum == g_rx_buf[i + 10]) { // 校验成功
                                memcpy((char*)g_slave_data.phone_num, &g_rx_buf[i + 2], 8);
                                g_slave_data.phone_num[8] = '\0'; // 强制闭合字符串
                                g_slave_data.new_phone_flag = 1;  // 标记新号码到达
                                i += 12;
                                continue;
                            }
                        }
                    }
                }
                i++; // 未能匹配，往后挪1字节继续探测
            }
        }
        
        // 【核心修改】直接在此处原位复位接收，不再调用外部函数，彻底根除 L6218E 错误
        HAL_UARTEx_ReceiveToIdle_DMA(huart, g_rx_buf, RX_BUF_SIZE);
        __HAL_DMA_DISABLE_IT(&hdma_uart4_rx, DMA_IT_HT);
    }
}
