Page({
  data: {
    imgUrls: [
      'http://i1.piimg.com/567571/f07bd295f4cdbd7a.png',
      'http://i1.piimg.com/567571/462506e0ed7b0c25.png',
      'http://i1.piimg.com/567571/e5859ff3e6487575.png',
      'http://i1.piimg.com/567571/89e657a08f9f13f6.png',
      'http://i1.piimg.com/567571/884e69c2eb02316b.png',
      'http://i1.piimg.com/567571/0f8738e9cfbb9485.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
});