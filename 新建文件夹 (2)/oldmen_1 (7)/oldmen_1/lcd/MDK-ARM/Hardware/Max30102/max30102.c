#include "max30102.h"

/**
 * @brief  ��MAX30102�Ĵ���д��һ���ֽ�
 */
static HAL_StatusTypeDef MAX30102_WriteReg(I2C_HandleTypeDef *hi2c, uint8_t reg, uint8_t data) {
    return HAL_I2C_Mem_Write(hi2c, MAX30102_ADDR, reg, I2C_MEMADD_SIZE_8BIT, &data, 1, 100);
}

/**
 * @brief  ��MAX30102�Ĵ�����ȡһ���ֽ�
 */
static HAL_StatusTypeDef MAX30102_ReadReg(I2C_HandleTypeDef *hi2c, uint8_t reg, uint8_t *data) {
    return HAL_I2C_Mem_Read(hi2c, MAX30102_ADDR, reg, I2C_MEMADD_SIZE_8BIT, data, 1, 100);
}

/**
 * @brief  MAX30102 оƬ��ʼ��
 * @return 1: ��ʼ���ɹ�; 0: ʧ�� (�Ҳ���оƬ��ͨ���쳣)
 */
uint8_t MAX30102_Init(I2C_HandleTypeDef *hi2c) {
    uint8_t id = 0;
    
    // 1. ���оƬID (MAX30102 �� Part ID Ĭ��ͨ��Ϊ 0x15)
    MAX30102_ReadReg(hi2c, REG_PART_ID, &id);
    if (id != 0x15) {
        return 0; 
    }

    // 2. ������λ
    MAX30102_WriteReg(hi2c, REG_MODE_CONFIG, 0x40);
    HAL_Delay(50); // �ȴ���λ���

    // 3. �ж����ã�ʹ�� FIFO ������ �жϡ�������׼�������ж�
    MAX30102_WriteReg(hi2c, REG_INT_ENABLE_1, 0xC0); 
    MAX30102_WriteReg(hi2c, REG_INT_ENABLE_2, 0x00);

    // 4. FIFO ����
    // 0x4F => ����ƽ��:4, FIFO��ʣ��ռ䴥��:15, ��ʱѭ������:ʹ��
    MAX30102_WriteReg(hi2c, REG_FIFO_CONFIG, 0x5F); 

    // 5. ����ģʽ����
    // 0x03 => SpO2 ģʽ (��� LED + ���� LED ������)
    MAX30102_WriteReg(hi2c, REG_MODE_CONFIG, 0x03); 

    // 6. SpO2 �����̼�����������
    // 0x27 => ADC����:4096nA, ������:100Hz, ����:411us (18λ������)
    MAX30102_WriteReg(hi2c, REG_SPO2_CONFIG, 0x27); 

    // 7. LED �������� (���������ǿ���ɸ���ʵ�����/Ƥ�����΢��)
    // 0x24 => Լ 7.2mA ����
    MAX30102_WriteReg(hi2c, REG_LED1_PA, 0x24); // ��� LED (RED)
    MAX30102_WriteReg(hi2c, REG_LED2_PA, 0x24); // ���� LED (IR)

    // 8. ��� FIFO ָ��
    MAX30102_WriteReg(hi2c, REG_FIFO_WR_PTR, 0x00);
    MAX30102_WriteReg(hi2c, REG_OVF_COUNTER, 0x00);
    MAX30102_WriteReg(hi2c, REG_FIFO_RD_PTR, 0x00);

    return 1;
}

/**
 * @brief  �� FIFO �ж�ȡһ��ԭʼ�ĺ��ͺ���� ADC ��������
 * @param  pun_red_led: ��ȡ���ĺ������ָ�� (18-20λ����)
 * @param  pun_ir_led:  ��ȡ���ĺ��������ָ�� (18-20λ����)
 * @return 1: �ɹ���ȡ����Ч����; 0: FIFO ������������
 */
uint8_t MAX30102_Read_FIFO(I2C_HandleTypeDef *hi2c, uint32_t *pun_red_led, uint32_t *pun_ir_led) {
    uint8_t buffer[6];
    uint8_t reg_data = 0;
    
    // ��ȡ�ж�״̬�Ĵ���������жϱ�־��ѡ������ֹ�ж�����һֱ���ͣ�
    MAX30102_ReadReg(hi2c, REG_INT_STATUS_1, &reg_data);

    // ������ȡһ֡���ݣ�3�ֽں�� + 3�ֽں���� = 6�ֽڣ�
    if (HAL_I2C_Mem_Read(hi2c, MAX30102_ADDR, REG_FIFO_DATA, I2C_MEMADD_SIZE_8BIT, buffer, 6, 100) == HAL_OK) {
        
        // ƴ�Ӻ������ (24λԭʼ�����У�ֻ�е�18λ��Ч)
        *pun_red_led = ((uint32_t)buffer[0] << 16) | ((uint32_t)buffer[1] << 8) | buffer[2];
        *pun_red_led &= 0x03FFFF; // ���� 18 λ������Ч

        // ƴ�Ӻ��������
        *pun_ir_led = ((uint32_t)buffer[3] << 16) | ((uint32_t)buffer[4] << 8) | buffer[5];
        *pun_ir_led &= 0x03FFFF;

        return 1; 
    }
    
    return 0;
}

void MAX30102_Shutdown(I2C_HandleTypeDef *hi2c) {
    MAX30102_WriteReg(hi2c, REG_LED1_PA, 0x00);
    MAX30102_WriteReg(hi2c, REG_LED2_PA, 0x00);
    MAX30102_WriteReg(hi2c, REG_MODE_CONFIG, 0x80);
}
