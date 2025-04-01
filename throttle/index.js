const inputText = document.getElementById("input");

const throttleFunction = (fn, delay) => {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) return;
    fn(...args);
    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};

const updatedThrottleText = throttleFunction((text) => {
  console.log(text);
}, 3000);

inputText.addEventListener("input", (event) => {
  updatedThrottleText(event.target.value);
});
