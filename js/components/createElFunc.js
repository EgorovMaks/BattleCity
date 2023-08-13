import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { animationDirection } from "./elements.js";

export function animation(el) {
  const anim = el.querySelectorAll(".tank");
  const animUpMass = el.querySelectorAll(".up");
  const animUp = el.querySelector(".up");
  const animDownMass = el.querySelectorAll(".down");
  const animDown = el.querySelector(".down");
  const animLeftMass = el.querySelectorAll(".left");
  const animLeft = el.querySelector(".left");
  const animRightMass = el.querySelectorAll(".right");
  const animRight = el.querySelector(".right");

  setInterval(function () {
    if (eventUp === "up") {
      animationDirection(anim, animUp, animUpMass);
    } else if (eventDown === "down") {
      animationDirection(anim, animDown, animDownMass);
    } else if (eventLeft === "left") {
      animationDirection(anim, animLeft, animLeftMass);
    } else if (eventRight === "right") {
      animationDirection(anim, animRight, animRightMass);
    }
  }, 60);
}

