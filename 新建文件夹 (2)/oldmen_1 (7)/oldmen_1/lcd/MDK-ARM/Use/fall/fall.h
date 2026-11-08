#ifndef __FALL_H
#define __FALL_H

#include <math.h>
#include <stdint.h>
#include <stdbool.h>

// 跌倒检测参数定义 (根据实际佩戴情况微调)
#define SVM_THRESHOLD_HIGH   2.8f    // 撞击阈值 (g)
#define SVM_THRESHOLD_LOW    0.4f    // 失重阈值 (g)
#define STILL_THRESHOLD      0.15f   // 静止判定阈值 (波动范围)
#define POSTURE_CHANGE_THRE  45.0f   // 姿态改变阈值 (角度)

typedef enum {
    STATE_IDLE = 0,     // 正常状态
    STATE_FREEFALL,     // 检测到失重
    STATE_IMPACT,       // 检测到撞击
    STATE_POTENTIAL,    // 疑似跌倒，等待姿态确认
    STATE_FALLEN        // 确认跌倒
} FallState_t;

typedef struct {
    float acc_x, acc_y, acc_z;
    float roll, pitch, yaw;
} SensorData_t;

// 函数声明
FallState_t Fall_Detect_Update(SensorData_t data);
void Fall_Reset(void);

#endif

