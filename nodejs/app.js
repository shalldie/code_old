const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('adduser', () => {
    console.log(`添加了一个用户...`);
});

emitter.on('adduser', (name, age) => {
    console.log(`用户名：${name}，年龄：${age}`);
});

emitter.emit('adduser', 'tom', 12);