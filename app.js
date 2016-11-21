const task = require('mini-task');

let que = task.queue().dequeue();



for (let i = 0; i < 10; i++) {
    que.will(n => conosle.log(new Date().getSeconds())).delay(1000);
}

que.catch(err => console.log(err));