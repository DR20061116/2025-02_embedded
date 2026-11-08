#include "Key.h"

void Button_Init(Button_t *btn, GPIO_TypeDef* port, uint16_t pin) {
    btn->GPIOx = port;
    btn->GPIO_Pin = pin;
    btn->state = BTN_IDLE;
    btn->timer = 0;
}

void Button_Process(Button_t *btn, void (*callback)(void)) {
    // 读取引脚状态 (Pull-up配置下，按下为RESET/0)
    GPIO_PinState pin_state = HAL_GPIO_ReadPin(btn->GPIOx, btn->GPIO_Pin);

    switch (btn->state) {
        case BTN_IDLE:
            if (pin_state == GPIO_PIN_RESET) {
                btn->timer = HAL_GetTick(); // 记录起始时间
                btn->state = BTN_DEBOUNCE;
            }
            break;

        case BTN_DEBOUNCE:
            if (pin_state == GPIO_PIN_RESET) {
                if ((HAL_GetTick() - btn->timer) >= 20) { // 20ms确认按下
                    btn->state = BTN_WAIT_RELEASE;
                }
            } else {
                btn->state = BTN_IDLE; // 干扰信号
            }
            break;

        case BTN_WAIT_RELEASE:
            if (pin_state == GPIO_PIN_SET) { // 检测到抬起
                if (callback != NULL) callback(); // 触发动作
                btn->state = BTN_IDLE;
            }
            break;
    }
}
