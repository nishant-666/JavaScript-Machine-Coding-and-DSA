function customReduce(callback, initialValue) {
  // DO NOT REMOVE
  "use strict";

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}

Array.prototype.customReduce = customReduce;

console.log(
  [1, 2, 3].customReduce(function (acc, curr) {
    return acc + curr;
  })
);

console.log(
  [1, 2, 3].customReduce(function (acc, curr) {
    return acc + curr;
  }, 10)
);

console.log(
  [1, 2, 3, 5].customReduce(function (acc, curr) {
    return acc * curr;
  }, 1)
);

console.log(
  [].customReduce(function (acc, curr) {
    return acc * curr;
  }, 1)
);
