function decimalToBinary(decimal) {
    if (decimal === 0) return "0";
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
let num = parseInt(prompt("Enter a decimal number:"));
let binary = decimalToBinary(num);
console.log(`The binary representation of ${num} is ${binary}`);
alert(`The binary representation of ${num} is ${binary}`);
