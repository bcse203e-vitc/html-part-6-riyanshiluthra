function firstNonRepeatingCharacter(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
let inputString = "swiss";
let firstNonRepeating = firstNonRepeatingCharacter(inputString);
console.log(`The first non-repeating character in "${inputString}" is "${firstNonRepeating}"`);
alert(`The first non-repeating character in "${inputString}" is "${firstNonRepeating}"`);
