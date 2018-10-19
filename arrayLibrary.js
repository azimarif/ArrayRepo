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

exports.reverseArray = reverseArray;
exports.calculateSum = calculateSum;
exports.filterEvenNumbers = filterEvenNumbers;
exports.filterOddNumbers = filterOddNumbers;