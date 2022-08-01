const sumAll = function(start, finish) {
    let total = 0;
    if (start > finish) {
        for (let j = start; j >= finish; j--) {
            total += j;
        }
    } else {
        for (let i = start; i <= finish; i++) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
