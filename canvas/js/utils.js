//动画循环
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 17 /*~ 1000/60*/);
        });
}

//动画循环取消
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
        window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
        window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
        window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
        window.clearTimeout);
}

/**
 * 判断点是否在圆内
 * 
 * @param {any} x
 * @param {any} y
 * @param {any} r
 * @param {any} x0
 * @param {any} y0
 * @returns
 */
function ifInBall(x, y, r, x0, y0) {
    return Math.sqrt(Math.pow(x0 - x, 2) + Math.pow(y0 - y, 2)) <= r;
}


