class RandomizedSet {
  constructor() {
    this.list = [];
    this.randomizedSet = new Map();
  }

  search(item) {
    return this.randomizedSet.has(item);
  }

  insert(item) {
    if (this.search(item)) return false;

    this.list.push(item);
    this.randomizedSet.set(item, this.list.length - 1);

    return true;
  }

  getRandom() {
    const randomElement = Math.floor(Math.random() * this.list.length);
    return this.list[randomElement];
  }

  remove(item) {
    if (!this.search(item)) return false;

    const currentElement = this.randomizedSet.get(item);
    this.list[currentElement] = this.list[this.list.length - 1];
    this.randomizedSet.set(this.list[currentElement], currentElement);
    this.list.pop();
    this.randomizedSet.delete(item);
    return true;
  }
}
