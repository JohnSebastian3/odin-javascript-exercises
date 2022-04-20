const repeatString = function(string, num) {
  let retStr = '';
  if(num < 0) {
    return 'ERROR';
  }
  for(let i = 0; i < num; i++) {
    retStr += string;
  }
  return retStr;
};

// Do not edit below this line
module.exports = repeatString;
