import { animationDirection } from "./elements.js";
import { tankSpeed, topBlok } from "../data/data.js";
import { tank1 } from "./game.js";
import { levelMap, levelMapMovement } from "../data/levels.js";
import { tankNumAll, tanks } from "../data/tankAll.js";
import { enemyMovementTank } from "./events.js";

export function animation(el, tanks) {
  if (tanks.life === true) {
    const classAlls = tanks.elDOM.childNodes;
    const classAll = [];

    classAlls.forEach((e) => {
      if (e.classList !== undefined) {
        classAll.push(e);
      }
    });

    function filter(el, className) {
      classAll.forEach((e) => {
        if (e.classList.contains(className)) {
          el.push(e);
        }
      });
      return el;
    }

    const anim = [];
    const animUpMass = [];
    const animDownMass = [];
    const animLeftMass = [];
    const animRightMass = [];

    filter(anim, "tank");
    filter(animUpMass, "up");
    const animUp = animUpMass[0];
    filter(animDownMass, "down");
    const animDown = animDownMass[0];
    filter(animLeftMass, "left");
    const animLeft = animLeftMass[0];
    filter(animRightMass, "right");
    const animRight = animRightMass[0];

    setInterval(function () {
      // console.log(tanks.eventUp);
      if (tanks.eventUp === "up") {
        animationDirection(anim, animUp, animUpMass);
      } else if (tanks.eventDown === "down") {
        animationDirection(anim, animDown, animDownMass);
      } else if (tanks.eventLeft === "left") {
        animationDirection(anim, animLeft, animLeftMass);
      } else if (tanks.eventRight === "right") {
        animationDirection(anim, animRight, animRightMass);
      }
    }, 60);
  }
}

// export let topLeft = {};

export function movement(tanks, arr) {
  if (arr.life === true) {
    if (arr.id === "#tank1User") {
      console.log(tanks);
    }
    let up = parseFloat(tanks.style.top);
    let left = parseFloat(tanks.style.left);
    let topPozition = Math.round((up / topBlok) * 4);
    let leftPozition = Math.round((left / topBlok) * 4);
    if (arr.eventUp === "up") {
      movementUp(up, left, topPozition, leftPozition, tanks, arr);
    } else if (arr.eventDown === "down") {
      movementDown(up, left, topPozition, leftPozition, tanks, arr);
    } else if (arr.eventLeft === "left") {
      movementLeft(up, left, topPozition, leftPozition, tanks, arr);
    } else if (arr.eventRight === "right") {
      movementRight(up, left, topPozition, leftPozition, tanks, arr);
    }
  }
}

export function adjustment(pozition, tanks) {
  if (pozition === "top") {
    const up = parseFloat(tanks.style.top);
    tanks.style.top = `${(Math.round((up / topBlok) * 4) * topBlok) / 4}px`;
  } else if (pozition === "left") {
    const left = parseFloat(tanks.style.left);
    tanks.style.left = `${(Math.round((left / topBlok) * 4) * topBlok) / 4}px`;
  } else if (pozition === "right") {
    const left = parseFloat(tanks.style.left);
    tanks.style.left = `${(Math.ceil((left / topBlok) * 2) * topBlok) / 2}px`;
  } else if (pozition === "down") {
    const up = parseFloat(tanks.style.top);
    tanks.style.top = `${(Math.ceil((up / topBlok) * 2) * topBlok) / 2}px`;
  }
}

function movementUp(up, left, topPozition, leftPozition, tanks, arr) {
  let a = [];
  let b = true;
  a = [
    levelMap[topPozition - 1][leftPozition],
    levelMap[topPozition - 1][leftPozition + 1],
    levelMap[topPozition - 1][leftPozition + 2],
    levelMap[topPozition - 1][leftPozition + 3],
  ];
  a.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        adjustment("top", tanks);
        enemyMovementTank(arr);
        return;
      }
    });
    if (e === 1 || e === 2 || e === 19) {
      b = false;
      adjustment("top", tanks);
      adjustment("left", tanks);
      enemyMovementTank(arr);
      return;
    }
  });
  if (b === true) {
    up = up - tankSpeed;
    if (up < topBlok) {
      up = topBlok;
    }
    tanks.style.top = `${up}px`;
  } else if (b === false) {
  }
  levelMapMovement(topPozition, leftPozition, arr.randomNum);
}

function movementDown(up, left, topPozition, leftPozition, tanks, arr) {
  let a = [];
  let b = true;
  a = [
    levelMap[topPozition + 4][leftPozition],
    levelMap[topPozition + 4][leftPozition + 1],
    levelMap[topPozition + 4][leftPozition + 2],
    levelMap[topPozition + 4][leftPozition + 3],
  ];
  a.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        adjustment("top", tanks);
        enemyMovementTank(arr);
        return;
      }
    });
    if (e === 1 || e === 2 || e == 19) {
      b = false;
      adjustment("top", tanks);
      adjustment("left", tanks);
      enemyMovementTank(arr);
      return;
    }
  });
  if (b === true) {
    up = up + tankSpeed;
    if (up >= topBlok * 13) {
      up = topBlok * 13;
    }
    tanks.style.top = `${up}px`;
  } else if (b === false) {
  }
  levelMapMovement(topPozition, leftPozition, arr.randomNum);
}

function movementLeft(up, left, topPozition, leftPozition, tanks, arr) {
  let a = [];
  let b = true;
  a = [
    levelMap[topPozition - 0][leftPozition - 1],
    levelMap[topPozition + 1][leftPozition - 1],
    levelMap[topPozition + 2][leftPozition - 1],
    levelMap[topPozition + 3][leftPozition - 1],
  ];
  a.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        adjustment("left", tanks);
        enemyMovementTank(arr);
        return;
      }
    });
    if (e === 1 || e === 2 || e === 19) {
      b = false;
      adjustment("top", tanks);
      adjustment("left", tanks);
      enemyMovementTank(arr);
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
  }
  levelMapMovement(topPozition, leftPozition, arr.randomNum);
}

function movementRight(up, left, topPozition, leftPozition, tanks, arr) {
  let a = [];
  let b = true;
  a = [
    levelMap[topPozition - 0][leftPozition + 4],
    levelMap[topPozition + 1][leftPozition + 4],
    levelMap[topPozition + 2][leftPozition + 4],
    levelMap[topPozition + 3][leftPozition + 4],
  ];

  a.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        adjustment("left", tanks);
        enemyMovementTank(arr);
        return;
      }
    });
    if (e === 1 || e === 2 || e === 19) {
      b = false;
      adjustment("top", tanks);
      adjustment("left", tanks);
      enemyMovementTank(arr);
      return;
    }
  });
  if (b === true) {
    left = left + tankSpeed;
    if (left >= topBlok * 13) {
      left = topBlok * 13;
    }
    tanks.style.left = `${left}px`;
  } else if (b === false) {
  }
  levelMapMovement(topPozition, leftPozition, arr.randomNum);
}
