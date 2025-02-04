const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCM(a, b) {
    return Math.abs(a * b) / findGCD(a, b);
}

// Example usage:
rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        let lcm = findLCM(parseInt(num1), parseInt(num2));
        console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);
        rl.close();
    });
});
