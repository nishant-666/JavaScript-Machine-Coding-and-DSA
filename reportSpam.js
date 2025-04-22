var reportSpam = function (message, bannedWords) {
  let spamCount = 0;
  const bannedSet = new Set(bannedWords);

  for (const word of message) {
    if (bannedSet.has(word)) {
      spamCount++;
      if (spamCount >= 2) return true; // early exit
    }
  }

  return false;
};

console.log(reportSpam(["hello", "world", "leetcode"], ["world", "hello"]));

console.log(
  reportSpam(
    ["hello", "programming", "fun"],
    ["world", "programming", "leetcode"]
  )
);
