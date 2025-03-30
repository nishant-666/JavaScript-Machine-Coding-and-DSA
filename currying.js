const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
  return curried;
};

const add = (a, b, c) => {
  return a + b + c;
};

const curriedAdd = curry(add);

console.log(curriedAdd(1, 2, 3)); // returns 6
