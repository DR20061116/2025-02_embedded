<template>
	<view class="container">
		<!-- 环境数据 -->
		<view class="env-data-card">
			<view class="card-title">环境数据监测</view>
			<view class="env-grid">
				<!-- 第一行 -->
				<view class="env-item" :class="{ 'exceed-limit': t1 > t2 || t1 < t3 }">
					<view class="env-label">当前温度</view>
					<view class="env-value">{{ t1 }}°C</view>
					<view class="env-status" v-if="t1 > t2">超过上限</view>
					<view class="env-status" v-else-if="t1 < t3">低于下限</view>
				</view>
				<view class="env-item" :class="{ 'exceed-limit': h1 > h2 || h1 < h3 }">
					<view class="env-label">当前湿度</view>
					<view class="env-value">{{ h1 }}%</view>
					<view class="env-status" v-if="h1 > h2">超过上限</view>
					<view class="env-status" v-else-if="h1 < h3">低于下限</view>
				</view>
				
				<!-- 第二行 -->
				<view class="env-item" :class="{ 'exceed-limit': c1 > c2 || c1 < c3 }">
					<view class="env-label">二氧化碳</view>
					<view class="env-value">{{ c1 }}ppm</view>
					<view class="env-status" v-if="c1 > c2">超过上限</view>
					<view class="env-status" v-else-if="c1 < c3">低于下限</view>
				</view>
				<view class="env-item" :class="{ 'exceed-limit': l1 > l2 || l1 < l3 }">
					<view class="env-label">光照强度</view>
					<view class="env-value">{{ l1 }}lux</view>
					<view class="env-status" v-if="l1 > l2">超过上限</view>
					<view class="env-status" v-else-if="l1 < l3">低于下限</view>
				</view>
				
				<!-- 第三行 -->
				<view class="env-item" :class="{ 'exceed-limit': o1 > o2 || o1 < o3 }">
					<view class="env-label">甲醛浓度</view>
					<view class="env-value">{{ o1 }}mg/m³</view>
					<view class="env-status" v-if="o1 > o2">超过上限</view>
					<view class="env-status" v-else-if="o1 < o3">低于下限</view>
				</view>
				<view class="env-item" :class="{ 'exceed-limit': p1 > p2 || p1 < p3 }">
					<view class="env-label">PM2.5</view>
					<view class="env-value">{{ p1 }}μg/m³</view>
					<view class="env-status" v-if="p1 > p2">超过上限</view>
					<view class="env-status" v-else-if="p1 < p3">低于下限</view>
				</view>
			</view>
		</view>
		
		<!-- 当前阈值显示 -->
		<view class="threshold-display-card">
			<view class="card-title">当前阈值设置</view>
			<view class="threshold-grid">
				<view class="threshold-item">
					<view class="threshold-label">温度范围</view>
					<view class="threshold-value">{{ t3 }} ~ {{ t2 }}°C</view>
				</view>
				<view class="threshold-item">
					<view class="threshold-label">湿度范围</view>
					<view class="threshold-value">{{ h3 }} ~ {{ h2 }}%</view>
				</view>
				<view class="threshold-item">
					<view class="threshold-label">CO₂范围</view>
					<view class="threshold-value">{{ c3 }} ~ {{ c2 }}ppm</view>
				</view>
				<view class="threshold-item">
					<view class="threshold-label">光照范围</view>
					<view class="threshold-value">{{ l3 }} ~ {{ l2 }}lux</view>
				</view>
				<view class="threshold-item">
					<view class="threshold-label">甲醛范围</view>
					<view class="threshold-value">{{ o3 }} ~ {{ o2 }}mg/m³</view>
				</view>
				<view class="threshold-item">
					<view class="threshold-label">PM2.5范围</view>
					<view class="threshold-value">{{ p3 }} ~ {{ p2 }}μg/m³</view>
				</view>
			</view>
		</view>
		
		<!-- 阈值设置区域 -->
		<view class="threshold-area">
			<view class="section-title">阈值设置</view>
			<view class="threshold-form">
				<view class="form-row">
					<view class="input-group">
						<text class="input-label">温度上限 (°C)</text>
						<input class="input-field" type="number" v-model="tempUpperLimit" :placeholder="'当前: ' + t2" />
					</view>
					<view class="input-group">
						<text class="input-label">温度下限 (°C)</text>
						<input class="input-field" type="number" v-model="tempLowerLimit" :placeholder="'当前: ' + t3" />
					</view>
				</view>
				
				<view class="form-row">
					<view class="input-group">
						<text class="input-label">湿度上限 (%)</text>
						<input class="input-field" type="number" v-model="humidityUpperLimit" :placeholder="'当前: ' + h2" />
					</view>
					<view class="input-group">
						<text class="input-label">湿度下限 (%)</text>
						<input class="input-field" type="number" v-model="humidityLowerLimit" :placeholder="'当前: ' + h3" />
					</view>
				</view>
				
				<view class="form-row">
					<view class="input-group">
						<text class="input-label">CO₂上限 (ppm)</text>
						<input class="input-field" type="number" v-model="co2UpperLimit" :placeholder="'当前: ' + c2" />
					</view>
					<view class="input-group">
						<text class="input-label">CO₂下限 (ppm)</text>
						<input class="input-field" type="number" v-model="co2LowerLimit" :placeholder="'当前: ' + c3" />
					</view>
				</view>
				
				<view class="form-row">
					<view class="input-group">
						<text class="input-label">光照上限 (lux)</text>
						<input class="input-field" type="number" v-model="lightUpperLimit" :placeholder="'当前: ' + l2" />
					</view>
					<view class="input-group">
						<text class="input-label">光照下限 (lux)</text>
						<input class="input-field" type="number" v-model="lightLowerLimit" :placeholder="'当前: ' + l3" />
					</view>
				</view>
				
				<view class="form-row">
					<view class="input-group">
						<text class="input-label">甲醛上限 (mg/m³)</text>
						<input class="input-field" type="number" step="0.01" v-model="formaldehydeUpperLimit" :placeholder="'当前: ' + o2" />
					</view>
					<view class="input-group">
						<text class="input-label">甲醛下限 (mg/m³)</text>
						<input class="input-field" type="number" step="0.01" v-model="formaldehydeLowerLimit" :placeholder="'当前: ' + o3" />
					</view>
				</view>
				
				<view class="form-row">
					<view class="input-group">
						<text class="input-label">PM2.5上限 (μg/m³)</text>
						<input class="input-field" type="number" v-model="pm25UpperLimit" :placeholder="'当前: ' + p2" />
					</view>
					<view class="input-group">
						<text class="input-label">PM2.5下限 (μg/m³)</text>
						<input class="input-field" type="number" v-model="pm25LowerLimit" :placeholder="'当前: ' + p3" />
					</view>
				</view>
				
				<view class="button-group">
					<button class="submit-btn" @click="setThresholds" :disabled="isSettingThresholds">
						{{ isSettingThresholds ? '设置中...' : '设置所有阈值' }}
					</button>
					<button class="reset-btn" @click="resetInputs" :disabled="isSettingThresholds">
						重置输入
					</button>
				</view>
			</view>
		</view>
		
		<!-- 控制按钮区域 -->
		<view class="control-buttons">
			<view class="button-row">
				<button class="history-btn" @click="navigateToHistory">
					查看历史数据
				</button>
				<button class="refresh-btn" @click="manualRefresh" :disabled="isRefreshing">
					{{ isRefreshing ? '刷新中...' : '刷新数据' }}
				</button>
			</view>
		</view>
		
		<view class="last-update">
			<text>最后更新: {{ lastUpdateTime }}</text>
			<text class="storage-status" v-if="lastStorageTime">
				最后存储: {{ lastStorageTime }}
			</text>
		</view>
		
		<!-- 异常提示 -->
		<view v-if="hasExceededLimit" class="warning-banner">
			<text class="warning-text">⚠️ 有环境参数超出阈值范围</text>
		</view>
	</view>
</template>

<script>
	import DB from "@/sqlite.js";  // 引入封装的 sqlite
	
	export default {
		data() {
			return {
				// 当前监测值
				t1: 0, // 温度
				h1: 0, // 湿度
				c1: 0, // 二氧化碳
				l1: 0, // 光照强度
				o1: 0, // 甲醛
				p1: 0, // PM2.5
				
				// 阈值上限
				t2: 0, // 温度上限
				h2: 0, // 湿度上限
				c2: 0, // 二氧化碳上限
				l2: 0, // 光照强度上限
				o2: 0, // 甲醛上限
				p2: 0, // PM2.5上限
				
				// 阈值下限
				t3: 0, // 温度下限
				h3: 0, // 湿度下限
				c3: 0, // 二氧化碳下限
				l3: 0, // 光照强度下限
				o3: 0, // 甲醛下限
				p3: 0, // PM2.5下限
				
				// 阈值输入
				tempUpperLimit: '',
				tempLowerLimit: '',
				humidityUpperLimit: '',
				humidityLowerLimit: '',
				co2UpperLimit: '',
				co2LowerLimit: '',
				lightUpperLimit: '',
				lightLowerLimit: '',
				formaldehydeUpperLimit: '',
				formaldehydeLowerLimit: '',
				pm25UpperLimit: '',
				pm25LowerLimit: '',
				
				// 系统配置
				token: 'version=2018-10-31&res=products%2F9m275ij5mP%2Fdevices%2Fd1&et=1919398822&method=md5&sign=7lx%2FDUCbaBIvP1sY4XSyKA%3D%3D',
				productId: '9m275ij5mP',
				deviceName: 'd1',
				lastUpdateTime: '--',
				lastStorageTime: '',
				updateIntervalId: null,
				storageIntervalId: null,
				isSettingThresholds: false,
				isRefreshing: false,
				storageCount: 0
			}
		},
		computed: {
			hasExceededLimit() {
				return (
					this.t1 > this.t2 || this.t1 < this.t3 ||
					this.h1 > this.h2 || this.h1 < this.h3 ||
					this.c1 > this.c2 || this.c1 < this.c3 ||
					this.l1 > this.l2 || this.l1 < this.l3 ||
					this.o1 > this.o2 || this.o1 < this.o3 ||
					this.p1 > this.p2 || this.p1 < this.p3
				);
			}
		},
		onShow() {
			this.initDatabase();
			this.fetchDeviceData();
			
			// 每3秒获取一次设备数据
			this.updateIntervalId = setInterval(() => {
				this.fetchDeviceData();
			}, 3000);
			
			// 每60秒存储一次数据到数据库
			this.storageIntervalId = setInterval(() => {
				this.saveCurrentData();
			}, 60000);
			
			// 页面显示时立即存储一次数据
			setTimeout(() => {
				this.saveCurrentData();
			}, 1000);
		},
		onHide() {
			if (this.updateIntervalId) {
				clearInterval(this.updateIntervalId);
			}
			if (this.storageIntervalId) {
				clearInterval(this.storageIntervalId);
			}
		},
		methods: {
			// 初始化数据库
			async initDatabase() {
				try {
					await this.openSQL();
					// 创建环境数据记录表
					const envDataTableSql = `"id" INTEGER PRIMARY KEY AUTOINCREMENT, 
						"record_time" TEXT, 
						"temperature" REAL, 
						"humidity" REAL, 
						"co2" REAL, 
						"light" REAL, 
						"formaldehyde" REAL, 
						"pm25" REAL,
						"date" TEXT,
						"exceed_limit" INTEGER DEFAULT 0`;
					await DB.createTable("environment_records", envDataTableSql);
					console.log('环境数据记录表创建成功');
				} catch (error) {
					console.error('数据库初始化失败:', error);
				}
			},
			
			// 打开数据库
			openSQL() {
				return new Promise((resolve, reject) => {
					let open = DB.isOpen();
					if (!open) {
						DB.openSqlite()
							.then(res => {
								resolve(res);
							})
							.catch(error => {
								reject(error);
							});
					} else {
						resolve(true);
					}
				});
			},
			
			fetchDeviceData() {
				uni.request({
					url: 'https://iot-api.heclouds.com/thingmodel/query-device-property',
					method: 'GET',
					data: {
						product_id: this.productId,
						device_name: this.deviceName
					},
					header: {
						'authorization': this.token
					},
					success: (res) => {
						if (res.statusCode === 200 && res.data && res.data.data) {
							const data = res.data.data;
							
							// 查找所有需要的属性
							const findValue = (identifier, defaultValue = 0) => {
								const item = data.find(item => item.identifier === identifier);
								return item ? Number(item.value) : defaultValue;
							};
							
							// 更新当前监测值
							this.t1 = findValue('t1');
							this.h1 = findValue('h1');
							this.c1 = findValue('c1');
							this.l1 = findValue('l1');
							this.o1 = findValue('o1');
							this.p1 = findValue('p1');
							
							// 更新阈值上限
							this.t2 = findValue('t2');
							this.h2 = findValue('h2');
							this.c2 = findValue('c2');
							this.l2 = findValue('l2');
							this.o2 = findValue('o2');
							this.p2 = findValue('p2');
							
							// 更新阈值下限
							this.t3 = findValue('t3');
							this.h3 = findValue('h3');
							this.c3 = findValue('c3');
							this.l3 = findValue('l3');
							this.o3 = findValue('o3');
							this.p3 = findValue('p3');
							
							// 更新最后更新时间
							this.lastUpdateTime = this.formatTime(new Date());
							
							// 检查是否有值超出阈值
							this.checkThresholds();
						} else {
							console.error('获取数据失败:', res);
						}
					},
					fail: (err) => {
						console.error('获取设备数据失败:', err);
						uni.showToast({
							title: '获取数据失败',
							icon: 'none',
							duration: 2000
						});
					},
					complete: () => {
						this.isRefreshing = false;
					}
				});
			},
			
			// 保存当前数据到数据库
			async saveCurrentData() {
				try {
					const currentTime = new Date();
					const recordTime = this.formatDateTime(currentTime);
					const currentDate = this.formatDate(currentTime);
					
					// 检查是否有异常数据
					const exceedLimit = this.hasExceededLimit ? 1 : 0;
					
					// 准备插入数据
					const condition = '"record_time","temperature","humidity","co2","light","formaldehyde","pm25","date","exceed_limit"';
					const data = `'${recordTime}',${this.t1},${this.h1},${this.c1},${this.l1},${this.o1},${this.p1},'${currentDate}',${exceedLimit}`;
					
					await DB.insertTableData("environment_records", data, condition);
					
					this.storageCount++;
					this.lastStorageTime = this.formatTime(currentTime);
					
					console.log(`第${this.storageCount}次存储环境数据成功`);
					
					// 如果数据超过1000条，删除最早的数据
					if (this.storageCount % 10 === 0) {
						await this.cleanOldData();
					}
					
				} catch (error) {
					console.error('存储环境数据失败:', error);
				}
			},
			
			// 清理旧数据，保留最近1000条
			async cleanOldData() {
				try {
					await this.openSQL();
					// 删除id最小的100条数据
					const sql = `DELETE FROM environment_records WHERE id IN (SELECT id FROM environment_records ORDER BY id ASC LIMIT 100)`;
					
					return new Promise((resolve, reject) => {
						plus.sqlite.executeSql({
							name: DB.dbName,
							sql: sql,
							success: (res) => {
								console.log('清理旧数据成功');
								resolve(res);
							},
							fail: (err) => {
								console.error('清理旧数据失败:', err);
								reject(err);
							}
						});
					});
				} catch (error) {
					console.error('清理旧数据异常:', error);
				}
			},
			
			checkThresholds() {
				// 检查各项指标并提示
				const warnings = [];
				
				if (this.t1 > this.t2) warnings.push('温度超过上限');
				if (this.t1 < this.t3) warnings.push('温度低于下限');
				if (this.h1 > this.h2) warnings.push('湿度超过上限');
				if (this.h1 < this.h3) warnings.push('湿度低于下限');
				if (this.c1 > this.c2) warnings.push('二氧化碳超过上限');
				if (this.c1 < this.c3) warnings.push('二氧化碳低于下限');
				if (this.l1 > this.l2) warnings.push('光照强度超过上限');
				if (this.l1 < this.l3) warnings.push('光照强度低于下限');
				if (this.o1 > this.o2) warnings.push('甲醛浓度超过上限');
				if (this.o1 < this.o3) warnings.push('甲醛浓度低于下限');
				if (this.p1 > this.p2) warnings.push('PM2.5超过上限');
				if (this.p1 < this.p3) warnings.push('PM2.5低于下限');
				
				// 如果有警告，显示第一条
				if (warnings.length > 0) {
					uni.showToast({
						title: warnings[0],
						icon: 'none',
						duration: 2000
					});
				}
			},
			
			setThresholds() {
				if (this.isSettingThresholds) return;
				
				// 检查是否有输入值
				const hasInput = 
					this.tempUpperLimit || this.tempLowerLimit ||
					this.humidityUpperLimit || this.humidityLowerLimit ||
					this.co2UpperLimit || this.co2LowerLimit ||
					this.lightUpperLimit || this.lightLowerLimit ||
					this.formaldehydeUpperLimit || this.formaldehydeLowerLimit ||
					this.pm25UpperLimit || this.pm25LowerLimit;
				
				if (!hasInput) {
					uni.showToast({
						title: '请至少填写一个阈值',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				
				this.isSettingThresholds = true;
				
				uni.showLoading({
					title: '设置阈值中...',
					mask: true
				});
				
				// 构建参数对象，只包含有值的字段
				const params = {};
				if (this.tempUpperLimit) params.t2 = parseFloat(this.tempUpperLimit);
				if (this.tempLowerLimit) params.t3 = parseFloat(this.tempLowerLimit);
				if (this.humidityUpperLimit) params.h2 = parseFloat(this.humidityUpperLimit);
				if (this.humidityLowerLimit) params.h3 = parseFloat(this.humidityLowerLimit);
				if (this.co2UpperLimit) params.c2 = parseFloat(this.co2UpperLimit);
				if (this.co2LowerLimit) params.c3 = parseFloat(this.co2LowerLimit);
				if (this.lightUpperLimit) params.l2 = parseFloat(this.lightUpperLimit);
				if (this.lightLowerLimit) params.l3 = parseFloat(this.lightLowerLimit);
				if (this.formaldehydeUpperLimit) params.o2 = parseFloat(this.formaldehydeUpperLimit);
				if (this.formaldehydeLowerLimit) params.o3 = parseFloat(this.formaldehydeLowerLimit);
				if (this.pm25UpperLimit) params.p2 = parseFloat(this.pm25UpperLimit);
				if (this.pm25LowerLimit) params.p3 = parseFloat(this.pm25LowerLimit);
				
				const requestData = {
					product_id: this.productId,
					device_name: this.deviceName,
					params: params
				};
				
				// 发送阈值设置指令到OneNET
				uni.request({
					url: 'https://iot-api.heclouds.com/thingmodel/set-device-property',
					method: 'POST',
					data: requestData,
					header: {
						'authorization': this.token,
						'Content-Type': 'application/json'
					},
					success: (res) => {
						if (res.statusCode === 200) {
							uni.showToast({
								title: '阈值设置成功',
								icon: 'success',
								duration: 2000
							});
							
							// 更新本地数据
							if (this.tempUpperLimit) this.t2 = parseFloat(this.tempUpperLimit);
							if (this.tempLowerLimit) this.t3 = parseFloat(this.tempLowerLimit);
							if (this.humidityUpperLimit) this.h2 = parseFloat(this.humidityUpperLimit);
							if (this.humidityLowerLimit) this.h3 = parseFloat(this.humidityLowerLimit);
							if (this.co2UpperLimit) this.c2 = parseFloat(this.co2UpperLimit);
							if (this.co2LowerLimit) this.c3 = parseFloat(this.co2LowerLimit);
							if (this.lightUpperLimit) this.l2 = parseFloat(this.lightUpperLimit);
							if (this.lightLowerLimit) this.l3 = parseFloat(this.lightLowerLimit);
							if (this.formaldehydeUpperLimit) this.o2 = parseFloat(this.formaldehydeUpperLimit);
							if (this.formaldehydeLowerLimit) this.o3 = parseFloat(this.formaldehydeLowerLimit);
							if (this.pm25UpperLimit) this.p2 = parseFloat(this.pm25UpperLimit);
							if (this.pm25LowerLimit) this.p3 = parseFloat(this.pm25LowerLimit);
							
							// 清空输入框
							this.resetInputs();
							
							// 更新最后更新时间
							this.lastUpdateTime = this.formatTime(new Date());
						} else {
							uni.showToast({
								title: '设置失败，请重试',
								icon: 'none',
								duration: 2000
							});
						}
					},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none',
							duration: 2000
						});
					},
					complete: () => {
						this.isSettingThresholds = false;
						uni.hideLoading();
					}
				});
			},
			
			resetInputs() {
				this.tempUpperLimit = '';
				this.tempLowerLimit = '';
				this.humidityUpperLimit = '';
				this.humidityLowerLimit = '';
				this.co2UpperLimit = '';
				this.co2LowerLimit = '';
				this.lightUpperLimit = '';
				this.lightLowerLimit = '';
				this.formaldehydeUpperLimit = '';
				this.formaldehydeLowerLimit = '';
				this.pm25UpperLimit = '';
				this.pm25LowerLimit = '';
			},
			
			manualRefresh() {
				this.isRefreshing = true;
				this.fetchDeviceData();
			},
			
			// 跳转到历史数据页面
			navigateToHistory() {
				uni.navigateTo({
					url: '/pages/envHistory/envHistory'
				});
			},
			
			formatTime(date) {
				const hours = date.getHours().toString().padStart(2, '0');
				const minutes = date.getMinutes().toString().padStart(2, '0');
				const seconds = date.getSeconds().toString().padStart(2, '0');
				return `${hours}:${minutes}:${seconds}`;
			},
			
			formatDate(date) {
				const year = date.getFullYear();
				const month = (date.getMonth() + 1).toString().padStart(2, '0');
				const day = date.getDate().toString().padStart(2, '0');
				return `${year}-${month}-${day}`;
			},
			
			formatDateTime(date) {
				return `${this.formatDate(date)} ${this.formatTime(date)}`;
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		background-color: #f5f7fa;
		padding: 20rpx;
		min-height: 100vh;
		position: relative;
	}
	
	.env-data-card {
		width: 100%;
		border-radius: 20rpx;
		background-color: #ffffff;
		box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.08);
		padding: 30rpx;
		margin-bottom: 25rpx;
	}
	
	.threshold-display-card {
		width: 100%;
		border-radius: 20rpx;
		background-color: #ffffff;
		box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.08);
		padding: 30rpx;
		margin-bottom: 25rpx;
	}
	
	.card-title {
		font-size: 34rpx;
		font-weight: bold;
		color: #2c3e50;
		margin-bottom: 25rpx;
		text-align: center;
		position: relative;
		padding-bottom: 15rpx;
	}
	
	.card-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60rpx;
		height: 6rpx;
		background: linear-gradient(90deg, #3498db, #2ecc71);
		border-radius: 3rpx;
	}
	
	.env-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20rpx;
	}
	
	.env-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 25rpx 15rpx;
		border-radius: 15rpx;
		background-color: #f8f9fa;
		position: relative;
		border: 2rpx solid #e9ecef;
		transition: all 0.3s;
	}
	
	.env-item.exceed-limit {
		border-color: #e74c3c;
		background-color: #ffeaea;
		box-shadow: 0 4rpx 12rpx rgba(231, 76, 60, 0.2);
	}
	
	.env-label {
		font-size: 26rpx;
		color: #6c757d;
		margin-bottom: 12rpx;
		font-weight: 500;
	}
	
	.env-value {
		font-size: 36rpx;
		font-weight: bold;
		color: #2c3e50;
	}
	
	.env-status {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		font-size: 20rpx;
		color: #e74c3c;
		background-color: #ffeaea;
		padding: 4rpx 10rpx;
		border-radius: 8rpx;
		font-weight: bold;
	}
	
	.threshold-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 18rpx;
	}
	
	.threshold-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20rpx 15rpx;
		border-radius: 12rpx;
		background-color: #f8f9fa;
		border: 2rpx solid #e9ecef;
	}
	
	.threshold-label {
		font-size: 24rpx;
		color: #6c757d;
		margin-bottom: 8rpx;
		font-weight: 500;
	}
	
	.threshold-value {
		font-size: 28rpx;
		font-weight: bold;
		color: #2c3e50;
	}
	
	.threshold-area {
		width: 100%;
		border-radius: 20rpx;
		background-color: #ffffff;
		box-shadow: 0 6rpx 18rpx rgba(0, 0, 0, 0.08);
		padding: 30rpx;
		margin-bottom: 25rpx;
	}
	
	.section-title {
		font-size: 34rpx;
		font-weight: bold;
		color: #2c3e50;
		margin-bottom: 25rpx;
		text-align: center;
		position: relative;
		padding-bottom: 15rpx;
	}
	
	.section-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60rpx;
		height: 6rpx;
		background: linear-gradient(90deg, #3498db, #2ecc71);
		border-radius: 3rpx;
	}
	
	.threshold-form {
		display: flex;
		flex-direction: column;
	}
	
	.form-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	
	.input-group {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin: 0 10rpx;
	}
	
	.input-label {
		font-size: 26rpx;
		color: #495057;
		margin-bottom: 12rpx;
		font-weight: 500;
	}
	
	.input-field {
		height: 80rpx;
		border: 1px solid #dee2e6;
		border-radius: 10rpx;
		padding: 0 20rpx;
		font-size: 28rpx;
		background-color: #f8f9fa;
	}
	
	.input-field:focus {
		border-color: #3498db;
		background-color: #ffffff;
	}
	
	.button-group {
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
	}
	
	.submit-btn {
		flex: 1;
		height: 90rpx;
		border-radius: 45rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: #fff;
		background: linear-gradient(135deg, #2ecc71, #27ae60);
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 10rpx;
		box-shadow: 0 6rpx 15rpx rgba(46, 204, 113, 0.3);
		transition: all 0.3s;
	}
	
	.submit-btn:active {
		transform: scale(0.98);
		box-shadow: 0 3rpx 8rpx rgba(46, 204, 113, 0.3);
	}
	
	.submit-btn[disabled] {
		background: #bdc3c7;
		box-shadow: none;
	}
	
	.reset-btn {
		flex: 1;
		height: 90rpx;
		border-radius: 45rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: #6c757d;
		background: #f8f9fa;
		border: 2rpx solid #dee2e6;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 10rpx;
		transition: all 0.3s;
	}
	
	.reset-btn:active {
		transform: scale(0.98);
		background-color: #e9ecef;
	}
	
	.reset-btn[disabled] {
		color: #bdc3c7;
	}
	
	.control-buttons {
		width: 100%;
		margin-bottom: 25rpx;
	}
	
	.button-row {
		display: flex;
		justify-content: space-between;
		gap: 20rpx;
	}
	
	.history-btn, .refresh-btn {
		flex: 1;
		height: 90rpx;
		border-radius: 45rpx;
		font-size: 32rpx;
		font-weight: bold;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.3s;
		border: none;
	}
	
	.history-btn {
		background: linear-gradient(135deg, #FF9500, #FFB444);
		box-shadow: 0 6rpx 15rpx rgba(255, 149, 0, 0.3);
	}
	
	.refresh-btn {
		background: linear-gradient(135deg, #3498db, #2980b9);
		box-shadow: 0 6rpx 15rpx rgba(52, 152, 219, 0.3);
	}
	
	.history-btn:active, .refresh-btn:active {
		transform: scale(0.98);
	}
	
	.refresh-btn[disabled] {
		background: #cccccc;
		box-shadow: none;
	}
	
	.last-update {
		margin-top: 15rpx;
		font-size: 24rpx;
		color: #95a5a6;
		text-align: center;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
		gap: 5rpx;
	}
	
	.storage-status {
		font-size: 22rpx;
		color: #27ae60;
	}
	
	.warning-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: linear-gradient(135deg, #e74c3c, #c0392b);
		padding: 25rpx;
		text-align: center;
		z-index: 100;
		animation: slideUp 0.5s ease-out;
	}
	
	.warning-text {
		font-size: 28rpx;
		font-weight: bold;
		color: #fff;
		text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
	}
	
	@keyframes slideUp {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
	
	/* 响应式调整 */
	@media (max-width: 750px) {
		.form-row {
			flex-direction: column;
		}
		
		.input-group {
			margin: 0 0 20rpx 0;
		}
		
		.button-group {
			flex-direction: column;
		}
		
		.submit-btn, .reset-btn {
			margin: 0 0 15rpx 0;
		}
		
		.env-grid, .threshold-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	/* 防止输入框被键盘遮挡 */
	.threshold-form {
		padding-bottom: 30rpx;
	}
</style>
