var productExceptSelf = function (nums) {
  let currentProduct = 1;

  let currentProductArray = [];

  for (let i = 0; i < nums.length; i++) {
    currentProductArray.push(currentProduct);
    currentProduct *= nums[i];
  }

  currentProduct = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    currentProductArray[j] *= currentProduct;
    currentProduct *= nums[j];
  }

  return currentProductArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
