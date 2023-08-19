const upperCase = require("upper-case").upperCase;
function greet(name) {
    console.log(upperCase(`Hello ${name}, welcome to codevolution!`));
}
// greet("Dhruv");

module.export = greet;