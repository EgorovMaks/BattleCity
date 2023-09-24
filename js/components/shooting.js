import { topBlok } from "../data/data.js";
import { levelMap } from "../data/levels.js";
import { explosionAnimation, map, missile, missileTrack } from "./elements.js";
import { shootingDirection } from "./events.js";
import { tank1 } from "./game.js";
let stop = false;
let pozitionTop = false;
let pozitionDown = false;
let pozitionLeft = false;
let pozitionRight = false;
let arr = [];

export function shooting() {
  if (shootingDirection === "up") {
    shotDescription(shootingDirection);
  } else if (shootingDirection === "down") {
    shotDescription(shootingDirection);
  } else if (shootingDirection === "left") {
    shotDescription(shootingDirection);
  } else if (shootingDirection === "right") {
    shotDescription(shootingDirection);
  }
}

export function shotFlight() {
  if (pozitionTop === true) {
    shotIntersection(shootingDirection);
  } else if (pozitionDown === true) {
    shotIntersection(shootingDirection);
  } else if (pozitionLeft === true) {
    shotIntersection(shootingDirection);
  } else if (pozitionRight === true) {
    shotIntersection(shootingDirection);
  }
}

function shotDescription(shootingDirection) {
  let topPozCenter = Math.floor((parseFloat(tank1.style.top) / topBlok) * 4);
  let leftPozCenter = Math.floor((parseFloat(tank1.style.left) / topBlok) * 4);
  if (shootingDirection === "up" && stop === false) {
    stop = true;
    missile(
      map,
      [((leftPozCenter + 2) * topBlok) / 4, topPozCenter * (topBlok / 4)],
      "up"
    );
    pozitionTop = true;
  } else if (shootingDirection === "down" && stop === false) {
    stop = true;
    missile(
      map,
      [((leftPozCenter + 2) * topBlok) / 4, ((topPozCenter + 5) * topBlok) / 4],
      "down"
    );
    pozitionDown = true;
  } else if (shootingDirection === "left" && stop === false) {
    stop = true;
    missile(
      map,
      [((leftPozCenter - 1) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      "left"
    );
    pozitionLeft = true;
  } else if (shootingDirection === "right" && stop === false) {
    stop = true;
    missile(
      map,
      [((leftPozCenter + 4) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      "right"
    );
    pozitionRight = true;
  }
}

function shotIntersection() {
  if (pozitionTop === true) {
    shot(true, true, "up");
  } else if (pozitionDown === true) {
    shot(false, true, "down");
  } else if (pozitionLeft === true) {
    shot(true, false, "left");
  } else if (pozitionRight === true) {
    shot(false, false, "right");
  }
}

function shot(plusTrueFalse, topLeftPoz, desc) {
  let missile = document.querySelector("#missile");
  if (missile !== null) {
    let missilePozTop = parseFloat(missile.style.top);
    let missilePozLeft = parseFloat(missile.style.left);

    let missilePozNew = topLeftPoz
      ? plusTrueFalse
        ? missilePozTop - topBlok / 2
        : missilePozTop + topBlok / 2
      : plusTrueFalse
      ? missilePozLeft - topBlok / 2
      : missilePozLeft + topBlok / 2;
    let topPoz = Math.round(missilePozTop / (topBlok / 4) - 1);
    let topLeft = Math.round(missilePozLeft / (topBlok / 4) - 1);
    arrey(desc, topPoz, topLeft);
    if (
      arr[0][1][0] === 2 ||
      arr[0][2][0] === 2 ||
      arr[1][1][0] === 2 ||
      arr[1][2][0] === 2
    ) {
      missile.remove();
      stop = false;
      pozitionTop = false;
      pozitionDown = false;
      pozitionLeft = false;
      pozitionRight = false;
    } else if (
      arr[0][1][0] === 1 ||
      arr[0][2][0] === 1 ||
      arr[1][1][0] === 1 ||
      arr[1][2][0] === 1
    ) {
      deletingBlocks(arr, desc);
      missile.remove();
      // stop = false;
      pozitionTop = false;
      pozitionDown = false;
      pozitionLeft = false;
      pozitionRight = false;
    } else if (
      arr[0][1][0] === 19 ||
      arr[0][2][0] === 19 ||
      arr[1][1][0] === 19 ||
      arr[1][2][0] === 19
    ) {
      missile.remove();
      stop = false;
      pozitionTop = false;
      pozitionDown = false;
      pozitionLeft = false;
      pozitionRight = false;
    } else if (arr[0][1] || arr[0][2] === 0) {
      topLeftPoz
        ? (missile.style.top = `${missilePozNew}px`)
        : (missile.style.left = `${missilePozNew}px`);
    }
  }
}

function arrey(desc, topPoz, topLeft) {
  const numsArr = [0, 1, 2, 3, 4];
  if (desc === "up") {
    const nums = [-1, 0, 1, 2];
    const num = [0, 1, 2, 3, -1];
    arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        arr[el].push([
          levelMap[topPoz + num[k]][topLeft + e],
          { top: topPoz + num[k], left: topLeft + e },
        ])
      );
    });
  } else if (desc === "down") {
    const nums = [-1, 0, 1, 2];
    const num = [0, -1, -2, -3, 1];
    arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        arr[el].push([
          levelMap[topPoz + num[k]][topLeft + e],
          { top: topPoz + num[k], left: topLeft + e },
        ])
      );
    });
  } else if (desc === "left") {
    const nums = [-1, 0, 1, 2];
    const num = [0, 1, 2, 3, -1];
    arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        arr[el].push([
          levelMap[topPoz + e][topLeft + num[k]],
          { top: topPoz + e, left: topLeft + num[k] },
        ])
      );
    });
  } else if (desc === "right") {
    const nums = [-1, 0, 1, 2];
    const num = [1, 0, -1, -2, 2];
    arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        arr[el].push([
          levelMap[topPoz + e][topLeft + num[k]],
          { top: topPoz + e, left: topLeft + num[k] },
        ])
      );
    });
  }
}

function deletingBlocks(arr, desc) {
  // console.log(arr);
  const point01 = arr[0][1][1];
  const point02 = arr[0][2][1];
  const point00 = arr[0][0][1];
  const point03 = arr[0][3][1];
  const point11 = arr[1][1][1];
  const point12 = arr[1][2][1];
  const point10 = arr[1][0][1];
  const point13 = arr[1][3][1];
  if (
    levelMap[point11.top][point11.left] === 1 ||
    levelMap[point12.top][point12.left] === 1
  ) {
    explosionAnimation(point10.top, point10.left, desc);
    delArrBlock(point11);
    delArrBlock(point10);
    delArrBlock(point12);
    delArrBlock(point13);
  } else {
    explosionAnimation(point00.top, point00.left, desc);
    delArrBlock(point01);
    delArrBlock(point00);
    delArrBlock(point02);
    delArrBlock(point03);
  }

  const track = document.querySelectorAll("#missileTrack");
  track.forEach((e) => {
    const x = e.getBoundingClientRect().x;
    const y = e.getBoundingClientRect().y;
    const delBlock = document.elementFromPoint(x, y);
    // console.log(delBlock)
    if (delBlock.classList.contains("block")) {
      delBlock.remove();
    }
  });
}

function delArrBlock(const1) {
  if (levelMap[const1.top][const1.left] === 1) {
    missileTrack(const1.top, const1.left);
    if ((levelMap[const1.top][const1.left] = 1)) {
      levelMap[const1.top][const1.left] = 0;
    }
  }
}

export function stopTrue() {
  stop = false;
}

// elementFromPoint(x, y);
