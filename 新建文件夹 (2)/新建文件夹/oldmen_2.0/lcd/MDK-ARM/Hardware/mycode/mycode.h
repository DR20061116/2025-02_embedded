#ifndef MYCODE_H
#define MYCODE_H

#include "main.h"
#include "usart.h"
#include "GPS.h"          // <-- 确保 GT_U8_GPS_t 类型已知
#include <string.h>
#include <stdio.h>
#include <stdarg.h>

/* 在 mycode.c 实现，在 main.c 调用 */
void mycode_init(void);
void mycode_run(void);

/* 在 main.c 的中断回调中调用 */
void ESP8266_RxCpltCallback(void);

/* 外部变量声明 */
extern float my_heart_rate;
extern float my_spo2;
extern uint16_t sy_Fall;
extern GT_U8_GPS_t my_gps_data;
extern float g_current_temp;

#endif
