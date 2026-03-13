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
  return `Hey ${name}, welcome aboard!`;
}

function abs(n) {
  return n < 0 ? -n : n;
}

function max(a, b) {
  return a > b ? a : b;
}

module.exports = { add, subtract, multiply, divide, formatGreeting, abs, max };
