<template>
	<view class="content">
		<view class="header">
			<text class="title">智能停车场系统</text>
			<text class="subtitle">停车记录查询</text>
		</view>
		
		<view class="dev-area">
			<view class="loginBtn" @click="selectParkingData()">
				<text class="btnValue">查询停车记录</text>
			</view>
			<view class="loginBtn delete-btn" @click="deleteParkingData()">
				<text class="btnValue">清空记录</text>
			</view>
		</view>
		
		<!-- 停车记录卡片式列表 -->
		<view class="records-container">
			<view class="records-title">停车记录</view>
			
			<scroll-view scroll-y="true" class="records-scroll" :style="{height: scrollHeight + 'px'}">
				<view 
					class="record-card" 
					v-for="(item, index) in parkingRecords" 
					:key="index"
				>
					<view class="card-header">
						<view class="vehicle-number">
							<text class="vehicle-icon">🚗</text>
							<text class="vehicle-text">车辆{{ item.vehicle_id }}</text>
						</view>
						<view class="record-status" :class="{'status-parking': !item.exit_time, 'status-left': item.exit_time}">
							{{ item.exit_time ? '已离场' : '停车中' }}
						</view>
					</view>
					
					<view class="card-content">
						<view class="time-row">
							<text class="time-label">入场时间:</text>
							<text class="time-value">{{ formatDisplayDate(item.enter_time) }}</text>
						</view>
						
						<view class="time-row">
							<text class="time-label">离场时间:</text>
							<text class="time-value">{{ item.exit_time ? formatDisplayDate(item.exit_time) : '--' }}</text>
						</view>
						
						<view class="info-row">
							<view class="info-item">
								<text class="info-label">停车时长:</text>
								<text class="info-value">{{ item.duration_minutes || '0' }}分钟</text>
							</view>
							
							<view class="info-item">
								<text class="info-label">停车费用:</text>
								<text class="info-value fee">¥{{ (item.fee || 0).toFixed(2) }}</text>
							</view>
						</view>
					</view>
				</view>
				
				<view v-if="parkingRecords.length === 0" class="no-data">
					<text>暂无停车记录</text>
				</view>
			</scroll-view>
		</view>
		
		<view class="footer-info">
			<text class="footer-text">记录总数: {{ parkingRecords.length }} 条</text>
			<text class="footer-text">最新记录: {{ getLatestRecordTime() }}</text>
		</view>
	</view>
</template>

<script>
	import DB from "@/sqlite.js";  // 引入封装的 sqlite
	export default {
		data() {
			return {
				parkingRecords: [],
				scrollHeight: 500,
			}
		}, 
		onShow() {
			// 页面显示时自动查询停车记录
			this.selectParkingData();
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
						// 计算可用高度：屏幕高度 - 头部高度 - 按钮区域高度 - 底部信息高度
						const windowHeight = res.windowHeight;
						const usableHeight = windowHeight - 200 - 120 - 100;
						that.scrollHeight = usableHeight > 400 ? usableHeight : 400;
					}
				});
			},
			
			// 打开数据库
			openSQL() {
				return new Promise((resolve, reject) => {
					let open = DB.isOpen();
					console.log("数据库状态", open ? "开启" : "关闭");
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
			
			// 查询停车记录
			async selectParkingData() {
				try {
					await this.openSQL();
					let open = DB.isOpen();
					if (open) {
						DB.selectTableData("parking_records")
							.then(res => {
								// 按入场时间倒序排列，最新的记录在前面
								this.parkingRecords = res.sort((a, b) => {
									return new Date(b.enter_time) - new Date(a.enter_time);
								});
								console.log('停车记录:', res);
								if (res.length === 0) {
									this.showToast("暂无停车记录");
								}
							})
							.catch(error => {
								console.log("查询停车记录错误", error);
								this.showToast("查询停车记录失败");
							});
					} else {
						this.showToast("数据库未打开");
					}
				} catch (error) {
					console.error("查询停车记录异常:", error);
					this.showToast("查询失败");
				}
			},
			
			// 删除停车记录
			async deleteParkingData() {
				uni.showModal({
					title: '确认清空',
					content: '确定要清空所有停车记录吗？',
					success: async (res) => {
						if (res.confirm) {
							try {
								await this.openSQL();
								let open = DB.isOpen();
								if (open) {
									DB.deleteTableData("parking_records")
										.then(res => {
											this.showToast("停车记录清空成功");
											this.selectParkingData();
										})
										.catch(error => {
											this.showToast("停车记录清空失败");
											console.log("删除失败", error);
										});
								} else {
									this.showToast("数据库未打开");
								}
							} catch (error) {
								console.error("清空停车记录异常:", error);
								this.showToast("清空失败");
							}
						}
					}
				});
			},
			
			// 格式化显示时间
			formatDisplayDate(fullDateTime) {
				if (!fullDateTime) return '--';
				
				try {
					// 将完整时间格式化为更简洁的显示
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
			
			// 获取最新记录时间
			getLatestRecordTime() {
				if (this.parkingRecords.length === 0) {
					return '暂无记录';
				}
				
				const latest = this.parkingRecords[0];
				return this.formatDisplayDate(latest.enter_time);
			},
		
			// 提示框
			showToast: function(str) {
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
	
	.dev-area {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30rpx;
	}
	
	.loginBtn {
		width: 48%;
		height: 80rpx;
		background: linear-gradient(45deg, #3498db, #2980b9);
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.2);
		transition: all 0.3s;
	}
	
	.loginBtn:active {
		transform: scale(0.98);
	}
	
	.loginBtn.delete-btn {
		background: linear-gradient(45deg, #e74c3c, #c0392b);
	}
	
	.loginBtn .btnValue {
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
		padding: 20rpx;
		margin-bottom: 20rpx;
		overflow: hidden;
	}
	
	.records-title {
		color: white;
		font-size: 34rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
		text-align: center;
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
	
	.record-card:last-child {
		margin-bottom: 0;
	}
	
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		padding-bottom: 15rpx;
		border-bottom: 1rpx solid rgba(255, 255, 255, 0.1);
	}
	
	.vehicle-number {
		display: flex;
		align-items: center;
	}
	
	.vehicle-icon {
		font-size: 36rpx;
		margin-right: 15rpx;
	}
	
	.vehicle-text {
		color: white;
		font-size: 30rpx;
		font-weight: bold;
	}
	
	.record-status {
		font-size: 26rpx;
		font-weight: bold;
		padding: 8rpx 20rpx;
		border-radius: 20rpx;
	}
	
	.status-parking {
		background-color: #e74c3c;
		color: white;
	}
	
	.status-left {
		background-color: #2ecc71;
		color: white;
	}
	
	.card-content {
		display: flex;
		flex-direction: column;
	}
	
	.time-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15rpx;
	}
	
	.time-label {
		color: #95a5a6;
		font-size: 26rpx;
	}
	
	.time-value {
		color: white;
		font-size: 26rpx;
		font-weight: bold;
		text-align: right;
		max-width: 60%;
		word-break: break-all;
	}
	
	.info-row {
		display: flex;
		justify-content: space-between;
		margin-top: 10rpx;
	}
	
	.info-item {
		display: flex;
		flex-direction: column;
	}
	
	.info-label {
		color: #95a5a6;
		font-size: 24rpx;
		margin-bottom: 5rpx;
	}
	
	.info-value {
		color: white;
		font-size: 28rpx;
		font-weight: bold;
	}
	
	.info-value.fee {
		color: #f39c12;
	}
	
	.no-data {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 80rpx 20rpx;
		color: #95a5a6;
		font-size: 30rpx;
		text-align: center;
	}
	
	.footer-info {
		margin-top: 10rpx;
		padding-top: 20rpx;
		border-top: 1rpx solid rgba(255, 255, 255, 0.2);
		display: flex;
		justify-content: space-between;
	}
	
	.footer-text {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.7);
	}
</style>
