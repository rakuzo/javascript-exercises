const sumAll = function(start, finish) {
    let total = 0;
    if (typeof start !== "number" || typeof finish !== "number") {
        return "ERROR";
    } else if (start > finish) {
        for (let j = start; j >= finish; j--) {
            total += j;
        }
    } else {
        for (let i = start; i <= finish; i++) {
            total += i;
        }
    }

    if (total < 0) {
        return "ERROR";
    } else {
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
