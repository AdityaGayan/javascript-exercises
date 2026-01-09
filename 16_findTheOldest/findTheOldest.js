const findTheOldest = function(arr) {
   return arr.reduce((mx, item) => item.yearOfDeath - item.yearOfBirth > mx.yearOfDeath - mx.yearOfBirth ? item : mx);
};

// Do not edit below this line
module.exports = findTheOldest;
