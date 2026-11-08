#include "GPS.h"
#include <string.h>
#include <stdlib.h>

// 内部安全分割字段函数：处理 ,, 空字段的情况
static char* next_field(char **s) {
    char *start = *s;
    if (!start) return NULL;
    
    char *end = strchr(start, ',');
    if (end) {
        *end = '\0';
        *s = end + 1;
    } else {
        // 尝试寻找行尾校验和标志 '*'
        end = strchr(start, '*');
        if (end) {
            *end = '\0';
        }
        *s = NULL;
    }
    return start;
}

/**
 * @brief  解析 GT-U8 的 RMC 语句
 * @param  line: 接收到的单行 NMEA 字符串
 * @param  gps: 存储解析结果的结构体指针
 */
void GT_U8_Parse(char *line, GT_U8_GPS_t *gps) {
    // 兼容标准GPS($GPRMC)和多模GNSS($GNRMC)
    if (strstr(line, "RMC") == NULL) return; 

    char *p = strchr(line, ',');
    if (!p) return;
    p++; // 跳过报头（如 $GPRMC, ）

    // 1. UTC时间字段 (hhmmss.ss)
    char *t_field = next_field(&p);
    if (t_field && strlen(t_field) >= 6) {
        char tmp[3] = {0};
        strncpy(tmp, t_field, 2);     gps->hour = atoi(tmp);
        strncpy(tmp, t_field + 2, 2); gps->minute = atoi(tmp);
        strncpy(tmp, t_field + 4, 2); gps->second = atoi(tmp);
    }

    // 2. 定位状态字段 (A=有效，V=无效)
    char *status_field = next_field(&p);
    if (status_field && status_field[0] == 'A') {
        gps->is_valid = 1;
    } else {
        gps->is_valid = 0;
        return; // 如果定位无效，后面的经纬度不可信，直接返回
    }

    // 3. 纬度字段 (ddmm.mmmm)
    char *lat_field = next_field(&p);
    if (lat_field && strlen(lat_field) > 0) {
        double raw_lat = atof(lat_field);
        int degrees = (int)(raw_lat / 100);
        double minutes = raw_lat - (degrees * 100);
        gps->latitude = degrees + (minutes / 60.0); // 转换为度
    }

    // 4. 南北纬指示
    char *lat_dir_field = next_field(&p);
    if (lat_dir_field) gps->lat_dir = lat_dir_field[0];

    // 5. 经度字段 (dddmm.mmmm)
    char *lon_field = next_field(&p);
    if (lon_field && strlen(lon_field) > 0) {
        double raw_lon = atof(lon_field);
        int degrees = (int)(raw_lon / 100);
        double minutes = raw_lon - (degrees * 100);
        gps->longitude = degrees + (minutes / 60.0); // 转换为度
    }

    // 6. 东西经指示
    char *lon_dir_field = next_field(&p);
    if (lon_dir_field) gps->lon_dir = lon_dir_field[0];

    // 7. 地面速率 (跳过)
    next_field(&p);
    // 8. 地面航向 (跳过)
    next_field(&p);

    // 9. UTC日期字段 (ddmmyy)
    char *date_field = next_field(&p);
    if (date_field && strlen(date_field) == 6) {
        char tmp[3] = {0};
        strncpy(tmp, date_field, 2);     gps->day = atoi(tmp);
        strncpy(tmp, date_field + 2, 2); gps->month = atoi(tmp);
        strncpy(tmp, date_field + 4, 2); gps->year = atoi(tmp);
    }
}
