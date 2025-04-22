const progresContainer = document.getElementById("progres-container");
const activeButton = document.getElementById("click-me");
const reset = document.getElementById("reset");

const TOTAL_TASKS = 10;
const MAX_CONCURRENT = 3;

let currentRunning = 0;
let taskIndex = 0;

const taskQueue = [];

activeButton.addEventListener("click", () => {
  progresContainer.innerHTML = "";
  progresContainer.style.display = "flex";

  currentRunning = 0;
  taskIndex = 0;
  taskQueue.length = 0;

  for (let i = 0; i < TOTAL_TASKS; i++) {
    const task = createProgressBar(i);
    taskQueue.push(task);
  }

  for (let i = 0; i < MAX_CONCURRENT; i++) {
    startNextTask();
  }
});

function createProgressBar(index) {
  const wrapper = document.createElement("div");
  wrapper.className = "progress-wrapper";

  const label = document.createElement("span");
  label.textContent = `Task ${index + 1}`;
  label.style.display = "block";

  const border = document.createElement("div");
  border.className = "progress-border";

  const bar = document.createElement("div");
  bar.className = "progress-bar";
  bar.id = `progress-bar-${index}`;

  border.appendChild(bar);
  wrapper.appendChild(label);
  wrapper.appendChild(border);
  progresContainer.appendChild(wrapper);

  return () => runTask(bar);
}

function runTask(bar) {
  return new Promise((resolve) => {
    let width = 0;
    const interval = setInterval(() => {
      width += 5;
      bar.style.width = width + "%";

      if (width >= 100) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}

function startNextTask() {
  if (taskIndex >= taskQueue.length) return;

  const task = taskQueue[taskIndex];
  taskIndex++;
  currentRunning++;

  task().then(() => {
    currentRunning--;
    if (taskIndex < taskQueue.length) {
      startNextTask(); // Keep concurrency maxed
    }
  });
}
