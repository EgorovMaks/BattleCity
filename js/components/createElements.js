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

  setInterval(function () {
    if (eventUp === "up") {
      animationDirection(anim, animUp, animUpMass);
    } else if (eventDown === "down") {
    } else if (eventLeft === "left") {
    } else if (eventRight === "right") {
    }
  }, 60);
}

export function createTank1User() {
  createElement(
    "div",
    map,
    "./img/tank1/tank1-up.png",
    "./img/tank1/tank2-up.png",
    "200px",
    "0px",
    "tank1User"
  );
}
