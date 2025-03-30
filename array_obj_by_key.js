/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE FUNCTION NAME
function groupByType(collection) {
  let object = {};
  for (let i of collection) {
    if (object[i.type]) {
      object[i.type].push(i);
    } else {
      object[i.type] = [i];
    }
  }
  return object;
}

const combineArray = [
  { type: "fruits", value: "orange" },
  { type: "fruits", value: "apple" },
  { type: "vegetables", value: "cucumber" },
  { type: "exotic", value: "Kiwi" },
];

console.log(groupByType(combineArray));
