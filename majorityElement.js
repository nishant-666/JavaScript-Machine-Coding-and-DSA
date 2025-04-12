var majorityElement = function (nums) {
  const majorityElement = {};
  const n = nums.length / 3;
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (majorityElement[nums[i]]) {
      majorityElement[nums[i]]++;
    } else {
      majorityElement[nums[i]] = 1;
    }
  }

  for (const [num, count] of Object.entries(majorityElement))
    if (count > n) result.push(+num);

  return result;
};

console.log(majorityElement([1, 2]));
