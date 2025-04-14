var isRobotBounded = function (instructions) {
  let x = 0;
  let y = 0;

  let currentDirectionIndex = 0;

  const directionList = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === "G") {
      x += directionList[currentDirectionIndex][0];
      y += directionList[currentDirectionIndex][1];
    } else if (instructions[i] === "L") {
      currentDirectionIndex = (currentDirectionIndex + 3) % 4; // Turn left
    } else if (instructions[i] === "R") {
      currentDirectionIndex = (currentDirectionIndex + 1) % 4; // Turn right
    }
  }

  return (x === 0 && y === 0) || currentDirectionIndex !== 0;
};

console.log(isRobotBounded("GGLLGG"));
