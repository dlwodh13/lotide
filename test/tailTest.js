const tail = require('../tail');
const assert = require('chai').assert;

describe("#eqArrayTest", () => {
	it("returns 2 for [1,3,2]", () => {
		assert.deepEqual(tail([1,3,2]),2);
	});
	it("returns 5 for [5,5,3,2,5]", () => {
		assert.deepEqual(tail([5,5,3,2,5]),5);
	});
});

