require('babel-polyfill');

let work = async function () {
    console.log(new Date().getSeconds());
    await sleep(1000);
    console.log(new Date().getSeconds());
}

function sleep(delay) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res();
        }, delay);
    });
}

work();