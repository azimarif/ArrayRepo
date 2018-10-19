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

//Reverse Fibonacci Series
assert.deepEqual([0], arrayLibrary.reverseFibonacciSeries(0));
assert.deepEqual([0], arrayLibrary.reverseFibonacciSeries(1));
assert.deepEqual([1, 0], arrayLibrary.reverseFibonacciSeries(2));
assert.deepEqual([3, 2, 1, 1, 0], arrayLibrary.reverseFibonacciSeries(5));

//Greatest number in a list
assert.deepEqual(0, arrayLibrary.maxNumberInAList([0]));
assert.deepEqual(0, arrayLibrary.maxNumberInAList([-1, -5, 0]));
assert.deepEqual(-2, arrayLibrary.maxNumberInAList([-2, -5, -10]));
assert.deepEqual(10, arrayLibrary.maxNumberInAList([4, 7, 2, 10]));

//Lowest number in a list
assert.equal(0, arrayLibrary.minNumberInAList([0]));
assert.equal(-5, arrayLibrary.minNumberInAList([-1, -5, 0]));
assert.equal(-10, arrayLibrary.minNumberInAList([-2, -5, -10]));
assert.equal(2, arrayLibrary.minNumberInAList([4, 7, 2, 10]));

//Average of a list
assert.deepEqual(0, arrayLibrary.averageOfArray([0]));
assert.deepEqual(0.50, arrayLibrary.averageOfArray([0, 1]));
assert.deepEqual(-1.33, arrayLibrary.averageOfArray([1, -5, 0]));
assert.deepEqual(3.00, arrayLibrary.averageOfArray([1, 6, 2]));

//Mapping lengths
assert.deepEqual([4, 4, 6], arrayLibrary.mappingNamesLengthToArray(['Arif', 'Azim', 'Ansari']));
assert.deepEqual([1], arrayLibrary.mappingNamesLengthToArray(['0']));
assert.deepEqual([], arrayLibrary.mappingNamesLengthToArray([]));
assert.deepEqual([8, 3], arrayLibrary.mappingNamesLengthToArray(["Infinity", "War"]));

//Counting odd numbers
assert.equal(0, arrayLibrary.countOddNumbers([]));
assert.equal(0, arrayLibrary.countOddNumbers([0]));
assert.equal(2, arrayLibrary.countOddNumbers([1, 2, 3, 4]));
assert.equal(1, arrayLibrary.countOddNumbers([1, -2]));
assert.equal(2, arrayLibrary.countOddNumbers([30, 35, 20, 15]));


console.log('All Tests Passed');