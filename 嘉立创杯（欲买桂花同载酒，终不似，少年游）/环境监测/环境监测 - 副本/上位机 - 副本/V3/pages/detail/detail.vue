<template>
	<view class="wrap">
		<view class="dev-area">

			<view class="dev-cart">
				<view>
					<view class="dev-name">温度</view>
					<view class="dev-icon">🌡️</view>
				</view>
				<view class="dev-data">{{t1}} ℃</view>
			</view>

			<view class="dev-cart">
				<view>
					<view class="dev-name">湿度</view>
					<view class="dev-icon">💧</view>
				</view>
				<view class="dev-data">{{h1}} %RH</view>
			</view>

			<view class="dev-cart">
				<view>
					<view class="dev-name">酒精浓度</view>
					<view class="dev-icon">🍶</view>
				</view>
				<view class="dev-data">{{c1}} %</view>
			</view>

			<view class="dev-cart">
				<view>
					<view class="dev-name">火焰探测</view>
					<view class="dev-icon">🔥</view>
				</view>
				<view class="dev-data">{{l1}} %</view>
			</view>

			<view class="dev-cart">
				<view>
					<view class="dev-name">可燃气体</view>
					<view class="dev-icon">⛽</view>
				</view>
				<view class="dev-data">{{o1}} %</view>
			</view>

			<view class="dev-cart">
				<view>
					<view class="dev-name">CO2浓度</view>
					<view class="dev-icon">🌫️</view>
				</view>
				<view class="dev-data">{{p1}} ppm</view>
			</view>

			<view class="dev-cart">
				<view>
					<view class="dev-name">喷淋</view>
					<view class="dev-icon">💦</view>
				</view>
				<switch :checked="spray" @change="onSpraySwitch" color="#2b9939" />
			</view>

			<view class="device-cart-l">
				<view>
					<view class="dev-name">温度上限</view>
					<view class="dev-name">{{t2}}℃</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="t2" @change="sliderChange($event, 't2')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">温度下限</view>
					<view class="dev-name">{{t3}}℃</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="t3" @change="sliderChange($event, 't3')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">湿度上限</view>
					<view class="dev-name">{{h2}}%RH</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="h2" @change="sliderChange($event, 'h2')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">湿度下限</view>
					<view class="dev-name">{{h3}}%RH</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="h3" @change="sliderChange($event, 'h3')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">酒精上限</view>
					<view class="dev-name">{{c2}}%</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="c2" @change="sliderChange($event, 'c2')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">酒精下限</view>
					<view class="dev-name">{{c3}}%</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="c3" @change="sliderChange($event, 'c3')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">火焰上限</view>
					<view class="dev-name">{{l2}}%</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="l2" @change="sliderChange($event, 'l2')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">火焰下限</view>
					<view class="dev-name">{{l3}}%</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="l3" @change="sliderChange($event, 'l3')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">可燃气体上限</view>
					<view class="dev-name">{{o2}}%</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="o2" @change="sliderChange($event, 'o2')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">可燃气体下限</view>
					<view class="dev-name">{{o3}}%</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="o3" @change="sliderChange($event, 'o3')" min="0" max="100" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">CO2上限</view>
					<view class="dev-name">{{p2}}ppm</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="p2" @change="sliderChange($event, 'p2')" min="0" max="2000" step="1" block-size="20" show-value />
				</view>
			</view>
			<view class="device-cart-l">
				<view>
					<view class="dev-name">CO2下限</view>
					<view class="dev-name">{{p3}}ppm</view>
				</view>
				<view class="ctrl-slider">
					<slider :value="p3" @change="sliderChange($event, 'p3')" min="0" max="2000" step="1" block-size="20" show-value />
				</view>
			</view>

		</view>
	</view>
</template>

<script>
const { createCommonToken } = require('@/key.js')

const product_id = 'Bb3Bt7Z0j0';
const device_name = 'd1';
// 所有阈值字段列表（统一管控）
const THRESHOLD_FIELDS = ['t2','t3','h2','h3','c2','c3','l2','l3','o2','o3','p2','p3'];

export default {
	data() {
		return {
			t1: '--', h1: '--', c1: '--', l1: '--', o1: '--', p1: '--',
			t2: 30, h2: 80, c2: 50, l2: 80, o2: 80, p2: 800,
			t3: 10, h3: 20, c3: 10, l3: 10, o3: 10, p3: 200,
			token: '',
			spray: false,
			Car_flag: null,
			currentAction: '待命',
			dataTimer: null,

			// 核心1：记录每个阈值的「目标值」（要同步到云平台的值）
			thresholdTarget: {},
			// 核心2：操作锁（直到目标值同步成功才释放）
			thresholdLock: {},
			// 核心3：喷淋操作快照（用于回弹回滚）
			preOpSnapshot: {
				spray: false,
				t2: 30,
				hasOp: false,
				opTime: 0
			}
		}
	},

	onLoad() {
		const params = {
			author_key: 'c0a787ec7ab54a4b87c594006cc06dba',
			version: '2022-05-01',
			user_id: '490050',
		}
		this.token = createCommonToken(params);
		// 初始化目标值为当前值
		THRESHOLD_FIELDS.forEach(field => {
			this.thresholdTarget[field] = this[field];
		});
	},

	onShow() {
		this.startDataUpdate();
	},
	onHide() {
		this.stopDataUpdate();
	},
	onUnload() {
		this.stopDataUpdate();
	},

	methods: {
		startDataUpdate() {
			this.fetchDevData();
			this.dataTimer = setInterval(() => {
				this.fetchDevData();
			}, 5000);
		},
		stopDataUpdate() {
			clearInterval(this.dataTimer);
		},

		fetchDevData() {
			uni.request({
				url: 'https://iot-api.heclouds.com/thingmodel/query-device-property',
				method: 'GET',
				data: { product_id, device_name },
				header: { authorization: this.token },
				success: (res) => {
					if (!res.data.data) return;

					res.data.data.forEach(item => {
						const id = item.identifier;
						const val = item.value;

						// 1. 阈值字段：有目标值/锁定时，不覆盖本地值
						if (THRESHOLD_FIELDS.includes(id)) {
							// 有目标值且未同步成功 → 忽略云平台返回值
							if (this.thresholdTarget[id] !== undefined && this.thresholdTarget[id] !== val) {
								return;
							}
							// 有锁 → 忽略云平台返回值
							if (this.thresholdLock[id] && Date.now() < this.thresholdLock[id]) {
								return;
							}
							// 无目标值/锁 → 更新本地值，并同步目标值
							this[id] = val;
							this.thresholdTarget[id] = val;
						}
						// 2. 喷淋状态：有锁时不覆盖
						else if (id === 'led') {
							if (this.thresholdLock.led && Date.now() < this.thresholdLock.led) return;
							this.spray = val;
						}
						// 3. 其他数据正常更新
						else {
							switch (id) {
								case 't1': this.t1 = val; break;
								case 'h1': this.h1 = val; break;
								case 'c1': this.c1 = val; break;
								case 'l1': this.l1 = val; break;
								case 'o1': this.o1 = val; break;
								case 'p1': this.p1 = val; break;
								case 'Car_flag':
									this.Car_flag = val;
									const actions = ['前进','左转','停止','右转','后退','避障模式','循迹模式'];
									this.currentAction = actions[val] || '待命';
									break;
							}
						}
					});

					// 核心：检测所有阈值是否同步成功，未成功则立刻重发
					this.checkAndResendAllThresholds();
					// 检测喷淋回弹并回滚
					this.checkSprayRebound();
				}
			});
		},

		// 核心逻辑1：检测所有阈值目标值是否同步，未同步则持续重发
		checkAndResendAllThresholds() {
			THRESHOLD_FIELDS.forEach(field => {
				// 无目标值 → 跳过
				if (this.thresholdTarget[field] === undefined) return;
				// 目标值和当前云平台值一致 → 清空目标值，释放锁
				if (this[field] === this.thresholdTarget[field]) {
					delete this.thresholdTarget[field];
					delete this.thresholdLock[field];
					return;
				}
				// 未同步 → 立刻重发（0s/1s/3s 三次）
				this.sendOne(field, this.thresholdTarget[field]);
				setTimeout(() => this.sendOne(field, this.thresholdTarget[field]), 1000);
				setTimeout(() => this.sendOne(field, this.thresholdTarget[field]), 3000);
			});
		},

		// 核心逻辑2：喷淋回弹检测 → 回滚到按下前状态
		checkSprayRebound() {
			if (!this.preOpSnapshot.hasOp) return;
			if (Date.now() - this.preOpSnapshot.opTime > 15000) {
				this.preOpSnapshot.hasOp = false;
				return;
			}

			const { targetSpray, targetT2 } = this.preOpSnapshot;
			if (this.spray !== targetSpray || this.t2 !== targetT2) {
				console.log('喷淋回弹，回滚到按下前状态');
				this.rollbackSpray();
			}
		},

		// 喷淋回滚
		rollbackSpray() {
			const { spray: preSpray, t2: preT2 } = this.preOpSnapshot;
			this.spray = preSpray;
			this.t2 = preT2;
			this.thresholdTarget.t2 = preT2;
			this.thresholdLock.led = Date.now() + 10000;
			this.thresholdLock.t2 = Date.now() + 10000;

			const params = { led: preSpray, t2: preT2 };
			this.sendBatch(params);
			setTimeout(() => this.sendBatch(params), 1000);
			setTimeout(() => this.sendBatch(params), 2000);

			this.preOpSnapshot.hasOp = false;
		},

		// 滑块调节：设置目标值+加锁+立刻发送
		sliderChange(e, id) {
			const targetVal = e.detail.value;
			// 1. 本地立刻生效
			this[id] = targetVal;
			// 2. 设置目标值（标记要同步到云平台的值）
			this.thresholdTarget[id] = targetVal;
			// 3. 加锁10秒（防止被云平台覆盖）
			this.thresholdLock[id] = Date.now() + 10000;
			// 4. 立刻发送3次（0s/2s/4s）
			this.sendOne(id, targetVal);
			setTimeout(() => this.sendOne(id, targetVal), 2000);
			setTimeout(() => this.sendOne(id, targetVal), 4000);
		},

		// 单个字段发送
		sendOne(id, value) {
			uni.request({
				url: 'https://iot-api.heclouds.com/thingmodel/set-device-property',
				method: 'POST',
				data: { product_id, device_name, params: { [id]: value } },
				header: { authorization: this.token, 'Content-Type': 'application/json' },
				// 发送成功后，更新目标值（确保一致性）
				success: () => {
					this.thresholdTarget[id] = value;
				}
			});
		},

		// 喷淋开关逻辑：打开=0，关闭=100，强同步
		onSpraySwitch(e) {
			const targetSpray = e.detail.value;
			// 保存按下前快照
			this.preOpSnapshot = {
				spray: this.spray,
				t2: this.t2,
				targetSpray: targetSpray,
				targetT2: targetSpray ? 0 : 100,
				opTime: Date.now(),
				hasOp: true
			};

			// 1. 本地立刻生效
			this.spray = targetSpray;
			this.thresholdLock.led = Date.now() + 10000;

			// 2. 温度上限：打开=0，关闭=100
			const targetT2 = targetSpray ? 0 : 100;
			this.t2 = targetT2;
			this.thresholdTarget.t2 = targetT2;
			this.thresholdLock.t2 = Date.now() + 10000;

			// 3. 发送喷淋状态（3次）
			const sprayParams = { led: targetSpray };
			this.sendBatch(sprayParams);
			setTimeout(() => this.sendBatch(sprayParams), 2000);
			setTimeout(() => this.sendBatch(sprayParams), 4000);

			// 4. 发送温度上限（强同步3次）
			this.sendOne('t2', targetT2);
			setTimeout(() => this.sendOne('t2', targetT2), 2000);
			setTimeout(() => this.sendOne('t2', targetT2), 4000);
		},

		// 批量发送
		sendBatch(params) {
			uni.request({
				url: 'https://iot-api.heclouds.com/thingmodel/set-device-property',
				method: 'POST',
				data: { product_id, device_name, params },
				header: { authorization: this.token, 'Content-Type': 'application/json' },
				success: () => {
					// 同步目标值
					Object.keys(params).forEach(key => {
						if (key === 'led') this.spray = params[key];
						else this.thresholdTarget[key] = params[key];
					});
				}
			});
		}
	}
}
</script>

<style>
	.wrap { padding: 30rpx; }
	.dev-area { display: flex; justify-content: space-between; flex-wrap: wrap; }
	.dev-cart { height: 150rpx; width: 320rpx; border-radius: 30rpx; margin-top: 30rpx; display: flex; justify-content: space-around; align-items: center; box-shadow: 0 0 15rpx #ccc; }
	.device-cart-l { height: 150rpx; width: 700rpx; border-radius: 30rpx; margin-top: 30rpx; display: flex; justify-content: space-around; align-items: center; box-shadow: 0 0 15rpx #ccc; }
	.dev-name { font-size: 20rpx; text-align: center; color: #6d6d6d; }
	.dev-icon { font-size: 70rpx; margin-top: 10rpx; text-align: center; }
	.dev-data { font-size: 50rpx; color: #6d6d6d; }
	.ctrl-slider { width: 580rpx; }
</style>