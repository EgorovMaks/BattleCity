import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { animationDirection } from "./elements.js";
import { tankSpeed, topBlok } from "../data/data.js";
import { tank1 } from "./game.js";

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
  // console.log(up,left)
  topLeft = { up: up, left: left };
  if (eventUp === "up") {
    up = up - tankSpeed;
    tanks.style.top = `${up}px`;
  } else if (eventDown === "down") {
    up = up + tankSpeed;
    tanks.style.top = `${up}px`;
  } else if (eventLeft === "left") {
    let up1 = left - tankSpeed;
    tanks.style.left = `${up1}px`;
  } else if (eventRight === "right") {
    let up1 = left + tankSpeed;
    tanks.style.left = `${up1}px`;
  }
}

export function adjustment(pozition) {
  if (pozition === "top") {
    const up = parseFloat(tank1.style.top);
    console.log((Math.round((up / topBlok) * 2) * topBlok) / 2);
    tank1.style.top = `${(Math.round((up / topBlok) * 2) * topBlok) / 2}px`;
  } else if(pozition === "left"){
    const left = parseFloat(tank1.style.left);
    tank1.style.left = `${(Math.round((left / topBlok) * 2) * topBlok) / 2}px`;
  }
}
