var countSymmetricIntegers = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i > 10) {
      const numericString = i.toString();

      if (numericString.length % 2 === 0) {
        const mid = numericString.length / 2;

        const leftSum = [...numericString.slice(0, mid)].reduce(
          (a, b) => a + +b,
          0
        );
        const rightSum = [...numericString.slice(mid)].reduce(
          (a, b) => a + +b,
          0
        );

        if (leftSum === rightSum) count++;
      }
    }
  }

  return count;
};

console.log(countSymmetricIntegers(1, 100));

console.log(countSymmetricIntegers(1200, 1230));
