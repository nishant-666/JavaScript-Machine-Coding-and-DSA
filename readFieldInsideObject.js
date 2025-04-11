function read(collection, property) {
  // write your solution below

  const keys = property.split(".");

  let output = keys.reduce(
    (obj, key) => (obj ? obj[key] : undefined),
    collection
  );

  return output;
}

const collection = {
  a: {
    b: {
      c: {
        d: {
          e: 2,
        },
      },
    },
  },
};

console.log(read(collection, "a.b.c.d.e"));
