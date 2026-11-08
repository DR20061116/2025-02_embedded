#ifndef __GPS_H
#define __GPS_H

#include "stm32f4xx_hal.h" // 根据您的MCU型号修改，如 stm32f4xx_hal.h
#include <stdint.h>

// GPS 数据结构体
typedef struct {
    uint8_t hour;         // 时 (UTC时间)
    uint8_t minute;       // 分
    uint8_t second;       // 秒
    uint8_t day;          // 日
    uint8_t month;        // 月
    uint8_t year;         // 年 (后两位，如26代表2026年)
    
    double latitude;      // 纬度 (转换后的十进制角度，如 31.2304)
    double longitude;     // 经度 (转换后的十进制角度，如 121.4737)
    char lat_dir;         // 南北纬: 'N' 或 'S'
    char lon_dir;         // 东西经: 'E' 或 'W'
    
    uint8_t is_valid;     // 定位是否有效: 1=有效, 0=无效
	  uint8_t bj_hour; 
    uint8_t bj_day;
} GT_U8_GPS_t;

// 函数声明
void GT_U8_Init(void);
void GT_U8_Parse(char *line, GT_U8_GPS_t *gps);

#endif 
