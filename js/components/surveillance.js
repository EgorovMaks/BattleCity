import { movementUp } from "../data/data.js";
let dataUp = {};
let dataDown = {};
let dataLeft = {};
let dataRight = {};

let tank1 = "";
export let surveillanceUp = false;
export let surveillanceDown = false;
export let surveillanceLeft = false;
export let surveillanceright = false;

export function surveillance() {
  movementUp(dataUp, ".trackUpTank");
  movementUp(dataDown, ".trackDownTank");
  movementUp(dataLeft, ".trackLeftTank");
  movementUp(dataRight, ".trackRightTank");

  let upTopLeft = document.elementFromPoint(
    dataUp.trackTopLeftTank.left,
    dataUp.trackTopLeftTank.top
  ).classList.contains("block");
  let upTopRight = document.elementFromPoint(
    dataUp.trackTopRightTank.left,
    dataUp.trackTopRightTank.top
  ).classList.contains("block");
  let upDownLeft = document.elementFromPoint(
    dataDown.trackDownLeftTank.left,
    dataDown.trackDownLeftTank.top
  ).classList.contains("block");
  let upDownRight = document.elementFromPoint(
    dataDown.trackDownRightTank.left,
    dataDown.trackDownRightTank.top
  ).classList.contains("block");
  let upLeftTop = document.elementFromPoint(
    dataLeft.trackLeftTopTank.left,
    dataLeft.trackLeftTopTank.top
  ).classList.contains("block");
  let upLeftDown = document.elementFromPoint(
    dataLeft.trackLeftDownTank.left,
    dataLeft.trackLeftDownTank.top
  ).classList.contains("block");
  let upRightTop = document.elementFromPoint(
    dataRight.trackRightTopTank.left,
    dataRight.trackRightTopTank.top
  ).classList.contains("block");
  let upRightDown = document.elementFromPoint(
    dataRight.trackRightDownTank.left,
    dataRight.trackRightDownTank.top
  ).classList.contains("block");
  if (upTopLeft === true || upTopRight === true) {
    surveillanceUp = true;
  }
  if (upDownLeft === true || upDownRight === true) {
    surveillanceDown = true;
  }
  if (upLeftTop === true || upLeftDown === true) {
    surveillanceLeft = true;
  }
  if (upRightTop === true || upRightDown === true) {
    surveillanceright = true;
  }
}

export function startUp() {
  surveillanceUp = false;
}
export function startDown() {
  surveillanceDown = false;
}
export function startLeft() {
  surveillanceLeft = false;
}
export function startRight() {
  surveillanceright = false;
}
