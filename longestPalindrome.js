var longestPalindrome = function (s) {
  let first = 0;

  let last = s.length - 1;
  let output = "";
  while (first <= last) {
    if (s[first] === s[last]) {
    }

    first++;
    last--;
  }

  return output;
};

console.log(longestPalindrome("babad"));
