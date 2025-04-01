function merge(left, right) {
  let sortedArray = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(array) {
  if (array.length <= 1) return array; // Base case

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid)); // Sort left half
  let right = mergeSort(array.slice(mid)); // Sort right half

  return merge(left, right);
}

console.log(mergeSort([2, 1, 5, 3, 7, 4, 82, 38]));
