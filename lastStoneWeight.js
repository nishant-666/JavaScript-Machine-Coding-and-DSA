var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    stones[1] = stones[0] - stones[1];
    stones.shift();
  }
  return stones[0];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
