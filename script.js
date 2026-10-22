let timeText = document.querySelector(".time");
let start = document.querySelector(".start");
let box = document.querySelector(".box");

let time = 30;
let id;

start.addEventListener("click", () => {
  if (id) return;

  time = 30;
  timeText.textContent = time.toFixed(3);
  start.disabled = true;
  box.classList.remove("animation");

  id = setInterval(() => {
    time -= 0.001;

    if (time <= 10) {
      box.classList.add("animation");
    }

    if (time <= 0) {
      time = 0;
      clearInterval(id);
      id = null;

      start.disabled = false;
      box.classList.remove("animation");
    }

    timeText.textContent = time.toFixed(3);
  }, 1);
});
