function countDigits(number) {
    let count = 0;
    while (number !== 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}
let num = parseInt(prompt("Enter a number:"));
let digitCount = countDigits(num);
console.log(`The number of digits in ${num} is ${digitCount}`);
alert(`The number of digits in ${num} is ${digitCount}`);
