const circleContainer = document.getElementById("circle-container");

let circles = [];

let removedCircles = [];

const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");

circleContainer.addEventListener("click", (event) => {
  removedCircles = [];

  let circle = document.createElement("div");

  circle.classList.add("circle");

  circle.style.position = "absolute";

  circle.style.left = `${event.clientX}px`;
  circle.style.top = `${event.clientY}px`;

  circles.push(circle);

  circleContainer.appendChild(circle);
});

undoBtn.addEventListener("click", undo);

redoBtn.addEventListener("click", redo);

function undo() {
  const lastCircle = circles.pop();
  if (lastCircle) {
    removedCircles.push(lastCircle);
    lastCircle.remove();
  }
}

function redo() {
  const lastCircle = removedCircles.pop();
  if (lastCircle) {
    circles.push(lastCircle);
    circleContainer.appendChild(lastCircle);
  }
}

document.addEventListener("keydown", (event) => {
  console.log(event);
  if ((event.ctrlKey || event.metaKey) && event.key === "z") {
    // Ctrl + Z for Undo
    undo();
  } else if (event.ctrlKey && event.key === "y") {
    // Ctrl + Y for Redo
    redo();
  }
});
