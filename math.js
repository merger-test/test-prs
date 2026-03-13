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
  return `Hello, ${name}! Welcome to our app.`;
}

module.exports = { add, subtract, multiply, divide, formatGreeting, clamp };

function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return min;
  return value;
}
