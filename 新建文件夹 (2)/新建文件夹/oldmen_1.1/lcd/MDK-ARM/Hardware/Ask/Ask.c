#include "Ask.h"
#include <string.h>

// ============================================================================
// 协议 1：温度发送协议（9字节：AA 55 01 [TEMP] 00 00 00 55 AA）
// ============================================================================
#define TX_BUF_TEMP_SIZE 9
static uint8_t tx_buf_temp[TX_BUF_TEMP_SIZE] = {0xAA, 0x55, 0x01, 0x00, 0x00, 0x00, 0x00, 0x55, 0xAA};

void UART_Protocol_SendTemp(float temp)
{
    // 检查发送状态，防止因为开启了 Rx DMA 导致无法发送
    if (huart5.gState == HAL_UART_STATE_READY) 
    {
        uint8_t temp_int = (uint8_t)temp; 
        
        // 动态修改第 4 个字节（温度值）
        tx_buf_temp[3] = temp_int;
        
        // 启动 DMA 发送
        HAL_UART_Transmit_DMA(&huart5, tx_buf_temp, TX_BUF_TEMP_SIZE);
    }
}

// ============================================================================
// 协议 2：自定义指令协议（6字节：AA 55 02 [CMD] 55 AA）
// ============================================================================
#define TX_BUF_CMD_SIZE  6
static uint8_t tx_buf_cmd[TX_BUF_CMD_SIZE] = {0xAA, 0x55, 0x02, 0x00, 0x55, 0xAA};

void UART_Protocol_SendCmd(uint8_t cmd_val)
{
    // 限制传入的值在 0x01 ~ 0x05 范围内
    if (cmd_val < 0x01 || cmd_val > 0x05) return; 

    // 检查串口发送状态
    if (huart5.gState == HAL_UART_STATE_READY)
    {
        // 动态修改第 4 个字节（指令值）
        tx_buf_cmd[3] = cmd_val;
        
        // 启动 DMA 发送
        HAL_UART_Transmit_DMA(&huart5, tx_buf_cmd, TX_BUF_CMD_SIZE);
    }
}

// ============================================================================
// 协议 3：自定义模式协议（5字节：AA 55 04 55 AA）
// 注意：这次第 3 个字节是 0x04，它是可变的
// ============================================================================
#define TX_BUF_MODE_SIZE 5
static uint8_t tx_buf_mode[TX_BUF_MODE_SIZE] = {0xAA, 0x55, 0x04, 0x55, 0xAA};

/**
 * @brief  发送自定义模式数据包
 * @param  mode_val: 可传入 0x02, 0x03, 0x05, 0x06, 0x07
 */
void UART_Protocol_SendMode(uint8_t mode_val)
{
    // 检查串口发送状态
    if (huart5.gState == HAL_UART_STATE_READY)
    {
        // 动态修改第 3 个字节 (数组索引从 0 开始，第 3 个字节即下标 2)
        tx_buf_mode[2] = mode_val;
        
        // 启动 DMA 发送，长度为 5
        HAL_UART_Transmit_DMA(&huart5, tx_buf_mode, TX_BUF_MODE_SIZE);
    }
}

