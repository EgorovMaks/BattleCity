import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { animationDirection } from "./elements.js";
import { tankSpeed, topBlok } from "../data/data.js";
import { tank1 } from "./game.js";
import { levelMap, levelMapMovement } from "../data/levels.js";

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
  let topPozition = Math.round(((up / topBlok) * 4));
  let leftPozition = Math.round((left / topBlok) *  4);
  // console.log(topPozition,leftPozition)
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
    tank1.style.top = `${(Math.round((up / topBlok) * 4) * topBlok) / 4}px`;
  } else if (pozition === "left") {
    const left = parseFloat(tank1.style.left);
    tank1.style.left = `${(Math.round((left / topBlok) * 4) * topBlok) / 4}px`;
  } else if (pozition === "right") {
    const left = parseFloat(tank1.style.left);
    tank1.style.left = `${(Math.ceil((left / topBlok) * 2) * topBlok) / 2}px`;
  } else if (pozition === "down") {
    const up = parseFloat(tank1.style.top);
    tank1.style.top = `${(Math.ceil((up / topBlok) * 2) * topBlok) / 2}px`;
  }
}

function movementUp(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (up > 0) {
    a = [
      levelMap[topPozition - 1][leftPozition],
      levelMap[topPozition - 1][leftPozition + 1],
      levelMap[topPozition - 1][leftPozition + 2],
      levelMap[topPozition - 1][leftPozition + 3],
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
    if (up < topBlok) {
      up = topBlok;
    }
    tanks.style.top = `${up}px`;
  } else if (b === false) {
    adjustment("top");
  }
  levelMapMovement(topPozition, leftPozition, eventUp);
};
function movementDown(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (up < topBlok * 13 - topBlok / 8) {
    a = [
      levelMap[topPozition + 4][leftPozition],
      levelMap[topPozition + 4][leftPozition + 1],
      levelMap[topPozition + 4][leftPozition + 2],
      levelMap[topPozition + 4][leftPozition + 3],
    ];
    a.forEach((e) => {
      if (e === 1 || e === 2 || e == 19) {
        b = false;
        return;
      }
    });
  }
  if (b === true) {
    up = up + tankSpeed;
    if (up >= topBlok * 13) {
      up = topBlok * 13;
    }
    tanks.style.top = `${up}px`;
  } else if (b === false) {
    adjustment("top");
  }
  levelMapMovement(topPozition, leftPozition, eventDown);
}
function movementLeft(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (left > 0) {
    a = [
      levelMap[topPozition - 0][leftPozition - 1],
      levelMap[topPozition + 1][leftPozition - 1],
      levelMap[topPozition + 2][leftPozition - 1],
      levelMap[topPozition + 3][leftPozition - 1],
    ];
  }
  a.forEach((e) => {
    if (e === 1 || e === 2 || e === 19) {
      b = false;
      return;
    }
  });
  if (b === true) {
    left = left - tankSpeed;
    if (left <= topBlok) {
      left = topBlok;
    }
    tanks.style.left = `${left}px`;
  } else if (b === false) {
    adjustment("left");
  }
  levelMapMovement(topPozition, leftPozition, eventLeft);
}
function movementRight(up, left, topPozition, leftPozition, tanks) {
  let a = [];
  let b = true;
  if (left < topBlok * 13) {
    a = [
      levelMap[topPozition - 0][leftPozition + 4],
      levelMap[topPozition + 1][leftPozition + 4],
      levelMap[topPozition + 2][leftPozition + 4],
      levelMap[topPozition + 3][leftPozition + 4],
    ];
    a.forEach((e) => {
      if (e === 1 || e === 2) {
        b = false;
        return;
      }
    });
  }
  if (b === true) {
    left = left + tankSpeed;
    if (left >= topBlok * 13) {
      left = topBlok * 13;
    }
    tanks.style.left = `${left}px`;
  } else if (b === false) {
    adjustment("left");
  }
  levelMapMovement(topPozition, leftPozition, eventRight);
}
