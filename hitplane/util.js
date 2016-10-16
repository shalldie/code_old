

/**
 * 帧动画绘制函数
 * 
 * @param {any} callback
 */
function makeAnimation(callback) {
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    callback();
    raf(function () {
        makeAnimation(callback);
    });
}



function getRotateDirection() {

}