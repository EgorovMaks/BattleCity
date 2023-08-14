import { id } from "./elements.js";
import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { movementUp } from "./../data/data.js";

let tank1 = "";

let dataUp = {};
let dataDown = {};
let dataLeft = {};
let dataRight = {};

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    gameLoop();
    clearInterval(loopStart);
  }
}, 10);

function gameLoop() {
  setInterval(function () {
    movementUp(dataUp, ".trackUpTank");
    movementUp(dataDown, ".trackDownTank");
    movementUp(dataLeft, ".trackLeftTank");
    movementUp(dataRight, ".trackRightTank");
    let up = parseInt(tank1.style.top.match(/\d+/));
    let left = parseInt(tank1.style.left.match(/\d+/));
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
    // if (upDownLeft === "block" || upDownRight === "block") {
    //   let up1 = up - 0.7;
    //   if (up1 > 94) {
    //     up1 = 94;
    //   }
    //   tank1.style.top = `${up1}%`;
    // } else if (upTopLeft === "block" || upTopRight === "block") {
    //   let up1 = up + 0.7;
    //   if (up1 < 0) {
    //     up1 = 0;
    //   }
    //   tank1.style.top = `${up1}%`;
    // }

    if (eventUp === "up") {
      if (upTopLeft === "block" || upTopRight === "block") {
      } else {
        let up1 = up - 1;
        if (up1 < 0) {
          up1 = 0;
        }
        tank1.style.top = `${up1}%`;
      }
    } else if (eventDown === "down") {
      if (upDownLeft === "block" || upDownRight === "block") {
      } else {
        let up1 = up + 1;
        if (up1 > 94) {
          up1 = 94;
        }

        tank1.style.top = `${up1}%`;
      }
    } else if (eventLeft === "left") {
      if (upLeftTop === "block" || upLeftDown === "block") {
      } else {
        let up1 = left - 1;
        if (up1 < 0) {
          up1 = 0;
        }
        tank1.style.left = `${up1}%`;
      }
    } else if (eventRight === "right") {
      if (upRightTop === "block" || upRightDown === "block") {
      } else {
        let up1 = left + 1;
        if (up1 > 93.5) {
          up1 = 93.5;
        }
        tank1.style.left = `${up1}%`;
      }
    }
  }, 55);
}
