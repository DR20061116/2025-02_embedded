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
	      LCD_ShowChinese(10,112,"藏于衣襟，爱在日常",WHITE,WHITE,16,1);
	
	      LCD_DrawRectangle(0,30,32,49,BLACK);
	      LCD_ShowChinese(0,32,"天气",BLACK,WHITE,16,1);
	      LCD_DrawRectangle(0,49,32,68,BLACK);
	      LCD_ShowChinese(0,51,"风向",BLACK,WHITE,16,1);
	      LCD_DrawRectangle(0,68,32,87,BLACK);
	      LCD_ShowChinese(0,70,"体感",BLACK,WHITE,16,1);
	      //LCD_ShowChinese(73,70,"度",BLACK,WHITE,16,1);
	      LCD_ShowChinese(33,51,"南风",BLACK,WHITE,16,1);
	      LCD_ShowChinese(33,30,"晴天",BLACK,WHITE,16,1);
	
	
	      LCD_ShowPicture(66,20,32,26,gImage_xinlv);
				LCD_ShowString(98,20,"spo2:",RED,WHITE,16,1);
				LCD_ShowString(98,36,"rate:",RED,WHITE,16,1);
				
				
				 LCD_ShowPicture(75,51,23,40,gImage_medine);
				 LCD_ShowChinese(98,56,"该吃的药",BLACK,WHITE,16,1);

				 
				
}

void Fall_Blink_Icon(void) {
    static uint32_t last_blink = 0;
    static uint8_t icon_visible = 0;

    // 每 500ms 切换一次状态，而不是每行代码都刷
    if (HAL_GetTick() - last_blink > 500) {
        last_blink = HAL_GetTick();
        
        if (icon_visible) {
            // 画个白块把图标遮住（模拟熄灭）
            LCD_Fill(66, 20, 66+32, 20+26, WHITE); 
            icon_visible = 0;
        } else {
            // 画出图标
            LCD_ShowPicture(66, 20, 32, 26, gImage_xinlv);
            icon_visible = 1;
        }
    }
}


// 将这些控制“第一次显示”的锁定义为全局变量，方便复位
uint8_t fall_screen_init_flag = 0; 
uint8_t lock_med_a = 0;
uint8_t lock_med_b = 0;
uint8_t lock_med_c = 0;
uint8_t lock_med_d = 0;
uint8_t lock_med_e = 0;

void Fall(void)
{      
    // 改变判断条件：如果是 0 则进行第一次完整刷屏
    if(fall_screen_init_flag == 0)
    {
        LCD_Fill(0, 0, LCD_W, LCD_H, WHITE);
        LCD_ShowPicture(10,50,19,20,gImage_home); 
        LCD_ShowPicture(10,100,20,20,gImage_phone); 
        LCD_ShowChinese(29,55,"住址",BLACK,WHITE,16,1);
        LCD_ShowChinese(29,100,"电话",BLACK,WHITE,16,1);
        LCD_ShowString(61,100,":12345678",BLUE,WHITE,16,0);
        LCD_ShowString(61,55,":XX",BLUE,WHITE,16,0);
        LCD_ShowChinese(85,55,"区",BLUE,WHITE,16,1);
        LCD_ShowString(101,55,"XX",BLUE,WHITE,16,0);
        LCD_ShowChinese(115,55,"小区",BLUE,WHITE,16,1);
        LCD_ShowString(147,55,"X",BLUE,WHITE,16,0);
        
        fall_screen_init_flag = 1; // 标记已经初始化过
    }
    Fall_Blink_Icon();
}

void med_a(void)
{
    if(lock_med_a == 0)
    {
        LCD_Fill(108, 72, 156, 72 + 16, WHITE); 
        LCD_ShowChinese(108, 72, "药物", BLACK, WHITE, 16, 1);
        LCD_ShowString(140, 72, "A", BLACK, WHITE, 16, 0);
        lock_med_a = 1;
    }
}

// med_b, med_c, med_d, med_e 同理修改：
// 把函数内部的 static int lock_med_x = 0; 全部删掉！因为上面已经定义了全局变量。
void med_b(void) {
    if(lock_med_b == 0) {
        LCD_Fill(108, 72, 156, 72 + 16, WHITE); 
        LCD_ShowChinese(108, 72, "药物", BLACK, WHITE, 16, 1);
        LCD_ShowString(140, 72, "B", BLACK, WHITE, 16, 0);
        lock_med_b = 1;
    }
}
void med_c(void) {
    if(lock_med_c == 0) { LCD_Fill(108, 72, 156, 72 + 16, WHITE); LCD_ShowChinese(108, 72, "药物", BLACK, WHITE, 16, 1); LCD_ShowString(140, 72, "C", BLACK, WHITE, 16, 0); lock_med_c = 1; }
}
void med_d(void) {
    if(lock_med_d == 0) { LCD_Fill(108, 72, 156, 72 + 16, WHITE); LCD_ShowChinese(108, 72, "药物", BLACK, WHITE, 16, 1); LCD_ShowString(140, 72, "D", BLACK, WHITE, 16, 0); lock_med_d = 1; }
}
void med_e(void) {
    if(lock_med_e == 0) { LCD_Fill(108, 72, 156, 72 + 16, WHITE); LCD_ShowChinese(108, 72, "药物", BLACK, WHITE, 16, 1); LCD_ShowString(140, 72, "E", BLACK, WHITE, 16, 0); lock_med_e = 1; }
}
