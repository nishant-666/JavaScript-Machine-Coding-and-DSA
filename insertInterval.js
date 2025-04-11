var insert = function (intervals, newInterval) {
  let [start, end] = newInterval;

  let left = [];
  let right = [];

  for (const interval of intervals) {
    const [first, last] = interval;

    // current interval is smaller than newInterval
    if (last < start) left.push(interval);
    // current interval is larger than newInterval
    else if (first > end) right.push(interval);
    // there is a overlap
    else {
      start = Math.min(start, first);
      end = Math.max(end, last);
    }
  }

  return [...left, [start, end], ...right];
};

const intervals = [
  [1, 3],
  [6, 9],
];

const newInterval = [2, 5];

console.log(insert(intervals, newInterval)); // [[1, 5], [6, 9]]
// Explanation: The new interval [2, 5] overlaps with [1, 3], so we merge them into [1, 5].
// The new interval [2, 5] does not overlap with [6, 9], so we keep it as is.
