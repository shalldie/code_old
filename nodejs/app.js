

function sleep(delay) {
    return new Promise(res => {
        setTimeout(function () {
            res();
        }, delay);
    });
}

async function work() {
}

(async () => {
    console.time(1);
    await sleep(1000);
    console.timeEnd(1);
})();