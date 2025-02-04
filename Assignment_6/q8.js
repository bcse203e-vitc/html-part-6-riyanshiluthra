function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let gcd = findGCD(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);
alert(`The GCD of ${num1} and ${num2} is ${gcd}`);
