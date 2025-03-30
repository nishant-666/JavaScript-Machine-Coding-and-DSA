/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * Do not change function name
 **/

function Increment() {
  // write your code here
  console.log(this);
}

let increment1 = new Increment();
let increment2 = Increment();

console.log(increment1 == +increment2); // true
console.log(`val: ${increment1}`); // val: 1
console.log(`val: ${increment1}`); // val: 2
console.log(`val: ${increment1}`); // val: 3
