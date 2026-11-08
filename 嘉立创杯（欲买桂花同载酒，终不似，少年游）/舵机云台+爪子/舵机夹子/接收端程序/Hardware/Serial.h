#ifndef __SERIAL_H
#define __SERIAL_H

#include "stm32f10x.h"

// 帧头帧尾宏定义
#define ANGLE_FRAME_HEADER 0xAA
#define ANGLE_FRAME_TAIL   0x55
#define DEVICE_FRAME_HEADER 0xCC
#define DEVICE_FRAME_TAIL   0x33
#define MODE_FRAME_HEADER   0xBB
#define MODE_FRAME_TAIL     0xEE

// 全局变量声明（核心修改：缓存从6字节改为8字节）
extern uint8_t Serial_RxPacket[8];
extern uint8_t Serial_RxFlag;
extern uint8_t Serial_FrameType;

// 函数声明
void Serial_Init(void);
void Serial_SendByte(uint8_t Byte);
void Serial_SendArray(uint8_t *Array, uint16_t Length);
void Serial_SendString(char *String);
void Serial_SendNumber(uint32_t Number, uint8_t Length);
void Serial_Printf(char *format, ...);

#endif 
