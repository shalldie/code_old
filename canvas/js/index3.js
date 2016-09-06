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
        ctx.moveTo(-40, -40);
        ctx.lineTo(-40, 40);
        ctx.lineTo(40, 40);
        ctx.lineTo(80, 0);
        ctx.lineTo(40, -40);
        ctx.lineTo(-40, -40);
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }
}

var ele = document.getElementById('demo');

ele.style.width = "800px";
ele.style.height = "500px";


ele.width = 1600;
ele.height = 1000;

var ctx = ele.getContext('2d');

var arrow = new Arrow(400, 400, "#2ad", Math.PI / 4);
var arrow2 = new Arrow(800, 400, "#2ad", 0);

ele.addEventListener('mousemove', function (ex) {
    var mx = ex.offsetX * 2;
    var my = ex.offsetY * 2;

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