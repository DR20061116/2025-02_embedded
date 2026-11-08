#include "stm32f10x.h"           
#include "Delay.h"

// 按键状态枚举（非阻塞扫描）
typedef enum {
    KEY_UP = 1,        // 按键未按下
    KEY_DOWN = 0,      // 按键按下
    KEY_PRESS = 2      // 按键单次触发
} KeyState;

// 按键结构体
typedef struct {
    uint8_t pin;             
    KeyState state;            // 当前状态
    uint8_t debounceCnt;       // 防抖计数器
} Key_t;

// 定义3个按键
static Key_t keys[3] = {
    {GPIO_Pin_3, KEY_UP, 0},
    {GPIO_Pin_4, KEY_UP, 0},
    {GPIO_Pin_5, KEY_UP, 0}
};


void Key_Init(void) {
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
    
    GPIO_InitTypeDef GPIO_InitStructure;
	
	
    GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IPU;
    GPIO_InitStructure.GPIO_Pin = GPIO_Pin_3 | GPIO_Pin_4 | GPIO_Pin_5;
    GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
	
    GPIO_Init(GPIOA, &GPIO_InitStructure);
		 
}


static void Key_Scan(void) {
    for (uint8_t i = 0; i < 3; i++) {
        uint8_t currentLevel = GPIO_ReadInputDataBit(GPIOA, keys[i].pin);
        
        // 防抖逻辑：连续3次检测到相同电平才确认状态
        if (currentLevel == keys[i].state) {
            keys[i].debounceCnt = 0;  // 状态未变，重置计数器
        } else {
            keys[i].debounceCnt++;
            if (keys[i].debounceCnt >= 3) {  // 3次一致（约30ms），确认状态变化
              
                keys[i].state = (KeyState)currentLevel;  
                keys[i].debounceCnt = 0;
            }
        }
    }
}


uint8_t Key_GetTrigger(void) {
    static KeyState lastState[3] = {KEY_UP, KEY_UP, KEY_UP};
    uint8_t trigger = 0;
    
    Key_Scan();  // 先刷新状态
    
    // 检测状态变化（从松开→按下时触发）
    for (uint8_t i = 0; i < 3; i++) {
        if (keys[i].state == KEY_DOWN && lastState[i] == KEY_UP) {
            trigger = i + 1;  // 键1返回1，键2返回2
        }
        lastState[i] = keys[i].state;
    }
    
    return trigger;
}
