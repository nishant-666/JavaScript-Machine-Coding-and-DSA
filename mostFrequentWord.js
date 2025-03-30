function mostUsedWord(text = "", bannedWords = []) {
  // write your code below

  if (!text || typeof text !== "string") {
    throw new TypeError(
      "Invalid input: 'text' parameter must be a non-empty string."
    );
  }

  const textArray = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(" ")
    .filter((word) => !bannedWords.includes(word));
  let result = new Map();

  for (let i = 0; i < textArray.length; i++) {
    if (result.has(textArray[i])) {
      result.set(textArray[i], result.get(textArray[i]) + 1); // Increment count
    } else {
      result.set(textArray[i], 1);
    }
  }

  let maxCount = 0;
  let mostFrequent = "";
  for (let [word, count] of result) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = word;
    }
  }

  return mostFrequent;
}
