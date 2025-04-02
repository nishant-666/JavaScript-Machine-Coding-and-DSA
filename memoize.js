function memoize() {
  let cache = {};
  return function (input) {
    if (cache[input]) {
      console.log("Fetching from cache");
      return cache[input];
    } else {
      console.log("Calculating result");
      cache[input] = input;
      return input;
    }
  };
}

let output = memoize();

console.log(output(3));
console.log(output(3));

console.log(output(1));
console.log(output(4));

console.log(output(3));
