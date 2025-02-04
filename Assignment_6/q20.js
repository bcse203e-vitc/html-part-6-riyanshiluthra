function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
let inputString = "hello";
let charOccurrences = countCharacterOccurrences(inputString);
console.log(`Character occurrences in "${inputString}":`, charOccurrences);
alert(`Character occurrences in "${inputString}": ${JSON.stringify(charOccurrences)}`);
