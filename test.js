const { add, subtract, multiply, divide, formatGreeting, modulo } = require("./math");

let failures = 0;

function assert(name, actual, expected) {
  if (actual !== expected) {
    console.error(`FAIL: ${name} — expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    failures++;
  } else {
    console.log(`PASS: ${name}`);
  }
}

function assertThrows(name, fn) {
  try {
    fn();
    console.error(`FAIL: ${name} — expected error but none thrown`);
    failures++;
  } catch (e) {
    console.log(`PASS: ${name}`);
  }
}

// Core math
assert("add(2, 3)", add(2, 3), 5);
assert("add(-1, 1)", add(-1, 1), 0);
assert("subtract(10, 4)", subtract(10, 4), 6);
assert("multiply(3, 7)", multiply(3, 7), 21);
assert("multiply(0, 5)", multiply(0, 5), 0);
assert("divide(10, 2)", divide(10, 2), 5);
assert("divide(7, 2)", divide(7, 2), 3.5);
assertThrows("divide(1, 0) throws", () => divide(1, 0));

// Greeting
assert("formatGreeting('Alice')", formatGreeting("Alice"), "Hello, Alice! Welcome to our app.");

// Modulo
assert("modulo(10, 3)", modulo(10, 3), 1);

if (failures > 0) {
  console.error(`\n${failures} test(s) failed`);
  process.exit(1);
} else {
  console.log("\nAll tests passed");
}
