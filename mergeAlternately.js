var mergeAlternately = function (word1, word2) {
  let result = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    result += `${word1[i] ? word1[i] : ""}${word2[i] ? word2[i] : ""}`;
  }

  return result;
};

console.log(mergeAlternately("abc", "pqr"));
