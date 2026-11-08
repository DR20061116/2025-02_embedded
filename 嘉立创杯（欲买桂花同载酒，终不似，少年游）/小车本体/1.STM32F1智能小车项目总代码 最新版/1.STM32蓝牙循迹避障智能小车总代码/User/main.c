#include "stm32f10x.h"                  // 设备头文件
#include "Delay.h"
#include "LED.h"
#include "TIM3_PWM.h"
#include "MOTOR.h"
#include "OLED.h"
#include "USART1.h"
#include "Servo.h"
#include "HCSR04.h"
#include "mycontrol.h"
#include "Trace.h"

// 外部变量声明
extern u8 RxData;                    // 蓝牙串口接收数据（USART1.c）
extern int Trace_Error;              // 循迹偏差值（Trace.c）
extern int PID_Out;                  // PID输出值（Trace.c）
uint16_t HCSR04_Distance = 0;       // 超声波测距变量

int main(void)
{
	// 全局中断分组配置
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);

	// 1. 电机PWM与GPIO初始化（TB6612驱动）
	TIM3_PWM_Init(7199,1);    // 5KHz PWM输出
	MOTOR_GPIO_Init();        // 电机正反转控制引脚初始化
	
	// 2. 状态指示灯初始化
	LED_Init();              
	
	// 3. OLED显示屏初始化
	OLED_Init();          
	OLED_ColorTurn(0);        // 正常显示
	OLED_DisplayTurn(0);      // 屏幕不翻转
	OLED_Clear();             // 清空屏幕缓存
	// 开机界面
	OLED_ShowString(0,0,"Car Running",16,1);
	OLED_ShowString(0,16,"U1-RX:",16,1);
	OLED_ShowString(0,32,"Distance:",16,1);
	OLED_ShowString(80,32,"cm",16,1);
	OLED_ShowString(0,48,"Tra-Err:",16,1);
	OLED_Refresh();           // 刷新屏幕
	
	// 4. 蓝牙串口初始化
	USART1_Init(9600);
	
	// 5. 舵机初始化
	myServo_Init(1999,719);        
	Servo_SetAngle(90);            // 舵机回正
	
	// 6. 超声波模块初始化
	HCSR04_Init();      
	
	// 7. 八路循迹模块初始化
	Trace_Init();
	
	// 主循环
	while(1)
	{
		// 蓝牙指令解析
		switch(RxData)
		{
			case 0x00:
				Set_Car_Speed(0,0);                // 停车
				HCSR04_Distance = HCSR04_GetValue(); // 刷新测距数据
				break;
			
			
			
			case 0x01:
				Set_Car_Speed(6500,6500);          // 直行
				break;
			case 0x02:
				Set_Car_Speed(-6500,-6500);        // 后退
				break;
			case 0x03:
				Set_Car_Speed(-6500,6500);         // 左转
				break;
			case 0x04:
				Set_Car_Speed(6500,-6500);         // 右转
				break;
			case 0x05:
				Avoidance();                       // 超声波避障
				break;
			case 0x06:
				Trace_task();                      // PID循迹
				break;
			
			case 0x07:
				Set_Car_Speed(3500,3500);                      // 小前进
				break;
			case 0x08:
				Set_Car_Speed(-3500,-3500);                      // 小后退
				break;		
			case 0x09:
				Set_Car_Speed(3500,6500);                      // 左前进
				break;		
			case 0x10:
				Set_Car_Speed(6500,3500);                      // 右前进
				break;
			case 0x11:
				Set_Car_Speed(-3500,3500);         // 慢速左转
				break;
			case 0x12:
				Set_Car_Speed(3500,-3500);         // 慢速右转
				break;
			case 0x13:
				Set_Car_Speed(-3500,-6500);                      // 左后退
				break;		
			case 0x14:
				Set_Car_Speed(-6500,-3500);                      // 右后退
				break;
			
			
			default:
				Set_Car_Speed(0,0);                // 无效指令停车保护
				RxData = 0x00;                     // 重置接收标志
				break;
		}
		
		// OLED数据刷新：替换为兼容的无符号函数，手动处理符号
		OLED_ShowNum(48,16, RxData, 2,16,1);
		OLED_ShowNum(80,32, HCSR04_Distance, 3,16,1);
		
		// 处理循迹偏差正负显示，兼容OLED_ShowNum
		if(Trace_Error < 0)
		{
			OLED_ShowString(48,48,"-",16,1);
			// 取绝对值显示数字
			OLED_ShowNum(56,48, -Trace_Error, 2,16,1);
		}
		else
		{
			OLED_ShowString(48,48,"+",16,1);
			OLED_ShowNum(56,48, Trace_Error, 2,16,1);
		}
		OLED_Refresh();
	}
}
