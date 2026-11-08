#include "max30102.h"

/**
 * @brief  向MAX30102寄存器写入一个字节
 */
static HAL_StatusTypeDef MAX30102_WriteReg(I2C_HandleTypeDef *hi2c, uint8_t reg, uint8_t data) {
    return HAL_I2C_Mem_Write(hi2c, MAX30102_ADDR, reg, I2C_MEMADD_SIZE_8BIT, &data, 1, 100);
}

/**
 * @brief  从MAX30102寄存器读取一个字节
 */
static HAL_StatusTypeDef MAX30102_ReadReg(I2C_HandleTypeDef *hi2c, uint8_t reg, uint8_t *data) {
    return HAL_I2C_Mem_Read(hi2c, MAX30102_ADDR, reg, I2C_MEMADD_SIZE_8BIT, data, 1, 100);
}

/**
 * @brief  MAX30102 芯片初始化
 * @return 1: 初始化成功; 0: 失败 (找不到芯片或通信异常)
 */
uint8_t MAX30102_Init(I2C_HandleTypeDef *hi2c) {
    uint8_t id = 0;
    
    // 1. 检查芯片ID (MAX30102 的 Part ID 默认通常为 0x15)
    MAX30102_ReadReg(hi2c, REG_PART_ID, &id);
    if (id != 0x15) {
        return 0; 
    }

    // 2. 软件复位
    MAX30102_WriteReg(hi2c, REG_MODE_CONFIG, 0x40);
    HAL_Delay(50); // 等待复位完成

    // 3. 中断配置：使能 FIFO 几乎满 中断、新数据准备就绪中断
    MAX30102_WriteReg(hi2c, REG_INT_ENABLE_1, 0xC0); 
    MAX30102_WriteReg(hi2c, REG_INT_ENABLE_2, 0x00);

    // 4. FIFO 配置
    // 0x4F => 采样平均:4, FIFO满剩余空间触发:15, 满时循环覆盖:使能
    MAX30102_WriteReg(hi2c, REG_FIFO_CONFIG, 0x5F); 

    // 5. 工作模式配置
    // 0x03 => SpO2 模式 (红光 LED + 红外 LED 均工作)
    MAX30102_WriteReg(hi2c, REG_MODE_CONFIG, 0x03); 

    // 6. SpO2 满量程及采样率配置
    // 0x27 => ADC量程:4096nA, 采样率:100Hz, 脉宽:411us (18位解析度)
    MAX30102_WriteReg(hi2c, REG_SPO2_CONFIG, 0x27); 

    // 7. LED 电流配置 (决定发射光强，可根据实际外壳/皮肤厚度微调)
    // 0x24 => 约 7.2mA 电流
    MAX30102_WriteReg(hi2c, REG_LED1_PA, 0x24); // 红光 LED (RED)
    MAX30102_WriteReg(hi2c, REG_LED2_PA, 0x24); // 红外 LED (IR)

    // 8. 清空 FIFO 指针
    MAX30102_WriteReg(hi2c, REG_FIFO_WR_PTR, 0x00);
    MAX30102_WriteReg(hi2c, REG_OVF_COUNTER, 0x00);
    MAX30102_WriteReg(hi2c, REG_FIFO_RD_PTR, 0x00);

    return 1;
}

/**
 * @brief  从 FIFO 中读取一组原始的红光和红外光 ADC 采样数据
 * @param  pun_red_led: 读取到的红光数据指针 (18-20位数据)
 * @param  pun_ir_led:  读取到的红外光数据指针 (18-20位数据)
 * @return 1: 成功读取到有效数据; 0: FIFO 中暂无新数据
 */
uint8_t MAX30102_Read_FIFO(I2C_HandleTypeDef *hi2c, uint32_t *pun_red_led, uint32_t *pun_ir_led) {
    uint8_t buffer[6];
    uint8_t reg_data = 0;
    
    // 读取中断状态寄存器以清除中断标志（选做，防止中断引脚一直拉低）
    MAX30102_ReadReg(hi2c, REG_INT_STATUS_1, &reg_data);

    // 批量读取一帧数据（3字节红光 + 3字节红外光 = 6字节）
    if (HAL_I2C_Mem_Read(hi2c, MAX30102_ADDR, REG_FIFO_DATA, I2C_MEMADD_SIZE_8BIT, buffer, 6, 100) == HAL_OK) {
        
        // 拼接红光数据 (24位原始数据中，只有低18位有效)
        *pun_red_led = ((uint32_t)buffer[0] << 16) | ((uint32_t)buffer[1] << 8) | buffer[2];
        *pun_red_led &= 0x03FFFF; // 保持 18 位数据有效

        // 拼接红外光数据
        *pun_ir_led = ((uint32_t)buffer[3] << 16) | ((uint32_t)buffer[4] << 8) | buffer[5];
        *pun_ir_led &= 0x03FFFF;

        return 1; 
    }
    
    return 0;
}

