// 箭头指向鼠标的位置

class Arrow {
    constructor(x, y, color, angle) {
        this.x = x;  // 中心点
        this.y = y;
        this.color = color;
        this.angle = angle;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.rotate(this.angle);

        ctx.beginPath();
        ctx.moveTo(-20, -20);
        ctx.lineTo(-20, 20);
        ctx.lineTo(20, 20);
        ctx.lineTo(40, 0);
        ctx.lineTo(20, -20);
        ctx.lineTo(-20, -20);
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }
}

var ele = document.getElementById('demo');

ele.width = 800;
ele.height = 500;

var ctx = ele.getContext('2d');

var arrow = new Arrow(200, 200, "#2ad", Math.PI / 4);
var arrow2 = new Arrow(400, 200, "#2ad", 0);

ele.addEventListener('mousemove', function (ex) {
    var mx = ex.offsetX;
    var my = ex.offsetY;

    var a1 = Math.atan2(my - arrow.y, mx - arrow.x);

    var a2 = Math.atan2(my - arrow2.y, mx - arrow2.x);

    arrow.angle = a1;
    arrow2.angle = a2;
});

function draw() {
    ctx.clearRect(0, 0, ele.width, ele.height);

    arrow.draw(ctx);
    arrow2.draw(ctx);
    requestAnimationFrame(draw);
}

draw();