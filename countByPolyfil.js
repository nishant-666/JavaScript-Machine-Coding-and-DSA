function countBy(collection, iteratee) {
  // write your solution here

  let object = {};

  for (let i = 0; i < collection.length; i++) {
    let result = !iteratee
      ? collection[i]
      : typeof iteratee === "function"
      ? iteratee(collection[i])
      : collection[i][iteratee];

    if (object[result]) {
      object[result]++;
    } else {
      object[result] = 1;
    }
  }

  return object;
}

console.log(countBy([4, 3, 3, 1, 4, 4], (e) => e));
// { '1': 1, '3': 2, '4': 1 }

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': 1, '6': 2 }

countBy(["one", "two", "three"], "length");
// => { '3': 2, '5': 1 }

countBy([{ a: 1 }, { a: 1 }, { a: 3 }], (e) => e.a);
// { '1': 2, '3': 1 }

countBy([], (e) => e);
// {}

countBy([{ a: 1 }, { a: 2 }], (e) => e.b);
// => { undefined: 2 }

countBy([6.1, 4.2, 6.3]);
// { '6.1': 1, '4.2': 1, '6.3': 1 };

countBy([{ a: 1 }, { a: 1 }, { a: 3 }]);
// { '[object Object]': 3 }
