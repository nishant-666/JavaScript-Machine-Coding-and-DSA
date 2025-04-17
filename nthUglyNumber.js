var nthUglyNumber = function (n) {
  const array = [1];

  let i = 0,
    j = 0,
    k = 0;

  while (array.length < n) {
    const next = Math.min(array[i] * 2, array[j] * 3, array[k] * 5);
    array.push(next);

    if (next === array[i] * 2) i++;
    if (next === array[j] * 3) j++;
    if (next === array[k] * 5) k++;
  }
};

console.log(nthUglyNumber(10));
