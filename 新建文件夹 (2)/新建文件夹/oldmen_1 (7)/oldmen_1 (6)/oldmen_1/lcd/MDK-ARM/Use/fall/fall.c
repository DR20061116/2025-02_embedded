#include "fall.h"

// ?? main.c ???? sy_Fall ??
extern uint16_t sy_Fall;

static FallState_t current_state = STATE_IDLE;
static uint32_t timer_cnt = 0;

// ??????(?????????????????)
// ????????,????????????????
static float initial_roll = 118.0f;  
static float initial_pitch = 15.0f;

/**
 * @brief ?????????? SVM
 */
static float Calculate_SVM(float x, float y, float z) {
    return sqrtf(x*x + y*y + z*z);
}

/**
 * @brief ????????
 */
FallState_t Fall_Detect_Update(SensorData_t data) {
    float svm = Calculate_SVM(data.acc_x, data.acc_y, data.acc_z);

    switch (current_state) {
        case STATE_IDLE:
            if (svm < SVM_THRESHOLD_LOW) {
                current_state = STATE_FREEFALL;
                timer_cnt = 0;
            } else if (svm > SVM_THRESHOLD_HIGH) {
                current_state = STATE_IMPACT;
                timer_cnt = 0;
            }
            break;

        case STATE_FREEFALL:
            timer_cnt++;
            if (svm > SVM_THRESHOLD_HIGH) {
                current_state = STATE_IMPACT;
                timer_cnt = 0;
            } else if (timer_cnt > 50) { 
                current_state = STATE_IDLE;
            }
            break;

case STATE_IMPACT:
            timer_cnt++;
            // ???? 50 ???,?????(??)????
            if (timer_cnt > 50) { 
                // 1. ????????????????? (Delta)
                float d_roll  = data.roll - initial_roll;
                float d_pitch = data.pitch - initial_pitch;
                
                // ?????? ±180 ????? (???? -180 ~ +180 ??)
                while (d_roll > 180.0f)  d_roll -= 360.0f;
                while (d_roll < -180.0f) d_roll += 360.0f;
                
                while (d_pitch > 180.0f)  d_pitch -= 360.0f;
                while (d_pitch < -180.0f) d_pitch += 360.0f;

                // ????????“??????????????”
                float abs_d_roll  = fabsf(d_roll);
                float abs_d_pitch = fabsf(d_pitch);
                
                // ?? Roll ? Pitch ???????,?????
                if (abs_d_roll > POSTURE_CHANGE_THRE || abs_d_pitch > POSTURE_CHANGE_THRE) {
                    
                    // 2. ?????????????,?????????
                    // ??:??? 30.0f ? 40.0f ?????,???????????????
                    
                    if (d_pitch < -30.0f) {
                        // Pitch ????(????)
                        current_state = STATE_FALLEN_FORWARD;
                        sy_Fall = 1; // ???
                    } 
                    else if (d_pitch > 30.0f) {
                        // Pitch ????(????)
                        current_state = STATE_FALLEN_BACKWARD;
                        sy_Fall = 3; // ???
                    } 
                    else if (abs_d_roll > 40.0f) {
                        // ?? Pitch ????,? Roll ???????
                        current_state = STATE_FALLEN_SIDE;
                        sy_Fall = 2; // ???
                    } 
                    else {
                        // ??????
                        current_state = STATE_FALLEN_UNKNOWN;
                        sy_Fall = 4; // ??/????
                    }
                } else {
                    // ????????(?????????????)
                    current_state = STATE_IDLE; 
                    sy_Fall = 0;
                }
                timer_cnt = 0; // ?????
            }
            break;
    }

    return current_state;
}

void Fall_Reset(void) {
    current_state = STATE_IDLE;
    timer_cnt = 0;
    sy_Fall = 0; // ?????
}