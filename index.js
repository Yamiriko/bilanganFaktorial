const prompt = require('prompt-sync')();

// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate 5!
var a = prompt('Input Bilangan : ', a);
const result = factorial(a);
console.log(`5! = ${result}`);
