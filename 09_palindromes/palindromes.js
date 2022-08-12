const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (words) {
    const wordsArray = Array.from(words.toUpperCase());
    const filtered = wordsArray.filter(item => /[a-zA-Z]/.test(item));
    console.log(filtered);
    const reverseArray = [];
    for (let i = filtered.length; i >= 0; i--) {
        reverseArray.push(filtered[i])
    }
    const wordsString = filtered.join('');
    const revString = reverseArray.join('');
    console.log(revString);
    return (wordsString === revString);
};

// Do not edit below this line
module.exports = palindromes;
