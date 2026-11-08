#ifndef __mylcd_H
#define __mylcd_H
#include "stm32f4xx_hal.h"
#include "lcd.h"
#include "lcd_init.h"
#include "main.h"
#include "GPS.h" 
void normal(void);
void Fall(void);
void med_a(void);
void med_b(void);
void med_c(void);
void med_d(void);
void med_e(void);

extern  GT_U8_GPS_t my_gps_data;              // 全局 GPS 数据结构体
#endif 

