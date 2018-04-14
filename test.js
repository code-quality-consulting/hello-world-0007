const assert = require("assert");

function makeGreeting() {
    return "Hello world!";
}

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Jason"), "Hello Jason!");
console.log("success");
