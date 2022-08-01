const removeFromArray = function(array, ...manyArgs) {
    const initArr = array;
    for (arg of manyArgs) {
        for(let i = 0; i < array.length; i++) {
            if (initArr[i] === arg) {
                initArr.splice(i,1);
            }
        }
    }
    return initArr;
}

// Do not edit below this line
module.exports = removeFromArray;
