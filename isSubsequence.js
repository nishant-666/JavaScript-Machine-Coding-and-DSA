var isSubsequence = function (s, t) {
  let spointer = 0;
  let tpointer = 0;

  while (spointer < s.length && tpointer < t.length) {
    if (s[spointer] === t[tpointer]) {
      spointer++;
    }

    tpointer++;
  }

  return s.length === spointer;
};

console.log(isSubsequence("abc", "ahbgdc"));
