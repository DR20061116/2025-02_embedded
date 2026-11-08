#include "mycode.h"
#include "Buzzer.h"
#include "Int_led.h"
#include "uart_receiver.h"

// ============================================================
// 1. 配置
// ============================================================
#define WIFI_SSID       "DREAM"
#define WIFI_PASSWORD   "20061116"
#define MQTT_SERVER     "mqtts.heclouds.com"
#define PRODUCT_ID      "HIH5Gb1Urm"
#define DEVICE_NAME     "OLD"
#define MQTT_TOKEN      "version=2018-10-31&res=products%2FHIH5Gb1Urm%2Fdevices%2FOLD&et=1811857860&method=md5&sign=VQxPVZMbRALTt5OOQyUK4w%3D%3D"

#define TP_POST_REPLY   "$sys/" PRODUCT_ID "/" DEVICE_NAME "/thing/property/post/reply"
#define TP_POST         "$sys/" PRODUCT_ID "/" DEVICE_NAME "/thing/property/post"
#define TP_SET          "$sys/" PRODUCT_ID "/" DEVICE_NAME "/thing/property/set"
#define TP_SET_REPLY    "$sys/" PRODUCT_ID "/" DEVICE_NAME "/thing/property/set_reply"
// ============================================================

// ============================================================
// 2. 全局资源（避免栈上放大数组）
// ============================================================
static volatile uint8_t rx_byte;
static char rx_buf[1024];
static volatile uint16_t rx_len = 0;
static char pub_buf[1024];          // 发布命令缓冲区（全局，不复用栈）
static char reply_buf[320];         // set_reply 缓冲区
static uint8_t buzzer_state = 0;    // 蜂鸣器状态（0关1开）
static uint8_t led_state = 0;       // LED状态（0关1开）

static void rx_clr(void) { rx_len = 0; memset(rx_buf, 0, sizeof(rx_buf)); }
static void tx(const char *s) { HAL_UART_Transmit(&huart6, (uint8_t*)s, strlen(s), HAL_MAX_DELAY); }

void ESP8266_RxCpltCallback(void)
{
    if (rx_len < sizeof(rx_buf) - 1) {
        rx_buf[rx_len++] = (char)rx_byte;
        rx_buf[rx_len] = '\0';
    }
    HAL_UART_Receive_IT(&huart6, (uint8_t *)&rx_byte, 1);
}

// ============================================================
// 3. 状态机
// ============================================================
enum {
    S_INIT, S_RST, S_MODE, S_WIFI, S_DELAY2S,
    S_CFG, S_CONN, S_SUB1, S_SUB2, S_OK
};
static volatile uint8_t sm = S_INIT;
static uint32_t deadline = 0;

static void at_send(const char *cmd, uint32_t ms)
{
    rx_clr();
    tx(cmd);
    deadline = HAL_GetTick() + ms;
}

// ============================================================
// 4. JSON 构建函数（全静态缓冲区，不占栈，不可重入但单线程）
// ============================================================
static void mkjson(const char *topic, const char *id, uint8_t n, ...)
{
    static char body[640];
    int o = 0;
    va_list ap;
    memset(body, 0, sizeof(body));

    o += sprintf(body + o,
        "{\\\"id\\\":\\\"%s\\\"\\,\\\"version\\\":\\\"1.0\\\"\\,\\\"params\\\":{", id);

    va_start(ap, n);
    for (uint8_t i = 0; i < n; i++) {
        char *k = va_arg(ap, char*);
        int t = va_arg(ap, int);
        if (i) o += sprintf(body + o, "\\,");
        if (t == 'i') {
            o += sprintf(body + o, "\\\"%s\\\":{\\\"value\\\":%d}", k, va_arg(ap, int));
        } else if (t == 'f') {
            double v = va_arg(ap, double);
            int ip = (int)v;
            double d = (v >= 0) ? (v - ip) : (ip - v);
            int dp = (int)(d * 100.0 + 0.5);
            if (dp >= 100) { dp -= 100; ip++; }
            o += sprintf(body + o, "\\\"%s\\\":{\\\"value\\\":%d.%02d}", k, ip, dp);
        } else if (t == 'g') {
            o += sprintf(body + o, "\\\"%s\\\":{\\\"value\\\":%.6f}", k, va_arg(ap, double));
        } else if (t == 's') {
            o += sprintf(body + o, "\\\"%s\\\":{\\\"value\\\":\\\"%s\\\"}", k, va_arg(ap, char*));
        } else if (t == 'b') {
            o += sprintf(body + o, "\\\"%s\\\":{\\\"value\\\":%s}", k, va_arg(ap, int) ? "true" : "false");
        }
    }
    va_end(ap);
    o += sprintf(body + o, "}}");
    sprintf(pub_buf, "AT+MQTTPUB=0,\"%s\",\"%s\",0,0\r\n", topic, body);
}

// ============================================================
// 5. mycode_init
// ============================================================
void mycode_init(void)
{
    HAL_UART_Receive_IT(&huart6, (uint8_t *)&rx_byte, 1);
    tx("AT+RST\r\n");
    deadline = HAL_GetTick() + 3000;
    sm = S_RST;
}

// ============================================================
// 6. mycode_run — 主循环每次调一次，绝不阻塞
// ============================================================
void mycode_run(void)
{
    uint32_t now = HAL_GetTick();
    uint32_t d;

    // ====== 未就绪：跑状态机 ======
    if (sm != S_OK) {

        if (deadline) {
            d = deadline;
            // --- 纯延时等待（不检查应答） ---
            if (sm == S_RST || sm == S_DELAY2S) {
                if (now < d) return;
                if (sm == S_RST) { at_send("AT+CWMODE=1\r\n", 3000); sm = S_MODE; }
                else             { at_send("AT+MQTTUSERCFG=0,1,\"" DEVICE_NAME "\",\"" PRODUCT_ID "\",\"" MQTT_TOKEN "\",0,0,\"\r\n", 5000); sm = S_CFG; }
                return;
            }
            // --- 命令等待（找 OK 或超时） ---
            if (now < d) {
                if (rx_len && strstr(rx_buf, "OK")) {
                    rx_clr();
                    deadline = 0;         // 清掉 deadline，落到底下 switch
                } else {
                    return;
                }
            } else {
                // 超时
                rx_clr();
                deadline = 0;
                sm = S_INIT;
                return;
            }
        }

        // 状态迁移
        switch (sm) {
        case S_INIT:
            tx("AT+RST\r\n");
            deadline = now + 3000;
            sm = S_RST;
            break;
        case S_MODE:
            at_send("AT+CWJAP=\"" WIFI_SSID "\",\"" WIFI_PASSWORD "\"\r\n", 20000);
            sm = S_WIFI;
            break;
        case S_WIFI:
            deadline = now + 2000;
            sm = S_DELAY2S;
            break;
        case S_CFG:
            at_send("AT+MQTTCONN=0,\"" MQTT_SERVER "\",1883,1\r\n", 10000);
            sm = S_CONN;
            break;
        case S_CONN:
            at_send("AT+MQTTSUB=0,\"" TP_POST_REPLY "\",0\r\n", 5000);
            sm = S_SUB1;
            break;
        case S_SUB1:
            at_send("AT+MQTTSUB=0,\"" TP_SET "\",0\r\n", 5000);
            sm = S_SUB2;
            break;
        case S_SUB2:
            sm = S_OK;
            deadline = 0;
            break;
        default:
            sm = S_INIT;
            deadline = 0;
            break;
        }
        return;
    }

    // ====== S_OK：正常通讯 ======
    // 保持远程控制状态（主循环每轮会关掉蜂鸣器，这里反锁）
    if (buzzer_state) HAL_GPIO_WritePin(GPIOB, GPIO_PIN_1, GPIO_PIN_RESET);

    // 处理接收
    if (rx_len) {
        // 断线复位
        if (strstr(rx_buf, "+MQTTDISCONNECTED")) {
            rx_clr();
            sm = S_INIT;
            return;
        }
        // set 指令
        if (strstr(rx_buf, "+MQTTSUBRECV") && strstr(rx_buf, "set\"")) {
            // 直接 GPIO 操作，避免 Buzzer_Start 中的 HAL_Delay
            if (strstr(rx_buf, "\"Buzzer\":{\"value\":true"))   { HAL_GPIO_WritePin(GPIOB, GPIO_PIN_1, GPIO_PIN_RESET); buzzer_state = 1; }
            if (strstr(rx_buf, "\"Buzzer\":{\"value\":false"))  { HAL_GPIO_WritePin(GPIOB, GPIO_PIN_1, GPIO_PIN_SET);   buzzer_state = 0; }
            if (strstr(rx_buf, "\"LED\":{\"value\":true"))      { WS2812_Send(255,255,255); led_state = 1; }
            if (strstr(rx_buf, "\"LED\":{\"value\":false"))     { WS2812_Send(0,0,0);       led_state = 0; }
            if (strstr(rx_buf, "\"sy_Fall\":{\"value\":false")) { sy_Fall = 0; }
            if (strstr(rx_buf, "\"sos_flag\":{\"value\":true")) { g_slave_data.sos_flag = 1; }
            if (strstr(rx_buf, "\"sos_flag\":{\"value\":false")){ g_slave_data.sos_flag = 0; }

            // 回复 set_reply
            char *p = strstr(rx_buf, "\"id\":\"");
            char mid[24] = {0};
            if (p) {
                p += 6; char *e = strchr(p, '"');
                if (e && (e-p) < 24) { strncpy(mid,p,e-p); mid[e-p] = 0; }
            }
            if (mid[0]) {
                sprintf(reply_buf,
                    "AT+MQTTPUB=0,\"%s\",\"{\\\"id\\\":\\\"%s\\\"\\,\\\"code\\\":200}\",0,0\r\n",
                    TP_SET_REPLY, mid);
                tx(reply_buf);
            }

            // 上报最新状态
            mkjson(TP_POST, "1001", 3,
                "Buzzer",'b',buzzer_state,
                "LED",'b',   led_state,
                "sy_Fall",'b',sy_Fall ? 1 : 0);
            tx(pub_buf);
        }
        rx_clr();
    }

    // 定时上报（2 秒）—— 轮流发 1 个属性，16 秒一轮
    static uint32_t last_up = 0;
    static uint8_t seq = 0;
    if (now - last_up >= 200) {
        last_up = now;
        switch (seq) {
        case 0: mkjson(TP_POST, "1001", 1, "current_temp",  'f', (double)g_current_temp); break;
        case 1: mkjson(TP_POST, "1001", 1, "heart_rate",    'i', (int)(my_heart_rate + 0.5f)); break;
        case 2: mkjson(TP_POST, "1001", 1, "spo2",          'i', (int)(my_spo2 + 0.5f)); break;
        case 3: mkjson(TP_POST, "1001", 1, "sy_Fall",       'b', sy_Fall ? 1 : 0); break;
        case 4: mkjson(TP_POST, "1001", 1, "gps_latitude",  'g', my_gps_data.latitude); break;
        case 5: mkjson(TP_POST, "1001", 1, "gps_longitude", 'g', my_gps_data.longitude); break;
        case 6: mkjson(TP_POST, "1001", 1, "sos_flag",      'b', g_slave_data.sos_flag ? 1 : 0); break;
        case 7: mkjson(TP_POST, "1001", 1, "medicine_id",   'i', (int)g_slave_data.medicine_id); break;
        }
        if (++seq >= 8) seq = 0;
        tx(pub_buf);
    }
}
