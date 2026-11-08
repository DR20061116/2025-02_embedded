////网络协议层头文件
#include "onenet.h"                

////网络设备头文件
#include "esp8266.h"

////外围模块头文件
#include "delay.h"
#include "sys.h"
#include "usart.h"
#include "key.h"
#include "jcon.h"
#include "oled.h"
#include "dht11.h"
#include "adc.h"
#include "adcsensor.h"
//C库
#include <string.h>
#include <stdio.h>
#define LED_DURATION 1000 //定义计数次数
#define ESP8266_ONENET_INFO		"AT+CIPSTART=\"TCP\",\"mqtts.heclouds.com\",1883\r\n"    //云平台访问API接口

u8 temp,hum;                  //t1 h1
u8 temp_H=25,temp_L=10,hum_H=50,hum_L=10;	//t2 t3 h2 h3
u16 pm25;											//p1
u16 pm25_H=800,pm25_L=0;						//p2 p3
u16 light;										//l1
u16 light_H=80,light_L=10;					//l2 l3
u16 co2;											//c1
u16 co2_H=60,co2_L=1;							//c2 c3
u16 tvoc;											//o1
u16 tvoc_H=600,tvoc_L=10;						//o2 o3

int main(void)
{	
	unsigned short timeCount = 0;	//发送间隔变量
	unsigned char *dataPtr = NULL;
	
	delay_init();	
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2); 	   //设置NVIC中断分组2:2位抢占优先级，2位响应优先级
	OLED_Init();		//OLED屏幕初始化
	OLED_Clear();		//OLED清屏
	DHT11_Init();		//温湿度传感器初始化
	Sensor_Init();	//光敏传感器 mq4 甲醛传感器初始化
	BEEP_Init();		//蜂鸣器初始化
	Usart2_Init(9600);	//pm25传感器串口初始化
	
	OLED_Clear();
	OLED_ShowPrintf(0,0,16,"WIFI...");
	OLED_Refresh_Gram();
	
	Usart1_Init(115200);       //WIFI通信串口初始化
	ESP8266_Init();            //连接WIFI

	while(ESP8266_SendCmd(ESP8266_ONENET_INFO, "CONNECT"))    //登录onenet
	delay_ms(500);

	while(OneNet_DevLink())			                          //接入OneNET
	{
		ESP8266_SendCmd(ESP8266_ONENET_INFO, "CONNECT");
		delay_ms(500);
	}
	OneNET_Subscribe();        //订阅云端 接收数据
	//需要等待5秒左右才会执行主循环
	
	OLED_Clear();
	OLED_ShowPrintf(0,0,16,"WIFI suc");
	OLED_Refresh_Gram();
	
	
	
	while(1)
	{
		DHT11_Read_Data(&temp,&hum);		//读取温湿度
		PM25_ReadData();								//读取PM25
		pm25=PM25_Value;								//赋值PM25
		light=LightSensor_GetValue();		//读取光照强度
		co2=MQ4Sensor_GetValue();				//读取二氧化碳
		tvoc=HCHOSensor_GetPPM();				//读取甲醛
		
		//OLED显示
		OLED_Clear();
		OLED_ShowString(0,0,(u8*)"T:",16);OLED_ShowNum(30,0,temp,2,16);
		OLED_ShowString(60,0,(u8*)"H:",16);OLED_ShowNum(90,0,hum,2,16);
		OLED_ShowString(0,16,(u8*)"L:",16);OLED_ShowNum(30,16,light,2,16);
		OLED_ShowString(60,16,(u8*)"C:",16);OLED_ShowNum(90,16,co2,2,16);
		OLED_ShowString(0,32,(u8*)"P:",16);OLED_ShowNum(20,32,pm25,5,16);
		OLED_ShowString(0,48,(u8*)"O:",16);OLED_ShowNum(20,48,tvoc,5,16);
		OLED_Refresh_Gram();
		
		//报警判断
		if(temp>temp_H||hum>hum_H||light>light_H||co2>co2_H||tvoc>tvoc_H||pm25>pm25_H||
			temp<temp_L||hum<hum_L||light<light_L||co2<co2_L||tvoc<tvoc_L||pm25<pm25_L)
			BEEP=1;
		else
			BEEP=0;
		
		
		if(++timeCount >= 50)									//发送间隔5s   发送数据到云平台
		{
			OneNet_SendData();									//发送数据
			timeCount = 0;
			ESP8266_Clear();             //清除ESP8266缓存
		}
		
		//解析接收来自云平台的数据
		dataPtr = ESP8266_GetIPD(0);
		if(dataPtr != NULL)
		{
			OneNet_RevPro(dataPtr);
		}
		
		delay_ms(5);
	}
}



