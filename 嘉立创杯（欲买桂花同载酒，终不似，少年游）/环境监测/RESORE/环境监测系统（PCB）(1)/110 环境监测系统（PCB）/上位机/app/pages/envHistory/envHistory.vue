<template>
	<view class="content">
		<view class="header">
			<text class="title">环境监测系统</text>
			<text class="subtitle">历史数据查询</text>
		</view>
		
		<!-- 控制区域 -->
		<view class="control-area">
			<view class="date-filter">
				<view class="date-input-group">
					<text class="date-label">开始日期</text>
					<input class="date-input" type="date" v-model="startDate" />
				</view>
				<view class="date-input-group">
					<text class="date-label">结束日期</text>
					<input class="date-input" type="date" v-model="endDate" />
				</view>
			</view>
			
			<view class="button-row">
				<view class="query-btn" @click="queryHistoryData">
					<text class="btn-text">查询数据</text>
				</view>
				<view class="delete-btn" @click="clearAllData">
					<text class="btn-text">清空记录</text>
				</view>
			</view>
			
			<view class="filter-options">
				<view class="filter-option" @click="toggleExceedFilter">
					<text class="filter-text">仅显示异常数据</text>
					<view class="filter-switch" :class="{ 'active': showExceedOnly }">
						<view class="switch-dot"></view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 统计信息 -->
		<view class="stats-card">
			<view class="stats-title">数据统计</view>
			<view class="stats-grid">
				<view class="stat-item">
					<text class="stat-label">总记录数</text>
					<text class="stat-value">{{ totalRecords }}</text>
				</view>
				<view class="stat-item">
					<text class="stat-label">异常记录</text>
					<text class="stat-value" style="color: #e74c3c;">{{ exceedRecords }}</text>
				</view>
				<view class="stat-item">
					<text class="stat-label">查询时间</text>
					<text class="stat-value">{{ queryDateRange }}</text>
				</view>
			</view>
		</view>
		
		<!-- 历史记录列表 -->
		<view class="records-container">
			<view class="records-header">
				<text class="records-title">环境监测记录</text>
				<text class="records-count">共 {{ filteredRecords.length }} 条</text>
			</view>
			
			<scroll-view scroll-y="true" class="records-scroll" :style="{height: scrollHeight + 'px'}">
				<view 
					class="record-card" 
					v-for="(record, index) in filteredRecords" 
					:key="index"
					:class="{ 'exceed-record': record.exceed_limit === 1 }"
				>
					<view class="record-header">
						<view class="record-time">
							<text class="time-icon">⏰</text>
							<text class="time-text">{{ formatDisplayTime(record.record_time) }}</text>
						</view>
						<view class="record-status" :class="{'status-normal': record.exceed_limit === 0, 'status-exceed': record.exceed_limit === 1}">
							{{ record.exceed_limit === 1 ? '⚠️ 异常' : '✓ 正常' }}
						</view>
					</view>
					
					<view class="record-content">
						<view class="env-params-grid">
							<view class="env-param-item">
								<text class="param-label">温度</text>
								<text class="param-value" :class="{ 'exceed-value': isValueExceed('temperature', record.temperature) }">
									{{ record.temperature.toFixed(1) }}°C
								</text>
							</view>
							<view class="env-param-item">
								<text class="param-label">湿度</text>
								<text class="param-value" :class="{ 'exceed-value': isValueExceed('humidity', record.humidity) }">
									{{ record.humidity.toFixed(1) }}%
								</text>
							</view>
							<view class="env-param-item">
								<text class="param-label">CO₂</text>
								<text class="param-value" :class="{ 'exceed-value': isValueExceed('co2', record.co2) }">
									{{ record.co2.toFixed(0) }}ppm
								</text>
							</view>
							<view class="env-param-item">
								<text class="param-label">光照</text>
								<text class="param-value" :class="{ 'exceed-value': isValueExceed('light', record.light) }">
									{{ record.light.toFixed(0) }}lux
								</text>
							</view>
							<view class="env-param-item">
								<text class="param-label">甲醛</text>
								<text class="param-value" :class="{ 'exceed-value': isValueExceed('formaldehyde', record.formaldehyde) }">
									{{ record.formaldehyde.toFixed(2) }}mg/m³
								</text>
							</view>
							<view class="env-param-item">
								<text class="param-label">PM2.5</text>
								<text class="param-value" :class="{ 'exceed-value': isValueExceed('pm25', record.pm25) }">
									{{ record.pm25.toFixed(0) }}μg/m³
								</text>
							</view>
						</view>
					</view>
					
					<view class="record-footer">
						<text class="record-date">{{ record.date }}</text>
						<view class="record-actions">
							<text class="action-btn" @click="deleteRecord(record.id)">删除</text>
						</view>
					</view>
				</view>
				
				<view v-if="filteredRecords.length === 0" class="no-data">
					<text class="no-data-icon">📊</text>
					<text class="no-data-text">暂无环境监测记录</text>
					<text class="no-data-tip">系统每分钟自动存储一次数据</text>
				</view>
			</scroll-view>
		</view>
		
		<!-- 底部信息 -->
		<view class="footer-info">
			<text class="footer-text">最后更新: {{ lastQueryTime }}</text>
		</view>
	</view>
</template>

<script>
	import DB from "@/sqlite.js";  // 引入封装的 sqlite
	
	export default {
		data() {
			// 获取当前日期作为默认结束日期
			const today = new Date();
			const todayStr = today.toISOString().split('T')[0];
			
			// 获取7天前的日期作为默认开始日期
			const sevenDaysAgo = new Date(today);
			sevenDaysAgo.setDate(today.getDate() - 7);
			const sevenDaysAgoStr = sevenDaysAgo.toISOString().split('T')[0];
			
			return {
				// 历史记录数据
				environmentRecords: [],
				
				// 筛选条件
				startDate: sevenDaysAgoStr,
				endDate: todayStr,
				showExceedOnly: false,
				
				// 页面状态
				scrollHeight: 500,
				lastQueryTime: '--',
				
				// 阈值配置（与主页同步）
				currentThresholds: {
					temperature: { min: 0, max: 35 },
					humidity: { min: 30, max: 80 },
					co2: { min: 300, max: 1000 },
					light: { min: 100, max: 1000 },
					formaldehyde: { min: 0, max: 0.1 },
					pm25: { min: 0, max: 75 }
				}
			}
		},
		computed: {
			// 过滤后的记录
			filteredRecords() {
				let records = this.environmentRecords;
				
				// 按日期筛选
				if (this.startDate && this.endDate) {
					records = records.filter(record => {
						const recordDate = record.date;
						return recordDate >= this.startDate && recordDate <= this.endDate;
					});
				}
				
				// 按异常状态筛选
				if (this.showExceedOnly) {
					records = records.filter(record => record.exceed_limit === 1);
				}
				
				return records;
			},
			
			// 统计信息
			totalRecords() {
				return this.environmentRecords.length;
			},
			
			exceedRecords() {
				return this.environmentRecords.filter(record => record.exceed_limit === 1).length;
			},
			
			queryDateRange() {
				if (!this.startDate || !this.endDate) return '全部';
				return `${this.startDate} ~ ${this.endDate}`;
			}
		},
		onShow() {
			// 页面显示时自动查询历史数据
			this.queryHistoryData();
			// 动态计算滚动区域高度
			this.calcScrollHeight();
		},
		onReady() {
			// 页面加载完成后重新计算高度
			this.calcScrollHeight();
		},
		methods: {
			// 计算滚动区域高度
			calcScrollHeight() {
				const that = this;
				uni.getSystemInfo({
					success(res) {
						// 计算可用高度：屏幕高度 - 头部高度 - 控制区域高度 - 统计卡片高度 - 底部信息高度
						const windowHeight = res.windowHeight;
						const usableHeight = windowHeight - 200 - 220 - 160 - 80;
						that.scrollHeight = usableHeight > 400 ? usableHeight : 400;
					}
				});
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
			
			// 查询历史数据
			async queryHistoryData() {
				try {
					await this.openSQL();
					let open = DB.isOpen();
					if (open) {
						DB.selectTableData("environment_records")
							.then(res => {
								// 按记录时间倒序排列，最新的记录在前面
								this.environmentRecords = res.sort((a, b) => {
									return new Date(b.record_time) - new Date(a.record_time);
								});
								
								// 确保数值类型正确
								this.environmentRecords.forEach(record => {
									record.temperature = parseFloat(record.temperature) || 0;
									record.humidity = parseFloat(record.humidity) || 0;
									record.co2 = parseFloat(record.co2) || 0;
									record.light = parseFloat(record.light) || 0;
									record.formaldehyde = parseFloat(record.formaldehyde) || 0;
									record.pm25 = parseFloat(record.pm25) || 0;
									record.exceed_limit = parseInt(record.exceed_limit) || 0;
								});
								
								console.log('环境监测记录查询成功，共', res.length, '条');
								this.lastQueryTime = this.formatTime(new Date());
								
								if (res.length === 0) {
									this.showToast("暂无环境监测记录");
								} else {
									this.showToast(`查询到 ${res.length} 条记录`);
								}
							})
							.catch(error => {
								console.error("查询环境监测记录错误", error);
								this.showToast("查询历史数据失败");
							});
					} else {
						this.showToast("数据库未打开");
					}
				} catch (error) {
					console.error("查询历史数据异常:", error);
					this.showToast("查询失败");
				}
			},
			
			// 清空所有数据
			async clearAllData() {
				uni.showModal({
					title: '确认清空',
					content: '确定要清空所有环境监测记录吗？此操作不可恢复！',
					success: async (res) => {
						if (res.confirm) {
							try {
								await this.openSQL();
								let open = DB.isOpen();
								if (open) {
									DB.deleteTableData("environment_records")
										.then(res => {
											this.showToast("环境监测记录清空成功");
											this.environmentRecords = [];
											this.lastQueryTime = this.formatTime(new Date());
										})
										.catch(error => {
											this.showToast("清空记录失败");
											console.error("删除失败", error);
										});
								} else {
									this.showToast("数据库未打开");
								}
							} catch (error) {
								console.error("清空记录异常:", error);
								this.showToast("清空失败");
							}
						}
					}
				});
			},
			
			// 删除单条记录
			async deleteRecord(recordId) {
				uni.showModal({
					title: '确认删除',
					content: '确定要删除这条记录吗？',
					success: async (res) => {
						if (res.confirm) {
							try {
								await this.openSQL();
								let open = DB.isOpen();
								if (open) {
									DB.deleteTableData("environment_records", "id", recordId)
										.then(res => {
											this.showToast("记录删除成功");
											// 重新查询数据
											this.queryHistoryData();
										})
										.catch(error => {
											this.showToast("删除记录失败");
											console.error("删除失败", error);
										});
								} else {
									this.showToast("数据库未打开");
								}
							} catch (error) {
								console.error("删除记录异常:", error);
								this.showToast("删除失败");
							}
						}
					}
				});
			},
			
			// 切换异常数据筛选
			toggleExceedFilter() {
				this.showExceedOnly = !this.showExceedOnly;
			},
			
			// 格式化显示时间（简化格式）
			formatDisplayTime(fullDateTime) {
				if (!fullDateTime) return '--';
				
				try {
					// 格式：MM-DD HH:MM
					const date = new Date(fullDateTime);
					const month = (date.getMonth() + 1).toString().padStart(2, '0');
					const day = date.getDate().toString().padStart(2, '0');
					const hours = date.getHours().toString().padStart(2, '0');
					const minutes = date.getMinutes().toString().padStart(2, '0');
					
					return `${month}-${day} ${hours}:${minutes}`;
				} catch (error) {
					// 如果解析失败，尝试截断显示
					if (fullDateTime.length > 16) {
						return fullDateTime.substring(5, 16);
					}
					return fullDateTime;
				}
			},
			
			// 格式化当前时间
			formatTime(date) {
				const hours = date.getHours().toString().padStart(2, '0');
				const minutes = date.getMinutes().toString().padStart(2, '0');
				const seconds = date.getSeconds().toString().padStart(2, '0');
				return `${hours}:${minutes}:${seconds}`;
			},
			
			// 检查数值是否超出阈值
			isValueExceed(type, value) {
				const threshold = this.currentThresholds[type];
				if (!threshold) return false;
				
				return value < threshold.min || value > threshold.max;
			},
			
			// 提示框
			showToast(str) {
				uni.showToast({
					icon: "none",
					title: str,
					mask: true,
					duration: 2000
				});
			},
		}
	};
</script>

<style>
	.content {
		background: #2c3e50;
		width: 100vw;
		min-height: 100vh;
		padding: 20rpx;
		display: flex;
		flex-direction: column;
	}
	
	.header {
		text-align: center;
		margin-bottom: 30rpx;
	}
	
	.title {
		display: block;
		color: white;
		font-size: 38rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	
	.subtitle {
		display: block;
		color: rgba(255, 255, 255, 0.8);
		font-size: 28rpx;
	}
	
	.control-area {
		background-color: #34495e;
		border-radius: 15rpx;
		padding: 25rpx;
		margin-bottom: 20rpx;
	}
	
	.date-filter {
		display: flex;
		justify-content: space-between;
		margin-bottom: 25rpx;
	}
	
	.date-input-group {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin: 0 10rpx;
	}
	
	.date-label {
		font-size: 26rpx;
		color: #95a5a6;
		margin-bottom: 12rpx;
	}
	
	.date-input {
		height: 80rpx;
		background-color: #2c3e50;
		border-radius: 10rpx;
		padding: 0 20rpx;
		color: white;
		font-size: 28rpx;
	}
	
	.button-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 25rpx;
	}
	
	.query-btn, .delete-btn {
		flex: 1;
		height: 80rpx;
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.3s;
		margin: 0 10rpx;
		box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.2);
	}
	
	.query-btn {
		background: linear-gradient(135deg, #3498db, #2980b9);
	}
	
	.delete-btn {
		background: linear-gradient(135deg, #e74c3c, #c0392b);
	}
	
	.query-btn:active, .delete-btn:active {
		transform: scale(0.98);
	}
	
	.btn-text {
		color: white;
		font-size: 28rpx;
		font-weight: bold;
	}
	
	.filter-options {
		margin-top: 15rpx;
	}
	
	.filter-option {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15rpx 0;
	}
	
	.filter-text {
		color: white;
		font-size: 28rpx;
	}
	
	.filter-switch {
		width: 100rpx;
		height: 50rpx;
		background-color: #2c3e50;
		border-radius: 25rpx;
		position: relative;
		transition: all 0.3s;
	}
	
	.filter-switch.active {
		background-color: #27ae60;
	}
	
	.switch-dot {
		position: absolute;
		top: 5rpx;
		left: 5rpx;
		width: 40rpx;
		height: 40rpx;
		background-color: white;
		border-radius: 20rpx;
		transition: all 0.3s;
	}
	
	.filter-switch.active .switch-dot {
		left: 55rpx;
	}
	
	.stats-card {
		background-color: #34495e;
		border-radius: 15rpx;
		padding: 25rpx;
		margin-bottom: 20rpx;
	}
	
	.stats-title {
		color: white;
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
		text-align: center;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
	
	.stat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 15rpx;
		background-color: #2c3e50;
		border-radius: 10rpx;
	}
	
	.stat-label {
		color: #95a5a6;
		font-size: 24rpx;
		margin-bottom: 8rpx;
	}
	
	.stat-value {
		color: white;
		font-size: 28rpx;
		font-weight: bold;
	}
	
	.records-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: #34495e;
		border-radius: 15rpx;
		padding: 25rpx;
		margin-bottom: 20rpx;
		overflow: hidden;
	}
	
	.records-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
	}
	
	.records-title {
		color: white;
		font-size: 34rpx;
		font-weight: bold;
	}
	
	.records-count {
		color: #95a5a6;
		font-size: 26rpx;
	}
	
	.records-scroll {
		width: 100%;
	}
	
	.record-card {
		background-color: #2c3e50;
		border-radius: 15rpx;
		padding: 25rpx;
		margin-bottom: 20rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
	}
	
	.record-card.exceed-record {
		background: linear-gradient(135deg, #2c3e50, #e74c3c);
	}
	
	.record-card:last-child {
		margin-bottom: 0;
	}
	
	.record-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		padding-bottom: 15rpx;
		border-bottom: 1rpx solid rgba(255, 255, 255, 0.1);
	}
	
	.record-time {
		display: flex;
		align-items: center;
	}
	
	.time-icon {
		font-size: 30rpx;
		margin-right: 10rpx;
	}
	
	.time-text {
		color: white;
		font-size: 28rpx;
		font-weight: bold;
	}
	
	.record-status {
		font-size: 24rpx;
		font-weight: bold;
		padding: 6rpx 15rpx;
		border-radius: 15rpx;
	}
	
	.status-normal {
		background-color: #2ecc71;
		color: white;
	}
	
	.status-exceed {
		background-color: #e74c3c;
		color: white;
	}
	
	.record-content {
		margin-bottom: 20rpx;
	}
	
	.env-params-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15rpx;
	}
	
	.env-param-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 15rpx;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10rpx;
	}
	
	.param-label {
		color: #95a5a6;
		font-size: 24rpx;
		margin-bottom: 8rpx;
	}
	
	.param-value {
		color: white;
		font-size: 28rpx;
		font-weight: bold;
	}
	
	.param-value.exceed-value {
		color: #e74c3c;
		font-weight: bold;
	}
	
	.record-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 15rpx;
		border-top: 1rpx solid rgba(255, 255, 255, 0.1);
	}
	
	.record-date {
		color: #95a5a6;
		font-size: 24rpx;
	}
	
	.record-actions {
		display: flex;
	}
	
	.action-btn {
		color: #e74c3c;
		font-size: 24rpx;
		padding: 8rpx 20rpx;
		background-color: rgba(231, 76, 60, 0.1);
		border-radius: 8rpx;
	}
	
	.no-data {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 80rpx 20rpx;
		color: #95a5a6;
		text-align: center;
	}
	
	.no-data-icon {
		font-size: 60rpx;
		margin-bottom: 20rpx;
	}
	
	.no-data-text {
		font-size: 30rpx;
		margin-bottom: 10rpx;
	}
	
	.no-data-tip {
		font-size: 24rpx;
		color: #7f8c8d;
	}
	
	.footer-info {
		margin-top: 10rpx;
		padding-top: 20rpx;
		border-top: 1rpx solid rgba(255, 255, 255, 0.2);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10rpx;
	}
	
	.footer-text {
		font-size: 22rpx;
		color: rgba(255, 255, 255, 0.7);
	}
	
	/* 响应式调整 */
	@media (max-width: 750px) {
		.date-filter {
			flex-direction: column;
		}
		
		.date-input-group {
			margin: 0 0 15rpx 0;
		}
		
		.env-params-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
