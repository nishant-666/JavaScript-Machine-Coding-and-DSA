const string =
  "AAAAAAABBBBBBBCCCCCCDDDDDDDEEEEEEEFFFFFFFFGGGGGGGHHHHHHHIIIIIIIIJJJJJJJKKKKKKKLLLLLLL111111";

function shortenString(string) {
  let map = new Map();
  let shortenString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (const [key, value] of map) {
    shortenString += `${value}${key}`;
  }

  return shortenString;
}

function unCompressString(string) {
  let unCompressedString = "";
  for (let i = 0; i < string.length; i += 2) {
    let count = parseInt(string[i]);
    let char = string[i + 1];
    unCompressedString += char.repeat(count);
  }

  return unCompressedString;
}

console.log(shortenString(string));

console.log(unCompressString(shortenString(string)));
