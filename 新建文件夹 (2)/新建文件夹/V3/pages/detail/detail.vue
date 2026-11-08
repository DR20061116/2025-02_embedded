<template>
	<view>
		<!-- 跌倒全屏报警遮罩 -->
		<view class="fall-overlay" v-if="f1 === 'true'">
			<view class="fall-alert-big">
				<text class="fall-alert-icon">⚠️</text>
				<text class="fall-alert-title">跌倒报警!</text>
				<text class="fall-alert-sub">老人可能已跌倒，请立即确认!</text>
				<view class="fall-alert-info">
					<text>体温: {{t1}}°C</text>
					<text>心率: {{h1}} BPM</text>
					<text>血氧: {{o1}}%</text>
				</view>
				<view class="fall-alert-gps" v-if="gps_lat !== '--'">
					<text>GPS: {{gps_lat}}, {{gps_lon}}</text>
				</view>
				<button class="fall-alert-btn" @click="onFallReset">解除报警</button>
			</view>
		</view>

		<view class="wrap">
			<!-- 时间天气 -->
			<view class="weather-section">
				<view class="weather-left">
					<text class="weather-icon">{{weatherIcon}}</text>
					<view>
						<text class="weather-temp">{{weatherTemp}}&deg;C</text>
						<text class="weather-desc">{{weatherDesc}} · {{weatherWind}}</text>
					</view>
				</view>
				<view class="weather-right">
					<text class="weather-time">{{clockTime}}</text>
					<text class="weather-date">{{clockDate}}</text>
					<text class="weather-location">{{weatherLoc}}</text>
				</view>
			</view>

			<!-- 个人信息 -->
			<view class="profile-section">
				<view class="profile-avatar">&#x1F474;</view>
				<view class="profile-info">
					<text class="profile-name">OLD</text>
					<text class="profile-desc">老人监护设备 · 实时监测中</text>
				</view>
				<view class="status-badge" :class="deviceOnline ? 'online' : 'offline'">
					{{ deviceOnline ? '已连接' : '未连接' }}
				</view>
			</view>

			<!-- 三指标 -->
			<view class="metric-row">
				<view class="metric-card temp">
					<view class="metric-label">&#x1F321; 体温</view>
					<view class="metric-value">{{t1}}<text class="metric-unit">&deg;C</text></view>
				</view>
				<view class="metric-card heart">
					<view class="metric-label">&#x2764; 心率</view>
					<view class="metric-value">{{h1}}<text class="metric-unit">BPM</text></view>
				</view>
				<view class="metric-card spo2">
					<view class="metric-label">&#x1F0CF; 血氧</view>
					<view class="metric-value">{{o1}}<text class="metric-unit">%</text></view>
				</view>
			</view>

			<!-- 跌倒状态 -->
			<view class="fall-section">
				<view class="fall-card" :class="f1 === 'true' ? 'fall-alert' : 'fall-normal'">
					<view class="fall-icon">{{ f1 === 'true' ? '&#x26A0;' : '&#x2705;' }}</view>
					<view class="fall-info">
						<view class="fall-label">跌倒状态</view>
						<view class="fall-status">{{ f1 === 'true' ? '已跌倒！' : '正常' }}</view>
					</view>
				</view>
			</view>

			<!-- GPS + 药箱 -->
			<view class="row-2col">
				<view class="gps-card">
					<view class="section-title">&#x1F4CD; GPS</view>
					<view class="gps-row"><text class="gps-label">纬度</text><text class="gps-value">{{gps_lat}}</text></view>
					<view class="gps-row"><text class="gps-label">经度</text><text class="gps-value">{{gps_lon}}</text></view>
				</view>
				<view class="med-card">
					<view class="section-title">&#x1F48A; 药箱</view>
					<view class="med-icon-big">&#x1F4E6;</view>
					<view class="med-status">{{ med_id === '0' || med_id === '--' ? '无待分发' : '已分发 ' + med_id }}</view>
				</view>
			</view>

			<!-- SOS -->
			<view class="sos-section">
				<view class="section-title">&#x1F198; SOS 紧急</view>
				<view class="sos-row">
					<view class="sos-card" :class="sos_flag === 'true' ? 'sos-active' : 'sos-idle'">
						<view class="sos-status-text">{{ sos_flag === 'true' ? 'SOS已触发' : '正常' }}</view>
					</view>
				</view>
				<view class="sos-btn-row">
					<button class="sos-btn sos-btn-on" @click="onSosOn">触发SOS</button>
					<button class="sos-btn sos-btn-off" @click="onSosOff">解除SOS</button>
				</view>
			</view>

			<!-- 远程控制 -->
			<view class="control-section">
				<view class="section-title">&#x1F527; 远程控制</view>
				<view class="control-card">
					<view class="control-info">
						<text class="control-icon">&#x1F514;</text>
						<text class="control-label">蜂鸣器</text>
					</view>
					<view class="control-btns">
						<button class="ctrl-btn ctrl-on" :class="buzzerOn ? 'active' : ''" @click="onBuzzerOn">开启</button>
						<button class="ctrl-btn ctrl-off" :class="!buzzerOn ? 'active' : ''" @click="onBuzzerOff">关闭</button>
					</view>
				</view>
				<view class="control-card">
					<view class="control-info">
						<text class="control-icon">&#x1F4A1;</text>
						<text class="control-label">LED</text>
					</view>
					<view class="control-btns">
						<button class="ctrl-btn ctrl-on" :class="ledOn ? 'active' : ''" @click="onLedOn">开启</button>
						<button class="ctrl-btn ctrl-off" :class="!ledOn ? 'active' : ''" @click="onLedOff">关闭</button>
					</view>
				</view>
				<view class="control-card">
					<view class="control-info">
						<text class="control-icon">&#x1F48A;</text>
						<text class="control-label">药箱</text>
					</view>
					<view class="med-ctrl-btns">
						<button class="med-btn med-1" @click="onMed(1)">药1</button>
						<button class="med-btn med-2" @click="onMed(2)">药2</button>
						<button class="med-btn med-3" @click="onMed(3)">药3</button>
						<button class="med-btn med-4" @click="onMed(4)">药4</button>
						<button class="med-btn med-5" @click="onMed(5)">药5</button>
						<button class="med-btn med-off" @click="onMed(0)">&#x2715;</button>
					</view>
				</view>
				<view class="control-card">
					<view class="control-info">
						<text class="control-icon">&#x1F6E1;</text>
						<text class="control-label">复位跌倒</text>
					</view>
					<button class="reset-btn" @click="onFallReset" :disabled="f1 !== 'true'">复位报警</button>
				</view>
			</view>

			<view class="footer">
				<text class="footer-time">最后更新: {{lastUpdate}}</text>
			</view>
		</view>
	</view>
</template>

<script>
const { createCommonToken } = require('@/key.js')

const PRODUCT_ID = 'HIH5Gb1Urm'
const DEVICE_NAME = 'OLD'
const OFFLINE_THRESHOLD_MS = 15000

const WEATHER_DATA = [
	{ icon: '☀️', temp: 32, desc: '晴', city: '陕西西安', wind: '西北风' },
]

export default {
	data() {
		return {
			t1: '--',
			h1: '--',
			o1: '--',
			f1: 'false',
			gps_lat: '--',
			gps_lon: '--',
			sos_flag: 'false',
			med_id: '--',
			buzzerOn: false,
			ledOn: false,
			deviceOnline: false,
			lastUpdate: '',
			lastUpdateTick: 0,
			token: '',
			settingInProgress: null,
			dataTimer: null,
			onlineCheckTimer: null,
			clockTimer: null,
			clockTime: '',
			clockDate: '',
			weatherIcon: '☀️',
			weatherTemp: 32,
			weatherDesc: '晴',
			weatherLoc: '陕西西安',
			weatherWind: '西北风',
		}
	},

	onLoad() {
		this.initToken()
		this.initWeather()
		this.updateClock()
		this.clockTimer = setInterval(() => this.updateClock(), 1000)
	},

	onShow() {
		this.startDataUpdate()
		this.startOnlineCheck()
	},

	onHide() {
		this.stopDataUpdate()
		this.stopOnlineCheck()
	},

	onUnload() {
		this.stopDataUpdate()
		this.stopOnlineCheck()
		if (this.clockTimer) clearInterval(this.clockTimer)
	},

	methods: {
		initWeather() {
			const w = WEATHER_DATA[Math.floor(Math.random() * WEATHER_DATA.length)]
			this.weatherIcon = w.icon
			this.weatherTemp = w.temp
			this.weatherDesc = w.desc
			this.weatherLoc = w.city
			this.weatherWind = w.wind
		},

		updateClock() {
			const d = new Date()
			const pad = n => n.toString().padStart(2, '0')
			this.clockTime = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
			const weekdays = ['日', '一', '二', '三', '四', '五', '六']
			this.clockDate = `${d.getFullYear()}年${pad(d.getMonth()+1)}月${pad(d.getDate())}日 周${weekdays[d.getDay()]}`
		},

		initToken() {
			try {
				const params = {
					author_key: 'c0a787ec7ab54a4b87c594006cc06dba',
					version: '2022-05-01',
					user_id: '490050',
				}
				this.token = createCommonToken(params)
			} catch (e) {
				console.error('Token 生成失败', e)
			}
		},

		startOnlineCheck() {
			this.stopOnlineCheck()
			this.onlineCheckTimer = setInterval(() => {
				if (this.lastUpdateTick > 0 && (Date.now() - this.lastUpdateTick) > OFFLINE_THRESHOLD_MS) {
					this.deviceOnline = false
				}
			}, 3000)
		},

		stopOnlineCheck() {
			if (this.onlineCheckTimer) {
				clearInterval(this.onlineCheckTimer)
				this.onlineCheckTimer = null
			}
		},

		startDataUpdate() {
			this.stopDataUpdate()
			this.fetchDevData()
			this.dataTimer = setInterval(() => this.fetchDevData(), 3000)
		},

		stopDataUpdate() {
			if (this.dataTimer) {
				clearInterval(this.dataTimer)
				this.dataTimer = null
			}
		},

		formatTime() {
			const d = new Date()
			const pad = n => n.toString().padStart(2, '0')
			return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
		},

		fetchDevData() {
			if (!this.token) this.initToken()
			uni.request({
				url: 'https://iot-api.heclouds.com/thingmodel/query-device-property',
				method: 'GET',
				data: { product_id: PRODUCT_ID, device_name: DEVICE_NAME },
				header: { authorization: this.token },
				success: (res) => {
					if (res.data.code === 10403) {
						this.initToken()
						this.retryFetchDevData()
						return
					}
					if (!res.data.data) return
					res.data.data.forEach(item => {
						switch (item.identifier) {
							case 'current_temp': this.t1 = item.value; break
							case 'heart_rate': this.h1 = item.value; break
							case 'spo2': this.o1 = item.value; break
							case 'sy_Fall': this.f1 = String(item.value); break
							case 'gps_latitude': this.gps_lat = String(parseFloat(item.value).toFixed(6)); break
							case 'gps_longitude': this.gps_lon = String(parseFloat(item.value).toFixed(6)); break
							case 'sos_flag': this.sos_flag = String(item.value); break
							case 'medicine_id': this.med_id = String(parseInt(item.value)); break
							case 'Buzzer': this.buzzerOn = Boolean(item.value); break
							case 'LED': this.ledOn = Boolean(item.value); break
						}
					})
					this.deviceOnline = true
					this.lastUpdateTick = Date.now()
					this.lastUpdate = this.formatTime()
				},
				fail: (err) => { console.log('获取数据失败', err) }
			})
		},

		retryFetchDevData() {
			if (!this.token) return
			uni.request({
				url: 'https://iot-api.heclouds.com/thingmodel/query-device-property',
				method: 'GET',
				data: { product_id: PRODUCT_ID, device_name: DEVICE_NAME },
				header: { authorization: this.token },
				success: (retryRes) => {
					if (!retryRes.data.data) return
					this.processDevData(retryRes.data.data)
				},
				fail: (err) => { console.log('重试获取数据失败', err) }
			})
		},

		processDevData(data) {
			data.forEach(item => {
				switch (item.identifier) {
					case 'current_temp': this.t1 = item.value; break
					case 'heart_rate': this.h1 = item.value; break
					case 'spo2': this.o1 = item.value; break
					case 'sy_Fall': this.f1 = String(item.value); break
					case 'gps_latitude': this.gps_lat = String(parseFloat(item.value).toFixed(6)); break
					case 'gps_longitude': this.gps_lon = String(parseFloat(item.value).toFixed(6)); break
					case 'sos_flag': this.sos_flag = String(item.value); break
					case 'medicine_id': this.med_id = String(parseInt(item.value)); break
					case 'Buzzer': this.buzzerOn = Boolean(item.value); break
				case 'LED': this.ledOn = Boolean(item.value); break
				}
			})
			this.deviceOnline = true
			this.lastUpdateTick = Date.now()
			this.lastUpdate = this.formatTime()
		},

		setDeviceProperty(field, value) {
			if (this.settingInProgress === field) return
			this.settingInProgress = field
			const params = {}
			params[field] = { value }
			uni.request({
				url: 'https://iot-api.heclouds.com/thingmodel/set-device-property',
				method: 'POST',
				data: { product_id: PRODUCT_ID, device_name: DEVICE_NAME, params },
				header: { authorization: this.token, 'Content-Type': 'application/json' },
				success: () => {
					uni.showToast({ title: '设置成功', icon: 'success', duration: 1500 })
				},
				fail: (err) => {
					console.log(field + '=' + JSON.stringify(value) + ' fail', err)
					if (err.data && err.data.code === 10403) this.initToken()
					uni.showToast({ title: '设置失败', icon: 'none', duration: 1500 })
				},
				complete: () => { this.settingInProgress = null }
			})
		},

		onBuzzerOn() { this.buzzerOn = true; this.setDeviceProperty('Buzzer', true) },
		onBuzzerOff() { this.buzzerOn = false; this.setDeviceProperty('Buzzer', false) },
		onLedOn() { this.ledOn = true; this.setDeviceProperty('LED', true) },
		onLedOff() { this.ledOn = false; this.setDeviceProperty('LED', false) },
		onMed(id) {
			if (id === 0) {
				this.med_id = '0'
			} else {
				this.med_id = String(id)
			}
			this.setDeviceProperty('medicine_id', id)
		},
		onSosOn() { this.sos_flag = 'true'; this.setDeviceProperty('sos_flag', true) },
		onSosOff() { this.sos_flag = 'false'; this.setDeviceProperty('sos_flag', false) },
		onFallReset() { this.setDeviceProperty('sy_Fall', false) },
	}
}
</script>

<style>
.wrap {
	padding: 20rpx 30rpx 40rpx;
	background: #eef0f5;
	min-height: 100vh;
	overflow-y: auto;
	box-sizing: border-box;
}

/* 卡片入场动画（分段淡入上移） */
.wrap > view { animation: cardFade .5s ease both; }
.wrap > view:nth-child(2) { animation-delay: .05s; }
.wrap > view:nth-child(3) { animation-delay: .1s; }
.wrap > view:nth-child(4) { animation-delay: .15s; }
.wrap > view:nth-child(5) { animation-delay: .2s; }
.wrap > view:nth-child(6) { animation-delay: .25s; }
.wrap > view:nth-child(7) { animation-delay: .3s; }
.wrap > view:nth-child(8) { animation-delay: .35s; }
@keyframes cardFade {
	from { opacity: 0; transform: translateY(16rpx); }
	to { opacity: 1; transform: translateY(0); }
}

/* 统一去除 uni button 默认边框 */
button::after { border: none; }

/* 统一卡片阴影 */
.weather-section,
.profile-section,
.metric-card,
.fall-card,
.row-2col > view,
.control-card {
	box-shadow: 0 6rpx 24rpx rgba(31, 45, 61, 0.08);
}

/* 跌倒全屏 */
.fall-overlay {
	position: fixed;
	top: 0; left: 0; right: 0; bottom: 0;
	background: rgba(231, 76, 60, 0.92);
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
}
.fall-alert-big { text-align: center; padding: 60rpx; color: #fff; }
.fall-alert-icon { font-size: 120rpx; display: block; }
.fall-alert-title { font-size: 80rpx; font-weight: bold; margin: 20rpx 0; }
.fall-alert-sub { font-size: 36rpx; opacity: 0.9; }
.fall-alert-info { margin: 40rpx 0; font-size: 32rpx; display: flex; flex-direction: column; gap: 12rpx; }
.fall-alert-gps { font-size: 28rpx; opacity: 0.8; margin-bottom: 40rpx; }
.fall-alert-btn { background: #fff; color: #e74c3c; font-size: 36rpx; padding: 24rpx 80rpx; border-radius: 60rpx; border: none; font-weight: bold; box-shadow: 0 10rpx 24rpx rgba(0,0,0,0.15); }

/* 天气时间（晴日蓝天渐变） */
.weather-section {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: linear-gradient(135deg, #4a90e2, #2878d0);
	border-radius: 28rpx;
	padding: 26rpx 30rpx;
	margin-bottom: 24rpx;
	color: #fff;
	overflow: hidden;
	position: relative;
}
.weather-section::after {
	content: '';
	position: absolute;
	right: -40rpx; top: -40rpx;
	width: 200rpx; height: 200rpx;
	border-radius: 50%;
	background: rgba(255, 214, 102, 0.35);
}
.weather-left { display: flex; align-items: center; gap: 18rpx; position: relative; z-index: 1; }
.weather-icon { font-size: 68rpx; }
.weather-temp { font-size: 46rpx; font-weight: bold; display: block; letter-spacing: 1rpx; }
.weather-desc { font-size: 24rpx; opacity: 0.92; margin-top: 2rpx; display: block; }
.weather-right { text-align: right; position: relative; z-index: 1; }
.weather-time { font-size: 48rpx; font-weight: bold; display: block; letter-spacing: 2rpx; }
.weather-date { font-size: 22rpx; opacity: 0.85; display: block; margin-top: 6rpx; }
.weather-location { font-size: 22rpx; opacity: 0.75; display: block; margin-top: 4rpx; }

/* 个人信息 */
.profile-section {
	display: flex;
	align-items: center;
	background: linear-gradient(135deg, #5b6ee8, #7a4dbf);
	border-radius: 28rpx;
	padding: 28rpx 30rpx;
	margin-bottom: 24rpx;
	color: #fff;
}
.profile-avatar {
	width: 96rpx; height: 96rpx;
	border-radius: 50%;
	background: rgba(255,255,255,0.18);
	display: flex; align-items: center; justify-content: center;
	font-size: 56rpx;
	margin-right: 24rpx;
}
.profile-info { flex: 1; }
.profile-name { font-size: 36rpx; font-weight: bold; display: block; letter-spacing: 2rpx; }
.profile-desc { font-size: 22rpx; opacity: 0.85; margin-top: 6rpx; display: block; }
.status-badge {
	font-size: 22rpx;
	padding: 10rpx 22rpx;
	border-radius: 30rpx;
	font-weight: bold;
	letter-spacing: 1rpx;
	box-shadow: inset 0 2rpx 6rpx rgba(0,0,0,0.12);
}
.status-badge.online { background: rgba(39, 174, 96, 0.35); color: #eafff1; }
.status-badge.offline { background: rgba(149, 165, 166, 0.35); color: #e8eef1; }

/* 三指标 */
.metric-row { display: flex; justify-content: space-between; margin-bottom: 20rpx; }
.metric-card {
	width: 30%;
	border-radius: 24rpx;
	padding: 28rpx 12rpx 22rpx;
	text-align: center;
	background: #fff;
	position: relative;
	overflow: hidden;
}
.metric-card::before {
	content: '';
	position: absolute;
	top: 0; left: 0; right: 0;
	height: 8rpx;
}
.metric-card.temp::before { background: linear-gradient(90deg, #ff7675, #e74c3c); }
.metric-card.heart::before { background: linear-gradient(90deg, #fd79a8, #e84393); }
.metric-card.spo2::before { background: linear-gradient(90deg, #74b9ff, #0984e3); }
.metric-label { font-size: 22rpx; color: #636e72; margin-bottom: 12rpx; }
.metric-value { font-size: 56rpx; font-weight: bold; color: #2d3436; }
.metric-unit { font-size: 22rpx; color: #a0a8ad; margin-left: 4rpx; }

/* 跌倒 */
.fall-section { margin-bottom: 24rpx; }
.fall-card { display: flex; align-items: center; border-radius: 24rpx; padding: 30rpx; }
.fall-card.fall-normal { background: #e7f6ec; border: 2rpx solid #2fbf6a; }
.fall-card.fall-alert { background: #fdeceb; border: 2rpx solid #e74c3c; animation: pulse 1.5s infinite; }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.72; } }
.fall-icon {
	width: 88rpx; height: 88rpx;
	border-radius: 50%;
	display: flex; align-items: center; justify-content: center;
	font-size: 48rpx;
	background: #fff;
	margin-right: 24rpx;
}
.fall-info { flex: 1; }
.fall-label { font-size: 24rpx; color: #636e72; }
.fall-status { font-size: 36rpx; font-weight: bold; margin-top: 6rpx; }
.fall-card.fall-normal .fall-status { color: #1d9e57; }
.fall-card.fall-alert .fall-status { color: #e74c3c; }

/* 分区标题（左侧渐变条） */
.section-title {
	position: relative;
	font-size: 28rpx;
	font-weight: bold;
	color: #2c3e50;
	margin-bottom: 16rpx;
	padding-left: 20rpx;
}
.section-title::before {
	content: '';
	position: absolute;
	left: 0; top: 50%;
	transform: translateY(-50%);
	width: 8rpx; height: 24rpx;
	border-radius: 4rpx;
	background: linear-gradient(180deg, #667eea, #764ba2);
}

/* GPS + 药箱 双栏 */
.row-2col { display: flex; gap: 20rpx; margin-bottom: 24rpx; }
.row-2col > view { flex: 1; background: #fff; border-radius: 24rpx; padding: 24rpx; }
.gps-row { display: flex; justify-content: space-between; padding: 8rpx 0; font-size: 28rpx; }
.gps-label { color: #8a9298; }
.gps-value { font-weight: bold; color: #2d3436; }
.med-card { text-align: center; position: relative; overflow: hidden; }
.med-card::before {
	content: '';
	position: absolute;
	top: 0; left: 0; right: 0;
	height: 6rpx;
	background: linear-gradient(90deg, #a29bfe, #6c5ce7);
}
.med-icon-big { font-size: 56rpx; margin: 12rpx 0; }
.med-status { font-size: 28rpx; color: #2d3436; font-weight: bold; }

/* SOS */
.sos-section { margin-bottom: 24rpx; }
.sos-row { margin-bottom: 16rpx; }
.sos-card { padding: 22rpx; border-radius: 20rpx; text-align: center; }
.sos-card.sos-active { background: #fdeceb; border: 2rpx solid #e74c3c; animation: sosPulse 1.6s infinite; }
.sos-card.sos-idle { background: #e9f9ef; border: 2rpx solid #2fbf6a; }
@keyframes sosPulse {
	0%, 100% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.4); }
	50% { box-shadow: 0 0 0 18rpx rgba(231, 76, 60, 0); }
}
.sos-status-text { font-size: 32rpx; font-weight: bold; letter-spacing: 2rpx; }
.sos-card.sos-active .sos-status-text { color: #e74c3c; }
.sos-card.sos-idle .sos-status-text { color: #1d9e57; }
.sos-btn-row { display: flex; gap: 20rpx; margin-bottom: 8rpx; }
.sos-btn {
	flex: 1; font-size: 28rpx; padding: 22rpx;
	border-radius: 22rpx; border: none; color: #fff;
	font-weight: bold; text-align: center; line-height: initial;
	transition: transform .15s ease;
}
.sos-btn-on { background: linear-gradient(135deg, #ff7675, #e74c3c); box-shadow: 0 8rpx 20rpx rgba(231,76,60,0.25); }
.sos-btn-off { background: #8a9298; }
.sos-btn:active { transform: scale(0.96); }

/* 远程控制 */
.control-section { margin-bottom: 24rpx; }
.control-card {
	display: flex; align-items: center; justify-content: space-between;
	background: #fff; border-radius: 24rpx;
	padding: 24rpx 30rpx; margin-bottom: 16rpx;
}
.control-info { display: flex; align-items: center; gap: 16rpx; flex: 1; }
.control-icon { font-size: 40rpx; }
.control-label { font-size: 28rpx; font-weight: bold; color: #2d3436; }
.control-btns { display: flex; gap: 12rpx; }
.ctrl-btn {
	font-size: 24rpx; padding: 14rpx 30rpx; border-radius: 30rpx;
	border: 2rpx solid #cfd6db; background: #fff; color: #7c858b;
	font-weight: bold; line-height: initial; text-align: center;
	transition: all .15s ease;
}
.ctrl-btn.active { border-color: transparent; color: #fff; }
.ctrl-on.active { background: #2fbf6a; box-shadow: 0 6rpx 16rpx rgba(47,191,106,0.3); }
.ctrl-off.active { background: #e74c3c; box-shadow: 0 6rpx 16rpx rgba(231,76,60,0.3); }
.ctrl-btn:active { transform: scale(0.95); }
.reset-btn {
	background: linear-gradient(135deg, #ff7675, #e74c3c); color: #fff;
	font-size: 26rpx; padding: 14rpx 32rpx; border-radius: 40rpx; border: none;
	min-width: 160rpx; text-align: center; line-height: initial;
	transition: transform .15s ease;
}
.reset-btn:active { transform: scale(0.95); }
.reset-btn[disabled] { background: #c2c9cf; box-shadow: none; }
.med-ctrl-btns { display: flex; flex-wrap: wrap; gap: 12rpx; }
.med-btn {
	font-size: 22rpx; padding: 14rpx 22rpx; border-radius: 30rpx; border: none;
	color: #fff; font-weight: bold; text-align: center; line-height: initial; min-width: 72rpx;
	transition: transform .15s ease;
}
.med-btn:active { transform: scale(0.92); }
.med-1 { background: #e17055; }
.med-2 { background: #fdcb6e; color: #2d3436; }
.med-3 { background: #00b894; }
.med-4 { background: #0984e3; }
.med-5 { background: #6c5ce7; }
.med-off { background: #8a9298; }

.footer { text-align: center; padding: 24rpx 0 40rpx; border-top: 2rpx solid #e3e6ec; margin-top: 8rpx; }
.footer-time { font-size: 22rpx; color: #b8bec6; }
</style>
