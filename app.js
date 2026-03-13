// Demo app
function greet(name) {
  return `Hi there, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { greet, add, multiply };

function log(msg) { console.log("[APP] " + msg); }
