const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (words) {
    const filtered = Array.from(words.toUpperCase())
                          .filter(item => /[A-Z]/.test(item));
    const reverseArray = [];
    for (let i = filtered.length; i >= 0; i--) {
        reverseArray.push(filtered[i])
    }
    const wordsString = filtered.join('');
    const revString = reverseArray.join('');
    return (wordsString === revString);
};

// Do not edit below this line
module.exports = palindromes;
