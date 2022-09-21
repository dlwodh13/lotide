const assertArraysEqual = require("./assertArraysEqual.js");
const eqArrays = require("./eqArrays.js");

const letterPositions = function(sentence) {
	const result = {};
	//logic to update results here
	const tempArr = [];
	let count = 0;
	for(let letter of sentence){
		if(letter !== ' '){
			letter in result ? result[letter].push(count) : result[letter] = [count];
			//checking condition (if the left hand side within the )
		}
		count++;
	}

	console.log(result);
	return result;
};

const expect = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

letterPositions("lighthouse in the house");
