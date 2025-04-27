function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle k > n

  return arr.slice(-k).concat(arr.slice(0, n - k));
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 2)); // [3, 4, 5, 1, 2]
