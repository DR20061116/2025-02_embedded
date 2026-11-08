#include "Serial.h"
#include "stm32f10x.h"
#include <stdio.h>
#include <stdarg.h>

// 全局变量定义（核心修改：缓存从6字节改为8字节）
uint8_t Serial_RxPacket[8];  // 接收缓存（8字节，匹配三路角度帧）
uint8_t Serial_RxFlag = 0;   // 接收完成标志
uint8_t Serial_FrameType = 0;// 帧类型：0=角度帧，1=设备帧，2=模式帧

void Serial_Init(void) {
    RCC_APB2PeriphClockCmd(RCC_APB2Periph_USART1 | RCC_APB2Periph_GPIOA, ENABLE);

    // 配置TX(PA9)为复用推挽输出
    GPIO_InitTypeDef GPIO_InitStructure;
    GPIO_InitStructure.GPIO_Mode = GPIO_Mode_AF_PP;
    GPIO_InitStructure.GPIO_Pin = GPIO_Pin_9;
    GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
    GPIO_Init(GPIOA, &GPIO_InitStructure);

    // 配置RX(PA10)为上拉输入
    GPIO_InitStructure.GPIO_Mode = GPIO_Mode_IPU;
    GPIO_InitStructure.GPIO_Pin = GPIO_Pin_10;
    GPIO_Init(GPIOA, &GPIO_InitStructure);

    // 配置串口参数（115200波特率）
    USART_InitTypeDef USART_InitStructure;
    USART_InitStructure.USART_BaudRate = 115200;
    USART_InitStructure.USART_HardwareFlowControl = USART_HardwareFlowControl_None;
    USART_InitStructure.USART_Mode = USART_Mode_Tx | USART_Mode_Rx;
    USART_InitStructure.USART_Parity = USART_Parity_No;
    USART_InitStructure.USART_StopBits = USART_StopBits_1;
    USART_InitStructure.USART_WordLength = USART_WordLength_8b;
    USART_Init(USART1, &USART_InitStructure);

    // 配置中断
    USART_ITConfig(USART1, USART_IT_RXNE, ENABLE);
    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
    NVIC_InitTypeDef NVIC_InitStructure;
    NVIC_InitStructure.NVIC_IRQChannel = USART1_IRQn;
    NVIC_InitStructure.NVIC_IRQChannelCmd = ENABLE;
    NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority = 1;
    NVIC_InitStructure.NVIC_IRQChannelSubPriority = 1;
    NVIC_Init(&NVIC_InitStructure);

    USART_Cmd(USART1, ENABLE);
}

// 基础发送函数
void Serial_SendByte(uint8_t Byte) {
    USART_SendData(USART1, Byte);
    while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET);
}

void Serial_SendArray(uint8_t *Array, uint16_t Length) {
    for (uint16_t i = 0; i < Length; i++) {
        Serial_SendByte(Array[i]);
    }
}

void Serial_SendString(char *String) {
    for (uint8_t i = 0; String[i] != '\0'; i++) {
        Serial_SendByte(String[i]);
    }
}

uint32_t Serial_Pow(uint32_t X, uint32_t Y) {
    uint32_t Result = 1;
    while (Y--) {
        Result *= X;
    }
    return Result;
}

void Serial_SendNumber(uint32_t Number, uint8_t Length) {
    for (uint8_t i = 0; i < Length; i++) {
        Serial_SendByte(Number / Serial_Pow(10, Length - i - 1) % 10 + '0');
    }
}

int fputc(int ch, FILE *f) {
    Serial_SendByte(ch);
    return ch;
}

void Serial_Printf(char *format, ...) {
    char String[100];
    va_list arg;
    va_start(arg, format);
    vsprintf(String, format, arg);
    va_end(arg);
    Serial_SendString(String);
}

// 串口中断服务函数（适配8字节角度帧，设备/模式帧仍为4字节，无修改）
// 串口中断服务函数（修复版）
void USART1_IRQHandler(void) {
    static uint8_t RxState = 0;       // 0=等待帧头,1=接收数据,2=等待帧尾
    static uint8_t RxCount = 0;       // 接收计数器
    static uint8_t CurrentFrameLen;   // 当前帧长度

    if (USART_GetITStatus(USART1, USART_IT_RXNE) == SET) {
        uint8_t RxData = USART_ReceiveData(USART1);

        switch (RxState) {
            case 0: // 等待帧头
                RxCount = 0; // 重置计数器
                if (RxData == ANGLE_FRAME_HEADER) {
                    Serial_FrameType = 0;
                    CurrentFrameLen = 8;
                    Serial_RxPacket[RxCount++] = RxData;
                    RxState = 1;
                } else if (RxData == DEVICE_FRAME_HEADER) {
                    Serial_FrameType = 1;
                    CurrentFrameLen = 4;
                    Serial_RxPacket[RxCount++] = RxData;
                    RxState = 1;
                } else if (RxData == MODE_FRAME_HEADER) {
                    Serial_FrameType = 2;
                    CurrentFrameLen = 4;
                    Serial_RxPacket[RxCount++] = RxData;
                    RxState = 1;
                }
                break;

            case 1: // 接收数据
                Serial_RxPacket[RxCount++] = RxData;
                // 接收到 长度-1 个字节后，等待帧尾
                if (RxCount == CurrentFrameLen - 1) {
                    RxState = 2;
                }
                // 防止计数溢出（容错处理）
                else if (RxCount >= CurrentFrameLen) {
                    RxState = 0;
                    RxCount = 0;
                }
                break;

            case 2: // 验证帧尾
            {
                uint8_t expectedTail = 0;
                if (Serial_FrameType == 0) expectedTail = ANGLE_FRAME_TAIL;
                else if (Serial_FrameType == 1) expectedTail = DEVICE_FRAME_TAIL;
                else if (Serial_FrameType == 2) expectedTail = MODE_FRAME_TAIL;

                // 仅校验通过时，保存帧尾并置位完成标志
                if (RxData == expectedTail) {
                    Serial_RxPacket[RxCount] = RxData;
                    Serial_RxFlag = 1;
                }
                // 无论校验是否通过，都重置状态机
                RxState = 0;
                RxCount = 0;
            }
            break;
        }
        USART_ClearITPendingBit(USART1, USART_IT_RXNE);
    }
}
