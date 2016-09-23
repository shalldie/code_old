
var img = new Image();
img.src = 'img/hello.png';

var canvas = document.getElementById('demo');
canvas.width = 172;
canvas.height = 200;

canvas.style.cssText = 'margin:50px auto;display:block;';

var ctx = canvas.getContext('2d');

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

var speed = 60;
var timeStart = +new Date;

function drawImage() {
    ctx.clearRect(0, 0, 172, 200);
    var timeEnd = +new Date;
    var timeDiff = timeEnd - timeStart;
    index = ~~(timeDiff / speed);
    index = index % 11;
    ctx.drawImage(img, 172 * index, 0, 172, 200, 0, 0, 172, 200);
    requestAnimationFrame(drawImage);
}
drawImage();


// setInterval(function () {
//     ele.style.backgroundPositionX = - index * 172 + 'px';
//     index++;
//     if (index >= 11) index = 0;
// }, 100);