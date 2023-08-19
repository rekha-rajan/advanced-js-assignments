const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`order received for a ${size} pizza with ${topping}`);
})

emitter.on("order-pizza", (size) => {
    if (size === "large") {
        console.log(`Serving complimentry drink`);
    }
})
emitter.emit("order-pizza", "large", "mashrooms", "love");