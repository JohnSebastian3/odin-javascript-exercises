const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "")
  let reversed = str.split('').reverse().join('');
  return str === reversed;
};

console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
