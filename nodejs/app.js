const fs = require('fs');

let data = '';

let stream = fs.createReadStream('./hello.txt', 'utf8');

stream.on('data', function (result) {
    data += result;
});

stream.on('end', function () {
    console.log(data);
});