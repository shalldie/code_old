

function sleep(delay) {
    return new Promise(res => {
        setTimeout(function () {
            res();
        }, delay);
    });
}

(async () => {
    console.time(1);
    let delay1 = sleep(1000);
    let delay2 = sleep(2000);
    await delay1;
    await delay2;
    console.timeEnd(1);
})();