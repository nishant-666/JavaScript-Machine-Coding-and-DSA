var generate = function (numRows) {
  const traingle = [];

  for (let i = 0; i < numRows; i++) {
    traingle[i] = [];

    traingle[i][0] = 1;

    for (var j = 1; j < i; j++) {
      traingle[i][j] = traingle[i - 1][j - 1] + traingle[i - 1][j];
    }
    traingle[i][i] = 1;
  }

  return traingle;
};

console.log(generate(5));
