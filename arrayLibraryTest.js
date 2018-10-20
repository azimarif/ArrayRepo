const assert = require('assert');
const {assertEqual, assertDeepEqual} = require('./testLibrary.js');

const {isEven, complimentary ,filterOddNumbers, filterEvenNumbers, 
  sumOfNumbersInList, calculateSum, reverseArray, selectEverySecondNo,
  reverseFibonacciSeries, maxNumberInAList, minNumberInAList, averageOfArray,
  mappingNamesLengthToArray, countOddNumbers, countEvenNumbers,
  countNumbersAboveValue,countNumbersBelowValue,findIndexOfNumber,
  swapElements,sortArrayInAscending,loopThroughArray,
  sortArrayInDescending, isAscending,isDescending, extractDigits,
  isElementExists,uniqueArrayElements,combineTwoArrays,arrayIntersection,
  uniqueElementsFromFirstArray, isArraySubSet,zipArrayElements,rotateArray,
  partitionArray } =  require('./arrayLibrary.js');

const testFilterOddNumbers = function(input, expectedOutput){
  let actualOutput = filterOddNumbers(input);
  let message = 'filterOddNumbers';
  assertDeepEqual({input , expectedOutput, actualOutput, message});
}

//Selecting odd numbers
testFilterOddNumbers([0], []);
testFilterOddNumbers([1], [1]);
testFilterOddNumbers([-1], [-1]); 
testFilterOddNumbers([1,2], [1]);
testFilterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 7]);

//Selecting even numbers
testCase1 = { input : [0], expectedOutput : [0], actualOutput : filterEvenNumbers([0]), message : 'Testing filterEvenNumbers' }
testCase2 = { input : [1], expectedOutput : [], actualOutput : filterEvenNumbers([1]), message : 'Testing filterEvenNumbers' }
testCase3 = { input : [2], expectedOutput : [2], actualOutput : filterEvenNumbers([2]), message : 'Testing filterEvenNumbers' }
testCase4 = { input : [1,2], expectedOutput : [2], actualOutput : filterEvenNumbers([1,2]), message : 'Testing filterEvenNumbers' }
testCase5 = { input : [1, 2, 3, 4, 5, 6, 7, 8], expectedOutput : [2,4,6,8], actualOutput : filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]), message : 'Testing filterEvenNumbers' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Sum of a list of numbers
testCase1 = { input : [], expectedOutput : 0, actualOutput : calculateSum([]), message : 'Testing calculateSum' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : calculateSum([0]), message : 'Testing calculateSum' }
testCase3 = { input : [1], expectedOutput : 1, actualOutput : calculateSum([1]), message : 'Testing calculateSum' }
testCase4 = { input : [1,-5], expectedOutput : -4, actualOutput : calculateSum([1,-5]), message : 'Testing calculateSum' }
testCase5 = { input : [30,35,20,15], expectedOutput : 100, actualOutput : calculateSum([30,35,20,15]), message : 'Testing calculateSum' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Printing array in reverse order
testCase1 = { input : [], expectedOutput : [], actualOutput : reverseArray([]), message : 'Testing reverseArray' }
testCase2 = { input : [0], expectedOutput : [0], actualOutput : reverseArray([0]), message : 'Testing reverseArray' }
testCase3 = { input : [0,1], expectedOutput : [1,0], actualOutput : reverseArray([0,1]), message : 'Testing reverseArray' }
testCase4 = { input : [1,-5], expectedOutput : [-5,1], actualOutput : reverseArray([1,-5]), message : 'Testing reverseArray' }
testCase5 = { input : [30,35,20,15], expectedOutput : [15,20,35,30], actualOutput : reverseArray([30,35,20,15]), message : 'Testing reverseArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Selecting every second element
testCase1 = { input : [], expectedOutput : [], actualOutput : selectEverySecondNo([]), message : 'Testing selectEverySecondNo' }
testCase2 = { input : [0], expectedOutput : [0], actualOutput : selectEverySecondNo([0]), message : 'Testing selectEverySecondNo' }
testCase3 = { input : [0,1], expectedOutput : [0], actualOutput : selectEverySecondNo([0,1]), message : 'Testing selectEverySecondNo' }
testCase4 = { input : [1,-5,-2], expectedOutput : [1,-2], actualOutput : selectEverySecondNo([1,-5,-2]), message : 'Testing selectEverySecondNo' }
testCase5 = { input : [30,35,20,15], expectedOutput : [30,20], actualOutput : selectEverySecondNo([30,35,20,15]), message : 'Testing selectEverySecondNo' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Reverse Fibonacci Series
testCase1 = { input : 0, expectedOutput : [0], actualOutput : reverseFibonacciSeries(0), message : 'Testing reverseFibonacciSeries' }
testCase2 = { input : 1, expectedOutput : [0], actualOutput : reverseFibonacciSeries(1), message : 'Testing reverseFibonacciSeries' }
testCase3 = { input : 2, expectedOutput : [1,0], actualOutput : reverseFibonacciSeries(2), message : 'Testing reverseFibonacciSeries' }
testCase4 = { input : 5, expectedOutput : [3,2,1,1,0], actualOutput : reverseFibonacciSeries(5), message : 'Testing reverseFibonacciSeries' }
testCase5 = { input : 7, expectedOutput : [8,5,3,2,1,1,0], actualOutput : reverseFibonacciSeries(7), message : 'Testing reverseFibonacciSeries' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Greatest number in a list
testCase1 = { input : [-3,-5], expectedOutput : -3, actualOutput : maxNumberInAList([-3,-5]), message : 'Testing maxNumberInAList' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : maxNumberInAList([0]), message : 'Testing maxNumberInAList' }
testCase3 = { input : [0,1], expectedOutput : 1, actualOutput : maxNumberInAList([0,1]), message : 'Testing maxNumberInAList' }
testCase4 = { input : [1,-5,-2], expectedOutput : 1, actualOutput : maxNumberInAList([1,-5,-2]), message : 'Testing maxNumberInAList' }
testCase5 = { input : [30,35,20,15], expectedOutput : 35, actualOutput : maxNumberInAList([30,35,20,15]), message : 'Testing maxNumberInAList' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Lowest number in a list
testCase1 = { input : [-3,-5], expectedOutput : -5, actualOutput : minNumberInAList([-3,-5]), message : 'Testing minNumberInAList' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : minNumberInAList([0]), message : 'Testing minNumberInAList' }
testCase3 = { input : [0,1], expectedOutput : 0, actualOutput : minNumberInAList([0,1]), message : 'Testing minNumberInAList' }
testCase4 = { input : [1,-5,-2], expectedOutput : -5, actualOutput : minNumberInAList([1,-5,-2]), message : 'Testing minNumberInAList' }
testCase5 = { input : [30,35,20,15], expectedOutput : 15, actualOutput : minNumberInAList([30,35,20,15]), message : 'Testing minNumberInAList' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Average of a list
testCase1 = { input : [-3,-5], expectedOutput : -4.00, actualOutput : averageOfArray([-3,-5]), message : 'Testing averageOfArray' }
testCase2 = { input : [0], expectedOutput : 0.00, actualOutput : averageOfArray([0]), message : 'Testing averageOfArray' }
testCase3 = { input : [0,1], expectedOutput : 0.50, actualOutput : averageOfArray([0,1]), message : 'Testing averageOfArray' }
testCase4 = { input : [1,-5,-2], expectedOutput : -2.00, actualOutput : averageOfArray([1,-5,-2]), message : 'Testing averageOfArray' }
testCase5 = { input : [30,35,20,15], expectedOutput : 25.00, actualOutput : averageOfArray([30,35,20,15]), message : 'Testing averageOfArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Mapping lengths
testCase1 = { input : ['Arif','Azim','Ansari'], expectedOutput : [4,4,6], actualOutput : mappingNamesLengthToArray(['Arif','Azim','Ansari']), message : 'Testing mappingNamesLengthToArray' }
testCase2 = { input : ['2743'], expectedOutput :[4], actualOutput : mappingNamesLengthToArray(['2743']), message : 'Testing mappingNamesLengthToArray' }
testCase3 = { input : [], expectedOutput : [], actualOutput : mappingNamesLengthToArray([]), message : 'Testing mappingNamesLengthToArray' }
testCase4 = { input : ['Infinity', 'War'], expectedOutput : [8,3], actualOutput : mappingNamesLengthToArray(['Infinity', 'War']), message : 'Testing mappingNamesLengthToArray' }
testCase5 = { input : ['0', '0'], expectedOutput : [1,1], actualOutput : mappingNamesLengthToArray(['0', '0']), message : 'Testing mappingNamesLengthToArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting odd numbers
testCase1 = { input : [], expectedOutput : 0, actualOutput : countOddNumbers([]), message : 'Testing countOddNumbers' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : countOddNumbers([0]), message : 'Testing countOddNumbers' }
testCase3 = { input : [0,1], expectedOutput : 1, actualOutput : countOddNumbers([0,1]), message : 'Testing countOddNumbers' }
testCase4 = { input : [1,-5,-2], expectedOutput : 2, actualOutput : countOddNumbers([1,-5,-2]), message : 'Testing countOddNumbers' }
testCase5 = { input : [30,35,20,15], expectedOutput : 2, actualOutput : countOddNumbers([30,35,20,15]), message : 'Testing countOddNumbers' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting even numbers
testCase1 = { input : [], expectedOutput : 0, actualOutput : countEvenNumbers([]), message : 'Testing countEvenNumbers' }
testCase2 = { input : [0], expectedOutput : 1, actualOutput : countEvenNumbers([0]), message : 'Testing countEvenNumbers' }
testCase3 = { input : [0,1], expectedOutput : 1, actualOutput : countEvenNumbers([0,1]), message : 'Testing countEvenNumbers' }
testCase4 = { input : [1,-5,-2], expectedOutput : 1, actualOutput : countEvenNumbers([1,-5,-2]), message : 'Testing countEvenNumbers' }
testCase5 = { input : [30,35,20,15], expectedOutput : 2, actualOutput : countEvenNumbers([30,35,20,15]), message : 'Testing countEvenNumbers' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting numbers above threshold value
testCase1 = { input : "[],5", expectedOutput : 0, actualOutput : countNumbersAboveValue([],5), message : 'Testing countNumbersAboveValue' }
testCase2 = { input : "[0],4", expectedOutput : 0, actualOutput : countNumbersAboveValue([0],4), message : 'Testing countNumbersAboveValue' }
testCase3 = { input : "[0,2],1", expectedOutput : 1, actualOutput : countNumbersAboveValue([0,2],1), message : 'Testing countNumbersAboveValue' }
testCase4 = { input : "[1,-5,-2],0", expectedOutput : 1, actualOutput : countNumbersAboveValue([1,-5,-2],0), message : 'Testing countNumbersAboveValue' }
testCase5 = { input : "[30,35,20,15],22", expectedOutput : 2, actualOutput : countNumbersAboveValue([30,35,20,15],22), message : 'Testing countNumbersAboveValue' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting numbers below threshold value
testCase1 = { input : "[],5", expectedOutput : 0, actualOutput : countNumbersBelowValue([],5), message : 'Testing countNumbersBelowValue' }
testCase2 = { input : "[0],4", expectedOutput : 1, actualOutput : countNumbersBelowValue([0],4), message : 'Testing countNumbersBelowValue' }
testCase3 = { input : "[0,2],1", expectedOutput : 1, actualOutput : countNumbersBelowValue([0,2],1), message : 'Testing countNumbersBelowValue' }
testCase4 = { input : "[1,-5,-2],0", expectedOutput : 2, actualOutput : countNumbersBelowValue([1,-5,-2],0), message : 'Testing countNumbersBelowValue' }
testCase5 = { input : "[30,35,20,15],22", expectedOutput : 2, actualOutput : countNumbersBelowValue([30,35,20,15],22), message : 'Testing countNumbersBelowValue' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Find the index of a Number
testCase1 = { input : "[],5", expectedOutput : -1, actualOutput : findIndexOfNumber([],5), message : 'Testing findIndexOfNumber' }
testCase2 = { input : "[0],4", expectedOutput : -1, actualOutput : findIndexOfNumber([0],4), message : 'Testing findIndexOfNumber' }
testCase3 = { input : "[0,1,2],1", expectedOutput : 1, actualOutput : findIndexOfNumber([0,1,2],1), message : 'Testing findIndexOfNumber' }
testCase4 = { input : "[1,-5,-2,0],0", expectedOutput : 3, actualOutput : findIndexOfNumber([1,-5,-2,0],0), message : 'Testing findIndexOfNumber' }
testCase5 = { input : "[30,35,22,20,15],22", expectedOutput : 2, actualOutput : findIndexOfNumber([30,35,22,20,15],22), message : 'Testing findIndexOfNumber' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Ascending Order
testCase1 = { input : "[]", expectedOutput : true, actualOutput : isAscending([]), message : 'Testing isAscending' }
testCase2 = { input : "[0]", expectedOutput : true, actualOutput : isAscending([0]), message : 'Testing isAscending' }
testCase3 = { input : "[0,1,2]", expectedOutput : true, actualOutput : isAscending([0,1,2]), message : 'Testing isAscending' }
testCase4 = { input : "[-5,-2,0,1,-4]", expectedOutput : false, actualOutput : isAscending([-5,-2,0,1,-4]), message : 'Testing isAscending' }
testCase5 = { input : "[30,35,22,20,15]", expectedOutput : false, actualOutput : isAscending([30,35,22,20,15]), message : 'Testing isAscending' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Descending Order
testCase1 = { input : "[]", expectedOutput : true, actualOutput : isDescending([]), message : 'Testing isDescending' }
testCase2 = { input : "[0]", expectedOutput : true, actualOutput : isDescending([0]), message : 'Testing isDescending' }
testCase3 = { input : "[0,1,2]", expectedOutput : false, actualOutput : isDescending([0,1,2]), message : 'Testing isDescending' }
testCase4 = { input : "[-5,-2,0,1,-4]", expectedOutput : false, actualOutput : isDescending([-5,-2,0,1,-4]), message : 'Testing isDescending' }
testCase5 = { input : "[30,35,22,20,15]", expectedOutput : false, actualOutput : isDescending([30,35,22,20,15]), message : 'Testing isDescending' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Extract Digits
// testCase1 = { input : '', expectedOutput : [], actualOutput : extractDigits(), message : 'Testing extractDigits' }
testCase2 = { input : 2744, expectedOutput : [2,7,4,4], actualOutput : extractDigits(2744), message : 'Testing extractDigits' }
testCase3 = { input : 10, expectedOutput : [1,0], actualOutput : extractDigits(10), message : 'Testing extractDigits' }
//testCase4 = { input : -520, expectedOutput : [-5,2,0], actualOutput : extractDigits(-520), message : 'Testing extractDigits' }
testCase5 = { input : 4, expectedOutput : [4], actualOutput : extractDigits(4), message : 'Testing extractDigits' }

//assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
//assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Unique Array Elements
testCase1 = { input : "[]", expectedOutput : [], actualOutput : uniqueArrayElements([]), message : 'Testing uniqueArrayElements' }
testCase2 = { input : "[0]", expectedOutput : [0], actualOutput : uniqueArrayElements([0]), message : 'Testing uniqueArrayElements' }
testCase3 = { input : "[0,1]", expectedOutput : [0,1], actualOutput : uniqueArrayElements([0,1]), message : 'Testing uniqueArrayElements' }
testCase4 = { input : "[-5,-2,0,-5,1,-4]", expectedOutput : [-5,-2,0,1,-4], actualOutput : uniqueArrayElements([-5,-2,0,-5,1,-4]), message : 'Testing uniqueArrayElements' }
testCase5 = { input : "[30,35,22,20,15,30]", expectedOutput : [30,35,22,20,15], actualOutput : uniqueArrayElements([30,35,22,20,15,30]), message : 'Testing uniqueArrayElements' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Union of Two Arrays
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : combineTwoArrays([],[]), message : 'Testing combineTwoArrays' }
testCase2 = { input : "[0],[0]", expectedOutput : [0], actualOutput : combineTwoArrays([0],[0]), message : 'Testing combineTwoArrays' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [0,1], actualOutput : combineTwoArrays([0,1],[0,1]), message : 'Testing combineTwoArrays' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [-5,-2,0,1,-4], actualOutput : combineTwoArrays([-5,-2,0], [-5,1,-4]), message : 'Testing combineTwoArrays' }
testCase5 = { input : "[30,35,22],[20,15,30]", expectedOutput : [30,35,22,20,15], actualOutput : combineTwoArrays([30,35,22], [20,15,30]), message : 'Testing combineTwoArrays' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Intersection of two Arrays
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : arrayIntersection([],[]), message : 'Testing arrayIntersection' }
testCase2 = { input : "[0],[0]", expectedOutput : [0], actualOutput : arrayIntersection([0],[0]), message : 'Testing arrayIntersection' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [0,1], actualOutput : arrayIntersection([0,1],[0,1]), message : 'Testing arrayIntersection' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [-5], actualOutput : arrayIntersection([-5,-2,0], [-5,1,-4]), message : 'Testing arrayIntersection' }
testCase5 = { input : "[30,35,22],[20,15,30,35]", expectedOutput : [30,35], actualOutput : arrayIntersection([30,35,22], [20,15,30,35]), message : 'Testing arrayIntersection' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Unique Element from first Array
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : uniqueElementsFromFirstArray([],[]), message : 'Testing uniqueElementsFromFirstArray' }
testCase2 = { input : "[0],[0]", expectedOutput : [], actualOutput : uniqueElementsFromFirstArray([0],[0]), message : 'Testing uniqueElementsFromFirstArray' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [], actualOutput : uniqueElementsFromFirstArray([0,1],[0,1]), message : 'Testing uniqueElementsFromFirstArray' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [-2,0], actualOutput : uniqueElementsFromFirstArray([-5,-2,0], [-5,1,-4]), message : 'Testing uniqueElementsFromFirstArray' }
testCase5 = { input : "[30,35,22],[20,15,30,35]", expectedOutput : [22], actualOutput : uniqueElementsFromFirstArray([30,35,22], [20,15,30,35]), message : 'Testing uniqueElementsFromFirstArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Check if second Array is subset of first Array
testCase1 = { input : "[],[]", expectedOutput : true, actualOutput : isArraySubSet([],[]), message : 'Testing isArraySubSet' }
testCase2 = { input : "[0],[0]", expectedOutput : true, actualOutput : isArraySubSet([0],[0]), message : 'Testing isArraySubSet' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : true, actualOutput : isArraySubSet([0,1],[0,1]), message : 'Testing isArraySubSet' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : false, actualOutput : isArraySubSet([-5,-2,0], [-5,1,-4]), message : 'Testing isArraySubSet' }
testCase5 = { input : "[30,35,22],[20,15,30,35]", expectedOutput : false, actualOutput : isArraySubSet([30,35,22], [20,15,30,35]), message : 'Testing isArraySubSet' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Zip the array Elements
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : zipArrayElements([],[]), message : 'Testing zipArrayElements' }
testCase2 = { input : "[0],[0]", expectedOutput : [[0,0]], actualOutput : zipArrayElements([0],[0]), message : 'Testing zipArrayElements' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [[0,0],[1,1]], actualOutput : zipArrayElements([0,1],[0,1]), message : 'Testing zipArrayElements' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [[-5,-5], [-2,1], [0,-4]], actualOutput : zipArrayElements([-5,-2,0], [-5,1,-4]), message : 'Testing zipArrayElements' }
testCase5 = { input : "[30,35,22,35],[20,15,30]", expectedOutput : [[30,20],[35,15], [22,30], [35, undefined]], actualOutput : zipArrayElements([30,35,22,35], [20,15,30]), message : 'Testing zipArrayElements' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Rotate an Array by position
testCase1 = { input : "[],5", expectedOutput : [undefined], actualOutput : rotateArray([],5), message : 'Testing rotateArray' }
testCase2 = { input : "[0],4", expectedOutput : [0], actualOutput : rotateArray([0],4), message : 'Testing rotateArray' }
testCase3 = { input : "[0,1,2],1", expectedOutput : [1,2,0], actualOutput : rotateArray([0,1,2],1), message : 'Testing rotateArray' }
testCase4 = { input : "[1,-5,-2,0],0", expectedOutput : [1,-5,-2,0], actualOutput : rotateArray([1,-5,-2,0],0), message : 'Testing rotateArray' }
testCase5 = { input : "[30,35,22,20,15],22", expectedOutput : [22,20,15,30,35], actualOutput : rotateArray([30,35,22,20,15],22), message : 'Testing rotateArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Divide the array in two parts for the given number
testCase1 = { input : "[],5", expectedOutput : [[],[]], actualOutput : partitionArray([],5), message : 'Testing partitionArray' }	
testCase2 = { input : "[0],4", expectedOutput : [[0],[]], actualOutput : partitionArray([0],4), message : 'Testing partitionArray' }
testCase3 = { input : "[0,1,2],1", expectedOutput : [[0,1],[2]], actualOutput : partitionArray([0,1,2],1), message : 'Testing partitionArray' }
testCase4 = { input : "[1,-5,-2,0],0", expectedOutput : [[-5,-2, 0], [1]], actualOutput : partitionArray([1,-5,-2,0],0), message : 'Testing partitionArray' }
testCase5 = { input : "[30,35,22,20,15],22", expectedOutput : [[22,20,15], [30,35]], actualOutput : partitionArray([30,35,22,20,15],22), message : 'Testing partitionArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);
