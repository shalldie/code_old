// http://cdn.bootcss.com/jquery/1.12.4/jquery.js

require('../polyfill/promise');

// 接口类型
var methodArr=['OPTIONS',
                'GET',
                'HEAD',
                'POST',
                'PUT',
                'DELETE',
                'TRACE',
                'CONNECT'];

methodArr.forEach(n=>{
    module.exports[n.toLowerCase()]=function(url,data,ifJSON){
            return new Promise((res,rej)=>{
                wx.request({
                    url: url,
                    method:n,
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
    };
});

// function makeRequest(url,data,ifJSON,method){
//     return new Promise((res,rej)=>{
//         wx.request({
//             url: url,
//             method:method,
//             data: data||{},
//             header: {
//                 'Content-Type': 'application/json'
//             },
//             success: function(result) {
//                 var info= ifJSON?JSON.parse(result.data):result.data;
//                 res(info);
//             },
//             fail:function(err){
//                 rej(err);
//             }
//         });
//     });
// }

function makeJsonp(url,data){
    data=data||{};   
    data._= Date.now(); 
    data.callback = 
                data.callback
                ||("jsonpcallback"+(Math.random()+"").slice(-6));

    var dataArr=[];
    for(var k in data){
        dataArr.push(`${k}=${encodeURI(data[k]||'')}`);
    }
    var search=dataArr.join('&');
    url+="?"+search;

    return new Promise((res,rej)=>{
        var script=document.createElement('script');
        window[data.callback]=function(result){
            res(result);
            delete window[data.callback]; // 删除添加的callback
            document.body.removeChild(script); // 删除标签
        };
        script.type="text/javascript";
        script.src=url;
        document.body.appendChild(script);
    });
    
}


// module.exports={
//     jsonp:makeJsonp
// };