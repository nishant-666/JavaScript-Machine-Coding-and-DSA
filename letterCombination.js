var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const result = [];
  let current = "";

  const mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  const backtrack = (index) => {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = mapping[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      current += letters[i];
      backtrack(index + 1);
      current = current.slice(0, -1);
    }
  };

  backtrack(0);
  return result;
};

console.log(letterCombinations("23"));
