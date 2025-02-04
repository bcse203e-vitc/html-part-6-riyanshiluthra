function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
let inputSentence = "I love programming in JavaScript";
let longestWord = findLongestWord(inputSentence);
console.log(`The longest word in the sentence is "${longestWord}"`);
alert(`The longest word in the sentence is "${longestWord}"`);
