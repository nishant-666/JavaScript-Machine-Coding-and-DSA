var sortColors = function (nums) {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = sortColors(nums.slice(0, mid));
  const right = sortColors(nums.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  let sorted = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i++]);
    } else {
      sorted.push(right[j++]);
    }
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

console.log(sortColors([2, 0, 2, 1, 1, 1, 0]));
