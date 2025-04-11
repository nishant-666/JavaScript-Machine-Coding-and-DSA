var lengthOfLastWord = function (s) {
  s = s.trim();

  return s.split(" ").reverse().at(0).length;
};

console.log(lengthOfLastWord("Hello World"));
