const fibonacci = function(num) {

  num = Number(num);
  if(num < 0) {
    return 'OOPS';
  } 

  if(num === 0) {
    return 0;
  }

  if(num === 1) {
    return 1;
  }

  let sum = 0;
  let lastTwo = 0;
  let lastOne = 1;
  for(let i = 2; i <= num; i++) {
    sum = lastTwo + lastOne;
    lastTwo = lastOne;
    lastOne = sum;
  }
  return sum;
};

console.log(fibonacci(0));
console.log(fibonacci(4));
console.log(fibonacci('6'));

// Do not edit below this line
module.exports = fibonacci;
 