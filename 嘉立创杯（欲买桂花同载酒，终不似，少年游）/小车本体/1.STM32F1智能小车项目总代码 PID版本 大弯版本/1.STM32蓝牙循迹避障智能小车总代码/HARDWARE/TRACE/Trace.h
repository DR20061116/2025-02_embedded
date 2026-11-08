#ifndef __TRACE_H
#define __TRACE_H

#include "stm32f10x.h"

// 8路循迹传感器引脚定义 小车后往前看 左→右：X1~X8
// 修正：统一使用标准库函数 GPIO_ReadInputDataBit
#define X1  GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_2)
#define X2  GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_1)
#define X3  GPIO_ReadInputDataBit(GPIOB, GPIO_Pin_15)
#define X4  GPIO_ReadInputDataBit(GPIOB, GPIO_Pin_14)
#define X5  GPIO_ReadInputDataBit(GPIOB, GPIO_Pin_11)
#define X6  GPIO_ReadInputDataBit(GPIOB, GPIO_Pin_10)
#define X7  GPIO_ReadInputDataBit(GPIOB, GPIO_Pin_1)
#define X8  GPIO_ReadInputDataBit(GPIOB, GPIO_Pin_0)

// 函数声明（兼容main.c调用）
void Trace_Init(void);
void Trace_task(void);
void Trace_PID_Init(void);        // PID初始化
int Trace_Get_Error(void);        // 获取偏差值

// PID参数与变量外部声明
extern int PID_Out;
extern int Trace_Error;

#endif
