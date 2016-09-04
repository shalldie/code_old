var ele = document.getElementById('demo');

ele.width = 800;
ele.height = 500;

var ctx = ele.getContext('2d');


var circle = { x: 100, y: 100 };

var circle2 = { x: 100, y: 100 };

var target = circle;

ele.addEventListener('mousemove', function (ex) {
    target = {
        x: ex.offsetX,
        y: ex.offsetY
    };
});

function draw() {
    var ease = 0.1;
    var ease2 = 0.1;
    circle.x += (target.x - circle.x) * ease;
    circle.y += (target.y - circle.y) * ease;

    circle2.x += (circle.x - circle2.x) * ease2;
    circle2.y += (circle.y - circle2.y) * ease2;

    ctx.clearRect(0, 0, ele.width, ele.height);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, 30, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "#2ad";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(circle2.x, circle2.y, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    requestAnimationFrame(draw);
}

draw();