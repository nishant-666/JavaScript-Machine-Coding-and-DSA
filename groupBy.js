function groupBy(collection, property) {
  const grouped = {};

  for (let i = 0; i < collection.length; i++) {
    let key =
      typeof property === "function"
        ? property(collection[i])
        : collection[i][property];

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(collection[i]);
  }

  return grouped;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

console.log(groupBy(["one", "two", "three"], "length"));
// => { '3': ['one', 'two'], '5': ['three'] }
