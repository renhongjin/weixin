//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '小程序从我这里开始',
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //自定义分享标题
  onShareAppMessage: function () {
    return {
      title: '世界因为分享而美丽',
      path: 'pages/index/index'
    }
  },
  gotoList:function () {
    wx.switchTab({
      url: '../list/list'
    })
  },
  gotoIcon:function () {
    wx.navigateTo({
      url: '../icon/icon'
    })
  }
})
