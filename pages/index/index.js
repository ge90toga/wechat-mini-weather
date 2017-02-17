//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    city:'',
    country:''

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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

  onShow: function(){
    //app.globalData.weather_apikey
    
  },

  onGetWeather: function(){
    var self = this;
    wx.navigateTo({
      url: '../weather/weather?city='+
      self.data.city+'&country='+self.data.country
    })
  },

  bindKeyInput: function(e) {
    //e.currentTarget.id
    switch(e.currentTarget.id){
      case 'input-city':
        this.setData({city:e.detail.value});
        break;
      case 'input-country':
        this.setData({country:e.detail.value});
        break;
    }
  }


})