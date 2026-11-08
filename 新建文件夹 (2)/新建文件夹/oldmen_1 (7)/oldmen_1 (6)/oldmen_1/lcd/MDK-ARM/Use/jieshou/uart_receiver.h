#ifndef __UART_RECEIVER_H__
#define __UART_RECEIVER_H__

#include "main.h"

// 接收缓冲区大小（根据12字节最大包长，64字节绰绰有余）
#define RX_BUF_SIZE   64

// 外部声明全局变量
extern uint8_t g_rx_buf[RX_BUF_SIZE];

// 从机解析出的数据结构体
typedef struct {
    uint8_t  sos_flag;          // SOS 触发标志：1代表触发，0代表无
    uint8_t  medicine_id;       // 药丸编号：0x0A~0x0E，0代表无
    char     phone_num[12];     // 8位电话号码字符串（带'\0'结尾）
    uint8_t  new_phone_flag;    // 收到新电话标志：1代表有新号码，0代表无
} Slave_Data_t;

extern volatile Slave_Data_t g_slave_data;

// 函数声明（移除了引发链接错误的 UART_Receiver_Reset_DMA）
void UART_Receiver_Init(UART_HandleTypeDef *huart);

#endif /* __UART_RECEIVER_H__ */
