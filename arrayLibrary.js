const filterOddNumbers = function(numbers) {
  let oddNumbers = [[], []]; 
  for (let number of numbers) { 
    oddNumbers[number % 2].push(number);
  }
  return oddNumbers[1];
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
  for (let index in numbers) {
    if (numbers[index] == value) {
      return index;
    }
  }
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
  let index = 0;
  let numberToExtract = number;
  while (numberToExtract > 0) {
    digits[index] = numberToExtract % 10;
    numberToExtract = Math.floor(numberToExtract / 10);
    index++;
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
exports.countEvenNumbers  = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.mappingNamesLengthToArray= mappingNamesLengthToArray;
exports.averageOfArray = averageOfArray;
exports.minNumberInAList= minNumberInAList;
exports.maxNumberInAList = maxNumberInAList;
exports.reverseFibonacciSeries =reverseFibonacciSeries;
exports.selectEverySecondNo = selectEverySecondNo;
exports.reverseArray = reverseArray;
exports.calculateSum = calculateSum;
exports.filterEvenNumbers = filterEvenNumbers;
exports.filterOddNumbers = filterOddNumbers;