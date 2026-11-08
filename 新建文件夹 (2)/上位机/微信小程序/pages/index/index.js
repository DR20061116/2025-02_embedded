// ========== 第一部分：常量与工具函数 ==========
const CONFIG = {
  AUTH_INFO: "version=2022-05-01&res=userid%2F490050&et=1809522747&method=md5&sign=xvecS1JV2hHBYdPNgrqj2w%3D%3D",
  PRODUCT_ID: "790G2UE7S4",
  DEVICE_NAME: "X1",
  API_BASE_URL: "https://iot-api.heclouds.com",
  DATA_REFRESH_INTERVAL: 3000,   // 建议3秒，不要500ms
  STATUS_QUERY_LIMIT: 1,
  STATUS_QUERY_RANGE_MS: 7 * 24 * 60 * 60 * 1000,
};

const valueConverter = (rawValue, type) => {
  switch (type) {
    case 'bool': return rawValue === 'true';
    case 'int32': case 'int64': return parseInt(rawValue, 10) || 0;
    case 'float': return parseFloat(rawValue) || 0.0;
    case 'string': case 'enum': return rawValue == null ? '' : String(rawValue);
    default: return rawValue;
  }
};

/**
 * 【新增】根据属性标识符和数值返回显示颜色（十六进制）
 * @param {string} identifier
 * @param {number|boolean} value
 * @returns {string} 颜色值，如 '#07c160'
 */
const getDisplayColor = (identifier, value) => {
  // 布尔型不需要颜色变化
  if (typeof value === 'boolean') return '#000000';

  // 定义各属性的阈值和对应颜色
  const rules = {
    env_humidity: [
      { min: 40, max: 60, color: '#07c160' },   // 绿色：舒适
      { min: 30, max: 40, color: '#999999' },
      { min: 60, max: 70, color: '#999999' },
      { max: 30, color: '#fa5151' },            // 红色：干燥
      { min: 70, color: '#fa5151' }             // 红色：潮湿
    ],
    env_temp: [
      { min: 20, max: 26, color: '#07c160' },
      { min: 15, max: 20, color: '#999999' },
      { min: 26, max: 30, color: '#999999' },
      { max: 15, color: '#fa5151' },
      { min: 30, color: '#fa5151' }
    ],
    ch4_concent: [
      { min: 0, max: 5, color: '#07c160' },
      { min: 5, max: 7, color: '#999999' },
      { min: 7, max: 10, color: '#fa5151' }
    ],
    co: [
      { min: 0, max: 50, color: '#07c160' },
      { min: 50, max: 100, color: '#999999' },
      { min: 100, color: '#fa5151' }
    ],
    co2: [
      { min: 0, max: 1000, color: '#07c160' },
      { min: 1000, max: 2000, color: '#999999' },
      { min: 2000, color: '#fa5151' }
    ],
    pm2_5: [
      { min: 0, max: 50, color: '#07c160' },
      { min: 50, max: 100, color: '#999999' },
      { min: 100, color: '#fa5151' }
    ],
    health_score: [
      { min: 80, max: 100, color: '#07c160' },
      { min: 60, max: 80, color: '#999999' },
      { max: 60, color: '#fa5151' }
    ],
    output_current: [
      { min: 0.5, max: 3, color: '#07c160' },
      { min: 0, max: 0.5, color: '#999999' },
      { min: 3, max: 4, color: '#999999' },
      { min: 4, color: '#fa5151' }
    ],
    output_voltage: [
      { min: 12, max: 36, color: '#07c160' },
      { min: 0, max: 12, color: '#999999' },
      { min: 36, max: 48, color: '#999999' },
      { min: 48, color: '#fa5151' }
    ],
    device_temp: [
      { min: -20, max: 70, color: '#07c160' },
      { min: 70, max: 90, color: '#999999' },
      { min: 90, color: '#fa5151' }
    ],
    runtime_hours: [
      { min: 0, color: '#07c160' }   // 一律绿色
    ]
  };

  const ruleList = rules[identifier];
  if (!ruleList) return '#000000';   // 未定义的属性显示默认黑色

  for (const rule of ruleList) {
    const minOk = rule.min === undefined || value >= rule.min;
    const maxOk = rule.max === undefined || value <= rule.max;
    if (minOk && maxOk) {
      return rule.color;
    }
  }
  return '#000000';  // 没有匹配则默认黑色
};

const getStatusQueryTimestamps = () => {
  const now = Date.now();
  return {
    start_time: now - CONFIG.STATUS_QUERY_RANGE_MS,
    end_time: now
  };
};

// ========== 第二部分：Page 定义 ==========
Page({
  data: {
    deviceData: [
      { identifier: "ch4_concent",    value: 0.0,  type: "float" },
      { identifier: "co",             value: 0.0,  type: "float" },
      { identifier: "co2",            value: 0,    type: "int32" },
      { identifier: "device_temp",    value: 0.0,  type: "float" },
      { identifier: "env_humidity",   value: 0.0,  type: "float" },
      { identifier: "env_temp",       value: 0.0,  type: "float" },
      { identifier: "health_score",   value: 0,    type: "int32" },
      { identifier: "output_current", value: 0.0,  type: "float" },
      { identifier: "output_voltage", value: 0.0,  type: "float" },
      { identifier: "pm2_5",          value: 0,    type: "int64" },
      { identifier: "runtime_hours",  value: 0,    type: "int32" },
      { identifier: "BUZZER",         value: false, type: "bool" },
      { identifier: "LED",            value: false, type: "bool" }
    ],
    deviceValueMap: {},
    deviceColorMap: {},    // 【新增】用于存储每个属性的颜色
    deviceStatusLog: [],
  },

  dataRefreshTimer: null,

  onLoad(options) {
    this.fetchAllDeviceInfo();
    this.startDataRefreshTimer();
  },

  onUnload() {
    this.clearDataRefreshTimer();
  },

  startDataRefreshTimer() {
    this.clearDataRefreshTimer();
    this.dataRefreshTimer = setInterval(() => {
      this.fetchAllDeviceInfo();
    }, CONFIG.DATA_REFRESH_INTERVAL);
  },

  clearDataRefreshTimer() {
    if (this.dataRefreshTimer) {
      clearInterval(this.dataRefreshTimer);
      this.dataRefreshTimer = null;
    }
  },

  fetchAllDeviceInfo() {
    this.fetchDeviceProperties();
    this.fetchDeviceStatus();
  },

  async fetchDeviceProperties() {
    const url = `${CONFIG.API_BASE_URL}/thingmodel/query-device-property?product_id=${CONFIG.PRODUCT_ID}&device_name=${CONFIG.DEVICE_NAME}`;
    try {
      const res = await this.wxRequest({ url, method: 'GET' });
      if (res.data.code === 0 && res.data.data) {
        this.updateLocalDeviceData(res.data.data);
      } else {
        this.showToast(res.data.msg || '数据获取异常', 'none');
      }
    } catch (error) {
      console.error("设备属性请求失败：", error);
      this.showToast('网络请求失败', 'none');
    }
  },

  /**
   * 【修改】更新本地数据时，同时计算并更新颜色映射
   */
  updateLocalDeviceData(remoteDataArray) {
    const deviceDataUpdates = {};
    const valueMapUpdates = {};
    const colorMapUpdates = {};   // 新增

    remoteDataArray.forEach(remoteItem => {
      const localIndex = this.data.deviceData.findIndex(localItem => localItem.identifier === remoteItem.identifier);
      if (localIndex !== -1) {
        const targetType = this.data.deviceData[localIndex].type;
        const processedValue = valueConverter(remoteItem.value, targetType);
        deviceDataUpdates[`deviceData[${localIndex}].value`] = processedValue;
        valueMapUpdates[`deviceValueMap.${remoteItem.identifier}`] = processedValue;
        // 计算颜色并存入 colorMapUpdates
        colorMapUpdates[`deviceColorMap.${remoteItem.identifier}`] = getDisplayColor(remoteItem.identifier, processedValue);
      }
    });

    if (Object.keys(deviceDataUpdates).length > 0) this.setData(deviceDataUpdates);
    if (Object.keys(valueMapUpdates).length > 0) this.setData(valueMapUpdates);
    if (Object.keys(colorMapUpdates).length > 0) this.setData(colorMapUpdates);  // 批量更新颜色
  },

  async fetchDeviceStatus() {
    const { start_time, end_time } = getStatusQueryTimestamps();
    const url = `${CONFIG.API_BASE_URL}/device/status-history?product_id=${CONFIG.PRODUCT_ID}&device_name=${CONFIG.DEVICE_NAME}&start_time=${start_time}&end_time=${end_time}&limit=${CONFIG.STATUS_QUERY_LIMIT}`;
    try {
      const res = await this.wxRequest({ url, method: 'GET' });
      this.setData({ deviceStatusLog: res.data });
    } catch (error) {
      console.error("设备状态请求失败：", error);
    }
  },

  async onenet_set_device_property(event) {
    const param_name = event.currentTarget.dataset.param;
    const new_value = event.detail.value;
    wx.showLoading({ title: '设置中...', mask: true });

    try {
      const res = await this.wxRequest({
        url: `${CONFIG.API_BASE_URL}/thingmodel/set-device-property`,
        method: 'POST',
        data: {
          product_id: CONFIG.PRODUCT_ID,
          device_name: CONFIG.DEVICE_NAME,
          params: { [param_name]: new_value }
        }
      });

      wx.hideLoading();
      if (res.data && res.data.code === 0) {
        this.showToast('设置成功', 'success');
        this.updatePropertyImmediately(param_name, new_value);
        this.startDataRefreshTimer();
      } else {
        wx.showToast({ title: res.data.msg || '设置失败', icon: 'none', duration: 2000 });
      }
    } catch (error) {
      console.error('属性设置请求失败：', error);
      wx.hideLoading();
      wx.showToast({ title: '网络错误，设置失败', icon: 'none', duration: 2000 });
    }
  },

  /**
   * 设置成功后立即更新 UI，同时更新颜色
   */
  updatePropertyImmediately(identifier, newValue) {
    const localIndex = this.data.deviceData.findIndex(item => item.identifier === identifier);
    if (localIndex !== -1) {
      const color = getDisplayColor(identifier, newValue);  // 计算新颜色
      this.setData({
        [`deviceData[${localIndex}].value`]: newValue,
        [`deviceValueMap.${identifier}`]: newValue,
        [`deviceColorMap.${identifier}`]: color              // 同时更新颜色
      });
    }
  },

  // ========== 工具方法 ==========
  wxRequest(options) {
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        timeout: 10000,
        header: {
          'Authorization': CONFIG.AUTH_INFO,
          'content-type': 'application/json',
          ...options.header,
        },
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      });
    });
  },

  showToast(title, icon = 'none', mask = false) {
    wx.showToast({ title, icon, duration: icon === 'success' ? 1500 : 2000, mask });
  },
});