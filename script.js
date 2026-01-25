let track = document.querySelector(".track");
let up = document.getElementById("up");
let down = document.getElementById("down");

let itemHeight = 120;
let totalItems = document.querySelectorAll(".item").length;

let index = 0;

down.addEventListener("click", () => {
  if (index < totalItems - 1) {
    index++;
    track.style.transform = `translateY(-${index * itemHeight}px)`;
  }
});

up.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateY(-${index * itemHeight}px)`;
  }
});
