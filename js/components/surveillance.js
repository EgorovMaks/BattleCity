import { movementUp } from "../data/data.js";
import { id } from "./elements.js";
import { topLeft } from "./game.js";

let dataUp = {};
let dataDown = {};
let dataLeft = {};
let dataRight = {};

let tank1 = "";

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    clearInterval(loopStart);
  }
}, 10);
export let surveillanceUp = false;
export let surveillanceDown = false;
export let surveillanceLeft = false;
export let surveillanceright = false;

export function surveillance() {
  movementUp(dataUp, ".trackUpTank");
  movementUp(dataDown, ".trackDownTank");
  movementUp(dataLeft, ".trackLeftTank");
  movementUp(dataRight, ".trackRightTank");

  let upTopLeft = document
    .elementFromPoint(dataUp.trackTopLeftTank.left, dataUp.trackTopLeftTank.top)
    .classList.contains("block");
  let upTopRight = document
    .elementFromPoint(
      dataUp.trackTopRightTank.left,
      dataUp.trackTopRightTank.top
    )
    .classList.contains("block");
  let upDownLeft = document
    .elementFromPoint(
      dataDown.trackDownLeftTank.left,
      dataDown.trackDownLeftTank.top
    )
    .classList.contains("block");
  let upDownRight = document
    .elementFromPoint(
      dataDown.trackDownRightTank.left,
      dataDown.trackDownRightTank.top
    )
    .classList.contains("block");
  let upLeftTop = document
    .elementFromPoint(
      dataLeft.trackLeftTopTank.left,
      dataLeft.trackLeftTopTank.top
    )
    .classList.contains("block");
  let upLeftDown = document
    .elementFromPoint(
      dataLeft.trackLeftDownTank.left,
      dataLeft.trackLeftDownTank.top
    )
    .classList.contains("block");
  let upRightTop = document
    .elementFromPoint(
      dataRight.trackRightTopTank.left,
      dataRight.trackRightTopTank.top
    )
    .classList.contains("block");
  let upRightDown = document
    .elementFromPoint(
      dataRight.trackRightDownTank.left,
      dataRight.trackRightDownTank.top
    )
    .classList.contains("block");
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

export let dataAdjustment = {};
export let dataAdjustmentUpRight = {};
export let dataAdjustmentLeft = {};
export let dataAdjustmentRight = {};

export function adjustmentUp([object, className], [sign, direction]) {
  movementUp(object, className);
  let adjustment = {
    up: document
      .elementFromPoint(object.elCheckTop.left, object.elCheckTop.top)
      .classList.contains("block"),
    center: document
      .elementFromPoint(object.elCheckCenter.left, object.elCheckCenter.top)
      .classList.contains("block"),
    doun: document
      .elementFromPoint(object.elCheckBottom.left, object.elCheckBottom.top)
      .classList.contains("block"),
  };
  // console.log(adjustment)
  if (direction === true) {
    if (
      adjustment.up === true &&
      adjustment.center === true &&
      adjustment.doun === false
    ) {
      sign
        ? (tank1.style.top = `${topLeft.up + 6}px`)
        : (tank1.style.top = `${topLeft.up - 6}px`);
    } else if (adjustment.up === true && adjustment.doun === false) {
      sign
        ? (tank1.style.top = `${topLeft.up + 4}px`)
        : (tank1.style.top = `${topLeft.up - 4}px`);
    }
  } else if (direction === false) {
    if (
      adjustment.up === true &&
      adjustment.center === true &&
      adjustment.doun === false
    ) {
      sign
        ? (tank1.style.left = `${topLeft.left + 6}px`)
        : (tank1.style.tleft = `${topLeft.left - 6}px`);
    } else if (adjustment.up === true && adjustment.doun === false) {
      sign
        ? (tank1.style.left = `${topLeft.left + 4}px`)
        : (tank1.style.left = `${topLeft.left - 4}px`);
    }
  }
}
