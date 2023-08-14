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
    ).id;
    let upTopRight = document.elementFromPoint(
      dataUp.trackTopRightTank.left,
      dataUp.trackTopRightTank.top
    ).id;
    let upDownLeft = document.elementFromPoint(
      dataDown.trackDownLeftTank.left,
      dataDown.trackDownLeftTank.top
    ).id;
    let upDownRight = document.elementFromPoint(
      dataDown.trackDownRightTank.left,
      dataDown.trackDownRightTank.top
    ).id;
    let upLeftTop = document.elementFromPoint(
      dataLeft.trackLeftTopTank.left,
      dataLeft.trackLeftTopTank.top
    ).id;
    let upLeftDown = document.elementFromPoint(
      dataLeft.trackLeftDownTank.left,
      dataLeft.trackLeftDownTank.top
    ).id;
    let upRightTop = document.elementFromPoint(
      dataRight.trackRightTopTank.left,
      dataRight.trackRightTopTank.top
    ).id;
    let upRightDown = document.elementFromPoint(
      dataRight.trackRightDownTank.left,
      dataRight.trackRightDownTank.top
    ).id;
    if (upTopLeft === "block" || upTopRight === "block") {
      surveillanceUp = true;
    } 
    if (upDownLeft === "block" || upDownRight === "block") {
    }
    if (upLeftTop === "block" || upLeftDown === "block") {
    }
    if (upRightTop === "block" || upRightDown === "block") {
    }
    console.log(surveillanceUp)
  }

  export function stop () {
    surveillanceUp = false;
  }
