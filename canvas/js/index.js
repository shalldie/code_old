var ele = document.getElementById('demo');

ele.width = 500;
ele.height = 300;

var ctx = ele.getContext('2d');


var circle = { x: 100, y: 100 };

var canDrag = false;

var offset = { x: 0, y: 0 };

ele.addEventListener('mousedown', function (ex) {


    var x = ex.offsetX,
        y = ex.offsetY;

    if (!ifInBall(circle.x, circle.y, 50, x, y)) return;

    canDrag = true;
    offset = {
        x: x - circle.x,
        y: y - circle.y
    };
});

ele.addEventListener('mouseup', function (ex) {
    canDrag = false;
});

ele.addEventListener('mousemove', function (ex) {
    if (!canDrag) return;
    var x = ex.offsetX,
        y = ex.offsetY;

    circle.x = x - offset.x;
    circle.y = y - offset.y;
});

function draw() {
    ctx.clearRect(0, 0, ele.width, ele.height);

    ctx.beginPath();

    ctx.arc(circle.x, circle.y, 50, 0, Math.PI * 2);

    ctx.closePath();

    ctx.fillStyle = '#2ad';

    ctx.fill();

    requestAnimationFrame(draw);
}

draw();
