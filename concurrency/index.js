// Question: Implement an Asynchronous Task Runner with Concurrency Control

class TaskRunner {
  constructor(concurrency) {
    this.taskQueue = [];
    this.concurrency = concurrency;
    this.currentTaskCount = 0;
  }

  push(task) {
    this.taskQueue.push(task);
    this.runTasks();
  }

  async runTasks(task) {
    this.currentTaskCount++;

    try {
      await task();
    } finally {
      this.currentTaskCount--;
      if (
        this.currentTaskCount < this.concurrency &&
        this.taskQueue.length > 0
      ) {
        const nextTask = this.taskQueue.shift();
        this.runTasks(nextTask);
      }
    }
  }
}

async function delay(timeout) {
  return new Promise((res) => setTimeout(res, timeout));
}

const ex = new TaskRunner(4);

const t1 = async () => {
  console.log("t1 started");
  await delay(2000);
  console.log("t1 finished");
};

const t2 = async () => {
  console.log("t2 started");
  await delay(1000);
  console.log("t2 finished");
};

const t3 = async () => {
  console.log("t3 started");
  await delay(1500);
  console.log("t3 finished");
};

const t4 = async () => {
  console.log("t4 started");
  await delay(1000);
  console.log("t4 finished");
};

const t5 = async () => {
  console.log("t5 started");
  await delay(500);
  console.log("t5 finished");
};

ex.push(t1);
ex.push(t2);
ex.push(t3);
ex.push(t4);
ex.push(t5);
