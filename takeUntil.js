//const tempArr = ['Kim','Lee','Park','Song'];
//const assertArraysEqual = require('./assertArraysEqual.js');

const takeUntil = function(array, callback) {
  //console.log('array', array);
  //console.log('callback', callback);
  const result = [];
  for(let element of array) {
    //console.log(element);
    if(!callback(element)){
      result.push(element);
    } else {
      break;
    }
  }

  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1,[1,2,5,7,2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);