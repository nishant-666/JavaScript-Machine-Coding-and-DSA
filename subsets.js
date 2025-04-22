var subsets = function (nums) {
  const result = [];

  function backtracing(start, path) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracing(i + 1, path);
      path.pop();
    }
  }

  backtracing(0, []);
  return result;
};

console.log(subsets([1, 2, 3]));
