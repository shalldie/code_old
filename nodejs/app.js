const fs = require('fs');

// let str1 = fs.readFileSync('./hello.txt', 'utf-8');

// let str2 = fs.readFileSync('./jsconfig.json', 'utf-8');



async function getFile(name) {
    return new Promise(res => {
        fs.readFile(name, 'utf-8', (err, result) => {
            res(result);
        });
    });
}

(async () => {
    let strPro1 = getFile('./hello.txt');

    let strPro2 = getFile('./jsconfig.json');

    console.log(await strPro1, await strPro2);
})();