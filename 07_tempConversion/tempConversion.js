const ftoc = function(ftemp) {
  return +((ftemp - 32) * 5/9).toFixed(1);
};

const ctof = function(ctemp) {
  return +((ctemp * 9/5) + 32).toFixed(1);
};

console.log(ftoc(32));
console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
