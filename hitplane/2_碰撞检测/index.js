
// --------- 球 class -----
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
    this.speed = 0; // 速度
    this.speedX = Math.floor(Math.random() * 5 + 10) / 2 * (Math.random() > 0.5 ? 1 : (-1)); // X轴加速度
    this.speedY = Math.floor(Math.random() * 5 + 10) / 2 * (Math.random() > 0.5 ? 1 : (-1)); // Y轴加速度
}

Ball.prototype.onPaint = function (ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
};

var ball = new Ball(100, 100, 30, "#2ad");

var ball2 = new Ball(250, 100, 30, "#f00");

var ball3 = new Ball(360, 100, 30, "black");


// --------- 球 class end -----

// --------- 校验方法 ---------

/**
 * 碰撞掉头
 * 
 * @param {any} obj1
 * @param {any} obj2
 */
function checkImpact(obj1, obj2, canvas) {
    if (!obj2) { //如果是检测碰墙
        var len = obj1.r;

        var xDir = ifOutXY(obj1.x, len, canvas.width);

        if (xDir) {
            obj1.speedX = Math.abs(obj1.speedX) * xDir;
            // console.log(1);
        }

        var yDir = ifOutXY(obj1.y, len, canvas.height);

        if (yDir) {
            obj1.speedY = Math.abs(obj1.speedY) * yDir;
        }

    } else {  // 两者是否相撞
        if (!ifBallHit(obj1, obj2)) return; // 没相撞，返回

        getDirection(obj1, obj2);

    }

    // x、y 轴检测超出画布
    function ifOutXY(x, len, maxNum) {
        if (x - len <= 0) {
            return 1;
        }
        else if (x + len >= maxNum) {
            return -1;
        }
        return 0;
    }

    // 检测球跟方块的碰撞💥
    function ifBallHit(ball, ball2) {
        var offX = Math.pow(ball.x - ball2.x, 2);
        var offY = Math.pow(ball.y - ball2.y, 2);
        if (offX + offY < Math.pow(ball.r + ball2.r, 2)) {
            return true;
        }
        return false;
    }

}

function getDirection(ball1, ball2) {
    // 参考： http://www.cnblogs.com/axes/p/3513343.html
    var rc = Math.sqrt(Math.pow(ball1.x - ball2.x, 2) + Math.pow(ball1.y - ball2.y, 2));

    var ax = ((ball1.speedX - ball2.speedX) * Math.pow((ball1.x - ball2.x), 2) + (ball1.speedY - ball2.speedY) * (ball1.x - ball2.x) * (ball1.y - ball2.y)) / Math.pow(rc, 2);
    var ay = ((ball1.speedY - ball2.speedY) * Math.pow((ball1.y - ball2.y), 2) + (ball1.speedX - ball2.speedX) * (ball1.x - ball2.x) + (ball1.y - ball2.y)) / Math.pow(rc, 2);

    var sum = Math.pow(ball1.speedX, 2) + Math.pow(ball1.speedY, 2);

    ball1.speedX = ball1.speedX - ax;
    ball1.speedY = ball1.speedY - ay;

    var per = Math.sqrt(sum / (Math.pow(ball1.speedX, 2) + Math.pow(ball1.speedY, 2)));
    ball1.speedX *= per;
    ball1.speedY *= per;

    sum = Math.pow(ball2.speedX, 2) + Math.pow(ball2.speedY, 2);

    ball2.speedX = ball2.speedX + ax;
    ball2.speedY = ball2.speedY + ay;

    per = Math.sqrt(sum / (Math.pow(ball2.speedX, 2) + Math.pow(ball2.speedY, 2)));
    ball2.speedX *= per;
    ball2.speedY *= per;

    var clength = ((ball1.r + ball2.r) - rc) / 2;
    var cx = clength * (ball1.x - ball2.x) / rc;
    var cy = clength * (ball1.y - ball2.y) / rc;
    ball1.x = ball1.x + cx;
    ball1.y = ball1.y + cy;
    ball2.x = ball2.x - cx;
    ball2.y = ball2.y - cy;
}

// ------- demo展示 -------------
var canvas = document.getElementById('demo');
canvas.width = 500;
canvas.height = 300;

var ctx = canvas.getContext('2d');


makeAnimation(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    ball2.x += ball2.speedX;
    ball2.y += ball2.speedY;

    ball3.x += ball3.speedX;
    ball3.y += ball3.speedY;

    checkImpact(ball, null, canvas);
    checkImpact(ball2, null, canvas);
    checkImpact(ball3, null, canvas);

    checkImpact(ball, ball2, canvas);

    checkImpact(ball2, ball3, canvas);

    checkImpact(ball, ball3, canvas);

    ball.onPaint(ctx);
    ball2.onPaint(ctx);
    ball3.onPaint(ctx);
});

