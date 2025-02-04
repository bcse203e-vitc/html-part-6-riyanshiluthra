function findSecondSmallestAndLargest(arr) {
    if (arr.length < 2) {
        return {
            secondSmallest: null,
            secondLargest: null
        };
    }

    let sortedArray = [...new Set(arr)].sort((a, b) => a - b);

    return {
        secondSmallest: sortedArray[1],
        secondLargest: sortedArray[sortedArray.length - 2]
    };
}

let inputArray = [4, 2, 9, 1, 5, 6];
let result = findSecondSmallestAndLargest(inputArray);
console.log(`Input: ${inputArray}`);
console.log(`Second Smallest: ${result.secondSmallest}`);
console.log(`Second Largest: ${result.secondLargest}`);
alert(`Input: ${inputArray}\nSecond Smallest: ${result.secondSmallest}\nSecond Largest: ${result.secondLargest}`);
