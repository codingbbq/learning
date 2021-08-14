var EventsEmitter = require("events");

class Greetr extends EventsEmitter {
    constructor() {
        super();
        this.greetings = "Hello World";
    }

    greet(data) {
        console.log(`${this.greetings} ${data}`);
        this.emit('greet', data);
    }
}

var greetr = new Greetr();
greetr.on('greet', function(data) {
    console.log(`Someone greeted! ${data}`)
});

greetr.greet("John");