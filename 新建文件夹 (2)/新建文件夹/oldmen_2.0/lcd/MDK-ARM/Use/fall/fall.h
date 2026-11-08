#ifndef __FALL_H
#define __FALL_H

#include "stdint.h"
#include "math.h"

// ?????????? (????????,??????)
typedef struct {
    float acc_x;
    float acc_y;
    float acc_z;
    float roll;
    float pitch;
    float yaw;
} SensorData_t;

// ???????
typedef enum {
    STATE_IDLE = 0,
    STATE_FREEFALL,
    STATE_IMPACT,
    STATE_FALLEN_FORWARD,   // ???
    STATE_FALLEN_SIDE,      // ??
    STATE_FALLEN_BACKWARD,  // ???
    STATE_FALLEN_UNKNOWN    // ??????
} FallState_t;

// ... ???????? (SVM_THRESHOLD_LOW ?)
#define SVM_THRESHOLD_LOW      0.4f
#define SVM_THRESHOLD_HIGH     2.0f
#define POSTURE_CHANGE_THRE    30.0f  // ??????

FallState_t Fall_Detect_Update(SensorData_t data);
void Fall_Reset(void);

#endif