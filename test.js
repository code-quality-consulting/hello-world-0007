const assert = require("assert");

function makeGreeting(name) {
    if (name) {
        return "Hello" + " " + name + "!";
    }
    return "Hello world!";
}

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Jason"), "Hello Jason!");
console.log("success");
