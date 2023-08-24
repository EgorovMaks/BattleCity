
import { adjustment } from "./movement.js";
import { shooting } from "./shooting.js";

export let eventUp = "";
export let eventDown = "";
export let eventLeft = "";
export let eventRight = "";

function reassignment(e) {
  if (e === true) {
    if (eventDown === "down") {
      eventDown = "press";
    } else if (eventUp === "up") {
      eventUp = "press";
    } else if (eventLeft === "left") {
      eventLeft = "press";
    } else if (eventRight === "right") {
      eventRight = "press";
    }
  } else {
    if (eventDown === "press") {
      eventDown = "down";
    } else if (eventUp === "press") {
      eventUp = "up";
    } else if (eventLeft === "press") {
      eventLeft = "left";
    } else if (eventRight === "press") {
      eventRight = "right";
    }
  }
}

export const keyPress = document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "ц") {
    reassignment(true);
    eventUp = "up";
  } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "ы") {
    reassignment(true);
    eventDown = "down";
  } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "ф") {
    reassignment(true);
    eventLeft = "left";
  } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "в") {
    reassignment(true);
    eventRight = "right";
  } else if (e.key === " ") {
    shooting()
  }
});

export const keyup = document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "ц") {
    reassignment();
    eventUp = "";
    adjustment("top")
  } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "ы") {
    reassignment();
    eventDown = "";
    adjustment("top");
  } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "ф") {
    reassignment();
    eventLeft = "";
    adjustment("left");
  } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "в") {
    reassignment();
    eventRight = "";
    adjustment("left");
  }
});
