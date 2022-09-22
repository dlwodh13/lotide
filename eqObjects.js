const eqArrays = require("./eqArrays.js");

const eqObjects = function(object1, object2) {
  //checking the length if not equal return false
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let element in object1){
    //checking if it is array
    if (Array.isArray(object1)) {
      if (!eqArrays(object1,object2)) {
        return false;
      }
    } else if(typeof object1[element] === 'object'){
      if(!eqObjects(object1[element],object2[element])){
        return false;
      }
    } else {
      if(object1[element] !== object2[element]){
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab,ba)); // => true

// const abc = { a: "1", b: "2", c: "3"};
// console.log(eqObjects(ab,abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
