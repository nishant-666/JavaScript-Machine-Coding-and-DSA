class Emitter {
  // write your code here
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Map());
    }

    const subscriptionId = Date.now();
    const eventSubscriptions = this.events.get(eventName);

    eventSubscriptions.set(subscriptionId, callback);

    return {
      release: () => {
        if (eventSubscriptions.has(subscriptionId)) {
          eventSubscriptions.delete(subscriptionId);
        } else {
          throw new Error("This subscription has already been released");
        }
      },
    };
  }

  emit(eventName, ...args) {
    if (this.events.has(eventName)) {
      const eventSubscriptions = this.events.get(eventName);
      for (const [_, fn] of eventSubscriptions) {
        fn(...args);
      }
    }
  }
}

const emitter = new Emitter();

const sub1 = emitter.subscribe("event1", () => console.log("Something"));
// you can have multiple callbacks to the same event
const sub2 = emitter.subscribe("event2", () => console.log("Something 2"));

emitter.emit("event_name", foo, bar);
