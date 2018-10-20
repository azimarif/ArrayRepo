const isEven = function(number){
	return number % 2 == 0;
}

const complimentary = function(functionToCompliment){
	return function(args){
    return !functionToCompliment(args);
  }
}

const isOdd = complimentary(isEven);

const filterOddNumbers = function(numbers) {
  return numbers.filter(isOdd);
}

const filterEvenNumbers = function(numbers) {
  let evenNumbers = [[], []];
  for (let number of numbers) {
    evenNumbers[number % 2].push(number);
  }
  return evenNumbers[0];
}

const calculateSum = function(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  return sum;
}

const reverseArray = function(numbers) {
  let reversedArray = [];
  let reversedArrayIndex = 0;
  for (let index = numbers.length - 1; index >= 0; index--) {
    reversedArray[reversedArrayIndex] = numbers[index];
    reversedArrayIndex++;
  }
  return reversedArray;
}

const selectEverySecondNo = function(numbers) {
  let filteredArray = [];
  let filteredArrayIndex = 0;
  for (let index = 0; index < numbers.length; index = index + 2) {
    filteredArray[filteredArrayIndex] = numbers[index];
    filteredArrayIndex++;
  }
  return filteredArray;
}

const reverseFibonacciSeries = function(numberOfTerms) {
  let fibonacciTerms = [];
  let firstNumber = 0;
  let secondNumber = 1;
  let nextNumber = firstNumber + secondNumber;
  for (let count = 1; count < numberOfTerms; count++) {
    fibonacciTerms[count] = nextNumber;
    nextNumber = firstNumber + secondNumber;
    let temp = secondNumber;
    secondNumber = firstNumber + secondNumber;
    firstNumber = temp;
  }
  fibonacciTerms[0] = 0;
  return reverseArray(fibonacciTerms);
}

const maxNumberInAList = function(numbers) {
  let maxNumber = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
    }
  }
  return maxNumber;
}

const minNumberInAList = function(numbers) {
  let minNumber = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    if (minNumber > numbers[index]) {
      minNumber = numbers[index];
    }
  }
  return minNumber;
}

const averageOfArray = function(numbers) {
  let sum = calculateSum(numbers);
  let numberOfTerms = numbers.length;
  let average = sum / numberOfTerms;
  return average.toFixed(2);
}
const mappingNamesLengthToArray = function(names) {
  let namesLength = [];
  for (let index = 0; index < names.length; index++) {
    namesLength[index] = names[index].length;
  }
  return namesLength;
}

const countOddNumbers = function(numbers) {
  let count = 0;
  for (let number of numbers) {
    if (number % 2 != 0) {
      count = count + 1;
    }
  }
  return count;
}

const countEvenNumbers = function(numbers) {
  let count = 0;
  for (let number of numbers) {
    if (number % 2 == 0) {
      count = count + 1;
    }
  }
  return count;
}

const countNumbersAboveValue = function(numbers, value) {
  let count = 0;
  for (let number of numbers) {
    if (number > value) {
      count = count + 1;
    }
  }
  return count;
}

const countNumbersBelowValue = function(numbers, value) {
  let count = 0;
  for (let number of numbers) {
    if (value > number) {
      count = count + 1;
    }
  }
  return count;
}

const findIndexOfNumber = function(numbers, value) {
  let index = -1;
  for (let index in numbers) {
    if (numbers[index] == value) {
      return index;
    }
  }
  return index;
}

const swapElements = function(firstIndex, secondIndex, numbers) {
  if (numbers[firstIndex] > numbers[secondIndex]) {
    let oldValue = numbers[firstIndex];
    numbers[firstIndex] = numbers[secondIndex];
    numbers[secondIndex] = oldValue;
  }
  return numbers;
}

const sortArrayInAscending = function(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    swapElements(index, index + 1, numbers);
  }
  return numbers;
}

const loopThroughArray = function(numbers, sortBy) {
  for (let counter = 0; counter < numbers.length; counter++) {
    sortBy(numbers);
  }
  return numbers;
}

const sortArrayInDescending = function(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    swapElements(index + 1, index, numbers);
  }
  return numbers;
}

const isAscending = function(numbers) {
  let status = true;
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] > numbers[index + 1]) {
      status = false;
    }
  }
  return status;
}

const isDescending = function(numbers) {
  let status = true;
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index + 1] > numbers[index]) {
      status = false;
    }
  }
  return status;
}

const extractDigits = function(number) {
  let digits = [];
  let numberToExtract = number;
  while (numberToExtract != 0) {
   digits.push(numberToExtract % 10);
   numberToExtract = Math.floor(numberToExtract / 10);
  }
  return reverseArray(digits);
}

const isElementExists = function(numberArray, value) {
  let status = false;
  for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] == value) {
      status = true;
    }
  }
  return status;
}

const uniqueArrayElements = function(numbers) {
  let uniqueArray = [];
  for (let index = 0; index < numbers.length; index++) {
    if (!isElementExists(uniqueArray, numbers[index])) {
      uniqueArray.push(numbers[index]);
    }
  }
  return uniqueArray;
}

const combineTwoArrays = function(firstElements, secondElements) {
  return uniqueArrayElements(firstElements.concat(secondElements));
}

const arrayIntersection = function(firstElements, secondElements) {
  firstElements = uniqueArrayElements(firstElements);
  secondElements = uniqueArrayElements(secondElements);
  let intersectedArray = [];
  let count = 0;
  for (let index = 0; index < firstElements.length; index++) {
    if (isElementExists(secondElements, firstElements[index])) {
      intersectedArray.push(firstElements[index]);
    }
  }
  return intersectedArray;
}

const uniqueElementsFromFirstArray = function(firstElements, secondElements) {
  let uniqueElements = [];
  let count = 0;
  for (let index = 0; index < firstElements.length; index++) {
    if (!isElementExists(secondElements, firstElements[index])) {
      uniqueElements[count] = firstElements[index];
      count++;
    }
  }
  return uniqueElements;
}

const isArraySubSet = function(firstElements, secondElements) {
  for (let index = 0; index < secondElements.length; index++) {
    if (!isElementExists(firstElements, secondElements[index])) {
      return false;
    }
  }
  return true;
}

const zipArrayElements = function(firstElements, secondElements) {
  let zippedElements = [];
  for (let index = 0; index < firstElements.length; index++) {
    zippedElements[index] = [];
    zippedElements[index][0] = firstElements[index];
    zippedElements[index][1] = secondElements[index];
  }
  return zippedElements;
}

const rotateArray = function(elements, startingIndex) {
  let count = 0;
  for (let index = 0; index < startingIndex; index++) {
    elements.push(elements.shift(index));
  }
  return elements;
}

const partitionArray = function(elements, partitionElement) {
  let partitionedArray = [[], []];
  sortArrayInAscending(elements);
  for (let index = 0; index < elements.length; index++) {
    partitionedArray[1].push(elements[index]);
    if (partitionElement >= elements[index]) {
      partitionedArray[0].push(elements[index]);
      partitionedArray[1].pop();
    }
  }
  return partitionedArray;
}

exports.partitionArray = partitionArray;
exports.rotateArray = rotateArray;
exports.zipArrayElements = zipArrayElements;
exports.isArraySubSet = isArraySubSet;
exports.uniqueElementsFromFirstArray = uniqueElementsFromFirstArray;
exports.arrayIntersection = arrayIntersection;
exports.combineTwoArrays = combineTwoArrays;
exports.uniqueArrayElements = uniqueArrayElements;
exports.extractDigits = extractDigits;
exports.isDescending = isDescending;
exports.isAscending = isAscending;
exports.loopThroughArray = loopThroughArray;
exports.sortArrayInAscending = sortArrayInAscending;
exports.sortArrayInDescending = sortArrayInDescending;
exports.findIndexOfNumber = findIndexOfNumber;
exports.countNumbersBelowValue = countNumbersBelowValue;
exports.countNumbersAboveValue = countNumbersAboveValue;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.mappingNamesLengthToArray = mappingNamesLengthToArray;
exports.averageOfArray = averageOfArray;
exports.minNumberInAList = minNumberInAList;
exports.maxNumberInAList = maxNumberInAList;
exports.reverseFibonacciSeries = reverseFibonacciSeries;
exports.selectEverySecondNo = selectEverySecondNo;
exports.reverseArray = reverseArray;
exports.calculateSum = calculateSum;
exports.filterEvenNumbers = filterEvenNumbers;
exports.filterOddNumbers = filterOddNumbers;
