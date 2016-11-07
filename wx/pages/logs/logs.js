//logs.js
var util = require('../../utils/util.js');

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || [])
      .map(log=>util.dateFormat(new Date(log),'yyyy-MM-dd HH:mm:ss'))
    });
  }
});
