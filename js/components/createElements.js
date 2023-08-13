import { map, createElement, animationDirection } from "./elements.js";
import { id } from "./elements.js";
import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";

let tank1 = "";

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    clearInterval(loopStart);
    animation();
  }
}, 10);

function animation() {
  const anim = tank1.querySelectorAll(".tank");
  const animUpMass = tank1.querySelectorAll(".up");
  const animUp = tank1.querySelector(".up");
  const animDownMass = tank1.querySelectorAll(".down");
  const animDown = tank1.querySelector(".down");
  const animLeftMass = tank1.querySelectorAll(".left");
  const animLeft = tank1.querySelector(".left");
  const animRightMass = tank1.querySelectorAll(".right");
  const animRight = tank1.querySelector(".right");

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

export function createTank1User() {
  createElement(
    "div",
    "tank",
    map,
    "200px",
    "0px",
    "tank1User",
    "13px",
    "13px",
    "./img/tank1/tank1-up.png",
    "./img/tank1/tank2-up.png",
    "./img/tank1/tank1-down.png",
    "./img/tank1/tank2-down.png",
    "./img/tank1/tank1-left.png",
    "./img/tank1/tank2-left.png",
    "./img/tank1/tank1-right.png",
    "./img/tank1/tank2-right.png"
  );
}
