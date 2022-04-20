const removeFromArray = function(arr, ...args) {
  for(let i = 0; i < args.length; i++) {
    if(arr.includes(args[i])) {
      arr.splice(arr.indexOf(args[i]), 1);
    }
  }
  return arr;
};

console.log(removeFromArray([1,2,3,4,5], 3)); // Should give [1,2,4,5]
console.log(removeFromArray([1, 2, 3, 4], 3, 2)) // Should give [1,4];

// Do not edit below this line
module.exports = removeFromArray;
