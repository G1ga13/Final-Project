let firstSlider = document.querySelectorAll(".slider")[0];
let track = firstSlider.querySelector(".track");
let up = firstSlider.querySelector(".up");
let down = firstSlider.querySelector(".down");
let items = firstSlider.querySelectorAll(".item");
let itemHeight = items[0].offsetHeight;
let totalItems = items.length;
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

document.querySelectorAll(".explore").forEach((btn) => {
  btn.addEventListener("click", () => {
    let block = btn.closest(".explore_block");
    let more = block.querySelector(".explore_more");

    more.classList.toggle("hidden");
    btn.textContent = more.classList.contains("hidden")
      ? "EXPLORE"
      : "SHOW LESS";
  });
});

document.querySelectorAll(".slider").forEach((slider) => {
  let track = slider.querySelector(".track");
  let up = slider.querySelector(".up");
  let down = slider.querySelector(".down");
  let items = slider.querySelectorAll(".item");
  let itemHeight = items[0].offsetHeight;
  let totalItems = items.length;
  let index = 0;

  if (!track || !up || !down || totalItems === 0) {
    console.log("Slider elements not found:", { track, up, down, totalItems });
    return;
  }

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
});
