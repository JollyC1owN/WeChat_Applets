// pages/list/list.js
let datas = require('../../datas/list-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 更新状态数据
    this.setData({
      listArr: datas.list_data
    })
  },
  goDetail(event) {
    // 准备数据接收下标
    let index = event.currentTarget.dataset.index
    // 跳转到详情页
    wx.navigateTo({
      // query传参
      url: '/pages/detail/detail?index='+index,
    })
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