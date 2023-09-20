import { windowWidth } from "../components/game.js";


export let topBlok = windowWidth;


export let tankSpeed = topBlok/8

// 48



export function randomNumber() {
  return parseInt(Math.random() * (999999999999 - 1) + 1);
}


