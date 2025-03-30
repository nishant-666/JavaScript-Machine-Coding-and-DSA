function multiple(position) {
  if (this.length === 0) return 0;
  return this.reduce((res, tuple) => tuple[position - 1] * res, 1);
}

function tuple(input) {
  // write your code below
  const inputArray = input
    .substring(1, input.length - 1)
    .trim()
    .split(/\)\s*,\s*\(/)
    .filter(Boolean)
    .map((tuple) => tuple.split(",").map((item) => Number(item.trim())));

  inputArray.multiple = multiple;
  return inputArray;
}

const input = `(1, 2, 3), (4, 5, 6), (7, 8, 9)`;

// Convert it into
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const item = tuple(input);

// Multiples 2nd item in each nested array
// i.e. 2 * 5 * 8 = 80
console.log(item.multiply(2));
