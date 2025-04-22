var romanToInt = function (s) {
  let number = 0;
  let romanMapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const currentNum = romanMapping[s[i]];
    const nextNum = romanMapping[s[i + 1]];

    if (currentNum < nextNum) {
      number += nextNum - currentNum;
      i++;
    } else {
      number += currentNum;
    }
  }

  return number;
};

console.log(romanToInt("III"));

console.log(romanToInt("LVIII"));

console.log(romanToInt("MCMXCIV"));
