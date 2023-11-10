import {
  getRandomArbitrary,
  stopMovement,
  tankSpeed,
  topBlok,
} from "../data/data.js";
import { levelMap, levelMapMovement } from "../data/levels.js";
import { tankNumAllEnemies, tanks } from "../data/tankAll.js";
import { animationDirection } from "./elements.js";

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

export function movement(tank) {
  if (tank.life === true && tank.desc === true) {
    levelMapMovement(tank);
    if (tank.startGame === true) {
      pozMapAll(tank);
    }
    if (tank.eventUp === "press" && tank.controlPress === false) {
      adjustment(tank, "up");
      tank.controlPress = true;
    }
    if (tank.eventDown === "press" && tank.controlPress === false) {
      adjustment(tank, "down");
      tank.controlPress = true;
    }
    if (tank.eventLeft === "press" && tank.controlPress === false) {
      adjustment(tank, "left");
      tank.controlPress = true;
    }
    if (tank.eventRight === "press" && tank.controlPress === false) {
      adjustment(tank, "right");
      tank.controlPress = true;
    }
    if (tank.eventUp === "up") {
      tanks[0].shootingDirection = "up";
      movementUp(tank);
    }
    if (tank.eventDown === "down") {
      tanks[0].shootingDirection = "down";
      movementDown(tank);
    }
    if (tank.eventLeft === "left") {
      tanks[0].shootingDirection = "left";
      movementLeft(tank);
    }
    if (tank.eventRight === "right") {
      tanks[0].shootingDirection = "right";
      movementRight(tank);
    }
  }

  if (tank.life === true && tank.desc === false) {
    levelMapMovement(tank);
    if (tank.startGame === true) {
      pozMapAll(tank);
    }
    if (tank.eventUp === "up") {
      movementEnemyUp(tank);
    }
    if (tank.eventDown === "down") {
      movementEnemyDown(tank);
    }
    if (tank.eventLeft === "left") {
      movementEnemyLeft(tank);
    }
    if (tank.eventRight === "right") {
      movementEnemyRight(tank);
    }
  }
}

export function adjustment(tank, desc) {
  if (desc === "up") {
    let up = (tank.pozition.top / topBlok) * 4;
    let upMap = tank.pozitionMap.top;
    if (up % 1 !== 0) {
      upMap = upMap - 1;
      tank.pozitionMap.top = upMap;
      tank.pozition.top = (upMap * topBlok) / 4;
      tank.elDOM.style.top = `${tank.pozition.top}px`;
    }
  }
  if (desc === "down") {
    let up = (tank.pozition.top / topBlok) * 4;
    let upMap = tank.pozitionMap.top;
    if (up % 1 !== 0) {
      upMap = upMap + 1;
      tank.pozitionMap.top = upMap;
      tank.pozition.top = (upMap * topBlok) / 4;
      tank.elDOM.style.top = `${tank.pozition.top}px`;
    }
  }
  if (desc === "left") {
    let left = (tank.pozition.left / topBlok) * 4;
    let upLeft = tank.pozitionMap.left;
    if (left % 1 !== 0) {
      upLeft = upLeft - 1;
      tank.pozitionMap.left = upLeft;
      tank.pozition.left = (upLeft * topBlok) / 4;
      tank.elDOM.style.left = `${tank.pozition.left}px`;
    }
  }
  if (desc === "right") {
    let left = (tank.pozition.left / topBlok) * 4;
    let upLeft = tank.pozitionMap.left;
    if (left % 1 !== 0) {
      upLeft = upLeft + 1;
      tank.pozitionMap.left = upLeft;
      tank.pozition.left = (upLeft * topBlok) / 4;
      tank.elDOM.style.left = `${tank.pozition.left}px`;
    }
  }
}

document.addEventListener("keyup", function (e) {
  if (e.code === "KeyK") {
    let up = tanks[0].pozition.top;
    let upMap = tanks[0].pozitionMap.top;
  }
});

function movementUp(tank) {
  tank.stopMovement = false;
  let up = tank.pozition.top;
  pozMapAll(tank, "up");
  tank.pozitionMapTop.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newUp = up - tankSpeed;
    tank.pozition.top = newUp;
    tank.pozitionMap.top = Math.floor((up / topBlok) * 4);
    tank.elDOM.style.top = `${newUp}px`;
  }
}

function movementDown(tank) {
  tank.stopMovement = false;
  let up = tank.pozition.top;
  pozMapAll(tank, "down");
  tank.pozitionMapDown.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newUp = up + tankSpeed;
    tank.pozition.top = newUp;
    tank.pozitionMap.top = Math.ceil((up / topBlok) * 4);
    tank.elDOM.style.top = `${newUp}px`;
  }
  if (tank.stopMovement === true) {
  }
}

function movementLeft(tank) {
  tank.stopMovement = false;
  let left = tank.pozition.left;
  pozMapAll(tank, "left");
  tank.pozitionMapLeft.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newLeft = left - tankSpeed;
    tank.pozition.left = newLeft;
    tank.pozitionMap.left = Math.floor((left / topBlok) * 4);
    tank.elDOM.style.left = `${newLeft}px`;
  }
}

function movementRight(tank) {
  tank.stopMovement = false;
  let left = tank.pozition.left;
  pozMapAll(tank, "right");
  tank.pozitionMapRight.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newLeft = left + tankSpeed;
    tank.pozition.left = newLeft;
    tank.pozitionMap.left = Math.ceil((left / topBlok) * 4);
    tank.elDOM.style.left = `${newLeft}px`;
  }
}

function movementEnemyUp(tank) {
  tank.stopMovement = false;
  let up = tank.pozition.top;
  pozMapAll(tank, "up");
  tank.pozitionMapTop.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        movementEnemyUpDesc(tank);
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newUp = up - tankSpeed;
    tank.pozition.top = newUp;
    tank.pozitionMap.top = Math.floor((up / topBlok) * 4);
    tank.elDOM.style.top = `${newUp}px`;
  }
}

function movementEnemyDown(tank) {
  tank.stopMovement = false;
  let up = tank.pozition.top;
  pozMapAll(tank, "down");
  tank.pozitionMapDown.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        movementEnemyDownDesc(tank);
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newUp = up + tankSpeed;
    tank.pozition.top = newUp;
    tank.pozitionMap.top = Math.ceil((up / topBlok) * 4);
    tank.elDOM.style.top = `${newUp}px`;
  }
}

function movementEnemyLeft(tank) {
  tank.stopMovement = false;
  let left = tank.pozition.left;
  pozMapAll(tank, "left");
  tank.pozitionMapLeft.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        movementEnemyLeftDesc(tank);
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newLeft = left - tankSpeed;
    tank.pozition.left = newLeft;
    tank.pozitionMap.left = Math.floor((left / topBlok) * 4);
    tank.elDOM.style.left = `${newLeft}px`;
  }
}

function movementEnemyRight(tank) {
  tank.stopMovement = false;
  let left = tank.pozition.left;
  pozMapAll(tank, "right");
  tank.pozitionMapRight.forEach((e) => {
    stopMovement.forEach((el) => {
      if (e === el) {
        movementEnemyRightDesc(tank);
        tank.stopMovement = true;
      }
    });
  });
  if (tank.stopMovement === false) {
    let newLeft = left + tankSpeed;
    tank.pozition.left = newLeft;
    tank.pozitionMap.left = Math.ceil((left / topBlok) * 4);
    tank.elDOM.style.left = `${newLeft}px`;
  }
}

function pozMapAll(tank, desc) {
  tank.startGame = false;
  let top = tank.pozitionMap.top;
  let left = tank.pozitionMap.left;

  tank.pozitionMapTop = [
    levelMap[top - 1][left + 0],
    levelMap[top - 1][left + 1],
    levelMap[top - 1][left + 2],
    levelMap[top - 1][left + 3],
  ];
  tank.pozitionMapDown = [
    levelMap[top + 4][left + 0],
    levelMap[top + 4][left + 1],
    levelMap[top + 4][left + 2],
    levelMap[top + 4][left + 3],
  ];
  tank.pozitionMapLeft = [
    levelMap[top + 0][left - 1],
    levelMap[top + 1][left - 1],
    levelMap[top + 2][left - 1],
    levelMap[top + 3][left - 1],
  ];
  tank.pozitionMapRight = [
    levelMap[top + 0][left + 4],
    levelMap[top + 1][left + 4],
    levelMap[top + 2][left + 4],
    levelMap[top + 3][left + 4],
  ];
}

function movementEnemyUpDesc(tank) {
  tank.eventUp = "";
  const desc = ["down", "left", "right"];
  const random = getRandomArbitrary(0, desc.length - 1);
  randomDesc(tank, desc[random]);
}

function movementEnemyDownDesc(tank) {
  tank.eventDown = "";
  const desc = ["left", "up", "right"];
  const random = getRandomArbitrary(0, desc.length - 1);
  randomDesc(tank, desc[random]);
}

function movementEnemyLeftDesc(tank) {
  tank.eventLeft = "";
  const desc = ["down", "up", "right"];
  const random = getRandomArbitrary(0, desc.length - 1);
  randomDesc(tank, desc[random]);
}
function movementEnemyRightDesc(tank) {
  tank.eventRight = "";
  const desc = ["down", "up", "left"];
  const random = getRandomArbitrary(0, desc.length - 1);
  randomDesc(tank, desc[random]);
}

function randomDesc(tank, desc) {
  tank.eventUp = "";
  tank.eventDown = "";
  tank.eventLeft = "";
  tank.eventRight = "";
  if (desc === "up") {
    tank.eventUp = desc;
  }
  if (desc === "down") {
    tank.eventDown = desc;
  }
  if (desc === "left") {
    tank.eventLeft = desc;
  }
  if (desc === "right") {
    tank.eventRight = desc;
  }
}
