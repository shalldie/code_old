
// var img = new Image();
// img.src = 'img/plane.png';

// var canvas = document.getElementById('demo');
// canvas.width = 500;
// canvas.height = 300;

// canvas.style.cssText = 'margin:50px auto;display:block;';

// var ctx = canvas.getContext('2d');

// var sWid = 60;
// var sHei = 180;

// var wid = 170;
// var hei = 180;

// var x = 0;
// var y = 730;

// img.onload = function () {
//     ctx.fillRect(0, 0, wid, hei);
//     drawImage(ctx, img, x, y, sWid, sHei, 0, 0, wid, hei);

// }

// function drawImage(ctx, image, sX, sY, sWid, sHei, tX, tY, tWid, tHei) {
//     var offX = (tWid - sWid) / 2;

//     ctx.drawImage(image, sX, sY, sWid, sHei, tX + offX, tY, tWid - offX * 2, tHei);
// }

var index = 0;

var ele = document.getElementById('demo');


setInterval(function () {
    ele.style.backgroundPositionX = - index * 172 + 'px';
    index++;
    if (index >= 11) index = 0;
}, 100);