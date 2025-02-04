function findLargestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage:
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let largest = findLargestOfThree(num1, num2, num3);
console.log(`The largest number is ${largest}`);
alert(`The largest number is ${largest}`);
