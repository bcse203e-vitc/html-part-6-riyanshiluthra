function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    let vowelList = [];
    let consonantList = [];

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
            vowelList.push(char);
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
            consonantList.push(char);
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount,
        vowelList: vowelList,
        consonantList: consonantList
    };
}
let inputString = prompt("Enter a string:");
let result = countVowelsAndConsonants(inputString);
console.log(`Vowels: ${result.vowels} (${result.vowelList.join(", ")})`);
console.log(`Consonants: ${result.consonants} (${result.consonantList.join(", ")})`);
alert(`Vowels: ${result.vowels} (${result.vowelList.join(", ")})\nConsonants: ${result.consonants} (${result.consonantList.join(", ")})`);
