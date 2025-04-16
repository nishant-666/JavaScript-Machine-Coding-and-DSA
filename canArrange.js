var canArrange = function (arr, k) {
  let remainder_count = new Array(k).fill(0);

  for (let num of arr) {
    let remainder = num % k;
    if (remainder < 0) remainder += k;
    remainder_count[remainder]++;
  }

  return remainder_count;
};

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5));
