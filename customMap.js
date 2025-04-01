/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/** Do not delete or change any function name **/

function getUserById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

const sliceArray = (arr, size) => {
  const temp = [...arr];
  if (!size) {
    return temp;
  }
  const output = [];
  let i = 0;
  while (i < temp.length) {
    output.push(temp.slice(i, i + size));
    i = i + size;
  }
  return output;
};

function mapLimit(inputs, limit, iterateeFn, callback) {
  // write your solution here

  let slicedArray = sliceArray(inputs, limit);

  const reduceResult = slicedArray.reduce((acc, curr) => {
    return new Promise((resolve) => {
      let arr = [];
      curr.forEach((x) => {
        iterateeFn(x, (callbackVal) => {
          arr.push(callbackVal);
          if (curr.length === arr.length) {
            acc.then((accRes) => {
              resolve([...accRes, ...arr]);
            });
          }
        });
      });
    });
  }, Promise.resolve([]));

  reduceResult.then((results) => {
    callback(results);
  });
}

mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
  console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
