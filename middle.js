//importation
const eqArrays = require("./eqArrays.js");
const assertArraysEqual = require("./assertArraysEqual");

//middle.js main function
const middle = function(arr){
  let arrLen = arr.length;
  let tempArr = [];
  if(arrLen > 2) { 
    if(arrLen % 2 === 0){
      tempArr.push(arr[(arrLen / 2) - 1]);
      tempArr.push(arr[(arrLen / 2)]);
    } else {
      tempArr.push(arr[(arrLen - 1) / 2]);
    }
  }
  return tempArr;
};

//testing code
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]