//weather.js
var app = getApp();
var pageObject = {
 data: {
    city:'',
    country:'',
    mainStatus:'main',
    temprature: '',
  },

  onLoad: function(option){ 
    this.setData({
      city:option.city,
      country:option.country
    })
  },

  onShow: function(){
    //console.log('onShow');
    this.getWeatherData();
  },


  getWeatherData: function(){
    self = this;
    wx.request({
      url: 'http://api.openweathermap.org/data/2.5/weather?',
      data: {
        q: this.data.city+','+this.data.country,
        appid:app.globalData.weather_apikey
      },
      method: 'GET', 
      success: function(res){
        //self.setData({test:'ddd'});
        //self.setData({mainStatus:res.data.weather[0].main});
        self.setData({
          mainStatus: res.data.weather[0].main,
          temprature: Math.round(res.data.main.temp - 273)
        });

        // console.log(self.data.mainStatus);
        // console.log(self.data.temprature);

      },
      fail: function(err) {
        console.log('failed', err);
      },
    })

  }


}

Page(pageObject);
