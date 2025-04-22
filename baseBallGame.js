var baseBallGame = function (operations) {
  let score = [];

  for (let i = 0; i < operations.length; i++) {
    if (Number(operations[i])) {
      score.push(Number(operations[i]));
    } else if (operations[i] === "C") {
      score.pop();
    } else if (operations[i] === "D") {
      score.push(score[score.length - 1] * 2);
    } else if (operations[i] == "+") {
      let sum =
        Number(score[score.length - 1]) + Number(score[score.length - 2]);

      score.push(sum);
    }
  }

  return score.reduce((current, total) => current + total, 0);
};

console.log(baseBallGame(["5", "2", "C", "D", "+"]));
