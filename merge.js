var merge = function (intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];

  let [currentFirst, currentLast] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    if (start <= currentLast) {
      currentLast = Math.max(currentLast, end);
    } else {
      result.push([currentFirst, currentLast]);
      currentFirst = start;
      currentLast = end;
    }
  }
  result.push([currentFirst, currentLast]);

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(merge([[1, 3]]));
