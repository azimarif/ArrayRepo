const isEven = function(number) {
  return number % 2 == 0;
}

const complementFunction = function(functionToCompliment) {
  return function(args) {
    return !functionToCompliment(args);
  }
}

const isOdd = complementFunction(isEven);

const filterOddNumbers = function(numbers) {
  return numbers.filter(isOdd);
}

const filterEvenNumbers = function(numbers) {
  return numbers.filter(isEven);
}

const sumOfNumbersInList = function(sum, value) {
  return sum + value;
}

const calculateSum = function(numbers) {
  return numbers.reduce(sumOfNumbersInList, 0);
}

const reverseArray = function(numbers) {
  return numbers.reduce(function(array, number) {
    array.unshift(number);
    return array;
  }, []);
}

const selectEverySecondNumber = function(numbers) {
  let filteredArray = [];
  for (let index = 0; index < numbers.length; index = index + 2) {
    filteredArray.push(numbers[index]);
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
  return numbers.reduce(function(maxNumber, number) {
    if (number > maxNumber) {
      return number;
    }
    return maxNumber;
  });
}

const minNumberInAList = function(numbers) {
  return numbers.reduce(function(minNumber, number) {
    if (number > minNumber) {
      return minNumber;
    }
    return number;
  });
}

const averageOfArray = function(numbers) {
  let sum = calculateSum(numbers);
  let numberOfTerms = numbers.length;
  let average = sum / numberOfTerms;
  return average.toFixed(2);
}

const mappingNamesLengthToArray = function(names) {
  return names.map(function(name) {
    return name.length;
  });
}

const countOddNumbers = function(numbers) {
  return numbers.filter(isOdd).length;
}

const countEvenNumbers = function(numbers) {
  return numbers.filter(isEven).length;
}

const countNumbersAboveValue = function(numbers, value) {
  return (numbers.filter(function(number) {
    return number > value;
  })).length;
}

const countNumbersBelowValue = function(numbers, value) {
  return (numbers.filter(function(number) {
    return number < value;
  })).length;
}

const findIndexOfNumber = function(numbers, value) {
  return numbers.indexOf(value);
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

const isSubSet = function(superSetElements, subSetElements) {
  return subSetElements.every(function(element) {
    return superSetElements.includes(element);
  });
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
    elements.push(elements.shift());
  }
  return elements;
}

const partitionArray = function(elements, partitionElement) {
  let partitionedArray = [[], []];
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
exports.isSubSet = isSubSet;
exports.uniqueElementsFromFirstArray = uniqueElementsFromFirstArray;
exports.arrayIntersection = arrayIntersection;
exports.combineTwoArrays = combineTwoArrays;
exports.uniqueArrayElements = uniqueArrayElements;
exports.extractDigits = extractDigits;
exports.isDescending = isDescending;
exports.isAscending = isAscending;
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
exports.selectEverySecondNumber = selectEverySecondNumber;
exports.reverseArray = reverseArray;
exports.calculateSum = calculateSum;
exports.filterEvenNumbers = filterEvenNumbers;
exports.filterOddNumbers = filterOddNumbers;