function reverseNumber(number) {
    let reversed = 0;
    while (number !== 0) {
        reversed = reversed * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return reversed;
}
let num = parseInt(prompt("Enter a number:"));
let reversedNum = reverseNumber(num);
console.log(`Reversed number: ${reversedNum}`);
alert(`Reversed number: ${reversedNum}`);0
