/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
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
#include "mycode.h"                       // <-- 新增：物联网模块头文件
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

// ---- 物联网需要上报的全局温度变量（原 main 内 static 变量移出）----
float g_current_temp = 0.0f;           // <-- 新增：原 static 变量改为全局

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

    /* USER CODE BEGIN 1 */
    // 新增：USART6 中断转发给 mycode 模块处理
    if (huart->Instance == USART6) {
        ESP8266_RxCpltCallback();       // <-- 新增
    }
    /* USER CODE END 1 */
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
    sy_Fall = 0; 
    g_slave_data.sos_flag = 0;
    g_slave_data.medicine_id = 0;
    g_slave_data.new_phone_flag = 0;
    fall_screen_init_flag = 0; 
    lock_med_a = 0;
    lock_med_b = 0;
    lock_med_c = 0;
    lock_med_d = 0;
    lock_med_e = 0;
    WS2812_Send(0, 0, 0);
    Buzzer_Stop();
    normal(); 
    LCD_Fill(69, 100, 61 + 64, 100 + 16, WHITE); 
}
/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */

/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/
/* USER CODE BEGIN PV */

/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
/* USER CODE BEGIN PFP */

/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */

/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void)
{
  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */

  HAL_Init();
  SystemClock_Config();

  MX_GPIO_Init();
  MX_DMA_Init();
  MX_USART1_UART_Init();
  MX_USART2_UART_Init();
  MX_USART3_UART_Init();
  MX_UART4_Init();
  MX_I2C1_Init();
  MX_UART5_Init();
  MX_TIM1_Init();
  MX_USART6_UART_Init();
  /* USER CODE BEGIN 2 */
		
    Delay_Init();
    HAL_UART_Receive_IT(&huart2, &g_usart2_receivedata, 1);	 
    HAL_UART_Receive_IT(&huart3, (uint8_t *)&gps_rx_byte, 1);
    UART_Receiver_Init(&huart4); 
    WS2812_Init();
    MAX30102_Init(&hi2c1);
    Button_Init(&myBtn, GPIOD, GPIO_PIN_8);
    Button_Init(&myBtn2, GPIOD, GPIO_PIN_9);
    LCD_Init();
    normal();

    // 物联网初始化（连接 Wi-Fi、MQTT、订阅 topic）  <-- 新增
    mycode_init();                         // <-- 新增

  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    if (g_slave_data.sos_flag == 1) 
    {
        sy_Fall=1;
        g_slave_data.sos_flag = 0;
    }

    if (g_slave_data.medicine_id != 0 && sy_Fall == 0) 
    {
        uint8_t current_med = g_slave_data.medicine_id;
        switch (current_med) 
        {
            case 0x0A: med_a(); UART_Protocol_SendCmd(0x01); HAL_Delay(100); UART_Protocol_SendMode(0x03); break;
            case 0x0B: med_b(); UART_Protocol_SendCmd(0x02); HAL_Delay(100); UART_Protocol_SendMode(0x04); break;
            case 0x0C: med_c(); UART_Protocol_SendCmd(0x03); HAL_Delay(100); UART_Protocol_SendMode(0x05); break;
            case 0x0D: med_d(); UART_Protocol_SendCmd(0x04); HAL_Delay(100); UART_Protocol_SendMode(0x06); break;
            case 0x0E: med_e(); UART_Protocol_SendCmd(0x05); HAL_Delay(100); UART_Protocol_SendMode(0x07); break;
            default: break;
        }
        g_slave_data.medicine_id = 0;
    }

    if (g_slave_data.new_phone_flag == 1) 
    {
        LCD_Fill(69, 100, 61 + 64, 100 + 16, WHITE); 
        LCD_ShowString(69, 100, (const uint8_t*)g_slave_data.phone_num, RED, WHITE, 16, 0);
        g_slave_data.new_phone_flag = 0; 
    }

    // GPS 解析
    if (gps_line_ready) 
    {
        GT_U8_Parse(gps_line_buffer, &my_gps_data);
        LCD_Fill(0, 0, 120, 16, WHITE);
        if (my_gps_data.is_valid) {
            int bj_hour = my_gps_data.hour + 8;
            int bj_day = my_gps_data.day;
            if (bj_hour >= 24) { bj_hour -= 24; bj_day += 1; }
            LCD_ShowGPS_DateTime_NonTransparent(0, 0, 5, bj_day, bj_hour, my_gps_data.minute, RED, WHITE, 16);
        } else {
            LCD_ShowString(0,0,"GPS Finding...",RED,BLUE,16,1);
        }
        gps_line_ready = 0;
    }
		
    // GY906 温度读取（使用全局变量）
    g_current_temp = SMBus_ReadTemp();   // <-- 改为赋值给全局变量
    if (sy_Fall == 0)
    {
        LCD_ShowFloatNum1(33, 70, g_current_temp, 4, BLACK, WHITE, 16);
    }
    UART_Protocol_SendTemp(g_current_temp);

    // 跌倒检测
    current_sensor_data.acc_x = AccX; 
    current_sensor_data.acc_y = AccY;
    current_sensor_data.acc_z = AccZ;
    current_sensor_data.roll  = Roll;
    current_sensor_data.pitch = Pitch;
    current_sensor_data.yaw   = Yaw;
    FallState_t status = Fall_Detect_Update(current_sensor_data);
    switch (status) 
    {
        case STATE_FREEFALL: break;
        case STATE_IMPACT:   break;
        case STATE_FALLEN:   sy_Fall=1; break;
        default: break;
    }

    // MAX30102 心率血氧
    if (MAX30102_Read_FIFO(&hi2c1, &raw_red, &raw_ir)) {
        PPG_Data_Push(raw_red, raw_ir);
    }
    if (HAL_GetTick() - last_calc_time >= 1000) {
        last_calc_time = HAL_GetTick();
        if (PPG_Calculate(&my_heart_rate, &my_spo2)) {
            if (my_heart_rate > 0 && my_spo2 > 0) {
                printf(">> heart: %.1f BPM |spo2: %.1f %%\r\n", my_heart_rate, my_spo2);
                if (sy_Fall == 0) {
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

    // LORA 发送
    UART4_SendData_DMA(
        my_gps_data.latitude, my_gps_data.lat_dir,
        my_gps_data.longitude, my_gps_data.lon_dir,
        g_current_temp, sy_Fall,
        (my_heart_rate - 50), my_spo2
    );

    // 按键处理
    Button_Process(&myBtn, My_Action);
    Button_Process(&myBtn2, My_Action2);

    // 跌倒报警处理
    if(sy_Fall==1) {
        WS2812_Blink_Process();
        Buzzer_Start();
        Fall();
    } else {
        WS2812_Send(0, 0, 0);  
        Buzzer_Stop();
    }

    // 物联网数据上报及接收处理（每个主循环都调用）  <-- 新增
    mycode_run();                         // <-- 新增

    /* USER CODE END WHILE */
    HAL_Delay(100);
  }
  /* USER CODE END 3 */
}

// ... SystemClock_Config 等函数保持不变 ...
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
