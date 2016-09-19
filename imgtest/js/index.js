var index = 0;

function setIndex(i) {
    var ele = document.getElementById('demo');
    ele.style.backgroundPositionX = -i * 180 + 'px';
    ele.style.backgroundPositionY = 0;
    i++;
    if (i >= 11) i = 0;
    index = i;
}

setInterval(function () {
    setIndex(index);
}, 100);