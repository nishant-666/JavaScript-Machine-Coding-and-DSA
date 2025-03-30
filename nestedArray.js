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
// Example usage
const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, [4], 5]
