// pages/detail/detail.js
let datas = require('../../datas/list-data.js')
// 获取全局的App的实例对象
let appDatas = getApp()
console.log(appDatas)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    isCollected: false,
    isMusicPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // options是路由传参收集的对象{index: "0"}
  onLoad: function(options) {
    // console.log(options)
    // 获取路由跳转的query传参
    let index = options.index
    this.setData({
      detailObj: datas.list_data[index],
      index
    })
    // 读取缓存数据，确认页面是否被收藏
    let storageObj = wx.getStorageSync('isCollected')
    if (storageObj[index]) {
      // 页面被收藏了 
      this.setData({
        isCollected: true
      })
    }
    // 判断当前页面的音乐是否在播放
    if (appDatas.globalData.isPlay && appDatas.globalData.pageIndex === index) {
      console.log(1)
      this.setData({
        isMusicPlay: true
      })
    }
    // 监听音乐播放和暂停
    // wx.onBackgroundAudioPlay(()=>{
    //   // 音乐播放
    //   this.setData({
    //     isMusicPlay:true
    //   })
    //   // 将状态存到App的data中
    //   appDatas.globalData.pageIndex = index
    //   appDatas.globalData.isPlay = true
    // })
    //   wx.onBackgroundAudioPause(() => {
    //     // 音乐暂停
    //     this.setData({
    //       isMusicPlay: false
    //     })
    //     // 将状态存到App的data中
    //     appDatas.globalData.pageIndex = index
    //     appDatas.globalData.isPlay = false
    //   })
    //   console.log(appDatas)

    // 监听音乐停止
    wx.onBackgroundAudioStop(() => {
      this.setData({
        isMusicPlay: false
      })
      appDatas.globalData.isPlay = false
    })
  },
  // 定义处理收藏的方法
  handleCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })
    let title = isCollected ? '收藏成功' : '取消收藏'
    // 显示消息提示框
    wx.showToast({
      title
    })
    let obj = wx.getStorageSync('isCollected') || {}
    let index = this.data.index
    obj[index] = isCollected
    // 缓存收藏的状态
    wx.setStorage({
      key: 'isCollected',
      data: obj,
    })
  },

  // 处理音乐播放的功能
  musicControl() {
    let isMusicPlay = !this.data.isMusicPlay
    this.setData({
      isMusicPlay
    })
    let {
      dataUrl,
      title,
      coverImgUrl
    } = this.data.detailObj.music

    // 控制音乐播放
    if (isMusicPlay) {
      wx.playBackgroundAudio({
        dataUrl,
        title,
        coverImgUrl
      })
      // 修改全局App中data的状态
      // 说明哪个页面的音乐在播放
      appDatas.globalData.pageIndex = this.data.index
      // 说明有音乐在播放
      appDatas.globalData.isPlay = true
    } else {
      wx.stopBackgroundAudio()
      // 声明当前页面的音乐停止播放
      appDatas.globalData.isPlay = false
    }

  },
  handleShare() {
    wx.showToast({
      title: '未完成的功能'
    })

  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})