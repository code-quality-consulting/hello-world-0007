/*jslint
    node
*/
const assert = require("assert");

function makeGreeting(name = "world") {
    return "Hello" + " " + name + "!";
}

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Jason"), "Hello Jason!");
console.log("success");
