const getTheTitles = function(arr) {
  const titleArr = [];
  arr.forEach(elem => {
    titleArr.push(elem.title);
  })
  return titleArr;
};

console.log(getTheTitles([
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]))

// Do not edit below this line
module.exports = getTheTitles;
