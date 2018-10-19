const filterOddNumbers = function(numbers) {
  let oddNumbers = [[], []]; 
  for (let number of numbers) { 
    oddNumbers[number % 2].push(number);
  }
  return oddNumbers[1];
}

exports.filterOddNumbers = filterOddNumbers;