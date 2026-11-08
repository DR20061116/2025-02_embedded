#include "jy901s.h"

static uint8_t RxBuffer[11];    /* 接收数据数组 */
static volatile uint8_t RxState = 0;  /* 接收状态标志位 */
static uint8_t RxIndex = 0;    /* 接收数组索引 */
float Roll, Pitch, Yaw;        /* 角度信息 (单位：度) */
float AccX, AccY, AccZ;        /* 加速度信息 (单位：g) */

extern uint8_t g_usart2_receivedata;

/**
 * @brief       数据包处理函数
 * @param       RxData: 串口接收的单个字节数据
 * @retval      无
 */
void jy61p_ReceiveData(uint8_t RxData)
{
    uint8_t i, sum = 0;
    
    if (RxState == 0)  // 等待包头 (0x55)
    {
        if (RxData == 0x55)  // 收到包头
        {
            RxBuffer[RxIndex] = RxData;
            RxState = 1;     // 进入等待数据类型的状态
            RxIndex = 1;     // 索引移到下一位，准备接收数据类型
        }
    }
    else if (RxState == 1)  // 等待数据类型 (0x51:加速度 / 0x53:角度)
    {
        // 只处理加速度(0x51)和角度(0x53)帧，忽略其他类型
        if (RxData == 0x51 || RxData == 0x53)
        {
            RxBuffer[RxIndex] = RxData;
            RxState = 2;     // 进入接收数据内容的状态
            RxIndex = 2;     // 索引移到下一位，准备接收数据内容
        }
        else
        {
            // 非目标数据类型，重置状态
            RxState = 0;
            RxIndex = 0;
        }
    }
    else if (RxState == 2)  // 接收数据内容 (共9个字节：数据+校验和)
    {
        RxBuffer[RxIndex++] = RxData;
        
        // 接收完成 (11字节：包头+类型+8字节数据+校验和)
        if (RxIndex == 11)
        {
            // 计算校验和 (前10个字节的累加和)
            for (i = 0; i < 10; i++)
            {
                sum += RxBuffer[i];
            }
            
            // 校验和正确才解析数据
            if (sum == RxBuffer[10])
            {
                // 根据数据类型解析对应数据
                switch (RxBuffer[1])  // RxBuffer[1] 是数据类型位
                {
                    case 0x53:  // 角度帧解析
                        // 角度计算：(int16_t数据) / 32768.0 * 180 → 转换为度
                        Roll = ((int16_t)(RxBuffer[3] << 8 | RxBuffer[2])) / 32768.0f * 180.0f;
                        Pitch = ((int16_t)(RxBuffer[5] << 8 | RxBuffer[4])) / 32768.0f * 180.0f;
                        Yaw = ((int16_t)(RxBuffer[7] << 8 | RxBuffer[6])) / 32768.0f * 180.0f;
                        break;
                        
                    case 0x51:  // 加速度帧解析
                        // 加速度计算：(int16_t数据) / 32768.0 * 16 → 转换为g (1g≈9.8m/s2)
                        AccX = ((int16_t)(RxBuffer[3] << 8 | RxBuffer[2])) / 32768.0f * 16.0f;
                        AccY = ((int16_t)(RxBuffer[5] << 8 | RxBuffer[4])) / 32768.0f * 16.0f;
                        AccZ = ((int16_t)(RxBuffer[7] << 8 | RxBuffer[6])) / 32768.0f * 16.0f;
                        break;
                        
                    default:
                        break;
                }
            }
            
            // 重置状态，准备接收下一包数据
            RxState = 0;
            RxIndex = 0;
        }
    }
}
