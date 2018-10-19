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

//Sum of a list of numbers
assert.deepEqual(0, arrayLibrary.calculateSum([]));
assert.deepEqual(0, arrayLibrary.calculateSum([0]));
assert.deepEqual(1, arrayLibrary.calculateSum([1]));
assert.deepEqual(-4, arrayLibrary.calculateSum([1, -5]));
assert.deepEqual(100, arrayLibrary.calculateSum([30, 35, 20, 15]));

//Printing array in reverse order
assert.deepEqual([], arrayLibrary.reverseArray([]));
assert.deepEqual([0], arrayLibrary.reverseArray([0]));
assert.deepEqual([1, 0], arrayLibrary.reverseArray([0, 1]));
assert.deepEqual([15, 20, 35, 30], arrayLibrary.reverseArray([30, 35, 20, 15]));

//Selecting every second element
assert.deepEqual([], arrayLibrary.selectEverySecondNo([]));
assert.deepEqual([0], arrayLibrary.selectEverySecondNo([0]));
assert.deepEqual([0], arrayLibrary.selectEverySecondNo([0, 1]));
assert.deepEqual([30, 20], arrayLibrary.selectEverySecondNo([30, 35, 20, 15]));

console.log('All Tests Passed');