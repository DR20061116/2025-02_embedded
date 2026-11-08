#ifndef __KEY_H
#define __KEY_H

#include "main.h"

// 定义按键的状态枚举
typedef enum {
    BTN_IDLE = 0,         // 空闲
    BTN_DEBOUNCE,         // 去抖动中
    BTN_WAIT_RELEASE      // 等待释放
} ButtonState_t;

// 按键结构体
typedef struct {
    GPIO_TypeDef* GPIOx;  // 端口
    uint16_t GPIO_Pin;    // 引脚
    ButtonState_t state;  // 状态
    uint32_t timer;       // 计时器
} Button_t;

// 函数声明
void Button_Init(Button_t *btn, GPIO_TypeDef* port, uint16_t pin);
void Button_Process(Button_t *btn, void (*callback)(void));

#endif
