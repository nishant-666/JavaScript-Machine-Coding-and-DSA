var decodeString = function (s) {
  const stack = [];
  let num = 0;
  let builtString = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + (char - "0");
    } else if (char === "[") {
      stack.push([builtString, num]);
      builtString = "";
      num = 0;
    } else if (char === "]") {
      const [prevStr, repeatTimes] = stack.pop();
      const expandedString = builtString.repeat(repeatTimes);
      if (expandedString.length > 1000000) {
        return "Output too large! Skipping expansion.";
      }
      builtString = prevStr + expandedString;
    } else {
      builtString += char;
    }
  }

  return builtString;
};

console.log(decodeString("3[a]2[bc]"));
