var numRabbits = function (answers) {
  const count = new Map();

  for (const ans of answers) {
    count.set(ans, (count.get(ans) || 0) + 1);
  }

  let total = 0;

  for (const [key, value] of count) {
    const groups = Math.ceil(value / (key + 1));
    total += groups * (key + 1);
  }

  return total;
};

console.log(numRabbits([1, 1, 2]));
