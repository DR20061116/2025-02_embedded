#ifndef __MAX30102_H
#define __MAX30102_H

#include "main.h"

// MAX30102 I2C 7位地址为 0x57，左移一位得到8位写地址 0xAE
#define MAX30102_ADDR        0xAE 

// 核心寄存器地址定义
#define REG_INT_STATUS_1     0x00
#define REG_INT_STATUS_2     0x01
#define REG_INT_ENABLE_1     0x02
#define REG_INT_ENABLE_2     0x03
#define REG_FIFO_WR_PTR      0x04
#define REG_OVF_COUNTER      0x05
#define REG_FIFO_RD_PTR      0x06
#define REG_FIFO_DATA        0x07
#define REG_FIFO_CONFIG      0x08
#define REG_MODE_CONFIG      0x09
#define REG_SPO2_CONFIG      0x0A
#define REG_LED1_PA          0x0C // 红光LED电流
#define REG_LED2_PA          0x0D // 红外LED电流
#define REG_PILOT_PA         0x10
#define REG_MULTI_LED_CTRL1  0x11
#define REG_MULTI_LED_CTRL2  0x12
#define REG_TEMP_INTR        0x1F
#define REG_TEMP_FRAC        0x20
#define REG_TEMP_CONFIG      0x21
#define REG_REV_ID           0xFE
#define REG_PART_ID          0xFF

// 函数声明
uint8_t MAX30102_Init(I2C_HandleTypeDef *hi2c);
uint8_t MAX30102_Read_FIFO(I2C_HandleTypeDef *hi2c, uint32_t *pun_red_led, uint32_t *pun_ir_led);

#endif /* __MAX30102_H */

