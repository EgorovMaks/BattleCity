// import { windowWidth } from "../components/game.js";

// import { tanks } from "./tankAll.js";


export let windowWidth = 16;
export let heightMap = 0;

function window() {
  const windowInnerWidth = document.documentElement.clientWidth;

  const windowInnerHeight = document.documentElement.clientHeight;
  if (windowInnerWidth <= windowInnerHeight) {
    windowWidth = windowInnerWidth / 15;
  } else {
    windowWidth = windowInnerHeight / 15;
  }
  heightMap = windowInnerHeight;
}

window();


export let topBlok = windowWidth;

export let tankSpeed = topBlok/8

// 48



export function randomNumber() {
  return parseInt(Math.random() * (999999999999 - 1) + 1);
}




