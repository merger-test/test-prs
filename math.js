// Math utilities
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

function formatGreeting(name) {
  return `Hi, ${name}! Welcome to our app.`;
}

module.exports = { add, subtract, multiply, divide, formatGreeting, max };

function max(a, b) {
  return a > b ? a : b;
}
