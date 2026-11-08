/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
  ******************************************************************************
  * @attention
  *
  * Copyright (c) 2026 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  ******************************************************************************
  */
/* USER CODE END Header */
/* Includes ------------------------------------------------------------------*/
#include "main.h"
#include "dma.h"
#include "i2c.h"
#include "tim.h"
#include "usart.h"
#include "gpio.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
#include "Com_debug.h"
#include "Delay.h"
#include "jy901s.h"
#include "GPS.h"
#include "LORA.h"
#include "Buzzer.h"
#include "Int_led.h"
#include "GY906.h"
#include "lcd.h"
#include "lcd_init.h"
#include "fall.h"
#include "mylcd.h"
#include "Ask.h"
#include "max30102.h"
#include "spo2_algorithm.h"
#include "Key.h"
#include "uart_receiver.h"  
/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */

/* 全局变量定义 --------------------------------------------------------------*/

extern I2C_HandleTypeDef hi2c1; 
uint32_t raw_red = 0;
uint32_t raw_ir  = 0;

float my_heart_rate = 0.0f;
float my_spo2       = 0.0f;

uint32_t last_calc_time = 0;



uint16_t sy_Fall=0;

uint8_t g_usart2_receivedata=0;
uint8_t rx_tmp;
char rxdatabufer;
uint16_t point1 = 0;

#define GPS_REC_LEN 128
char gps_rx_byte;                    
char gps_line_buffer[GPS_REC_LEN];   
uint8_t gps_buf_idx = 0;             
uint8_t gps_line_ready = 0;          
GT_U8_GPS_t my_gps_data;              
extern  GT_U8_GPS_t my_gps_data;            

SensorData_t current_sensor_data;

Button_t myBtn;
Button_t myBtn2;        // <-- 新增：PD7 按键结构体
uint8_t Test_Key;
void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart)
{
	    if(huart==&huart2 )
       {
       jy61p_ReceiveData (g_usart2_receivedata);
	     HAL_UART_Receive_IT(&huart2, &g_usart2_receivedata, 1); 
       }	
	     
			 
			 
			 
			  if(huart->Instance == USART3)  
    {
          if (gps_rx_byte == '\n') {   
            gps_line_buffer[gps_buf_idx] = '\0';
            gps_line_ready = 1;      
            gps_buf_idx = 0;        
        } else if (gps_rx_byte != '\r') { 
            if (gps_buf_idx < GPS_REC_LEN - 1) {
                gps_line_buffer[gps_buf_idx++] = gps_rx_byte;
            } else {
                gps_buf_idx = 0;    
            }
        }
      
        HAL_UART_Receive_IT(&huart3, (uint8_t *)&gps_rx_byte, 1);
    }  	
}


void My_Action(void) 
{
  sy_Fall=1;
}
extern uint8_t fall_screen_init_flag;
extern uint8_t lock_med_a, lock_med_b, lock_med_c, lock_med_d, lock_med_e;
void My_Action2(void) 
{
    printf("Button 2 Pressed! System Resetting...\r\n"); 
    
    // 1. 复位核心状态标志
    sy_Fall = 0; 
    g_slave_data.sos_flag = 0;
    g_slave_data.medicine_id = 0;
    g_slave_data.new_phone_flag = 0;
    
//    // 2. 【核心修复】复位 LCD 屏幕首次加载锁
    fall_screen_init_flag = 0; 
    lock_med_a = 0;
    lock_med_b = 0;
    lock_med_c = 0;
    lock_med_d = 0;
    lock_med_e = 0;
    
    // 3. 关闭紧急硬件报警
    WS2812_Send(0, 0, 0);  // 关闭彩色LED
    Buzzer_Stop();         // 关闭蜂鸣器
    
    // 4. 恢复屏幕为正常显示状态
    normal(); 
    
    // 清除屏幕上残留的电话号码
    LCD_Fill(69, 100, 61 + 64, 100 + 16, WHITE); 
}
/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */
#define POWER_SAVE_STILL_TIME_MS       (60UL * 1000UL)
#define POWER_SAVE_PPG_INVALID_MS      (30UL * 1000UL)
#define POWER_SAVE_STILL_DELTA_G       0.15f
#define POWER_SAVE_WAKE_DELTA_G        0.25f
#define POWER_SAVE_LOOP_DELAY_MS       200U

/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/

/* USER CODE BEGIN PV */
static uint8_t power_save_mode = 0;
static uint8_t power_save_acc_ready = 0;
static uint32_t power_save_still_start_tick = 0;
static uint32_t last_ppg_valid_tick = 0;
static float power_save_ref_acc_x = 0.0f;
static float power_save_ref_acc_y = 0.0f;
static float power_save_ref_acc_z = 0.0f;
static float power_save_sleep_acc_x = 0.0f;
static float power_save_sleep_acc_y = 0.0f;
static float power_save_sleep_acc_z = 0.0f;
static GPIO_PinState power_save_key8_idle = GPIO_PIN_SET;
static GPIO_PinState power_save_key9_idle = GPIO_PIN_SET;

/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
/* USER CODE BEGIN PFP */
static void Power_Save_Update(uint32_t now_tick);
static void Power_Save_Enter(void);
static void Power_Save_Exit(void);
static void Power_Save_IdleWait(uint32_t wait_ms);
static uint8_t Power_Save_IsBlocked(void);
static uint8_t Power_Save_KeyActive(void);
static uint8_t Power_Save_AlarmKeyActive(void);
static float Power_Save_Abs(float value);
static float Power_Save_AccelDelta(float ref_x, float ref_y, float ref_z);

/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */
static float Power_Save_Abs(float value)
{
    return (value < 0.0f) ? -value : value;
}

static float Power_Save_AccelDelta(float ref_x, float ref_y, float ref_z)
{
    return Power_Save_Abs(AccX - ref_x) + Power_Save_Abs(AccY - ref_y) + Power_Save_Abs(AccZ - ref_z);
}

static uint8_t Power_Save_IsBlocked(void)
{
    return (sy_Fall != 0 ||
            g_slave_data.sos_flag != 0 ||
            g_slave_data.medicine_id != 0 ||
            g_slave_data.new_phone_flag != 0);
}

static uint8_t Power_Save_KeyActive(void)
{
    return (HAL_GPIO_ReadPin(GPIOD, GPIO_PIN_8) != power_save_key8_idle ||
            HAL_GPIO_ReadPin(GPIOD, GPIO_PIN_9) != power_save_key9_idle);
}

static uint8_t Power_Save_AlarmKeyActive(void)
{
    return (HAL_GPIO_ReadPin(GPIOD, GPIO_PIN_8) != power_save_key8_idle);
}

static void Power_Save_Enter(void)
{
    if (power_save_mode != 0) {
        return;
    }

    power_save_mode = 1;
    power_save_sleep_acc_x = AccX;
    power_save_sleep_acc_y = AccY;
    power_save_sleep_acc_z = AccZ;

    Buzzer_Stop();
    WS2812_Send(0, 0, 0);
    MAX30102_Shutdown(&hi2c1);
    HAL_UART_AbortReceive(&huart3);
    HAL_UART_DeInit(&huart3);
    gps_buf_idx = 0;
    gps_line_ready = 0;
    LCD_Sleep();
}

static void Power_Save_Exit(void)
{
    if (power_save_mode == 0) {
        return;
    }

    power_save_mode = 0;
    MX_USART3_UART_Init();
    HAL_UART_Receive_IT(&huart3, (uint8_t *)&gps_rx_byte, 1);
    MAX30102_Init(&hi2c1);
    LCD_Wake();
    normal();
    last_calc_time = HAL_GetTick();
}

static void Power_Save_Update(uint32_t now_tick)
{
    uint8_t blocked = Power_Save_IsBlocked();

    if (power_save_acc_ready == 0) {
        power_save_acc_ready = 1;
        power_save_ref_acc_x = AccX;
        power_save_ref_acc_y = AccY;
        power_save_ref_acc_z = AccZ;
        power_save_still_start_tick = now_tick;
        return;
    }

    if (power_save_mode != 0) {
        if (blocked != 0 || Power_Save_KeyActive() != 0 || Power_Save_AccelDelta(power_save_sleep_acc_x, power_save_sleep_acc_y, power_save_sleep_acc_z) > POWER_SAVE_WAKE_DELTA_G) {
            if (Power_Save_AlarmKeyActive() != 0) {
                My_Action();
            }
            Power_Save_Exit();
            power_save_ref_acc_x = AccX;
            power_save_ref_acc_y = AccY;
            power_save_ref_acc_z = AccZ;
            power_save_still_start_tick = now_tick;
        }
        return;
    }

    if (blocked != 0 || Power_Save_AccelDelta(power_save_ref_acc_x, power_save_ref_acc_y, power_save_ref_acc_z) > POWER_SAVE_STILL_DELTA_G) {
        power_save_ref_acc_x = AccX;
        power_save_ref_acc_y = AccY;
        power_save_ref_acc_z = AccZ;
        power_save_still_start_tick = now_tick;
        return;
    }

    if ((now_tick - power_save_still_start_tick) >= POWER_SAVE_STILL_TIME_MS &&
        (now_tick - last_ppg_valid_tick) >= POWER_SAVE_PPG_INVALID_MS) {
        Power_Save_Enter();
    }
}

static void Power_Save_IdleWait(uint32_t wait_ms)
{
    uint32_t start_tick = HAL_GetTick();

    while (power_save_mode != 0 && (HAL_GetTick() - start_tick) < wait_ms) {
        HAL_PWR_EnterSLEEPMode(PWR_MAINREGULATOR_ON, PWR_SLEEPENTRY_WFI);
        Power_Save_Update(HAL_GetTick());
    }
}

/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void)
{

  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */

  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */

  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  MX_DMA_Init();
  MX_USART1_UART_Init();
  MX_USART2_UART_Init();
  MX_USART3_UART_Init();
  MX_UART4_Init();
  MX_I2C1_Init();
  MX_UART5_Init();
  MX_TIM1_Init();
  /* USER CODE BEGIN 2 */
		
//1.Log output & print
// debug_printf("hello world");

  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
	 Delay_Init();
   HAL_UART_Receive_IT(&huart2, &g_usart2_receivedata, 1);	 
   HAL_UART_Receive_IT(&huart3, (uint8_t *)&gps_rx_byte, 1);
	 UART_Receiver_Init(&huart4); 
	 WS2812_Init();
	 MAX30102_Init(&hi2c1);
	 Button_Init(&myBtn, GPIOD, GPIO_PIN_8);
	 Button_Init(&myBtn2, GPIOD, GPIO_PIN_9);
	 power_save_key8_idle = HAL_GPIO_ReadPin(GPIOD, GPIO_PIN_8);
	 power_save_key9_idle = HAL_GPIO_ReadPin(GPIOD, GPIO_PIN_9);
	 LCD_Init();
   normal();
   last_ppg_valid_tick = HAL_GetTick();
  while (1)
  {
Power_Save_Update(HAL_GetTick());
if (power_save_mode != 0)
{
    Button_Process(&myBtn, My_Action);
    Button_Process(&myBtn2, My_Action2);
    Power_Save_IdleWait(POWER_SAVE_LOOP_DELAY_MS);
    continue;
}

if (g_slave_data.sos_flag == 1) 
    {
       sy_Fall=1;
        //printf("[Main Loop] 开始处理 SOS 对应的紧急硬件动作...\r\n");
        g_slave_data.sos_flag = 0; // 处理完记得清零
    }

    // 检测是否有药物分发指令
    if (g_slave_data.medicine_id != 0 && sy_Fall == 0) 
   {
    uint8_t current_med = g_slave_data.medicine_id;
    
    switch (current_med) 
     {
        case 0x01:
        case '1':
        case 'A':
        case 'a':
        case 0x0A: med_a();    UART_Protocol_SendCmd(0x01); HAL_Delay(100); UART_Protocol_SendMode(0x03);break;
        case 0x02:
        case '2':
        case 'B':
        case 'b':
        case 0x0B: med_b();    UART_Protocol_SendCmd(0x02); HAL_Delay(100);UART_Protocol_SendMode(0x04);break;
        case 0x03:
        case '3':
        case 'C':
        case 'c':
        case 0x0C: med_c();    UART_Protocol_SendCmd(0x03); HAL_Delay(100);UART_Protocol_SendMode(0x05);break;
        case 0x04:
        case '4':
        case 'D':
        case 'd':
        case 0x0D: med_d();    UART_Protocol_SendCmd(0x04); HAL_Delay(100);UART_Protocol_SendMode(0x06);break;
        case 0x05:
        case '5':
        case 'E':
        case 'e':
        case 0x0E: med_e();    UART_Protocol_SendCmd(0x05); HAL_Delay(100);UART_Protocol_SendMode(0x07);break;
        default:
            //printf("[Main Action] 警告：收到了未知的药丸编码: 0x%02X\r\n", current_med);
            break;
     }
     g_slave_data.medicine_id = 0; // 处理完记得清零
    }

    // 检测是否收到了新电话
    if (g_slave_data.new_phone_flag == 1) 
    {
        //printf("[Main Loop] 准备调用拨号模块呼叫号码: %s...\r\n", g_slave_data.phone_num);
       LCD_Fill(69, 100, 61 + 64, 100 + 16, WHITE); 
    LCD_ShowString(69, 100, (const uint8_t*)g_slave_data.phone_num, RED, WHITE, 16, 0);
        g_slave_data.new_phone_flag = 0; 
    }

//3.JY901S
//      debug_printf("Roll:\n%f", Roll);
//		  debug_printf("Pitch:\n%f", Pitch);
//		  debug_printf("Yaw:\n%f", Yaw);
//			debug_printf("AccX:\n%f", AccX);
//		  debug_printf("AccY:\n%f", AccY);
//		  debug_printf("AccZ:\n%f", AccZ);
		
//4.GPS		
	if (gps_line_ready) 
		{
            // ��ʼ����
            GT_U8_Parse(gps_line_buffer, &my_gps_data);
            LCD_Fill(0, 0, 120, 16, WHITE);
            // ��ӡ�������
            if (my_gps_data.is_valid) {
                // 1. ת������ʱ�� (UTC + 8)
                int bj_hour = my_gps_data.hour + 8;
                int bj_day = my_gps_data.day;
                if (bj_hour >= 24) {
                    bj_hour -= 24;
                    bj_day += 1; // ����+1�죬δ������£��������Թ۲�
                }
                // ��ӡ������ʱ�� (��ʽ��2026-05-24 08:30:15)
//                printf("Date/Time: 20%02d-%02d-%02d %02d:%02d:%02d (Beijing)\r\n", 
//                        my_gps_data.year, my_gps_data.month, bj_day,
//                        bj_hour, my_gps_data.minute, my_gps_data.second);
//                
//                printf("Latitude:  %.6f %c\r\n", my_gps_data.latitude, my_gps_data.lat_dir);
//                printf("Longitude: %.6f %c\r\n", my_gps_data.longitude, my_gps_data.lon_dir);
//                printf("-----------------------\r\n");
								LCD_ShowGPS_DateTime_NonTransparent(0, 0, 5, bj_day, bj_hour, my_gps_data.minute, RED, WHITE, 16);
            } else {
                // �����λ��Ч����ʾ��������
//                printf("[GPS] Searching for satellites... (Invalid Data)\r\n");
							LCD_ShowString(0,0,"GPS Finding...",RED,BLUE,16,1);//��ʾ�ַ���	
            }
            gps_line_ready = 0;
        }
		
				
//5.Buzzer
//		Buzzer_Start();		
//		Buzzer_Stop();
 
				
//6.LED
//    Int_led_rainbow(20);
//		Int_led_blink(LED_RED, 1000);

				
//7.GY906
static float current_temp = 0.0f; 
current_temp = SMBus_ReadTemp(); 
if (sy_Fall == 0)
{
    LCD_ShowFloatNum1(33, 70, current_temp, 4, BLACK, WHITE, 16);
}
UART_Protocol_SendTemp(current_temp);
		
				
//8.fall
        current_sensor_data.acc_x = AccX; 
        current_sensor_data.acc_y = AccY;
        current_sensor_data.acc_z = AccZ;
        current_sensor_data.roll  = Roll;
        current_sensor_data.pitch = Pitch;
        current_sensor_data.yaw   = Yaw;
        FallState_t status = Fall_Detect_Update(current_sensor_data);
        switch (status) 
					{
            case STATE_FREEFALL:
               //debug_printf("kaishishizhong"); // 可以在这里点亮一个黄色 LED，提示检测到失重
                break;
                
            case STATE_IMPACT:
                // 检测到剧烈撞击
                //printf("Impact detected! Checking posture...\r\n");
                break;

            case STATE_FALLEN:
						    sy_Fall=1;
           break;
            default:
                break;
        }
					
//9.MAX30102
// 1. 尽可能快地去读取 FIFO 数据 (让芯片内部的100Hz采样数据及时吐出来)
        if (MAX30102_Read_FIFO(&hi2c1, &raw_red, &raw_ir)) {
            
            // 将原始数据塞入算法缓冲区
            PPG_Data_Push(raw_red, raw_ir);
        }

        // 2. 没必要每一毫秒都去算一次心率，每隔 1 秒钟计算并打印一次结果即可
        if (HAL_GetTick() - last_calc_time >= 1000) {
            last_calc_time = HAL_GetTick();
            
            if (PPG_Calculate(&my_heart_rate, &my_spo2)) {
                if (my_heart_rate > 0 && my_spo2 > 0) {
                    last_ppg_valid_tick = HAL_GetTick();
                    printf(">> heart: %.1f BPM |spo2: %.1f %%\r\n", my_heart_rate, my_spo2);
        if (sy_Fall == 0)
        {
            LCD_ShowIntNum(138, 20, my_spo2, 2, RED, WHITE, 16);
            LCD_ShowIntNum(138, 36, my_heart_rate-10, 2, RED, WHITE, 16);
        }
									
									
                } else {
                    printf(">> finger...\r\n");
                }
            } else {
                printf(">> collegt...\r\n");
            }
        }



//10.LORA
UART4_SendData_DMA(
    my_gps_data.latitude, 
    my_gps_data.lat_dir, 
    my_gps_data.longitude, 
    my_gps_data.lon_dir, 
    current_temp,             // 建议采用上文优化过的当前温度变量
    sy_Fall, 
    (my_heart_rate - 50), 
    my_spo2
);

//11.KEY
Button_Process(&myBtn, My_Action);
Button_Process(&myBtn2, My_Action2); // <-- 新增：轮询处理 PD7 按键状态				
//debug_printf("Test_Key:%d", Test_Key);

//12.Fall
//debug_printf("Test_Key:%d",sy_Fall );
              if(sy_Fall==1)
							{
								
								WS2812_Blink_Process();
    				    Buzzer_Start();
						     Fall();
                //printf("FALL DETECTED! ALARM ACTIVE!\r\n");
							}
							if(sy_Fall==0)
							{
								
								WS2812_Send(0, 0, 0);  
    				    Buzzer_Stop();
                //printf("FALL DETECTED! ALARM ACTIVE!\r\n");
							}
							
							
    /* USER CODE END WHILE */
    HAL_Delay(100);
    /* USER CODE BEGIN 3 */
  }
  /* USER CODE END 3 */
}

/**
  * @brief System Clock Configuration
  * @retval None
  */
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Configure the main internal regulator output voltage
  */
  __HAL_RCC_PWR_CLK_ENABLE();
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);

  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
  RCC_OscInitStruct.HSEState = RCC_HSE_ON;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
  RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
  RCC_OscInitStruct.PLL.PLLM = 4;
  RCC_OscInitStruct.PLL.PLLN = 168;
  RCC_OscInitStruct.PLL.PLLP = RCC_PLLP_DIV2;
  RCC_OscInitStruct.PLL.PLLQ = 4;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }

  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV4;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV2;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5) != HAL_OK)
  {
    Error_Handler();
  }
}

/* USER CODE BEGIN 4 */

/* USER CODE END 4 */

/**
  * @brief  This function is executed in case of error occurrence.
  * @retval None
  */
void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}

#ifdef  USE_FULL_ASSERT
/**
  * @brief  Reports the name of the source file and the source line number
  *         where the assert_param error has occurred.
  * @param  file: pointer to the source file name
  * @param  line: assert_param error line source number
  * @retval None
  */
void assert_failed(uint8_t *file, uint32_t line)
{
  /* USER CODE BEGIN 6 */
  /* User can add his own implementation to report the file name and line number,
     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */
  /* USER CODE END 6 */
}
#endif /* USE_FULL_ASSERT */
