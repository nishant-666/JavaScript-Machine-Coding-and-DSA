class TimeMap {
  constructor() {
    this.timeMap = new Map();
  }

  get(key, timestamp) {
    if (!this.timeMap.has(key)) {
      return "";
    }

    const currentValue = this.timeMap.get(key);

    for (let i = currentValue.length - 1; i >= 0; i--) {
      if (currentValue[i].timestamp <= timestamp) {
        return currentValue[i].value;
      }
    }
    return "";
  }

  set(key, value, timestamp) {
    if (!this.timeMap.has(key)) {
      this.timeMap.set(key, []);
    }
    this.timeMap.get(key).push({ timestamp: timestamp, value: value });
  }
}

const timeMap = new TimeMap(2);

timeMap.set("foo", "bar", 1);
timeMap.set("foo", "bar", 2);
timeMap.get("foo", 1);
