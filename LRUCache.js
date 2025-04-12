class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    let lastUsedValue = this.cache.get(key);

    this.cache.delete(key);
    this.cache.set(key, lastUsedValue);
    return lastUsedValue;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
  }
}

const obj = new LRUCache(2);

obj.put(2, 2);
obj.put(3, 3);
obj.get(2);
obj.get(3);
obj.put(4, 4);
console.log(obj);

// var param_1 = obj.get(key);
// obj.put(key, value);
