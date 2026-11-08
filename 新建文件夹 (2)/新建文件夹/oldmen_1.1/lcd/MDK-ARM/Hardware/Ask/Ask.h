#ifndef __ASK_H
#define __ASK_H

#include "main.h" // 包含 HAL 库相关头文件

// 声明外部串口句柄，方便在 .c 中使用
extern UART_HandleTypeDef huart5;

/* 函数声明 */
void UART_Protocol_SendTemp(float temp);
void UART_Protocol_SendCmd(uint8_t cmd_val);
void UART_Protocol_SendMode(uint8_t mode_val);
#endif /* __ASK_H */
