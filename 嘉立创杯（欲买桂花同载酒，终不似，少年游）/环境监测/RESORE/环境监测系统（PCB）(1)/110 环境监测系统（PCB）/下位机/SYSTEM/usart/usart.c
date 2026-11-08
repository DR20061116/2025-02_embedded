
//硬件驱动
#include "usart.h"
#include "delay.h"

//C库
#include <stdarg.h>
#include <string.h>
#include <stdio.h>

/*
************************************************************
*	函数名称：	Usart1_Init
*
*	函数功能：	串口1初始化
*
*	入口参数：	baud：设定的波特率
*
*	返回参数：	无
*
*	说明：		TX-PA9		RX-PA10
************************************************************
*/
void Usart1_Init(unsigned int baud)
{

	GPIO_InitTypeDef gpio_initstruct;
	USART_InitTypeDef usart_initstruct;
	NVIC_InitTypeDef nvic_initstruct;
	
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_USART1, ENABLE);
	
	//PA9	TXD
	gpio_initstruct.GPIO_Mode = GPIO_Mode_AF_PP;
	gpio_initstruct.GPIO_Pin = GPIO_Pin_9;
	gpio_initstruct.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOA, &gpio_initstruct);
	
	//PA10	RXD
	gpio_initstruct.GPIO_Mode = GPIO_Mode_IN_FLOATING;
	gpio_initstruct.GPIO_Pin = GPIO_Pin_10;
	gpio_initstruct.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOA, &gpio_initstruct);
	
	usart_initstruct.USART_BaudRate = baud;
	usart_initstruct.USART_HardwareFlowControl = USART_HardwareFlowControl_None;		//无硬件流控
	usart_initstruct.USART_Mode = USART_Mode_Rx|USART_Mode_Tx;						//接收和发送
	usart_initstruct.USART_Parity = USART_Parity_No;									//无校验
	usart_initstruct.USART_StopBits = USART_StopBits_1;								//1位停止位
	usart_initstruct.USART_WordLength = USART_WordLength_8b;							//8位数据位
	USART_Init(USART1, &usart_initstruct);
	
	USART_Cmd(USART1, ENABLE);														//使能串口
	
	USART_ITConfig(USART1, USART_IT_RXNE, ENABLE);									//使能接收中断
	
	nvic_initstruct.NVIC_IRQChannel = USART1_IRQn;
	nvic_initstruct.NVIC_IRQChannelCmd = ENABLE;
	nvic_initstruct.NVIC_IRQChannelPreemptionPriority = 3;
	nvic_initstruct.NVIC_IRQChannelSubPriority = 3;
	NVIC_Init(&nvic_initstruct);

}

void Usart2_Init(unsigned int baud)
{

	GPIO_InitTypeDef gpio_initstruct;
	USART_InitTypeDef usart_initstruct;
	NVIC_InitTypeDef nvic_initstruct;
	
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA, ENABLE);
	RCC_APB1PeriphClockCmd(RCC_APB1Periph_USART2, ENABLE);
	
	//PA2	TXD
	gpio_initstruct.GPIO_Mode = GPIO_Mode_AF_PP;
	gpio_initstruct.GPIO_Pin = GPIO_Pin_2;
	gpio_initstruct.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOA, &gpio_initstruct);
	
	//PA3	RXD
	gpio_initstruct.GPIO_Mode = GPIO_Mode_IN_FLOATING;
	gpio_initstruct.GPIO_Pin = GPIO_Pin_3;
	gpio_initstruct.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOA, &gpio_initstruct);
	
	usart_initstruct.USART_BaudRate = baud;
	usart_initstruct.USART_HardwareFlowControl = USART_HardwareFlowControl_None;		//无硬件流控
	usart_initstruct.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;						//接收和发送
	usart_initstruct.USART_Parity = USART_Parity_No;									//无校验
	usart_initstruct.USART_StopBits = USART_StopBits_1;								//1位停止位
	usart_initstruct.USART_WordLength = USART_WordLength_8b;							//8位数据位
	USART_Init(USART2, &usart_initstruct);
	
	USART_Cmd(USART2, ENABLE);														//使能串口
	
	USART_ITConfig(USART2, USART_IT_RXNE, ENABLE);									//使能接收中断
	
	nvic_initstruct.NVIC_IRQChannel = USART2_IRQn;
	nvic_initstruct.NVIC_IRQChannelCmd = ENABLE;
	nvic_initstruct.NVIC_IRQChannelPreemptionPriority = 3;
	nvic_initstruct.NVIC_IRQChannelSubPriority = 3;
	NVIC_Init(&nvic_initstruct);

}



void Usart3_Init(unsigned int baud)
{

	GPIO_InitTypeDef gpio_initstruct;
	USART_InitTypeDef usart_initstruct;
	NVIC_InitTypeDef nvic_initstruct;
	
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);
	RCC_APB1PeriphClockCmd(RCC_APB1Periph_USART3, ENABLE);
	
	//PB10	TXD
	gpio_initstruct.GPIO_Mode = GPIO_Mode_AF_PP;
	gpio_initstruct.GPIO_Pin = GPIO_Pin_10;
	gpio_initstruct.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOB, &gpio_initstruct);
	
	//PB11	RXD
	gpio_initstruct.GPIO_Mode = GPIO_Mode_IN_FLOATING;
	gpio_initstruct.GPIO_Pin = GPIO_Pin_11;
	gpio_initstruct.GPIO_Speed = GPIO_Speed_50MHz;
	GPIO_Init(GPIOB, &gpio_initstruct);
	
	usart_initstruct.USART_BaudRate = baud;
	usart_initstruct.USART_HardwareFlowControl = USART_HardwareFlowControl_None;		//无硬件流控
	usart_initstruct.USART_Mode = USART_Mode_Rx | USART_Mode_Tx;						//接收和发送
	usart_initstruct.USART_Parity = USART_Parity_No;									//无校验
	usart_initstruct.USART_StopBits = USART_StopBits_1;								//1位停止位
	usart_initstruct.USART_WordLength = USART_WordLength_8b;							//8位数据位
	USART_Init(USART3, &usart_initstruct);
	
	USART_Cmd(USART3, ENABLE);														//使能串口
	
	USART_ITConfig(USART3, USART_IT_RXNE, ENABLE);									//使能接收中断
	
	nvic_initstruct.NVIC_IRQChannel = USART3_IRQn;
	nvic_initstruct.NVIC_IRQChannelCmd = ENABLE;
	nvic_initstruct.NVIC_IRQChannelPreemptionPriority = 3;
	nvic_initstruct.NVIC_IRQChannelSubPriority = 3;
	NVIC_Init(&nvic_initstruct);

}
void Usart_SendString(USART_TypeDef *USARTx, unsigned char *str, unsigned short len)
{

	unsigned short count = 0;
	
	for(; count < len; count++)
	{
		USART_SendData(USARTx, *str++);									//发送数据
		while(USART_GetFlagStatus(USARTx, USART_FLAG_TXE) == RESET);		//等待发送完成
	}

}

/*
************************************************************
*	函数名称：	UsartPrintf
*
*	函数功能：	格式化打印
*
*	入口参数：	USARTx：串口组
*				fmt：不定长参
*
*	返回参数：	无
*
*	说明：		
************************************************************
*/
void UsartPrintf(USART_TypeDef *USARTx, char *fmt,...)
{

	unsigned char UsartPrintfBuf[296];
	va_list ap;
	unsigned char *pStr = UsartPrintfBuf;
	
	va_start(ap, fmt);
	vsnprintf((char *)UsartPrintfBuf, sizeof(UsartPrintfBuf), fmt, ap);							//格式化
	va_end(ap);
	
	while(*pStr != 0)
	{
		USART_SendData(USARTx, *pStr++);
		while(USART_GetFlagStatus(USARTx, USART_FLAG_TXE) == RESET);
	}

}


// PM2.5相关全局变量
uint16_t PM25_Value = 0;
uint8_t PM25_RxFlag = 0;
uint8_t PM25_RxPacket[2];             // 存储接收到的2个数据字节

/*
************************************************************
*	函数名称：	PM25_GetRxFlag
*
*	函数功能：	获取PM2.5接收标志
*
*	入口参数：	无
*
*	返回参数：	接收标志
*
*	说明：		读取后自动清除标志
************************************************************
*/
uint8_t PM25_GetRxFlag(void)
{
	if (PM25_RxFlag == 1)
	{
		PM25_RxFlag = 0;
		return 1;
	}
	return 0;
}

/*
************************************************************
*	函数名称：	PM25_ReadData
*
*	函数功能：	读取PM2.5数据
*
*	入口参数：	无
*
*	返回参数：	无
*
*	说明：		将接收到的数据转换为PM2.5数值
************************************************************
*/
void PM25_ReadData(void)
{
    if(PM25_GetRxFlag() == 1)
    {
        // 将两个字节合并为16位数据（高位在前）
        PM25_Value = (PM25_RxPacket[0] << 8) | PM25_RxPacket[1];
    }
}

/*
************************************************************
*	函数名称：	USART2_IRQHandler
*
*	函数功能：	串口2中断服务函数 - 用于接收PM2.5数据
*
*	入口参数：	无
*
*	返回参数：	无
*
*	说明：		使用状态机解析PM2.5传感器数据帧
************************************************************
*/
void USART2_IRQHandler(void)
{
    static uint8_t RxState = 0;
    static uint8_t pRxPacket = 0;
    
    if (USART_GetITStatus(USART2, USART_IT_RXNE) == SET)
    {
        uint8_t RxData = USART_ReceiveData(USART2);
        
        // 状态机处理数据帧
        if (RxState == 0)
        {
            if (RxData == 0xA5)  // 检测帧头
            {
                RxState = 1;
                pRxPacket = 0;
            }
        }
        else if (RxState == 1)
        {
            // 接收数据字节
            PM25_RxPacket[pRxPacket] = RxData;
            pRxPacket++;
            if (pRxPacket >= 2)  // 接收完2个数据字节
            {
                RxState = 2;
            }
        }
        else if (RxState == 2)
        {
            // 校验：校验和 = (数据1 + 数据2 + 0xA5) & 0x7F
            if (((PM25_RxPacket[0] + PM25_RxPacket[1] + 0xA5) & 0x7F) == RxData)
            {
                RxState = 0;
                PM25_RxFlag = 1;  // 设置接收完成标志
            }
            else
            {
                // 校验失败，重置状态
                RxState = 0;
            }
        }
        
        USART_ClearITPendingBit(USART2, USART_IT_RXNE);
    }
}

u8 USART_RX_BUF_FX[200];     //接收缓冲,最大USART_REC_LEN个字节.
//接收状态
u16 USART_RX_STA_FX=0;       //接收状态标记	

void USART3_IRQHandler(void)
{
	u8 Res;
	if(USART_GetITStatus(USART3, USART_IT_RXNE) != RESET) //接收中断
	{
		Res =USART_ReceiveData(USART3);	//读取接收到的数据
	
		USART_RX_BUF_FX[USART_RX_STA_FX]=Res;   //存储风速数据
		
		USART_RX_STA_FX++;
		if(USART_RX_STA_FX==9)
			USART_RX_STA_FX=0;
		
		if(USART_RX_STA_FX>=200)            //如果接收数据数组索引大于等于200，防止溢出就标记为0
			USART_RX_STA_FX=0;
	}
}


