class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(item) {
    this.stack.push(item);

    if (this.minStack.length === 0 || item <= this.minStack.at(-1)) {
      this.minStack.push(item);
    }
  }

  pop() {
    const value = this.stack.pop();

    if (value === this.minStack.at(-1)) {
      this.minStack.pop();
    }
    return value;
  }

  top() {
    return this.stack.at(-1);
  }

  getMin() {
    return this.minStack.at(-1);
  }
}
