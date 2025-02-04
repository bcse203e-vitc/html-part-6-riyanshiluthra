function generateFibonacciRecursive(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibSequence = generateFibonacciRecursive(n - 1);
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
        return fibSequence;
    }
}
let n = parseInt(prompt("Enter the number of Fibonacci numbers to generate:"));
let fibonacciSeriesRecursive = generateFibonacciRecursive(n);
console.log(`The first ${n} numbers in the Fibonacci sequence are: ${fibonacciSeriesRecursive.join(", ")}`);
alert(`The first ${n} numbers in the Fibonacci sequence are: ${fibonacciSeriesRecursive.join(", ")}`);
