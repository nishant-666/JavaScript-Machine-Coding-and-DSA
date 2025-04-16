var longestPalindrome = function (s, t) {
  const combinedString = `${s}${t}`;

  let maxPalindrome = "";

  for (let i = 0; i < combinedString.length; i++) {
    for (let j = i + 1; j <= combinedString.length; j++) {
      const substring = combinedString.slice(i, j);
      if (isPalindrome(substring) && substring.length > maxPalindrome.length) {
        maxPalindrome = substring;
      }
    }
  }

  return maxPalindrome.length;
};

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(longestPalindrome("a", "a"));
