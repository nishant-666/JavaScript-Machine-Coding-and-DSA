var countPairs = function (nums, k) {
  let comboCount = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        let multiple = i * j;

        if (multiple % k === 0) comboCount++;
      }
    }
  }

  return comboCount;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
