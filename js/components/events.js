
import { movementDownStop, movementLeftStop, movementRightStop, movementUpStop } from "./movement.js";
import { shooting } from "./shooting.js";

export let eventUp = "";
export let eventDown = "";
export let eventLeft = "";
export let eventRight = "";

export const keyPress = document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "ц") {
    eventUp = "up";
  } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "ы") {
    eventDown = "down";
  } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "ф") {
    eventLeft = "left";
  } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "в") {
    eventRight = "right";
  } else if (e.key === " ") {
    shooting();
  }
});

export const keyup = document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "ц") {
    movementUpStop();
    eventUp = ""
  } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "ы") {
    eventDown = "";
    movementDownStop()
  } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "ф") {
    eventLeft = "";
    movementLeftStop()
  } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "в") {
    eventRight = "";
    movementRightStop()
  }
});
