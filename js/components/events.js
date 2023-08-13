

export let eventUp = "";

export let eventDown = "";

export let eventLeft = "";

export let eventRight = "";

export const keyPress = document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    eventUp = "up";
  } else if (e.key === "ArrowDown") {
    eventDown = "down";
  } else if (e.key === "ArrowLeft") {
    eventLeft = "left";
  } else if (e.key === "ArrowRight") {
    eventRight = "right";
  }
});

export const keyup = document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp") {
    eventUp = "";
  } else if (e.key === "ArrowDown") {
    eventDown = "";
  } else if (e.key === "ArrowLeft") {
    eventLeft = "";
  } else if (e.key === "ArrowRight") {
    eventRight = "";
  }
});
