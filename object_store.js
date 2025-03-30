/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE CLASS NAME
/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
// DO NOT CHANGE CLASS NAME
class StoreData {
  // write your solution below
  constructor() {
    this._data = new Map();
    this._listeners = new Map();
  }

  add(key, value) {
    const oldValue = this._data.get(key);

    if (oldValue !== undefined && !Object.is(oldValue, value)) {
      // setting the data
      this._data.set(key, value);

      // invoking method
      this.emit(key, oldValue, value, key);
      this.emit(`change:${key}`, oldValue, value, key);
    } else if (oldValue === undefined) {
      // handling when value is set the first time
      this._data.set(key, value);
    }
  }

  has(key) {
    return this._data.has(key);
  }

  on(event, callback) {
    // gaurd condition
    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }

    const listeners = this._listeners.get(event) || [];

    // to avoid storing the same callback multiple times
    if (!listeners.includes(callback)) {
      this._listeners.set(event, [...listeners, callback]);
    }
  }

  emit(event, ...args) {
    const callbacks = this._listeners.get(event);

    if (callbacks) {
      // copying array to prevent mutation during iteration
      [...callbacks].forEach((cb) => cb(...args));
    }
  }
}

let store = new StoreData();
store.add("name", "joe");
store.add("age", 30);

console.log(store.has("age")); // true
console.log(store.has("animal")); // false

// No event triggered yet as we haven't registered any listeners
store.add("name", "emma");

// Register a listener for name changes
store.on("change:name", (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});

// This will trigger the above listener
store.add("name", "john");
// Output: old name: emma, new name: john

// Register a listener for age key
store.on("age", (old_val, new_val, key) => {
  console.log(`old ${key}: ${old_val}, new ${key}: ${new_val}`);
});

// This will trigger the age listener
store.add("age", 26);
// Output: old age: 30, new age: 26

// Register another listener for age changes
store.on("change:age", (old_val, new_val) => {
  console.log(`${old_val > new_val ? "older now" : ""}`);
});

// These will trigger both age listeners
store.add("age", 28);
// Output: old age: 26, new age: 28
//         (empty string from second callback since 26 < 28)

store.add("age", 45);
// Output: old age: 28, new age: 45
//         (empty string from second callback since 28 < 45)
