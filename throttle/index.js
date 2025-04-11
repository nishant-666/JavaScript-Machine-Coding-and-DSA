const throttleFunction = (fn, delay) => {
  let shouldWait = false;
  let lastArgs = null;

  return function (...args) {
    if (shouldWait) {
      lastArgs = args; // Store the latest arguments
      return;
    }

    fn(...args); // Execute the function
    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
      if (lastArgs) {
        fn(...lastArgs); // Execute the last stored call
        lastArgs = null; // Clear the stored arguments
      }
    }, delay);
  };
};

const throttleResults = throttleFunction((text) => console.log(text), 1000);

throttleResults("M"); // Executes immediately
throttleResults("Mo"); // Ignored, but stored
throttleResults("Mob"); // Ignored, but stored
throttleResults("Mobi"); // Ignored, but stored
throttleResults("Mobil"); // Ignored, but stored
throttleResults("Mobile"); // Ignored, but stored
throttleResults("Mobile "); // Ignored, but stored and executed after 1 second
