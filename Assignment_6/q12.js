function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let inputArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(inputArray);
console.log(`Input: ${inputArray}`);
console.log(`Output: ${uniqueArray}`);
alert(`Input: ${inputArray}\nOutput: ${uniqueArray}`);
