const assertEqual = require("./assertEqual.js");

const findKeyByValue = function(List, value) {
	/* Object.keys(List); returns an array of a given object's own 
	enumerable property names, iterated in the 
	same order that a normal loop would.
	Expected prints => ['sci_fi','comedy','drama']
	*/
  let arr = Object.keys(List);
  for (let element of arr) {
		//compares the value List['element'] with value to check if they equal
		if (List[element] === value) {
			//if condition meets return the element value
			return element;
		}
	}
};

//testing code
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);