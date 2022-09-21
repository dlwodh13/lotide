//test/assertion function
const assertArraysEqual = function(actual, expected) {
  //eqArrays included in eqArrays.js
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  //checking whether both array have same array length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      //if the element does not equal for one of the index, return false
      if (arr1[i] !== arr2[i]) {
        //console.log("false");
        return false;
      }
    }
    //return true since all the element has been checked
    //console.log("true");
    return true;
  }
};

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