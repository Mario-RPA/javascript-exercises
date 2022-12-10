const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(args) {
	return args.reduce((a, b) => a + b, 0);
};

const multiply = function(args) {
  return args.reduce((a, b) => a * b, 1);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	let result = 1;
  for (let i = x; i >= 1; i--) {
    result *= i;
  }
  return result;
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
