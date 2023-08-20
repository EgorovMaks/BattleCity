import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { animationDirection } from "./elements.js";
import {
  bottomPoz,
  leftPoz,
  pointTracking,
  rightPoz,
  searchStopDown,
  searchStopLeft,
  searchStopRight,
  searchStopUp,
  topPoz,
} from "./surveillance.js";

export let trackDataTop = {};
export let trackDataBottom = {};
export let trackDataLeft = {};

export let trackDataRight = {};

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
  if (eventUp === "up") {
    up = up - 6;
    track(".trackTop", trackDataTop);
    pointTracking(trackDataTop);
    searchStopUp("block");
    if (up < topPoz) {
      up = topPoz+1;
    }
    tanks.style.top = `${up}px`;
  } else if (eventDown === "down") {
    up = up + 6;
    track(".trackBottom", trackDataBottom);
    pointTracking(trackDataBottom);
    searchStopDown("block");
    if (up > bottomPoz) {
      up = bottomPoz-1;
    }
    tanks.style.top = `${up}px`;
  } else if (eventLeft === "left") {
    console.log(bottomPoz);
    let up1 = left - 6;

    track(".trackLeft", trackDataLeft);
    pointTracking(trackDataLeft);
    searchStopLeft("block");
    if (up1 < leftPoz) {
      up1 = leftPoz+1;
    }
    tanks.style.left = `${up1}px`;
  } else if (eventRight === "right") {
    track(".trackRight", trackDataRight);
    pointTracking(trackDataRight);
    searchStopRight("block");
    let up1 = left + 6;
    if (up1 > rightPoz) {
      up1 = rightPoz -1;
    }
    tanks.style.left = `${up1}px`;
  }
}

function track(classList, array) {
  const track = document.querySelectorAll(classList);
  track.forEach((e, k) => {
    const x = e.getBoundingClientRect().x;
    const y = e.getBoundingClientRect().y;
    const array2 = { x: x, y: y, classList, classList };
    array[k] = array2;
  });
  // console.log(array)
}

// document.elementFromPoint()
