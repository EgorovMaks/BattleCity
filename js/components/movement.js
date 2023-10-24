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

export function movement(tank) {
  if (tank.life === true) {
    if (tank.eventUp === "up") {
      movementUp(tank);
    } else if (tank.eventDown === "down") {
      movementDown(tank);
    } else if (tank.eventLeft === "left") {
      movementLeft(tank);
    } else if (tank.eventRight === "right") {
      movementRight(tank);
    }
  }
}

export function adjustment(desc, tank) {
  let mapTop = tank.pozitionMap.top;
  let mapLeft = tank.pozitionMap.left;
  if (desc === "top") {
    if (mapTop % 1 !== 0) {
      let up = (mapTop * topBlok) / 4;
      up = up - tankSpeed;
      tank.elDOM.style.top = `${up}px`;
      tank.pozition.top = `${up}px`;
      tank.pozitionMap.top = (up / topBlok) * 4;
      tankEnvironment(tank, Math.floor(mapTop), mapLeft);
      levelMapMovement(tank, Math.floor(mapTop), mapLeft);
    } else {
      tankEnvironment(tank, mapTop, mapLeft);
      levelMapMovement(tank, mapTop, mapLeft);
    }
  } else if (desc === "bottom") {
    if (mapTop % 1 !== 0) {
      let up = (mapTop * topBlok) / 4;
      up = up + tankSpeed;
      tank.elDOM.style.top = `${up}px`;
      tank.pozition.top = `${up}px`;
      tank.pozitionMap.top = (up / topBlok) * 4;
      tankEnvironment(tank, Math.ceil(mapTop), mapLeft);
      levelMapMovement(tank, Math.ceil(mapTop), mapLeft);
    } else {
      tankEnvironment(tank, mapTop, mapLeft);
      levelMapMovement(tank, mapTop, mapLeft);
    }
  } else if (desc === "left") {
    if (mapLeft % 1 !== 0) {
      let left = (mapLeft * topBlok) / 4;
      left = left - tankSpeed;
      tank.elDOM.style.left = `${left}px`;
      tank.pozition.left = `${left}px`;
      tank.pozitionMap.left = (left / topBlok) * 4;
      tankEnvironment(tank, mapTop, Math.floor(mapLeft));
      levelMapMovement(tank, mapTop, Math.floor(mapLeft));
    } else {
      tankEnvironment(tank, mapTop, mapLeft);
      levelMapMovement(tank, mapTop, mapLeft);
    }
  } else if (desc === "right") {
    if (mapLeft % 1 !== 0) {
      let left = (mapLeft * topBlok) / 4;
      left = left + tankSpeed;
      tank.elDOM.style.left = `${left}px`;
      tank.pozition.left = `${left}px`;
      tank.pozitionMap.left = (left / topBlok) * 4;
      tankEnvironment(tank, mapTop, Math.ceil(mapLeft));
      levelMapMovement(tank, mapTop, Math.ceil(mapLeft));
    } else {
      tankEnvironment(tank, mapTop, mapLeft);
      levelMapMovement(tank, mapTop, mapLeft);
    }
  } 
}

function movementUp(tank) {
  let b = true;
  let upMap = tank.pozitionMap.top;
  const topPozition = tank.pozitionMap.top;
  const leftPozition = tank.pozitionMap.left;
  if (upMap % 1 === 0) {
    levelMapMovement(tank, topPozition, leftPozition);
    tankEnvironment(tank, topPozition, leftPozition);
  }

  tank.pozitionMapTop.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        tank.desc ? null : enemyMovementTank(tank);
        return;
      }
    });
    if (e === 1 || e === 2 || e === 19) {
      b = false;
      tank.desc ? null : enemyMovementTank(tank);
      return;
    }
  });
  if (b === true) {
    let up = (upMap * topBlok) / 4;
    up = up - tankSpeed;
    tank.elDOM.style.top = `${up}px`;
    tank.pozition.top = `${up}px`;
    tank.pozitionMap.top = (up / topBlok) * 4;
  }
}

function movementDown(tank) {
  let b = true;
  let upMap = tank.pozitionMap.top;
  const topPozition = tank.pozitionMap.top;
  const leftPozition = tank.pozitionMap.left;
  if (upMap % 1 === 0) {
    levelMapMovement(tank, topPozition, leftPozition);
    tankEnvironment(tank, topPozition, leftPozition);
  }
  tank.pozitionMapDown.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        tank.desc ? null : enemyMovementTank(tank);
        return;
      }
    });
    if (e === 1 || e === 2 || e == 19) {
      b = false;
      tank.desc ? null : enemyMovementTank(tank);
      return;
    }
  });
  if (b === true) {
    let up = (upMap * topBlok) / 4;
    up = up + tankSpeed;
    tank.elDOM.style.top = `${up}px`;
    tank.pozition.top = `${up}px`;
    tank.pozitionMap.top = (up / topBlok) * 4;
  }
}

function movementLeft(tank) {
  let b = true;
  let leftMap = tank.pozitionMap.left;
  const topPozition = tank.pozitionMap.top;
  const leftPozition = tank.pozitionMap.left;
  if (leftMap % 1 === 0) {
    levelMapMovement(tank, topPozition, leftPozition);
    tankEnvironment(tank, topPozition, leftPozition);
  }
  tank.pozitionMapLeft.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        tank.desc ? null : enemyMovementTank(tank);
        return;
      }
    });
    if (e === 1 || e === 2 || e == 19) {
      b = false;
      tank.desc ? null : enemyMovementTank(tank);
      return;
    }
  });
  if (b === true) {
    let left = (leftMap * topBlok) / 4;
    left = left - tankSpeed;
    tank.elDOM.style.left = `${left}px`;
    tank.pozition.left = `${left}px`;
    tank.pozitionMap.left = (left / topBlok) * 4;
  }
}

function movementRight(tank) {
  let b = true;
  let leftMap = tank.pozitionMap.left;
  const topPozition = tank.pozitionMap.top;
  const leftPozition = tank.pozitionMap.left;
  if (leftMap % 1 === 0) {
    levelMapMovement(tank, topPozition, leftPozition);
    tankEnvironment(tank, topPozition, leftPozition);
  }
  tank.pozitionMapRight.forEach((e) => {
    tankNumAll.forEach((el) => {
      if (e === el) {
        b = false;
        tank.desc ? null : enemyMovementTank(tank);
        return;
      }
    });
    if (e === 1 || e === 2 || e == 19) {
      b = false;
      tank.desc ? null : enemyMovementTank(tank);
      return;
    }
  });
  if (b === true) {
    let left = (leftMap * topBlok) / 4;
    left = left + tankSpeed;
    tank.elDOM.style.left = `${left}px`;
    tank.pozition.left = `${left}px`;
    tank.pozitionMap.left = (left / topBlok) * 4;
  }
}

function tankEnvironment(tank, topPozition, leftPozition) {
  tank.pozitionMapTop = [
    levelMap[topPozition - 1][leftPozition],
    levelMap[topPozition - 1][leftPozition + 1],
    levelMap[topPozition - 1][leftPozition + 2],
    levelMap[topPozition - 1][leftPozition + 3],
  ];
  tank.pozitionMapDown = [
    levelMap[topPozition + 4][leftPozition],
    levelMap[topPozition + 4][leftPozition + 1],
    levelMap[topPozition + 4][leftPozition + 2],
    levelMap[topPozition + 4][leftPozition + 3],
  ];
  tank.pozitionMapLeft = [
    levelMap[topPozition - 0][leftPozition - 1],
    levelMap[topPozition + 1][leftPozition - 1],
    levelMap[topPozition + 2][leftPozition - 1],
    levelMap[topPozition + 3][leftPozition - 1],
  ];
  tank.pozitionMapRight = [
    levelMap[topPozition - 0][leftPozition + 4],
    levelMap[topPozition + 1][leftPozition + 4],
    levelMap[topPozition + 2][leftPozition + 4],
    levelMap[topPozition + 3][leftPozition + 4],
  ];
}
