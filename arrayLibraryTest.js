const assert = require('assert');
const { logTestCase } = require('./testLibrary.js');

const {
  isEven, complimentary, filterOddNumbers, filterEvenNumbers,
  sumOfNumbersInList, calculateSum, reverseArray, selectEverySecondNumber,
  reverseFibonacciSeries, maxNumberInAList, minNumberInAList, averageOfArray,
  mappingNamesLengthToArray, countOddNumbers, countEvenNumbers,
  countNumbersAboveValue, countNumbersBelowValue, findIndexOfNumber,
  isAscending, isDescending, extractDigits,
  isElementExists, uniqueArrayElements, unionOfTwoArrays, arrayIntersection,
  uniqueElementsFromFirstSet, isSubSet, zipArrayElements, rotateArray,
  partitionArray
} = require('./arrayLibrary.js');

//Selecting odd numbers
const testFilterOddNumbers = function(input, expectedOutput) {
  let actualOutput = filterOddNumbers(input);
  let message = 'filterOddNumbers';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testFilterOddNumbers([0], []);
testFilterOddNumbers([1], [1]);
testFilterOddNumbers([-1], [-1]);
testFilterOddNumbers([1, 2], [1]);
testFilterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 7]);

//Selecting even numbers
const testFilterEvenNumbers = function(input, expectedOutput) {
  let actualOutput = filterEvenNumbers(input);
  let message = 'filterEvenNumbers';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testFilterEvenNumbers([0], [0]);
testFilterEvenNumbers([1], []);
testFilterEvenNumbers([2], [2]);
testFilterEvenNumbers([1, 2], [2]);
testFilterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8], [2, 4, 6, 8]);

//Sum of a list of numbers
const testCalculateSum = function(input, expectedOutput) {
  let actualOutput = calculateSum(input);
  let message = 'calculateSum';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testCalculateSum([], 0);
testCalculateSum([0], 0);
testCalculateSum([1], 1);
testCalculateSum([1, -5], -4);
testCalculateSum([30, 35, 20, 15], 100);

//Printing array in reverse order
const testReverseArray = function(input, expectedOutput) {
  let actualOutput = reverseArray(input);
  let message = 'reverseArray';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testReverseArray([], []);
testReverseArray([0], [0]);
testReverseArray([0, 1], [1, 0]);
testReverseArray([1, -5], [-5, 1]);
testReverseArray([30, 35, 20, 15], [15, 20, 35, 30]);

//Selecting every second element
const testselectEverySecondNumber = function(input, expectedOutput) {
  let actualOutput = selectEverySecondNumber(input);
  let message = 'selectEverySecondNumber';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testselectEverySecondNumber([], []);
testselectEverySecondNumber([0], [0]);
testselectEverySecondNumber([0, 1], [0]);
testselectEverySecondNumber([1, -5, -2], [1, -2]);
testselectEverySecondNumber([30, 35, 20, 15], [30, 20]);

//Reverse Fibonacci Series
const testReverseFibonacciSeries = function(input, expectedOutput) {
  let actualOutput = reverseFibonacciSeries(input);
  let message = 'reverseFibonacciSeries';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testReverseFibonacciSeries(0, [0]);
testReverseFibonacciSeries(1, [0]);
testReverseFibonacciSeries(2, [1, 0]);
testReverseFibonacciSeries(5, [3, 2, 1, 1, 0]);
testReverseFibonacciSeries(7, [8, 5, 3, 2, 1, 1, 0]);

//Greatest number in a list
const testMaxNumberInAList = function(input, expectedOutput) {
  let actualOutput = maxNumberInAList(input);
  let message = 'maxNumberInAList';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testMaxNumberInAList([-3, -5], -3);
testMaxNumberInAList([0], 0);
testMaxNumberInAList([0, 1], 1);
testMaxNumberInAList([1, -5, -2], 1);
testMaxNumberInAList([30, 35, 20, 15], 35);

//Lowest number in a list
const testMinNumberInAList = function(input, expectedOutput) {
  let actualOutput = minNumberInAList(input);
  let message = 'minNumberInAList';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testMinNumberInAList([-3, -5], -5);
testMinNumberInAList([0], 0);
testMinNumberInAList([0, 1], 0);
testMinNumberInAList([1, -5, -2], -5);
testMinNumberInAList([30, 35, 20, 15], 15);

//Average of a list
const testAverageOfArray = function(input, expectedOutput) {
  let actualOutput = averageOfArray(input);
  let message = 'averageOfArray';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testAverageOfArray([-3, -5], -4.00);
testAverageOfArray([0], 0.00);
testAverageOfArray([0, 1], 0.50);
testAverageOfArray([1, -5, -2], -2.00);
testAverageOfArray([30, 35, 20, 15], 25.00);

//Mapping lengths
const testMappingNamesLengthToArray = function(input, expectedOutput) {
  let actualOutput = mappingNamesLengthToArray(input);
  let message = 'mappingNamesLengthToArray';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testMappingNamesLengthToArray(['Arif', 'Azim', 'Ansari'], [4, 4, 6]);
testMappingNamesLengthToArray(['2743'], [4]);
testMappingNamesLengthToArray([], []);
testMappingNamesLengthToArray(['Infinity', 'War'], [8, 3]);
testMappingNamesLengthToArray(['0', '0'], [1, 1]);

//Counting odd numbers
const testCountOddNumbers = function(input, expectedOutput) {
  let actualOutput = countOddNumbers(input);
  let message = 'countOddNumbers';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testCountOddNumbers([], 0);
testCountOddNumbers([0], 0);
testCountOddNumbers([0, 1], 1);
testCountOddNumbers([1, -5, -2], 2);
testCountOddNumbers([30, 35, 20, 15], 2);

//Counting even numbers
const testCountEvenNumbers = function(input, expectedOutput) {
  let actualOutput = countEvenNumbers(input);
  let message = 'countEvenNumbers';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testCountEvenNumbers([], 0);
testCountEvenNumbers([0], 1);
testCountEvenNumbers([0, 1], 1);
testCountEvenNumbers([1, -5, -2], 1);
testCountEvenNumbers([30, 35, 20, 15], 2);

//Counting numbers above threshold value
const testCountNumbersAboveValue = function(input, value, expectedOutput) {
  let actualOutput = countNumbersAboveValue(input, value);
  let message = 'countNumbersAboveValue';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testCountNumbersAboveValue([], 5, 0);
testCountNumbersAboveValue([0], 4, 0);
testCountNumbersAboveValue([0, 2], 1, 1);
testCountNumbersAboveValue([1, -5, -2], 0, 1);
testCountNumbersAboveValue([30, 35, 20, 15], 22, 2);

//Counting numbers below threshold value
const testCountNumbersBelowValue = function(input, value, expectedOutput) {
  let actualOutput = countNumbersBelowValue(input, value);
  let message = 'countNumbersBelowValue';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testCountNumbersBelowValue([], 5, 0);
testCountNumbersBelowValue([0], 4, 1);
testCountNumbersBelowValue([0, 2], 1, 1);
testCountNumbersBelowValue([1, -5, -2], 0, 2);
testCountNumbersBelowValue([30, 35, 20, 15], 22, 2);

//Find the index of a Number
const testFindIndexOfNumber = function(input, value, expectedOutput) {
  let actualOutput = findIndexOfNumber(input, value);
  let message = 'findIndexOfNumber';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testFindIndexOfNumber([], 5, -1);
testFindIndexOfNumber([0], 4, -1);
testFindIndexOfNumber([0, 1, 2], 1, 1);
testFindIndexOfNumber([1, -5, -2, 0], 0, 3);
testFindIndexOfNumber([30, 35, 22, 20, 15], 22, 2);

//Ascending Order
const testIsAscending = function(input, expectedOutput) {
  let actualOutput = isAscending(input);
  let message = 'isAscending';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testIsAscending([], true);
testIsAscending([0], true);
testIsAscending([0, 1, 2], true);
testIsAscending([-5, -2, 0, 1, 4], true);
testIsAscending([35, 30, 22, 20, 15], false);

//Descending Order
const testIsDescending = function(input, expectedOutput) {
  let actualOutput = isDescending(input);
  let message = 'isDescending';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testIsDescending([], true);
testIsDescending([0], true);
testIsDescending([2,1,0], true);
testIsDescending([-5, -2, 0, 1, 4], false);
testIsDescending([35, 30, 22, 20, 15], true);

//Extract Digit
const testExtractDigits = function(input, expectedOutput) {
  let actualOutput = extractDigits(input);
  let message = 'extractDigits';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testExtractDigits('', []);
testExtractDigits(2744, [2, 7, 4, 4]);
testExtractDigits(10, [1, 0]);
testExtractDigits(520, [5, 2, 0]);
testExtractDigits(4, [4]);

//Unique Array Elements
const testUniqueArrayElements = function(input, expectedOutput) {
  let actualOutput = uniqueArrayElements(input);
  let message = 'uniqueArrayElements';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testUniqueArrayElements([], []);
testUniqueArrayElements([0], [0]);
testUniqueArrayElements([0, 1], [0, 1]);
testUniqueArrayElements([-5, -2, 0, -5, 1, -4], [-5, -2, 0, 1, -4]);
testUniqueArrayElements([30, 35, 22, 20, 15, 30], [30, 35, 22, 20, 15] );

//Union of Two Arrays
const testUnionOfTwoArrays = function(input, value, expectedOutput) {
  let actualOutput = unionOfTwoArrays(input, value);
  let message = 'UnionOfTwoArrays';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testUnionOfTwoArrays([], [], []);
testUnionOfTwoArrays([0], [0], [0]);
testUnionOfTwoArrays([0, 1], [0, 1], [0, 1]);
testUnionOfTwoArrays([-5, -2, 0, ], [-5, 1, -4], [-5, -2, 0, 1, -4]);
testUnionOfTwoArrays([30, 35, 22], [20, 15, 30], [30, 35, 22, 20, 15], );

//Intersection of two Arrays
const testArrayIntersection = function(input, value, expectedOutput) {
  let actualOutput = arrayIntersection(input, value);
  let message = 'arrayIntersection';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testArrayIntersection([], [], []);
testArrayIntersection([0], [0], [0]);
testArrayIntersection([0, 1], [0, 1], [0, 1]);
testArrayIntersection([-5, -2, 0, ], [-5, 1, -4], [-5]);
testArrayIntersection([30, 35, 22], [20, 15, 30, 35], [30, 35]);

//Unique Element from first Array
const testUniqueElementsFromFirstSet = function(input, value, expectedOutput) {
  let actualOutput = uniqueElementsFromFirstSet(input, value);
  let message = 'uniqueElementsFromFirstSet';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testUniqueElementsFromFirstSet([], [], []);
testUniqueElementsFromFirstSet([0], [0], []);
testUniqueElementsFromFirstSet([0, 1], [0, 1], []);
testUniqueElementsFromFirstSet([-5, -2, 0, ], [-5, 1, -4], [-2, 0]);
testUniqueElementsFromFirstSet([30, 35, 22], [20, 15, 30, 35], [22]);

//Check if second Array is subset of first Array
const testIsArraySubSet = function(input, value, expectedOutput) {
  let actualOutput = isSubSet(input, value);
  let message = 'isSubSet';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testIsArraySubSet([], [], true);
testIsArraySubSet([0], [0], true);
testIsArraySubSet([0, 1], [0, 1], true);
testIsArraySubSet([-5, -2, 0, ], [-5, 1, -4], false);
testIsArraySubSet([30, 35, 22], [20, 15, 30, 35], false);

//Zip the array Elements
const testZipArrayElements = function(input, value, expectedOutput) {
  let actualOutput = zipArrayElements(input, value);
  let message = 'zipArrayElements';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testZipArrayElements([], [], []);
testZipArrayElements([0], [0], [[0, 0]]);
testZipArrayElements([0, 1], [0, 1], [[0, 0], [1, 1]]);
testZipArrayElements([-5, -2, 0, ], [-5, 1, -4], [[-5, -5], [-2, 1], [0, -4]]);
testZipArrayElements([30, 35, 22, 35], [20, 15, 30], [[30, 20], [35, 15], [22, 30], 35] );

//Rotate an Array by position
const testRotateArray = function(input, value, expectedOutput) {
  let actualOutput = rotateArray(input, value);
  let message = 'rotateArray';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testRotateArray([], 5, [undefined]);
testRotateArray([0], 4, [0]);
testRotateArray([0, 1, 2], 1, [1, 2, 0]);
testRotateArray([1, -5, -2, 0], 0, [1, -5, -2, 0]);
testRotateArray([30, 35, 22, 20, 15], 22, [22, 20, 15, 30, 35]);

//Divide the array in two parts for the given number
const testPartitionArray = function(input, value, expectedOutput) {
  let actualOutput = partitionArray(input, value);
  let message = 'partitionArray';
  console.log(logTestCase({ input, expectedOutput, actualOutput, message }));
  assert.deepEqual(actualOutput, expectedOutput);
}

testPartitionArray([], 5, [[], []]);
testPartitionArray([0], 4, [[0], []]);
testPartitionArray([0, 1, 2], 1, [[0, 1], [2]]);
testPartitionArray([1, -5, -2, 0], 0, [[-5, -2, 0], [1]]);
testPartitionArray([30, 35, 22, 20, 15], 22, [[22, 20, 15], [30, 35]]);
