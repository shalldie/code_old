// http://cdn.bootcss.com/jquery/1.12.4/jquery.js

require('../polyfill/promise');

function makeRequest(url,data,ifJSON,method){
    return new Promise((res,rej)=>{
        wx.request({
            url: url,
            method:method,
            data: data||{},
            header: {
                'Content-Type': 'application/json'
            },
            success: function(result) {
                var info= ifJSON?JSON.parse(result.data):result.data;
                res(info);
            },
            fail:function(err){
                rej(err);
            }
        });
    });
}

module.exports={
    get:function(url,data,ifJSON){
        return makeRequest(url,data,ifJSON,'GET');
    },
    post:function(url,data,ifJSON){
        return makeRequest(url,data,ifJSON,'POST');
    }
};