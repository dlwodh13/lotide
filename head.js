const assertEqual = require('./assertEqual');

const head = function(arr,expected) {
  let firstIn = arr[0];
  return firstIn;
};

module.exports = head;