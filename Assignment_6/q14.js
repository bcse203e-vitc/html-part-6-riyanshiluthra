function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();

    for (let char of alphabet) {
        if (!lowerCaseSentence.includes(char)) {
            return false;
        }
    }
    return true;
}
let inputSentence = prompt("Enter a sentence:");
let result = isPangram(inputSentence);
console.log(`"${inputSentence}" ${result ? "✅ It is a pangram." : "❌ It is not a pangram."}`);
alert(`"${inputSentence}" ${result ? "✅ It is a pangram." : "❌ It is not a pangram."}`);
