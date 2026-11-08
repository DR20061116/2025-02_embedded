#include "fall.h"

static FallState_t current_state = STATE_IDLE;
static uint32_t timer_cnt = 0;

// 记录初始姿态（建议在设备开机且佩戴正常时记录一次）
static float initial_roll = -63.0f;  // 根据你提供的数据初始值
static float initial_pitch = 13.0f;

/**
 * @brief 计算合加速度向量幅值 SVM
 */
static float Calculate_SVM(float x, float y, float z) {
    return sqrtf(x*x + y*y + z*z);
}

/**
 * @brief 跌倒检测核心算法 (周期性调用，建议 20ms-50ms 一次)
 * @return 当前检测状态
 */
FallState_t Fall_Detect_Update(SensorData_t data) {
    float svm = Calculate_SVM(data.acc_x, data.acc_y, data.acc_z);

    switch (current_state) {
        case STATE_IDLE:
            // 1. 检测失重或突然的高加速度
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
            } else if (timer_cnt > 50) { // 超时未撞击，复位 (约1秒)
                current_state = STATE_IDLE;
            }
            break;

        case STATE_IMPACT:
            timer_cnt++;
            // 撞击后等待 1 秒，让传感器数据稳定
            if (timer_cnt > 50) { 
                // 2. 检查姿态是否改变 (这里判断 Roll 或 Pitch 的偏移量)
                float d_roll  = fabsf(data.roll - initial_roll);
                float d_pitch = fabsf(data.pitch - initial_pitch);
                
                if (d_roll > POSTURE_CHANGE_THRE || d_pitch > POSTURE_CHANGE_THRE) {
                    current_state = STATE_FALLEN;
                } else {
                    current_state = STATE_IDLE; // 只是震动，姿态没变
                }
                timer_cnt = 0;
            }
            break;

        case STATE_FALLEN:
            // 此时应触发报警，直到手动清除或检测到人体再次走动
            break;

        default:
            current_state = STATE_IDLE;
            break;
    }

    return current_state;
}

void Fall_Reset(void) {
    current_state = STATE_IDLE;
    timer_cnt = 0;
}

