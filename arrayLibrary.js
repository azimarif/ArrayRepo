const isEven = function(number) {
  return number % 2 == 0;
}

const complementFunction = function(functionToCompliment) {
  return function(args1, args2) {
    return !functionToCompliment(args1, args2);
  }
}

const isOdd = complementFunction(isEven);

const filterOddNumbers = function(numbers) {
  return numbers.filter(isOdd);
}

const filterEvenNumbers = function(numbers) {
  return numbers.filter(isEven);
}

const sumOfTwoNumbers = function(sum, value) {
  return sum + value;
}

const calculateSum = function(numbers) {
  return numbers.reduce(sumOfTwoNumbers, 0);
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
  for (let count = 0; count < numberOfTerms; count++) {
    fibonacciTerms[count] = firstNumber;
    firstNumber = secondNumber;
    secondNumber = firstNumber + fibonacciTerms[count];
  }
  return reverseArray(fibonacciTerms);
}

const isGreaterNumber = function(number1, number2) {
  return number1 > number2;
}

const comparator = function(num1, num2, comparer){
  if(comparer(num1, num2)){
    return num1;
  }
  return num2;
}

const getMaxNumber =function(num1, num2){
  return comparator(num1, num2, isGreaterNumber);
}

const getMinNumber = function(num1, num2){
  return comparator(num1,num2, complementFunction(isGreaterNumber));
}

const maxNumberInAList = function(numbers) {
  return numbers.reduce(getMaxNumber);
}

const minNumberInAList = function(numbers) {
  return numbers.reduce(getMinNumber);
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
  return filterOddNumbers(numbers).length;
}

const countEvenNumbers = function(numbers) {
  return filterEvenNumbers(numbers).length;
}

const countNumbersAboveValue = function(numbers, thresholdValue) {
  return (numbers.filter(function(number) {
    return number > thresholdValue;
  })).length;
}

const countNumbersBelowValue = function(numbers, thresholdValue) {
  return (numbers.filter(function(number) {
    return number < thresholdValue;
  })).length;
}

const findIndexOfNumber = function(numbers, value) {
  return numbers.indexOf(value);
}

const isNumberLowerOrEqual = function(number1, number2) {
  return number1 <= number2;
}

const isNumberGreaterOrEqual = function(number1, number2) {
  return number1 >= number2;
}

const isAscending = function(numbers) {
  return isInOrder(numbers,  isNumberGreaterOrEqual);
}

const isInOrder = function(array, comparer) {
  const comparisonResult = function(previousComparison,current){
  let { element, order } = previousComparison;
    previousComparison.order = comparer(current, element) && order;
    previousComparison.element = current;
    return previousComparison;
  }

  return array.reduce(comparisonResult, { element: array[0], order: true }).order;
}

const isDescending = function(numbers) {
  return isInOrder(numbers, isNumberLowerOrEqual);
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

const uniqueArrayElements = function(numbers) {
  return numbers.reduce(function(uniqueElements, number) {
    if (uniqueElements.includes(number)) {
      return uniqueElements;
    }
    uniqueElements.push(number);
    return uniqueElements;
  }, []);
}

const unionOfTwoArrays = function(firstElements, secondElements) {
  return uniqueArrayElements(firstElements.concat(secondElements));
}

const arrayIntersection = function(firstSet, secondSet) {
  return firstSet.filter(function(number){
    return secondSet.includes(number);
  });
}

const uniqueElementsFromFirstSet = function(firstSet, secondSet) {
  return firstSet.filter(function(number){
    return !(secondSet.includes(number))
  });
}

const isSubSet = function(superSetElements, subSetElements) {
  return subSetElements.every(function(element) {
    return superSetElements.includes(element);
  });
}

const zipArrayElements = function(firstArrayElements, secondArrayElements) {
  return secondArrayElements.reduce(function(array, value){
    let {index, firstArrayElements} = array;
    firstArrayElements[index] = [firstArrayElements[index], value];
    return {index : index +1 , firstArrayElements : firstArrayElements}
  }, { index : 0,  firstArrayElements: firstArrayElements}).firstArrayElements;
}

const rotateArray = function(elements, startingIndex) {
  startingIndex = elements.indexOf(startingIndex) +1;
  return elements.slice(startingIndex, elements.length).concat(elements.slice(0, startingIndex));
  // let count = 0;
  // for (let index = 0; index < startingIndex; index++) {
  //   elements.push(elements.shift());
  // }
  // return elements;
}

const partitionArray = function(elements, partitionElement) {
  return elements.reduce( function(array, element){
    if(element <= partitionElement){
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }, [[],[]]);
}

exports.partitionArray = partitionArray;
exports.rotateArray = rotateArray;
exports.zipArrayElements = zipArrayElements;
exports.isSubSet = isSubSet;
exports.uniqueElementsFromFirstSet = uniqueElementsFromFirstSet;
exports.arrayIntersection = arrayIntersection;
exports.unionOfTwoArrays = unionOfTwoArrays;
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
