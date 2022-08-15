const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(item) {
	return item.reduce((a, b) => a + b, 0);
};

const multiply = function(item) {
  return item.reduce((a, b) => a * b);
};

const power = function(...item) {
	return item.reduce((a, b) => a ** b);
};

const factorial = function(item) {
	// let number = items;
  // let finalNum = 1;
  // for (let i = 1; i <= number; i++){
  //     finalNum *= i;
  //     }
  //     return finalNum;
  // With reduce() way
  const fillArray = [];
  for (let i = 1; i <= item; i++) {
    fillArray.push(i);
  }
  return fillArray.reduce((a, b) => a * b, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
