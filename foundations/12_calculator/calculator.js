const add = function(a,b) {
	let x = a + b
  return x
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  return arr.reduce((acc,num) =>{
    acc += num
    return acc
  },0)
};

const multiply = function(arr) {
  return arr.reduce((acc, num) =>{
   return acc *= num
  })
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(num) {
  let test = 1
	for(let x = 1; x <= num; x++){
      test = test * x
  }
  return test
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
