require('../../polyfill/promise.js');

var fun1=function(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(+new Date);
        },1000);
    });
};

var fun2=function(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(+new Date);
        },2000);
    });
};

Page({
    data:{
        time:new Date()
    },
    setTime:function(){
        var that=this;
        Promise
        .all([fun1(),fun2()])
        .then(arr=>{
            var result=arr[1]-arr[0];
            that.setData({
                time:result
            });
        });
    }
});