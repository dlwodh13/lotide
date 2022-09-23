// const assertArraysEqual = require('./assertArraysEqual.js');
// const eqArrays = require('./eqArrays.js');

//const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // //temp code:
  // console.log('array', array);
  // console.log('callback', callback);

  const result = [];
  for (let item of array ) {
    result.push(callback(item));
  }

  return result;
};

module.exports = map;

// const result = map(words, word => word[0]);
// assertArraysEqual(result,['g','c','t','m','t']);