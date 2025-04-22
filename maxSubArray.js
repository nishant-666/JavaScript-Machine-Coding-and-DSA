var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let maxima = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);

    maxima = Math.max(maxima, currentMax);
  }
  return maxima;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
