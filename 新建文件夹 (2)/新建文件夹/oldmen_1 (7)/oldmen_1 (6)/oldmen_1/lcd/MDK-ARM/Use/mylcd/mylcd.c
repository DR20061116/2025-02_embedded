#include "mylcd.h"
#include "pic.h"

void normal(void)
{
	       
        LCD_Fill(0, 0, LCD_W, LCD_H, WHITE);
	
        LCD_ShowPicture(149,4,11,8,gImage_wifi);
        LCD_ShowPicture(128,4,16,8,gImage_h); 	
	      LCD_DrawLine(0,16,160,16,RED);
//	      LCD_ShowPicture(0,90,14,18,gImage_position);
	
	
	      LCD_Fill(0,112,160,128,LIGHTBLUE);
	      LCD_ShowChinese(10,112,(uint8_t*)"\xB2\xD8\xD3\xDA\xD2\xC2\xBD\xF3\xA3\xAC\xB0\xAE\xD4\xDA\xC8\xD5\xB3\xA3",WHITE,WHITE,16,1);
	
	      LCD_DrawRectangle(0,30,32,49,BLACK);
	      LCD_ShowChinese(0,32,(uint8_t*)"\xCC\xEC\xC6\xF8",BLACK,WHITE,16,1);
	      LCD_DrawRectangle(0,49,32,68,BLACK);
	      LCD_ShowChinese(0,51,(uint8_t*)"\xB7\xE7\xCF\xF2",BLACK,WHITE,16,1);
	      LCD_DrawRectangle(0,68,32,87,BLACK);
	      LCD_ShowChinese(0,70,(uint8_t*)"\xCC\xE5\xB8\xD0",BLACK,WHITE,16,1);
	      //LCD_ShowChinese(73,70,(uint8_t*)"\xB6\xC8",BLACK,WHITE,16,1);
	      LCD_ShowChinese(33,51,(uint8_t*)"\xC4\xCF\xB7\xE7",BLACK,WHITE,16,1);
	      LCD_ShowChinese(33,30,(uint8_t*)"\xC7\xE7\xCC\xEC",BLACK,WHITE,16,1);
	
	
	      LCD_ShowPicture(66,20,32,26,gImage_xinlv);
				LCD_ShowString(98,20,"spo2:",RED,WHITE,16,1);
				LCD_ShowString(98,36,"rate",RED,WHITE,16,1);
				
				
				 LCD_ShowPicture(75,51,23,40,gImage_medine);
				 LCD_ShowChinese(98,56,(uint8_t*)"\xB8\xC3\xB3\xD4\xB5\xC4\xD2\xA9",BLACK,WHITE,16,1);

				 
				
}

void Fall_Blink_Icon(void) {
    static uint32_t last_blink = 0;
    static uint8_t icon_visible = 0;

    // ÿ 500ms �л�һ��״̬��������ÿ�д��붼ˢ
    if (HAL_GetTick() - last_blink > 500) {
        last_blink = HAL_GetTick();
        
        if (icon_visible) {
            // �����׿��ͼ����ס��ģ��Ϩ��
            LCD_Fill(66, 20, 66+32, 20+26, WHITE); 
            icon_visible = 0;
        } else {
            // ����ͼ��
            LCD_ShowPicture(66, 20, 32, 26, gImage_xinlv);
            icon_visible = 1;
        }
    }
}


// ����Щ���ơ���һ����ʾ����������Ϊȫ�ֱ��������㸴λ
uint8_t fall_screen_init_flag = 0; 
uint8_t lock_med_a = 0;
uint8_t lock_med_b = 0;
uint8_t lock_med_c = 0;
uint8_t lock_med_d = 0;
uint8_t lock_med_e = 0;

void Fall(void)
{      
    // �ı��ж������������ 0 ����е�һ������ˢ��
    if(fall_screen_init_flag == 0)
    {
        LCD_Fill(0, 0, LCD_W, LCD_H, WHITE);
        LCD_ShowPicture(10,50,19,20,gImage_home); 
        LCD_ShowPicture(10,100,20,20,gImage_phone); 
        LCD_ShowChinese(29,55,(uint8_t*)"\xD7\xA1\xD6\xB7",BLACK,WHITE,16,1);
        LCD_ShowChinese(29,100,(uint8_t*)"\xB5\xE7\xBB\xB0",BLACK,WHITE,16,1);
        LCD_ShowString(61,100,":12345678",BLUE,WHITE,16,0);
        LCD_ShowString(61,55,":XX",BLUE,WHITE,16,0);
        LCD_ShowChinese(85,55,(uint8_t*)"\xC7\xF8",BLUE,WHITE,16,1);
        LCD_ShowString(101,55,"XX",BLUE,WHITE,16,0);
        LCD_ShowChinese(115,55,(uint8_t*)"\xD0\xA1\xC7\xF8",BLUE,WHITE,16,1);
        LCD_ShowString(147,55,"X",BLUE,WHITE,16,0);
        
        fall_screen_init_flag = 1; // ����Ѿ���ʼ����
    }
    Fall_Blink_Icon();
}

void med_a(void)
{
    LCD_Fill(108, 72, 156, 72 + 16, WHITE); 
    LCD_ShowChinese(108, 72, (uint8_t*)"\xD2\xA9\xCE\xEF", BLACK, WHITE, 16, 1);
    LCD_ShowString(140, 72, "A", BLACK, WHITE, 16, 0);
    lock_med_a = 1;
}

// med_b, med_c, med_d, med_e ͬ���޸ģ�
// �Ѻ����ڲ��� static int lock_med_x = 0; ȫ��ɾ������Ϊ�����Ѿ�������ȫ�ֱ�����
void med_b(void) {
    LCD_Fill(108, 72, 156, 72 + 16, WHITE); 
    LCD_ShowChinese(108, 72, (uint8_t*)"\xD2\xA9\xCE\xEF", BLACK, WHITE, 16, 1);
    LCD_ShowString(140, 72, "B", BLACK, WHITE, 16, 0);
    lock_med_b = 1;
}
void med_c(void) {
    LCD_Fill(108, 72, 156, 72 + 16, WHITE); LCD_ShowChinese(108, 72, (uint8_t*)"\xD2\xA9\xCE\xEF", BLACK, WHITE, 16, 1); LCD_ShowString(140, 72, "C", BLACK, WHITE, 16, 0); lock_med_c = 1;
}
void med_d(void) {
    LCD_Fill(108, 72, 156, 72 + 16, WHITE); LCD_ShowChinese(108, 72, (uint8_t*)"\xD2\xA9\xCE\xEF", BLACK, WHITE, 16, 1); LCD_ShowString(140, 72, "D", BLACK, WHITE, 16, 0); lock_med_d = 1;
}
void med_e(void) {
    LCD_Fill(108, 72, 156, 72 + 16, WHITE); LCD_ShowChinese(108, 72, (uint8_t*)"\xD2\xA9\xCE\xEF", BLACK, WHITE, 16, 1); LCD_ShowString(140, 72, "E", BLACK, WHITE, 16, 0); lock_med_e = 1;
}
