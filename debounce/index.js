const textInput = document.getElementById("input");

const debouncedFunction = (cb, delay) => {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updatedDebouncedText = debouncedFunction((text) => {
  console.log(text);
}, 1000);

textInput.addEventListener("input", (event) => {
  updatedDebouncedText(event.target.value);
});
