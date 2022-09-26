# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dlwodh13/lotide`

**Require it:**

`const _ = require('@dlwodh13/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: it outputs the value of the eqArray().
* `assertEqual(...)`: function compare the two values it takes in and print out a message telling if they match or not.
* `assertObjectsEqual(...)`: it outputs the value of the eqObjects(...).
* `countLetters(...)`: takes the string and returns the count number.
* `countOnly(...)`: it returns the count of the occurances of given object.
* `eqArrays(...)`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(...)`: it takes two objects and make comparison. 
* `findKey(...)`: it returns the key.
* `findKeyByValue(...)`: it returns the key from the value. 
* `flatten(...)`: takes in multi-array and returns a flatten array.
* `head(...)`: takes in an array and returns first element of the array last index.
* `letterPositions(...)`: takes in the string and returns the index of every letters.
* `map(...)`: takes in an array and maps the array.
* `middle(...)`: takes in an array and returns the a value in middle index of the array.
* `tail(...)`: takes in an array and returns last element of the array first index.
* `takeUntil(...)`: takes in an array and returns the array until given value.
* `without(...)`: takes in an array and returns with specific value.




