/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE THE FUNCTION NAME
function customFilter(callbackFn, thisArg) {
  // DO NOT REMOVE
  "use strict";

  // write your code below
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let filteredVal = callbackFn(thisArg, this[i], i, this);

    if (filteredVal) {
      result.push(this[i]);
    }
  }

  return result;
}

// DO NOT CHANGE
Array.prototype.customFilter = customFilter;

const numbers = [12, 5, 8, 130, 44];

function isGreaterThanTen(value) {
  return value > 10;
}

const filteredNumbers = numbers.customFilter(isGreaterThanTen);
console.log(filteredNumbers);
// expected output: Array [12, 130, 44];
