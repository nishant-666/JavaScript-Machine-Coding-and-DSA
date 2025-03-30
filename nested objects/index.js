const object = {
  name: "Nishant",
  details: {
    address: "Bengaluru",
    phone: {
      primary: "1234567",
    },
  },
};

const printNestedObject = (obj, prefix = "") => {
  let result = [];

  for (const [key, value] of Object.entries(obj)) {
    let newPrefix = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      result.push(printNestedObject(value, newPrefix));
    } else {
      result.push(`${newPrefix}: ${value}`);
    }
  }

  return result.join("."); // Joins each key-value pair on a new line
};

console.log(printNestedObject(object));
