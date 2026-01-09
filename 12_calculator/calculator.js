const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = arr.reduce((sum, item) => {
    return sum + item;
  }, 0);
  return sum;
};

const multiply = function(arr) {
  let product = arr.reduce((product, item) => {
    return  product * item;
  }, 1)
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let fact = 1;
	for(let i = 1; i <= a; i++){
    fact *= i;
  }
  return fact;
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
