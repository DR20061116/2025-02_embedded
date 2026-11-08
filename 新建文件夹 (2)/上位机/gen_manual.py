# -*- coding: utf-8 -*-
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

doc = Document()

style = doc.styles['Normal']
font = style.font
font.name = '宋体'
font.size = Pt(11)

for section in doc.sections:
    section.top_margin = Cm(2.5)
    section.bottom_margin = Cm(2.5)
    section.left_margin = Cm(2.5)
    section.right_margin = Cm(2.5)

# 封面
for _ in range(6):
    doc.add_paragraph()

title = doc.add_paragraph()
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = title.add_run('本质安全型防爆电源\n智能监控系统')
run.bold = True
run.font.size = Pt(28)
run.font.name = '黑体'

subtitle = doc.add_paragraph()
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = subtitle.add_run('用 户 手 册')
run.bold = True
run.font.size = Pt(22)
run.font.name = '黑体'
run.font.color.rgb = RGBColor(0x33, 0x33, 0x99)

doc.add_paragraph()
doc.add_paragraph()

info_items = [('软件版本', 'V1.0'), ('文档版本', 'V1.0'), ('发布日期', '2026年7月')]
for label, value in info_items:
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = p.add_run(f'{label}: {value}')
    run.font.size = Pt(12)

doc.add_page_break()

# 目录
toc_title = doc.add_paragraph()
toc_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = toc_title.add_run('目  录')
run.bold = True
run.font.size = Pt(18)
run.font.name = '黑体'

doc.add_paragraph()

toc_items = [
    '1  产品概述',
    '    1.1  系统简介',
    '    1.2  功能特点',
    '2  系统要求',
    '    2.1  硬件要求',
    '    2.2  软件要求',
    '3  快速开始',
    '    3.1  安装应用',
    '    3.2  启动应用',
    '    3.3  界面概览',
    '4  功能介绍',
    '    4.1  顶部状态栏',
    '    4.2  设备信息栏',
    '    4.3  实时数据监控',
    '    4.4  状态预警颜色说明',
    '    4.5  远程控制',
    '    4.6  在线状态监测',
    '5  参数说明',
    '    5.1  甲烷浓度',
    '    5.2  一氧化碳浓度',
    '    5.3  二氧化碳浓度',
    '    5.4  PM2.5浓度',
    '    5.5  环境湿度',
    '    5.6  环境温度',
    '    5.7  功率器件温度',
    '    5.8  输出电流',
    '    5.9  输出电压',
    '    5.10  运行时长',
    '    5.11  健康评分',
    '    5.12  LED灯',
    '    5.13  蜂鸣器报警',
    '6  常见问题',
    '7  注意事项',
]

for t in toc_items:
    p = doc.add_paragraph()
    run = p.add_run(t)
    run.font.size = Pt(12)
    if not t.startswith('    '):
        run.bold = True

doc.add_page_break()

# ========== 1 产品概述 ==========
def add_h1(text):
    h = doc.add_paragraph()
    run = h.add_run(text)
    run.bold = True
    run.font.size = Pt(16)
    run.font.name = '黑体'
    return h

def add_h2(text):
    h = doc.add_paragraph()
    run = h.add_run(text)
    run.bold = True
    run.font.size = Pt(14)
    run.font.name = '黑体'
    return h

def add_body(text):
    p = doc.add_paragraph()
    p.paragraph_format.first_line_indent = Cm(0.7)
    run = p.add_run(text)
    run.font.size = Pt(11)

def add_bullet(bold_part, normal_part):
    p = doc.add_paragraph()
    run = p.add_run(f'● {bold_part}: ')
    run.bold = True
    run.font.size = Pt(11)
    run = p.add_run(normal_part)
    run.font.size = Pt(11)

add_h1('1  产品概述')

add_h2('1.1  系统简介')

add_body('本质安全型防爆电源智能监控系统是一款基于Android平台的移动应用软件，专为本质安全型防爆电源设备的远程监控与管理而设计。系统通过对接中国移动OneNET物联网平台，实现对防爆电源设备运行状态的实时数据采集、可视化展示与远程控制功能。')

add_body('本系统可广泛应用于煤矿、石油化工、燃气站等易燃易爆环境中，帮助操作人员实时掌握防爆电源设备的各项关键参数，及时发现异常并远程处置，有效提升设备运行的安全性和可靠性。')

doc.add_paragraph()
add_h2('1.2  功能特点')

add_bullet('实时数据监测', '每3秒自动刷新设备数据，包括甲烷浓度、一氧化碳浓度、二氧化碳浓度、PM2.5、环境温湿度、器件温度、输出电流电压等11项关键参数。')
add_bullet('智能颜色预警', '系统根据预设的安全阈值，自动将各参数以绿色（正常）、灰色（关注）、红色（报警）三色区分显示，一目了然。')
add_bullet('远程控制', '支持远程开关LED灯和蜂鸣器报警，操作人员可一键远程处置，快速响应异常情况。')
add_bullet('在线状态监测', '实时显示设备连接状态，15秒无数据更新自动判定设备离线，确保监控的时效性和可靠性。')
add_bullet('本地信息展示', '集成实时时钟、日期显示与天气信息，提供友好的操作界面体验。')

doc.add_page_break()

# 2 系统要求
add_h1('2  系统要求')
add_h2('2.1  硬件要求')

hw = [('CPU', '1.5GHz以上'), ('内存', '2GB以上'), ('存储空间', '100MB以上'), ('网络', 'Wi-Fi或移动数据'), ('屏幕', '5.0英寸以上，1280x720以上')]
table = doc.add_table(rows=len(hw)+1, cols=2)
table.style = 'Table Grid'
table.alignment = WD_TABLE_ALIGNMENT.CENTER
table.rows[0].cells[0].text = '配置项'
table.rows[0].cells[1].text = '最低要求'
for i, (item, req) in enumerate(hw):
    table.rows[i+1].cells[0].text = item
    table.rows[i+1].cells[1].text = req

doc.add_paragraph()
add_h2('2.2  软件要求')
add_body('操作系统: Android 5.0 (Lollipop) 及以上版本。')
add_body('网络要求: 需保持稳定的网络连接（Wi-Fi或移动数据），以便与OneNET物联网平台进行数据通信。')

doc.add_page_break()

# 3 快速开始
add_h1('3  快速开始')
add_h2('3.1  安装应用')

steps = ['获取APK安装包文件。', '在Android设备上打开文件管理器，找到APK安装包。', '点击安装包文件，按系统提示完成安装。', '安装完成后，在桌面或应用列表中找到"防爆电源监控"应用图标。']
for i, s in enumerate(steps, 1):
    p = doc.add_paragraph()
    run = p.add_run(f'步骤{i}: {s}')
    run.font.size = Pt(11)

doc.add_paragraph()
add_h2('3.2  启动应用')
add_body('点击应用图标启动软件。应用启动后会自动连接OneNET物联网平台，获取防爆电源设备的最新数据。启动过程无需手动登录或配置，即开即用。')

doc.add_paragraph()
add_h2('3.3  界面概览')
add_body('应用主界面从上到下分为以下几个区域:')

add_bullet('顶部天气时间栏', '显示当前时间、日期、天气状况和位置信息。')
add_bullet('设备信息栏', '显示设备名称、运行状态标识（已连接/未连接）。')
add_bullet('实时数据网格', '以2列网格展示11项设备监测参数的实时数值，并根据安全阈值自动显示颜色。')
add_bullet('远程控制区', '提供LED灯和蜂鸣器报警的远程开关控制按钮。')
add_bullet('底部信息栏', '显示最后一次数据刷新的时间戳。')

doc.add_page_break()

# 4 功能介绍
add_h1('4  功能介绍')
add_h2('4.1  顶部状态栏')
add_body('应用顶部为蓝色渐变背景的天气时间栏，左侧显示天气图标、温度和天气描述，右侧显示当前实时时间（时:分:秒格式）、日期和地理位置信息。时间精确到秒，每秒自动更新。')

doc.add_paragraph()
add_h2('4.2  设备信息栏')
add_body('设备信息栏位于天气栏下方，采用紫色渐变背景。左侧显示设备图标，中间显示"本质安全型防爆电源"设备名称和"智能监控系统 - 实时监测中"的描述文字，右侧显示在线状态标识。')
add_body('状态标识为圆角标签样式: 绿色背景显示"已连接"表示设备在线且通信正常；灰色背景显示"未连接"表示设备离线或通信中断。')

doc.add_paragraph()
add_h2('4.3  实时数据监控')
add_body('实时数据监控区域以2列卡片网格的形式展示所有监测参数。每张卡片包含左侧图标区和右侧数据显示区: 数据显示区上方为参数名称，下方为实时数值和单位。系统每3秒自动从OneNET平台拉取最新数据并刷新显示，确保操作人员获取到的是设备的最新运行状态。')

doc.add_paragraph()
add_h2('4.4  状态预警颜色说明')
add_body('系统根据各参数的安全阈值范围，自动将数值以不同颜色显示，帮助操作人员快速判断设备状态:')

ctbl = doc.add_table(rows=4, cols=3)
ctbl.style = 'Table Grid'
ctbl.alignment = WD_TABLE_ALIGNMENT.CENTER
for j, h in enumerate(['颜色', '含义', '操作建议']):
    ctbl.rows[0].cells[j].text = h
    ctbl.rows[0].cells[j].paragraphs[0].runs[0].bold = True

cd = [('绿色 (#07c160)', '参数处于安全范围', '设备运行正常，继续观察'),
      ('灰色 (#999999)', '参数处于关注区间', '需要留意，关注变化趋势'),
      ('红色 (#fa5151)', '参数超出安全范围', '存在异常，需立即处理')]
for i, (c, m, a) in enumerate(cd):
    ctbl.rows[i+1].cells[0].text = c
    ctbl.rows[i+1].cells[1].text = m
    ctbl.rows[i+1].cells[2].text = a

doc.add_paragraph()
add_h2('4.5  远程控制')
add_body('系统提供两个远程控制功能:')

p = doc.add_paragraph()
run = p.add_run('LED灯控制: ')
run.bold = True
run.font.size = Pt(11)
run = p.add_run('点击"开启"按钮可远程打开防爆电源设备的LED灯，点击"关闭"按钮可关闭。当前处于开启状态时，"开启"按钮显示为绿色高亮；处于关闭状态时，"关闭"按钮显示为红色高亮。')
run.font.size = Pt(11)

p = doc.add_paragraph()
run = p.add_run('蜂鸣器报警控制: ')
run.bold = True
run.font.size = Pt(11)
run = p.add_run('点击"开启"按钮可远程触发防爆电源设备的蜂鸣器报警，点击"关闭"按钮可关闭报警。按钮高亮逻辑与LED灯控制一致。')
run.font.size = Pt(11)

add_body('控制命令发出后，界面会立即乐观更新（先刷新显示再等待服务器确认），并弹出提示框告知操作结果（"设置成功"或"设置失败"）。正在执行控制操作时，对应按钮会进入禁用状态以防止重复操作。')

doc.add_paragraph()
add_h2('4.6  在线状态监测')
add_body('系统持续监测防爆电源设备的在线状态。每次成功获取到设备数据时，设备信息栏显示"已连接"；如果超过15秒未收到设备的最新数据，系统自动判定设备离线，状态标识变为"未连接"。每3秒检测一次在线状态。')

doc.add_page_break()

# 5 参数说明
add_h1('5  参数说明')
add_body('本节详细说明系统监测的各项参数及其安全阈值。')

params = [
    ('5.1  甲烷浓度', 'ch4_concent', 'float(单精度浮点型)', '0 ~ 10', '0.01', '%(百分比)',
     '0 ~ 4.99 (绿色, 安全)\n5 ~ 6.99 (灰色, 关注)\n7 ~ 10 (红色, 报警)',
     '甲烷是一种易燃易爆气体，煤矿井下和化工环境中必须实时监测其浓度。浓度超过5%时应密切关注，超过7%时存在爆炸风险，需立即采取安全措施。'),
    ('5.2  一氧化碳浓度', 'co', 'float(单精度浮点型)', '0.0 ~ 1000.0', '0.1', 'ppm(百万分率)',
     '0 ~ 49.9 (绿色, 安全)\n50 ~ 99.9 (灰色, 关注)\n100 ~ 1000 (红色, 报警)',
     '一氧化碳为有毒气体，高浓度可致人中毒。浓度超过50ppm时需注意通风，超过100ppm时必须立即疏散人员并排查泄漏源。'),
    ('5.3  二氧化碳浓度', 'co2', 'int32(整数型)', '0 ~ 5000', '1', 'ppm(百万分率)',
     '0 ~ 999 (绿色, 安全)\n1000 ~ 1999 (灰色, 关注)\n2000 ~ 5000 (红色, 报警)',
     '二氧化碳浓度过高会导致人员缺氧。正常空气中CO2浓度约为400ppm，超过1000ppm时需加强通风换气。'),
    ('5.4  PM2.5浓度', 'pm2_5', 'int64(长整数型)', '0 ~ 2000', '1', 'ug/m3(微克每立方米)',
     '0 ~ 49 (绿色, 安全)\n50 ~ 99 (灰色, 关注)\n100 ~ 2000 (红色, 报警)',
     'PM2.5为可吸入颗粒物浓度指标。浓度过高会影响设备散热和人员健康，应确保工作环境的空气洁净度。'),
    ('5.5  环境湿度', 'env_humidity', 'float(单精度浮点型)', '0.0 ~ 100.0', '0.1', '%RH(相对湿度)',
     '40 ~ 59.9 (绿色, 适宜)\n30 ~ 39.9 或 60 ~ 69.9 (灰色, 关注)\n<30 或 >=70 (红色, 异常)',
     '湿度过低易产生静电，湿度过高可能导致设备绝缘性能下降。40%~60%为最佳工作湿度范围。'),
    ('5.6  环境温度', 'env_temp', 'float(单精度浮点型)', '-20.0 ~ 85.0', '0.1', '摄氏度(°C)',
     '20 ~ 25.9 (绿色, 适宜)\n15 ~ 19.9 或 26 ~ 29.9 (灰色, 关注)\n<15 或 >=30 (红色, 异常)',
     '环境温度影响设备的工作性能和寿命。20~26°C为最佳工作温度范围，极端温度需检查环境控制系统。'),
    ('5.7  功率器件温度', 'device_temp', 'float(单精度浮点型)', '-20.0 ~ 125.0', '0.1', '摄氏度(°C)',
     '-20 ~ 69.9 (绿色, 正常)\n70 ~ 89.9 (灰色, 关注)\n90 ~ 125 (红色, 报警)',
     '功率器件温度反映电源内部核心部件的热状态。正常工作时一般在70°C以下，超过90°C表明存在过热风险，需停机检查散热系统。'),
    ('5.8  输出电流', 'output_current', 'float(单精度浮点型)', '0.0 ~ 5.0', '0.01', '安培(A)',
     '0.5 ~ 2.99 (绿色, 正常)\n0 ~ 0.49 或 3 ~ 3.99 (灰色, 关注)\n4 ~ 5 (红色, 过流)',
     '输出电流反映电源的负载情况。电流过低可能表示负载断开，电流过高（超过4A）表明负载过重，有损坏电源的风险。'),
    ('5.9  输出电压', 'output_voltage', 'float(单精度浮点型)', '0.0 ~ 50.0', '0.01', '伏特(V)',
     '12 ~ 35.9 (绿色, 正常)\n0 ~ 11.9 或 36 ~ 47.9 (灰色, 关注)\n48 ~ 50 (红色, 异常)',
     '输出电压应稳定在额定范围内。电压异常可能表示电源内部故障或外部负载短路。'),
    ('5.10  运行时长', 'runtime_hours', 'int32(整数型)', '0 ~ 876000', '1', '小时(h)',
     '>=0 (绿色, 正常，此参数仅作参考不设预警)',
     '运行时长记录电源累计运行的小时数，最大可记录100年（876000小时）。用于设备维护周期的参考。'),
    ('5.11  健康评分', 'health_score', 'int32(整数型)', '0 ~ 100', '1', '分(百分比)',
     '80 ~ 100 (绿色, 健康)\n60 ~ 79 (灰色, 亚健康)\n0 ~ 59 (红色, 需维护)',
     '健康评分综合评估设备的整体运行状态。评分低于60分时建议安排设备检修。'),
    ('5.12  LED灯', 'LED', 'bool(布尔)', 'true/false', '-', '(开关量)',
     'true = 开启\nfalse = 关闭',
     'LED灯为远程可控的开关量输出，可用于工作照明或状态指示。'),
    ('5.13  蜂鸣器报警', 'BUZZER', 'bool(布尔)', 'true/false', '-', '(开关量)',
     'true = 开启\nfalse = 关闭',
     '蜂鸣器用于声音报警，可在检测到异常时远程触发，或确认危险解除后远程关闭。'),
]

for title, ident, ptype, prange, step, unit, thresholds, desc in params:
    add_h2(title)
    tbl = doc.add_table(rows=7, cols=2)
    tbl.style = 'Table Grid'
    rows_data = [('标识符', ident), ('数据类型', ptype), ('取值范围', prange),
                 ('步长', step), ('单位', unit), ('预警阈值', thresholds), ('说明', desc)]
    for i, (k, v) in enumerate(rows_data):
        tbl.rows[i].cells[0].text = k
        tbl.rows[i].cells[1].text = v
    doc.add_paragraph()

doc.add_page_break()

# 6 常见问题
add_h1('6  常见问题')

faqs = [
    ('Q: 应用启动后一直显示"未连接"怎么办？',
     'A: 请检查以下内容：（1）Android设备是否已连接互联网（Wi-Fi或移动数据）；（2）防爆电源设备是否已通电并上线；（3）设备与OneNET平台的网络通信是否正常。确认以上均正常后，重新启动应用即可。'),
    ('Q: 数据长时间不刷新如何处理？',
     'A: 应用默认每3秒自动刷新一次数据。如果发现数据停滞，请检查网络连接是否正常，或退出应用后重新进入。如果问题持续，建议检查OneNET平台上的设备在线状态。'),
    ('Q: 远程控制操作失败是什么原因？',
     'A: 远程控制失败通常由网络问题或设备离线引起。请先确认设备在线状态，再重试操作。应用在操作失败时会弹出提示信息，可根据提示内容排查。'),
    ('Q: 数据颜色显示异常？',
     'A: 颜色显示由系统根据预设安全阈值自动判断。如果您认为阈值设置不合理，请联系开发人员进行调整。正常工作时，各参数应显示绿色或灰色。'),
]
for q, a in faqs:
    p = doc.add_paragraph()
    run = p.add_run(q)
    run.bold = True
    run.font.size = Pt(11)
    p = doc.add_paragraph()
    run = p.add_run(a)
    run.font.size = Pt(11)
    doc.add_paragraph()

doc.add_page_break()

# 7 注意事项
add_h1('7  注意事项')

notices = [
    '本系统为辅助监控工具，不能完全替代现场人工巡检和专业安全检测设备。',
    '请确保Android设备和防爆电源设备均处于良好的网络覆盖范围内，以保证数据传输的实时性。',
    '远程控制操作前请确认现场环境安全，避免在危险情况下进行不必要的操作。',
    '如发现监测数据异常，请立即安排专业人员到现场排查处理。',
    '请定期更新应用版本，以获得最新的功能和安全修复。',
    '本系统依赖于OneNET物联网平台的正常运行，平台维护或故障可能影响系统使用。',
    '请妥善保管Android设备，避免因设备丢失导致监控中断。',
]
for i, notice in enumerate(notices, 1):
    p = doc.add_paragraph()
    run = p.add_run(f'{i}. {notice}')
    run.font.size = Pt(11)

# 保存
save_path = '用户手册.docx'
doc.save(save_path)
print(f'用户手册已保存: {save_path}')
import os
print(f'文件大小: {os.path.getsize(save_path)} 字节')
