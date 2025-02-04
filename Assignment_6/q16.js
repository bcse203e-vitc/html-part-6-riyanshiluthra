function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let inputArray = [4, 2, 9, 1, 5, 6];
let sortedArray = bubbleSort(inputArray);
console.log(`Input: ${inputArray}`);
console.log(`Sorted: ${sortedArray}`);
alert(`Input: ${inputArray}\nSorted: ${sortedArray}`);
