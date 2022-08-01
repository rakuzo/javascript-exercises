const removeFromArray = function(startArr, censor1, censor2) {
    const initArr = startArr;
        for (i = 0; i < initArr.length; i++) {
            if (initArr[i] === censor1) {
                initArr.splice(i,1);
            }
        }
    return initArr;
};

// Do not edit below this line
module.exports = removeFromArray;
