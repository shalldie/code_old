var ajax=require('../../utils/ajax');

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
    duration: 1000,
    fileLength:0
  },
  ajaxFile:function(){
    var that=this;
    ajax.get('http://cdn.bootcss.com/jquery/1.12.4/jquery.js')
        .then(content=>{
            that.setData({
              fileLength:content.length
            });
        });
    // ajax.jsonp('http://mini.eastday.com/rmrili_wannianli/wannianli2029.js',
    // {
    //   callback:'wannianli2029'
    // }).then(result=>console.log(result));
  }
});