// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户的登录信息
    wx.getUserInfo({
      success:(data)=>{
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail:()=>{
        console.log("获取用户信息失败")
      }
    })
  },
  goList(){
    // 去list页面
    wx.switchTab({
      url: '/pages/list/list',
    })
  },
  handelGetUserInfo(info){
    // 判断用户点击的是否是允许
    if(info.detail.rawData){
      this.setData({
        userInfo: JSON.parse(info.detail.rawData)
      })
    }
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})