const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isArmstrongNumber(number) {
    let sum = 0;
    let temp = number;
    const numDigits = number.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === number;
}
rl.question('Enter a number: ', (num) => {
    let isArmstrong = isArmstrongNumber(parseInt(num));
    console.log(`The number ${num} is ${isArmstrong ? "an Armstrong number" : "not an Armstrong number"}`);
    rl.close();
});
