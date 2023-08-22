import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { animationDirection } from "./elements.js";
import { tankSpeed, topBlok } from "../data/data.js";
import { tank1 } from "./game.js";
import { levelMap } from "../data/levels.js";

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
  let topPozition = Math.round(((up / topBlok) * topBlok) / 4);
  let leftPozition = Math.round(((left / topBlok) * topBlok) / 4);
  if (eventUp === "up") {
    movementUp(up, left, topPozition, leftPozition, tanks);
  } else if (eventDown === "down") {
    movementDown(up, left, topPozition, leftPozition, tanks);
  } else if (eventLeft === "left") {
    movementLeft(up, left, topPozition, leftPozition, tanks);
  } else if (eventRight === "right") {
    movementRight(up, left, topPozition, leftPozition, tanks);
  }
}

export function adjustment(pozition) {
  if (pozition === "top") {
    const up = parseFloat(tank1.style.top);
    tank1.style.top = `${(Math.round((up / topBlok) * 2) * topBlok) / 2}px`;
  } else if (pozition === "left") {
    const left = parseFloat(tank1.style.left);
    tank1.style.left = `${(Math.round((left / topBlok) * 2) * topBlok) / 2}px`;
  }
}

function movementUp(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (topPozition % 2 === 0) {
    a = [
      levelMap[topPozition - 1][leftPozition],
      levelMap[topPozition - 1][leftPozition + 1],
      levelMap[topPozition - 1][leftPozition + 2],
      levelMap[topPozition - 1][leftPozition + 3],

      levelMap[topPozition - 2][leftPozition],
      levelMap[topPozition - 2][leftPozition + 1],
      levelMap[topPozition - 2][leftPozition + 2],
      levelMap[topPozition - 2][leftPozition + 3],
    ];

    a.forEach((e) => {
      if (e === 1 || e === 2) {
        b = false;
        return;
      }
    });
  }
  if (b === true) {
    up = up - tankSpeed;
    tanks.style.top = `${up}px`;
  } else if (b === false) {
    adjustment("top");
  }
}
function movementDown(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (topPozition % 2 === 0) {
    a = [
      levelMap[topPozition + 4][leftPozition],
      levelMap[topPozition + 4][leftPozition + 1],
      levelMap[topPozition + 4][leftPozition + 2],
      levelMap[topPozition + 4][leftPozition + 3],

      levelMap[topPozition + 5][leftPozition],
      levelMap[topPozition + 5][leftPozition + 1],
      levelMap[topPozition + 5][leftPozition + 2],
      levelMap[topPozition + 5][leftPozition + 3],
    ];
    a.forEach((e) => {
      if (e === 1) {
        b = false;
        return;
      }
    });
  }
  if (b === true) {
    up = up + tankSpeed;
    tanks.style.top = `${up}px`;
  } else if (b === false) {
    adjustment("top");
  }
}
function movementLeft(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (leftPozition % 2 === 0) {
    a = [
      levelMap[topPozition - 0][leftPozition - 1],
      levelMap[topPozition + 1][leftPozition - 1],
      levelMap[topPozition + 2][leftPozition - 1],
      levelMap[topPozition + 3][leftPozition - 1],

      levelMap[topPozition - 0][leftPozition - 2],
      levelMap[topPozition + 1][leftPozition - 2],
      levelMap[topPozition + 2][leftPozition - 2],
      levelMap[topPozition + 3][leftPozition - 2],
    ];
    a.forEach((e) => {
      if (e === 1 || e === 2) {
        b = false;
        return;
      }
    });
  }
  if (b === true) {
    let up1 = left - tankSpeed;
    tanks.style.left = `${up1}px`;
  } else if (b === false) {
    adjustment("left");
  }
}
function movementRight(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (leftPozition % 2 === 0) {
    a = [
      levelMap[topPozition - 0][leftPozition + 4],
      levelMap[topPozition + 1][leftPozition + 4],
      levelMap[topPozition + 2][leftPozition + 4],
      levelMap[topPozition + 3][leftPozition + 4],

      levelMap[topPozition - 0][leftPozition + 5],
      levelMap[topPozition + 1][leftPozition + 5],
      levelMap[topPozition + 2][leftPozition + 5],
      levelMap[topPozition + 3][leftPozition + 5],
    ];
    a.forEach((e) => {
      if (e === 1 || e === 2) {
        b = false;
        return;
      }
    });
  }
  if (b === true) {
    let up1 = left + tankSpeed;
    tanks.style.left = `${up1}px`;
  } else if (b === false) {
    adjustment("left");
  }
}
