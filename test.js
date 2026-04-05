function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Error: Division by zero";
  }
  return x / y;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", (answer1) => {
  const num1 = parseInt(answer1);

  rl.question("Enter the operator (+, -, *, /): ", (operator) => {
    const op = operator;

    rl.question("Enter the second number: ", (answer2) => {
      const num2 = parseInt(answer2);

      if (op === '+') {
        console.log(`Result: ${add(num1, num2)}`);
      } else if (op === '-') {
        console.log(`Result: ${subtract(num1, num2)}`);
      } else if (op === '*') {
        console.log(`Result: ${multiply(num1, num2)}`);
      } else if (op === '/') {
        console.log(`Result: ${divide(num1, num2)}`);
      }

      rl.close();
    });
  });
});