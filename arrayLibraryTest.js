const assert = require('assert');
const {assertEqual, assertDeepEqual} = require('./testLibrary.js');
const arrayLibrary = require('./arrayLibrary.js');

//Selecting odd numbers
let testCase1 = { input : [0], expectedOutput : [], actualOutput : arrayLibrary.filterOddNumbers([0]), message : 'Testing filterOddNumbers' }
let testCase2 = { input : [1], expectedOutput : [1], actualOutput : arrayLibrary.filterOddNumbers([1]), message : 'Testing filterOddNumbers' }
let testCase3 = { input : [2], expectedOutput : [], actualOutput : arrayLibrary.filterOddNumbers([2]), message : 'Testing filterOddNumbers' }
let testCase4 = { input : [1,2], expectedOutput : [1], actualOutput : arrayLibrary.filterOddNumbers([1,2]), message : 'Testing filterOddNumbers' }
let testCase5 = { input : [1, 2, 3, 4, 5, 6, 7, 8], expectedOutput : [1,3,5,7], actualOutput : arrayLibrary.filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]), message : 'Testing filterOddNumbers' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Selecting even numbers
testCase1 = { input : [0], expectedOutput : [0], actualOutput : arrayLibrary.filterEvenNumbers([0]), message : 'Testing filterEvenNumbers' }
testCase2 = { input : [1], expectedOutput : [], actualOutput : arrayLibrary.filterEvenNumbers([1]), message : 'Testing filterEvenNumbers' }
testCase3 = { input : [2], expectedOutput : [2], actualOutput : arrayLibrary.filterEvenNumbers([2]), message : 'Testing filterEvenNumbers' }
testCase4 = { input : [1,2], expectedOutput : [2], actualOutput : arrayLibrary.filterEvenNumbers([1,2]), message : 'Testing filterEvenNumbers' }
testCase5 = { input : [1, 2, 3, 4, 5, 6, 7, 8], expectedOutput : [2,4,6,8], actualOutput : arrayLibrary.filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]), message : 'Testing filterEvenNumbers' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Sum of a list of numbers
testCase1 = { input : [], expectedOutput : 0, actualOutput : arrayLibrary.calculateSum([]), message : 'Testing calculateSum' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : arrayLibrary.calculateSum([0]), message : 'Testing calculateSum' }
testCase3 = { input : [1], expectedOutput : 1, actualOutput : arrayLibrary.calculateSum([1]), message : 'Testing calculateSum' }
testCase4 = { input : [1,-5], expectedOutput : -4, actualOutput : arrayLibrary.calculateSum([1,-5]), message : 'Testing calculateSum' }
testCase5 = { input : [30,35,20,15], expectedOutput : 100, actualOutput : arrayLibrary.calculateSum([30,35,20,15]), message : 'Testing calculateSum' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Printing array in reverse order
testCase1 = { input : [], expectedOutput : [], actualOutput : arrayLibrary.reverseArray([]), message : 'Testing reverseArray' }
testCase2 = { input : [0], expectedOutput : [0], actualOutput : arrayLibrary.reverseArray([0]), message : 'Testing reverseArray' }
testCase3 = { input : [0,1], expectedOutput : [1,0], actualOutput : arrayLibrary.reverseArray([0,1]), message : 'Testing reverseArray' }
testCase4 = { input : [1,-5], expectedOutput : [-5,1], actualOutput : arrayLibrary.reverseArray([1,-5]), message : 'Testing reverseArray' }
testCase5 = { input : [30,35,20,15], expectedOutput : [15,20,35,30], actualOutput : arrayLibrary.reverseArray([30,35,20,15]), message : 'Testing reverseArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Selecting every second element
testCase1 = { input : [], expectedOutput : [], actualOutput : arrayLibrary.selectEverySecondNo([]), message : 'Testing selectEverySecondNo' }
testCase2 = { input : [0], expectedOutput : [0], actualOutput : arrayLibrary.selectEverySecondNo([0]), message : 'Testing selectEverySecondNo' }
testCase3 = { input : [0,1], expectedOutput : [0], actualOutput : arrayLibrary.selectEverySecondNo([0,1]), message : 'Testing selectEverySecondNo' }
testCase4 = { input : [1,-5,-2], expectedOutput : [1,-2], actualOutput : arrayLibrary.selectEverySecondNo([1,-5,-2]), message : 'Testing selectEverySecondNo' }
testCase5 = { input : [30,35,20,15], expectedOutput : [30,20], actualOutput : arrayLibrary.selectEverySecondNo([30,35,20,15]), message : 'Testing selectEverySecondNo' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Reverse Fibonacci Series
testCase1 = { input : 0, expectedOutput : [0], actualOutput : arrayLibrary.reverseFibonacciSeries(0), message : 'Testing reverseFibonacciSeries' }
testCase2 = { input : 1, expectedOutput : [0], actualOutput : arrayLibrary.reverseFibonacciSeries(1), message : 'Testing reverseFibonacciSeries' }
testCase3 = { input : 2, expectedOutput : [1,0], actualOutput : arrayLibrary.reverseFibonacciSeries(2), message : 'Testing reverseFibonacciSeries' }
testCase4 = { input : 5, expectedOutput : [3,2,1,1,0], actualOutput : arrayLibrary.reverseFibonacciSeries(5), message : 'Testing reverseFibonacciSeries' }
testCase5 = { input : 7, expectedOutput : [8,5,3,2,1,1,0], actualOutput : arrayLibrary.reverseFibonacciSeries(7), message : 'Testing reverseFibonacciSeries' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Greatest number in a list
testCase1 = { input : [-3,-5], expectedOutput : -3, actualOutput : arrayLibrary.maxNumberInAList([-3,-5]), message : 'Testing maxNumberInAList' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : arrayLibrary.maxNumberInAList([0]), message : 'Testing maxNumberInAList' }
testCase3 = { input : [0,1], expectedOutput : 1, actualOutput : arrayLibrary.maxNumberInAList([0,1]), message : 'Testing maxNumberInAList' }
testCase4 = { input : [1,-5,-2], expectedOutput : 1, actualOutput : arrayLibrary.maxNumberInAList([1,-5,-2]), message : 'Testing maxNumberInAList' }
testCase5 = { input : [30,35,20,15], expectedOutput : 35, actualOutput : arrayLibrary.maxNumberInAList([30,35,20,15]), message : 'Testing maxNumberInAList' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Lowest number in a list
testCase1 = { input : [-3,-5], expectedOutput : -5, actualOutput : arrayLibrary.minNumberInAList([-3,-5]), message : 'Testing minNumberInAList' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : arrayLibrary.minNumberInAList([0]), message : 'Testing minNumberInAList' }
testCase3 = { input : [0,1], expectedOutput : 0, actualOutput : arrayLibrary.minNumberInAList([0,1]), message : 'Testing minNumberInAList' }
testCase4 = { input : [1,-5,-2], expectedOutput : -5, actualOutput : arrayLibrary.minNumberInAList([1,-5,-2]), message : 'Testing minNumberInAList' }
testCase5 = { input : [30,35,20,15], expectedOutput : 15, actualOutput : arrayLibrary.minNumberInAList([30,35,20,15]), message : 'Testing minNumberInAList' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Average of a list
testCase1 = { input : [-3,-5], expectedOutput : -4.00, actualOutput : arrayLibrary.averageOfArray([-3,-5]), message : 'Testing averageOfArray' }
testCase2 = { input : [0], expectedOutput : 0.00, actualOutput : arrayLibrary.averageOfArray([0]), message : 'Testing averageOfArray' }
testCase3 = { input : [0,1], expectedOutput : 0.50, actualOutput : arrayLibrary.averageOfArray([0,1]), message : 'Testing averageOfArray' }
testCase4 = { input : [1,-5,-2], expectedOutput : -2.00, actualOutput : arrayLibrary.averageOfArray([1,-5,-2]), message : 'Testing averageOfArray' }
testCase5 = { input : [30,35,20,15], expectedOutput : 25.00, actualOutput : arrayLibrary.averageOfArray([30,35,20,15]), message : 'Testing averageOfArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Mapping lengths
testCase1 = { input : ['Arif','Azim','Ansari'], expectedOutput : [4,4,6], actualOutput : arrayLibrary.mappingNamesLengthToArray(['Arif','Azim','Ansari']), message : 'Testing mappingNamesLengthToArray' }
testCase2 = { input : ['2743'], expectedOutput :[4], actualOutput : arrayLibrary.mappingNamesLengthToArray(['2743']), message : 'Testing mappingNamesLengthToArray' }
testCase3 = { input : [], expectedOutput : [], actualOutput : arrayLibrary.mappingNamesLengthToArray([]), message : 'Testing mappingNamesLengthToArray' }
testCase4 = { input : ['Infinity', 'War'], expectedOutput : [8,3], actualOutput : arrayLibrary.mappingNamesLengthToArray(['Infinity', 'War']), message : 'Testing mappingNamesLengthToArray' }
testCase5 = { input : ['0', '0'], expectedOutput : [1,1], actualOutput : arrayLibrary.mappingNamesLengthToArray(['0', '0']), message : 'Testing mappingNamesLengthToArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting odd numbers
testCase1 = { input : [], expectedOutput : 0, actualOutput : arrayLibrary.countOddNumbers([]), message : 'Testing countOddNumbers' }
testCase2 = { input : [0], expectedOutput : 0, actualOutput : arrayLibrary.countOddNumbers([0]), message : 'Testing countOddNumbers' }
testCase3 = { input : [0,1], expectedOutput : 1, actualOutput : arrayLibrary.countOddNumbers([0,1]), message : 'Testing countOddNumbers' }
testCase4 = { input : [1,-5,-2], expectedOutput : 2, actualOutput : arrayLibrary.countOddNumbers([1,-5,-2]), message : 'Testing countOddNumbers' }
testCase5 = { input : [30,35,20,15], expectedOutput : 2, actualOutput : arrayLibrary.countOddNumbers([30,35,20,15]), message : 'Testing countOddNumbers' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting even numbers
testCase1 = { input : [], expectedOutput : 0, actualOutput : arrayLibrary.countEvenNumbers([]), message : 'Testing countEvenNumbers' }
testCase2 = { input : [0], expectedOutput : 1, actualOutput : arrayLibrary.countEvenNumbers([0]), message : 'Testing countEvenNumbers' }
testCase3 = { input : [0,1], expectedOutput : 1, actualOutput : arrayLibrary.countEvenNumbers([0,1]), message : 'Testing countEvenNumbers' }
testCase4 = { input : [1,-5,-2], expectedOutput : 1, actualOutput : arrayLibrary.countEvenNumbers([1,-5,-2]), message : 'Testing countEvenNumbers' }
testCase5 = { input : [30,35,20,15], expectedOutput : 2, actualOutput : arrayLibrary.countEvenNumbers([30,35,20,15]), message : 'Testing countEvenNumbers' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting numbers above threshold value
testCase1 = { input : "[],5", expectedOutput : 0, actualOutput : arrayLibrary.countNumbersAboveValue([],5), message : 'Testing countNumbersAboveValue' }
testCase2 = { input : "[0],4", expectedOutput : 0, actualOutput : arrayLibrary.countNumbersAboveValue([0],4), message : 'Testing countNumbersAboveValue' }
testCase3 = { input : "[0,2],1", expectedOutput : 1, actualOutput : arrayLibrary.countNumbersAboveValue([0,2],1), message : 'Testing countNumbersAboveValue' }
testCase4 = { input : "[1,-5,-2],0", expectedOutput : 1, actualOutput : arrayLibrary.countNumbersAboveValue([1,-5,-2],0), message : 'Testing countNumbersAboveValue' }
testCase5 = { input : "[30,35,20,15],22", expectedOutput : 2, actualOutput : arrayLibrary.countNumbersAboveValue([30,35,20,15],22), message : 'Testing countNumbersAboveValue' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Counting numbers below threshold value
testCase1 = { input : "[],5", expectedOutput : 0, actualOutput : arrayLibrary.countNumbersBelowValue([],5), message : 'Testing countNumbersBelowValue' }
testCase2 = { input : "[0],4", expectedOutput : 1, actualOutput : arrayLibrary.countNumbersBelowValue([0],4), message : 'Testing countNumbersBelowValue' }
testCase3 = { input : "[0,2],1", expectedOutput : 1, actualOutput : arrayLibrary.countNumbersBelowValue([0,2],1), message : 'Testing countNumbersBelowValue' }
testCase4 = { input : "[1,-5,-2],0", expectedOutput : 2, actualOutput : arrayLibrary.countNumbersBelowValue([1,-5,-2],0), message : 'Testing countNumbersBelowValue' }
testCase5 = { input : "[30,35,20,15],22", expectedOutput : 2, actualOutput : arrayLibrary.countNumbersBelowValue([30,35,20,15],22), message : 'Testing countNumbersBelowValue' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Find the index of a Number
testCase1 = { input : "[],5", expectedOutput : -1, actualOutput : arrayLibrary.findIndexOfNumber([],5), message : 'Testing findIndexOfNumber' }
testCase2 = { input : "[0],4", expectedOutput : -1, actualOutput : arrayLibrary.findIndexOfNumber([0],4), message : 'Testing findIndexOfNumber' }
testCase3 = { input : "[0,1,2],1", expectedOutput : 1, actualOutput : arrayLibrary.findIndexOfNumber([0,1,2],1), message : 'Testing findIndexOfNumber' }
testCase4 = { input : "[1,-5,-2,0],0", expectedOutput : 3, actualOutput : arrayLibrary.findIndexOfNumber([1,-5,-2,0],0), message : 'Testing findIndexOfNumber' }
testCase5 = { input : "[30,35,22,20,15],22", expectedOutput : 2, actualOutput : arrayLibrary.findIndexOfNumber([30,35,22,20,15],22), message : 'Testing findIndexOfNumber' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Ascending Order
testCase1 = { input : "[]", expectedOutput : true, actualOutput : arrayLibrary.isAscending([]), message : 'Testing isAscending' }
testCase2 = { input : "[0]", expectedOutput : true, actualOutput : arrayLibrary.isAscending([0]), message : 'Testing isAscending' }
testCase3 = { input : "[0,1,2]", expectedOutput : true, actualOutput : arrayLibrary.isAscending([0,1,2]), message : 'Testing isAscending' }
testCase4 = { input : "[-5,-2,0,1,-4]", expectedOutput : false, actualOutput : arrayLibrary.isAscending([-5,-2,0,1,-4]), message : 'Testing isAscending' }
testCase5 = { input : "[30,35,22,20,15]", expectedOutput : false, actualOutput : arrayLibrary.isAscending([30,35,22,20,15]), message : 'Testing isAscending' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Descending Order
testCase1 = { input : "[]", expectedOutput : true, actualOutput : arrayLibrary.isDescending([]), message : 'Testing isDescending' }
testCase2 = { input : "[0]", expectedOutput : true, actualOutput : arrayLibrary.isDescending([0]), message : 'Testing isDescending' }
testCase3 = { input : "[0,1,2]", expectedOutput : false, actualOutput : arrayLibrary.isDescending([0,1,2]), message : 'Testing isDescending' }
testCase4 = { input : "[-5,-2,0,1,-4]", expectedOutput : false, actualOutput : arrayLibrary.isDescending([-5,-2,0,1,-4]), message : 'Testing isDescending' }
testCase5 = { input : "[30,35,22,20,15]", expectedOutput : false, actualOutput : arrayLibrary.isDescending([30,35,22,20,15]), message : 'Testing isDescending' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Extract Digits
// testCase1 = { input : '', expectedOutput : [], actualOutput : arrayLibrary.extractDigits(), message : 'Testing extractDigits' }
testCase2 = { input : 2744, expectedOutput : [2,7,4,4], actualOutput : arrayLibrary.extractDigits(2744), message : 'Testing extractDigits' }
testCase3 = { input : 10, expectedOutput : [1,0], actualOutput : arrayLibrary.extractDigits(10), message : 'Testing extractDigits' }
//testCase4 = { input : -520, expectedOutput : [-5,2,0], actualOutput : arrayLibrary.extractDigits(-520), message : 'Testing extractDigits' }
testCase5 = { input : 4, expectedOutput : [4], actualOutput : arrayLibrary.extractDigits(4), message : 'Testing extractDigits' }

//assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
//assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Unique Array Elements
testCase1 = { input : "[]", expectedOutput : [], actualOutput : arrayLibrary.uniqueArrayElements([]), message : 'Testing uniqueArrayElements' }
testCase2 = { input : "[0]", expectedOutput : [0], actualOutput : arrayLibrary.uniqueArrayElements([0]), message : 'Testing uniqueArrayElements' }
testCase3 = { input : "[0,1]", expectedOutput : [0,1], actualOutput : arrayLibrary.uniqueArrayElements([0,1]), message : 'Testing uniqueArrayElements' }
testCase4 = { input : "[-5,-2,0,-5,1,-4]", expectedOutput : [-5,-2,0,1,-4], actualOutput : arrayLibrary.uniqueArrayElements([-5,-2,0,-5,1,-4]), message : 'Testing uniqueArrayElements' }
testCase5 = { input : "[30,35,22,20,15,30]", expectedOutput : [30,35,22,20,15], actualOutput : arrayLibrary.uniqueArrayElements([30,35,22,20,15,30]), message : 'Testing uniqueArrayElements' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Union of Two Arrays
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : arrayLibrary.combineTwoArrays([],[]), message : 'Testing combineTwoArrays' }
testCase2 = { input : "[0],[0]", expectedOutput : [0], actualOutput : arrayLibrary.combineTwoArrays([0],[0]), message : 'Testing combineTwoArrays' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [0,1], actualOutput : arrayLibrary.combineTwoArrays([0,1],[0,1]), message : 'Testing combineTwoArrays' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [-5,-2,0,1,-4], actualOutput : arrayLibrary.combineTwoArrays([-5,-2,0], [-5,1,-4]), message : 'Testing combineTwoArrays' }
testCase5 = { input : "[30,35,22],[20,15,30]", expectedOutput : [30,35,22,20,15], actualOutput : arrayLibrary.combineTwoArrays([30,35,22], [20,15,30]), message : 'Testing combineTwoArrays' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Intersection of two Arrays
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : arrayLibrary.arrayIntersection([],[]), message : 'Testing arrayIntersection' }
testCase2 = { input : "[0],[0]", expectedOutput : [0], actualOutput : arrayLibrary.arrayIntersection([0],[0]), message : 'Testing arrayIntersection' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [0,1], actualOutput : arrayLibrary.arrayIntersection([0,1],[0,1]), message : 'Testing arrayIntersection' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [-5], actualOutput : arrayLibrary.arrayIntersection([-5,-2,0], [-5,1,-4]), message : 'Testing arrayIntersection' }
testCase5 = { input : "[30,35,22],[20,15,30,35]", expectedOutput : [30,35], actualOutput : arrayLibrary.arrayIntersection([30,35,22], [20,15,30,35]), message : 'Testing arrayIntersection' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Unique Element from first Array
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : arrayLibrary.uniqueElementsFromFirstArray([],[]), message : 'Testing uniqueElementsFromFirstArray' }
testCase2 = { input : "[0],[0]", expectedOutput : [], actualOutput : arrayLibrary.uniqueElementsFromFirstArray([0],[0]), message : 'Testing uniqueElementsFromFirstArray' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [], actualOutput : arrayLibrary.uniqueElementsFromFirstArray([0,1],[0,1]), message : 'Testing uniqueElementsFromFirstArray' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [-2,0], actualOutput : arrayLibrary.uniqueElementsFromFirstArray([-5,-2,0], [-5,1,-4]), message : 'Testing uniqueElementsFromFirstArray' }
testCase5 = { input : "[30,35,22],[20,15,30,35]", expectedOutput : [22], actualOutput : arrayLibrary.uniqueElementsFromFirstArray([30,35,22], [20,15,30,35]), message : 'Testing uniqueElementsFromFirstArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Check if second Array is subset of first Array
testCase1 = { input : "[],[]", expectedOutput : true, actualOutput : arrayLibrary.isArraySubSet([],[]), message : 'Testing isArraySubSet' }
testCase2 = { input : "[0],[0]", expectedOutput : true, actualOutput : arrayLibrary.isArraySubSet([0],[0]), message : 'Testing isArraySubSet' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : true, actualOutput : arrayLibrary.isArraySubSet([0,1],[0,1]), message : 'Testing isArraySubSet' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : false, actualOutput : arrayLibrary.isArraySubSet([-5,-2,0], [-5,1,-4]), message : 'Testing isArraySubSet' }
testCase5 = { input : "[30,35,22],[20,15,30,35]", expectedOutput : false, actualOutput : arrayLibrary.isArraySubSet([30,35,22], [20,15,30,35]), message : 'Testing isArraySubSet' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Zip the array Elements
testCase1 = { input : "[],[]", expectedOutput : [], actualOutput : arrayLibrary.zipArrayElements([],[]), message : 'Testing zipArrayElements' }
testCase2 = { input : "[0],[0]", expectedOutput : [[0,0]], actualOutput : arrayLibrary.zipArrayElements([0],[0]), message : 'Testing zipArrayElements' }
testCase3 = { input : "[0,1],[0,1]", expectedOutput : [[0,0],[1,1]], actualOutput : arrayLibrary.zipArrayElements([0,1],[0,1]), message : 'Testing zipArrayElements' }
testCase4 = { input : "[-5,-2,0,],[-5,1,-4]", expectedOutput : [[-5,-5], [-2,1], [0,-4]], actualOutput : arrayLibrary.zipArrayElements([-5,-2,0], [-5,1,-4]), message : 'Testing zipArrayElements' }
testCase5 = { input : "[30,35,22,35],[20,15,30]", expectedOutput : [[30,20],[35,15], [22,30], [35, undefined]], actualOutput : arrayLibrary.zipArrayElements([30,35,22,35], [20,15,30]), message : 'Testing zipArrayElements' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Rotate an Array by position
testCase1 = { input : "[],5", expectedOutput : [undefined], actualOutput : arrayLibrary.rotateArray([],5), message : 'Testing rotateArray' }
testCase2 = { input : "[0],4", expectedOutput : [0], actualOutput : arrayLibrary.rotateArray([0],4), message : 'Testing rotateArray' }
testCase3 = { input : "[0,1,2],1", expectedOutput : [1,2,0], actualOutput : arrayLibrary.rotateArray([0,1,2],1), message : 'Testing rotateArray' }
testCase4 = { input : "[1,-5,-2,0],0", expectedOutput : [1,-5,-2,0], actualOutput : arrayLibrary.rotateArray([1,-5,-2,0],0), message : 'Testing rotateArray' }
testCase5 = { input : "[30,35,22,20,15],22", expectedOutput : [22,20,15,30,35], actualOutput : arrayLibrary.rotateArray([30,35,22,20,15],22), message : 'Testing rotateArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);

//Divide the array in two parts for the given number
testCase1 = { input : "[],5", expectedOutput : [[],[]], actualOutput : arrayLibrary.partitionArray([],5), message : 'Testing partitionArray' }	
testCase2 = { input : "[0],4", expectedOutput : [[0],[]], actualOutput : arrayLibrary.partitionArray([0],4), message : 'Testing partitionArray' }
testCase3 = { input : "[0,1,2],1", expectedOutput : [[0,1],[2]], actualOutput : arrayLibrary.partitionArray([0,1,2],1), message : 'Testing partitionArray' }
testCase4 = { input : "[1,-5,-2,0],0", expectedOutput : [[-5,-2, 0], [1]], actualOutput : arrayLibrary.partitionArray([1,-5,-2,0],0), message : 'Testing partitionArray' }
testCase5 = { input : "[30,35,22,20,15],22", expectedOutput : [[22,20,15], [30,35]], actualOutput : arrayLibrary.partitionArray([30,35,22,20,15],22), message : 'Testing partitionArray' }

assertDeepEqual(testCase1);
assertDeepEqual(testCase2);
assertDeepEqual(testCase3);
assertDeepEqual(testCase4);
assertDeepEqual(testCase5);