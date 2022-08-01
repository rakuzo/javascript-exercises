const repeatString = function(str, num) {
    let repeatResult = '';
    let i = 0;
    if (num < 0) {
        return "ERROR";
    } else {
        while (i < num) {
            repeatResult += str;

            i++;
        }
        return repeatResult;
    }
}
// Do not edit below this line
module.exports = repeatString;
