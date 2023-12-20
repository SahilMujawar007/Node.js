const EventEmitter = require('node:events')

let eventEmitter = new EventEmitter();

let myEventHandler = function (para) {
    console.log('Thanks For Subscribing ' + para)
}

eventEmitter.on('subscribe', myEventHandler);

eventEmitter.emit("subscribe", "College Wallah");

