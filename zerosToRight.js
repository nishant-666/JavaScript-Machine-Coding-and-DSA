var moveZeroes = function (nums) {
  let insertPos = 0;

  // Move all non-zero elements forward
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
};

console.log(moveZerosToRight([0, 1, 0, 3, 12]));
