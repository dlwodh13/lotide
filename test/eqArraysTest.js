const assertArraysEqual = require('../assertArraysEqual');

describe("#eqArrays", () => {
  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assertArraysEqual(([[2, 3], [4]], [[2, 3], [4]]),[2, 3], [4], [[2, 3], [4]]);
  });
});