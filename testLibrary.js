const assert = require('assert');

const justifier = function(text, width) {
  let spaceWidth = width - text.length;
  return text + new Array(spaceWidth).fill(' ').join('');
}

const logTestCase = function(args) {
  let message = '';
  message = message + justifier(getSerialNumber().toString(), 4) + '|';
  message = message + justifier(args.message.toString(), 40) + '|';
  message = message + justifier(args.input.toString(), 25) + '|';
  message = message + justifier(args.expectedOutput.toString(), 25) + '|';
  message = message + justifier(args.actualOutput.toString(), 25) + '|';
  return message;
}

let generateSerialNumber = function() {
  let serialNumber = 0;
  return function(){
    serialNumber ++;
    return serialNumber;
  }
}

let getSerialNumber = generateSerialNumber();

const assertEqual = function(object) {
  console.log(logTestCase(object));
  assert.equal(object.actualOutput, object.expectedOutput);
}

const assertDeepEqual = function(object) {
  console.log(logTestCase(object));
  assert.deepEqual(object.actualOutput, object.expectedOutput);
}

exports.assertEqual = assertEqual;
exports.assertDeepEqual = assertDeepEqual;
