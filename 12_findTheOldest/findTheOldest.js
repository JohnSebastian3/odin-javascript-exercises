const findTheOldest = function(objArr) {
  objArr.sort((first, second) => {
    if(!first.yearOfDeath) {
      const currentYear = new Date().getFullYear();
      const firstLived = currentYear - first.yearOfBirth;
      const secondLived = second.yearOfDeath - second.yearOfBirth;
      return firstLived - secondLived;
    } else if (!second.yearOfDeath) {
      const currentYear = new Date().getFullYear();
      const secondLived = currentYear - second.yearOfBirth;
      const firstLived = first.yearOfDeath - first.yearOfBirth;
      return firstLived - secondLived;
    } else {
 
      const firstLived = first.yearOfDeath - first.yearOfBirth;
      const secondLived = second.yearOfDeath - second.yearOfBirth;
      return firstLived - secondLived;
    }
  });
  return objArr[objArr.length - 1];
};

console.log(findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]))

// Do not edit below this line
module.exports = findTheOldest;
