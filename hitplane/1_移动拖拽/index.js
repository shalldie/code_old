/**
 * 球
 * 
 * @param {any} x 
 * @param {any} y
 * @param {any} r
 * @param {any} color
 */
function Ball(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
}

Ball.prototype.onPaint = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
};

var ball = new Ball(200, 200, 40, "#2ad");

// --------- 上面是一个小球 -----

var canvas = document.getElementById('demo');
canvas.width = 500;
canvas.height = 300;

var ctx = canvas.getContext('2d');


makeAnimation(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.onPaint(ctx);
});


// ------- 移动 -----------

var ifDown = false;
var basePos;
canvas.addEventListener('mousedown', function (ex) {
    basePos = { x: ex.offsetX, y: ex.offsetY };

    var xLen = Math.pow(basePos.x - ball.x, 2);
    var yLen = Math.pow(basePos.y - ball.y, 2);
    var rLen = Math.pow(ball.r, 2);

    if (xLen + yLen > rLen) {
        return;
    }

    ifDown = true;
});

canvas.addEventListener('mousemove', function (ex) {
    if (!ifDown) return;
    var offX = ex.offsetX - basePos.x;
    var offY = ex.offsetY - basePos.y;

    ball.x += offX;
    ball.y += offY;

    basePos = { x: ex.offsetX, y: ex.offsetY };
});

canvas.addEventListener('mouseup', function () {
    ifDown = false;
});