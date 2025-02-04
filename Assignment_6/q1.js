let a = 5;
let b = 10;

a = a + b; // a now becomes 15
b = a - b; // b now becomes 5 (15 - 10)
a = a - b; // a now becomes 10 (15 - 5)

console.log(`a = ${a}, b = ${b}`); // Output: a = 10, b = 5
