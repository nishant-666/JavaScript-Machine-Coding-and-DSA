/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE FUNCTION NAMES

function filter(collection, callback) {
  // DO NOT REMOVE
  "use strict";

  // write your code below

  let traveredObject = traverseObject(collection);

  let result = {};

  for (let [key, value] of Object.entries(collection)) {
    if (callback(value)) {
      result[key] = value;
    }
  }

  return result;
}

const traverseObject = (object, traveredObject = {}) => {
  for (let [key, value] of Object.entries(object)) {
    if (typeof value === "object") {
      traverseObject(value, traveredObject);
    } else {
      traveredObject[key] = value;
    }
  }

  return traveredObject;
};

const input = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

const callback = (element) => element >= 0;

const filtered = filter(input, callback);

// { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
console.log(filtered);
