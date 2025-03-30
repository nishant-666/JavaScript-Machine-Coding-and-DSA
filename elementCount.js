// Recursive function to flatten a nested array
function countNumbers(collection) {
  // write your solution below
  const flattenedArray = flattenArray(collection);
  let result = 0;

  for (let i = 0; i < flattenedArray.length; i++) {
    if (typeof flattenedArray[i] === "number") {
      result++;
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flattenArray(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

console.log(countNumbers([1, "2", [3, 4, [5]], function () {}, 8, 9]));
// 6

countNumbers([]);
// 0
