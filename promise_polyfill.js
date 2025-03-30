class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.callbacks.forEach((callback) => callback.onFulfilled(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.callbacks.forEach((callback) => callback.onRejected(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const handleCallback = () => {
        try {
          if (this.state === "fulfilled") {
            const result = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(result);
          } else if (this.state === "rejected") {
            const result = onRejected ? onRejected(this.value) : this.value;
            reject(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "pending") {
        this.callbacks.push({
          onFulfilled: () => handleCallback(),
          onRejected: () => handleCallback(),
        });
      } else {
        setTimeout(handleCallback, 0);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((_, reject) => reject(reason));
  }

  static all(promises) {
    return new CustomPromise((resolve, reject) => {
      let fulfilledCount = 0;
      const results = [];

      promises.forEach((promise, index) => {
        CustomPromise.resolve(promise)
          .then((value) => {
            fulfilledCount++;
            results[index] = value;

            if (fulfilledCount === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  }

  static race(promises) {
    return new CustomPromise((resolve, reject) => {
      promises.forEach((promise) => {
        CustomPromise.resolve(promise).then(resolve).catch(reject);
      });
    });
  }
}
