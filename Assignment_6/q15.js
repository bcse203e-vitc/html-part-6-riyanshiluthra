function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}
let inputArray = [1, 2, 3, 5, 6];
let n = 6; // The length of the sequence should be 6
let missingNumber = findMissingNumber(inputArray, n);
console.log(`Input: ${inputArray}`);
console.log(`Missing number: ${missingNumber}`);
alert(`Input: ${inputArray}\nMissing number: ${missingNumber}`);
