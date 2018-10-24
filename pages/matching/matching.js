// pages/matching/matching.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    matching: true // 匹配中
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    app.setWatch(this.data, this.watch)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }

    setTimeout(() => {
      this.setData({
        matching: true
      })
    }, 3000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  watch: {
    matching: function (val) { 
      setTimeout(() => {

      }, 1000)
    }
  }
})