const sumAll = function(start, end) {

  if(start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
    return 'ERROR';
  }

  let sum = 0;
  if(start < end) {
    for(let i = start; i <= end; i++) {
      sum += i;
    }
  } else if(start > end) {
    for(let i = start; i >= end; i--) {
      sum += i;
    }
  } else {
    return start;
  }
  return sum;
};
console.log(sumAll(1,4));
console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
