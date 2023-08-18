import {
  surveillance,
  surveillanceUp,
  surveillanceDown,
  surveillanceLeft,
  surveillanceright,
  startUp,
  startDown,
  startLeft,
  startRight,
} from "./surveillance.js";
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

export let topLeft = {};

export function movement(tanks) {
  let up = parseFloat(tanks.style.top);
  let left = parseFloat(tanks.style.left);
  topLeft = { up: up, left: left };
  surveillance();
  if (eventUp === "up" && surveillanceUp === false) {
    up = up - 6;
    if (up < 0) {
      up = 0;
    }
    tanks.style.top = `${up}px`;
    startDown();
    startLeft();
    startRight();
  } else if (eventDown === "down" && surveillanceDown === false) {
    up = up + 6;
    if (up > 585) {
      up = 585;
    }
    tanks.style.top = `${up}px`;

    startUp();
    startLeft();
    startRight();
  } else if (eventLeft === "left" && surveillanceLeft === false) {
    let up1 = left - 6;
    if (up1 < 0) {
      up1 = 0;
    }
    tanks.style.left = `${up1}px`;

    startUp();
    startDown();
    startRight();
  } else if (eventRight === "right" && surveillanceright === false) {
    let up1 = left + 6;
    if (up1 > 585) {
      up1 = 585;
    }
    tanks.style.left = `${up1}px`;
    startUp();
    startDown();
    startLeft();
  }
}
