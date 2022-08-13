const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS';
    } else if (number <= 1) {
        return parseInt(number);
    } else {
        return parseInt(fibonacci(number - 1) + fibonacci(number - 2));
    }
};

// Do not edit below this line
module.exports = fibonacci;
