import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { animationDirection } from "./elements.js";
import {
  DownStop,
  LeftStop,
  bottomPoz,
  leftPoz,
  pointTracking,
  rightPoz,
  rightStop,
  searchStopDown,
  searchStopLeft,
  searchStopRight,
  searchStopUp,
  topPoz,
  upStop,
} from "./surveillance.js";

export let stop = false;
export let trackDataTop = {};
export let trackDataBottom = {};
export let trackDataLeft = {};
export let trackDataRight = {};
export let trackDataTopStop = {};
export let trackDataBottomStop = {};
export let trackDataLeftStop = {};
export let trackDataRightStop = {};

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
      up = topPoz + 1;
    }
    tanks.style.top = `${up}px`;
  } else if (eventDown === "down") {
    up = up + 6;
    track(".trackBottom", trackDataBottom);
    pointTracking(trackDataBottom);
    searchStopDown("block");
    if (up > bottomPoz) {
      up = bottomPoz - 1;
    }
    tanks.style.top = `${up}px`;
  } else if (eventLeft === "left") {
    let up1 = left - 6;

    track(".trackLeft", trackDataLeft);
    pointTracking(trackDataLeft);
    searchStopLeft("block");
    if (up1 < leftPoz) {
      up1 = leftPoz + 1;
    }
    tanks.style.left = `${up1}px`;
  } else if (eventRight === "right") {
    track(".trackRight", trackDataRight);
    pointTracking(trackDataRight);
    searchStopRight("block");
    let up1 = left + 6;
    if (up1 > rightPoz) {
      up1 = rightPoz - 1;
    }
    tanks.style.left = `${up1}px`;
  }
}

export function movementUpStop(params) {
  setTimeout(() => {
    track(".trackTop", trackDataTopStop);
    pointTracking(trackDataTopStop);
    upStop("block");
  }, 100);
}

export function movementDownStop(params) {
  setTimeout(() => {
    track(".trackBottom", trackDataBottomStop);
    pointTracking(trackDataBottomStop);
    DownStop("block");
  }, 100);
}

export function movementLeftStop(params) {
  setTimeout(() => {
    track(".trackLeft", trackDataLeftStop);
    pointTracking(trackDataLeftStop);
    LeftStop("block");
  }, 100);
}

export function movementRightStop(params) {
  setTimeout(() => {
    track(".trackRight", trackDataRightStop);
    pointTracking(trackDataRightStop);
    rightStop("block");
  }, 100);
}

export function track(classList, array) {
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
