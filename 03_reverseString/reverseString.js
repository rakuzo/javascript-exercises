const reverseString = function(string) {
    let strSplit = string.split('');
    const finArray =[];
    for (let i = strSplit.length; i >= 0; i--) {
        finArray.push(strSplit[i]);
    }
    let b2String = finArray.join('');
    return b2String;
};

// Do not edit below this line
module.exports = reverseString;
