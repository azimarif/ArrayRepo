const assert = require('assert');
const arrayLibrary = require('./arrayLibrary.js');

//Selecting odd numbers
assert.deepEqual([1], arrayLibrary.filterOddNumbers([1]));
assert.deepEqual([], arrayLibrary.filterOddNumbers([2]));
assert.deepEqual([1], arrayLibrary.filterOddNumbers([1, 2]));
assert.deepEqual([1, 3, 5, 7], arrayLibrary.filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

//Selecting even numbers
assert.deepEqual([], arrayLibrary.filterEvenNumbers([1]));
assert.deepEqual([2], arrayLibrary.filterEvenNumbers([2]));
assert.deepEqual([2], arrayLibrary.filterEvenNumbers([1, 2]));
assert.deepEqual([2, 4, 6, 8], arrayLibrary.filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

console.log('All Tests Passed');