const toastLauchBtn = document.getElementById("toast-launch");

function toastLauncher(
  text,
  position = "top-left",
  bgColor = "black",
  textColor = "white",
  duration = 3000
) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.innerText = text;
  toast.className = "toast";

  let toastPosition = position.split("-");

  toast.style[toastPosition[0]] = "2rem";
  toast.style[toastPosition[1]] = "2rem";

  toast.style.backgroundColor = bgColor;
  toast.style.color = textColor;

  setTimeout(() => {
    toast.className = "hide-toast";
  }, duration);
  toastContainer.appendChild(toast);
}

toastLauchBtn.addEventListener("click", () => {
  toastLauncher("Notification one", "top-left", "black", "white", 3000);

  toastLauncher("Notification two", "top-right", "red", "white", 4000);

  toastLauncher("Notification three", "bottom-left", "black", "white", 5000);

  toastLauncher("Notification four", "bottom-right", "red", "white", 6000);
});
