function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let num = parseInt(prompt("Enter a number:"));
let result = isEvenOrOdd(num);
console.log(`The number ${num} is ${result}`);
alert(`The number ${num} is ${result}`);
