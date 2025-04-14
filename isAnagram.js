var isAnagram = function (s, t) {
  s = JSON.stringify(s.split("").sort());
  t = JSON.stringify(t.split("").sort());

  if (s === t) return true;
  return false;
};

console.log(isAnagram("anagram", "nagaram"));
