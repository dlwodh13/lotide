const assertArraysEqual = function(actual, expected) {
  //eqArrays included in eqArrays.js
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} === ${expected}`);
  }
};