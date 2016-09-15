var request = require('request');
var fs = require('fs');
var path = require('path');
var async = require('async');

var left = 137;

function createFunc(url) {


    return function (next) {

        var stream = fs.createWriteStream(path.join(__dirname, 'img', path.basename(url)));

        stream.on('error', err => {
            console.log(err + '    ' + url);
            next();
        });
        stream.on('finish', () => {
            console.log('save successfully:' + url + '    剩余：' + (--left))
            next();
        });

        request(url).pipe(stream);
    };
}

var arr = Array.apply(null, Array(137)).map((item, i) => i + 1).map(n => createFunc(`http://cdn.galacg.me/footer/${n}.png`));

async.parallelLimit(arr, 10, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('all over...');
});