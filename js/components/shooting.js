import { missileAll, randomNumber, tankSpeed, topBlok } from "../data/data.js";
import {
  blocks,
  levelMap,
  levelMapIdBloks,
  levelMapMovement,
} from "../data/levels.js";
import { tankNumAll, tankNumAllEnemies, tanks } from "../data/tankAll.js";
import { explosionAnimation, map, missile } from "./elements.js";
// import { adjustment } from "./movement.js";

export let shotNumsArr = [];

export function shooting(tank) {
  if (tank.life === true) {
    tank.shootingDirectionDesc = tank.shootingDirection;
    shotNumsArr.push(tank.randomNum + 100);
    if (tank.shootingDirectionDesc === "up") {
      shoot(tank, "up");
    } else if (tank.shootingDirectionDesc === "down") {
      shoot(tank, "down");
    } else if (tank.shootingDirectionDesc === "left") {
      shoot(tank, "left");
    } else if (tank.shootingDirectionDesc === "right") {
      shoot(tank, "right");
    }
  }
}

function shoot(tank, desc) {
  tank.stop = true;
  const random = `id${randomNumber()}`;
  let missileDate = {};
  function arrAdd(arr) {
    arr["tankNum"] = tank.randomNum;
    arr["idShoot"] = random;
    arr["idTank"] = tank.id;
    arr["controlDesc"] = true;
    arr["conflict"] = [];
    arr["stop"] = false;
    tank.enemies ? (arr["enimies"] = true) : (arr["enimies"] = false);
  }
  if (desc === "up") {
    missileDate = {
      desc: "up",
      pozTop: tank.pozitionMap.top - 1,
      pozTop2: tank.pozitionMap.top - 2,
      pozLeft: tank.pozitionMap.left + 1,
      pozLeft2: tank.pozitionMap.left + 2,
    };
    arrAdd(missileDate);
  }
  if (desc === "down") {
    missileDate = {
      desc: "down",
      pozTop: tank.pozitionMap.top + 4,
      pozTop2: tank.pozitionMap.top + 5,
      pozLeft: tank.pozitionMap.left + 1,
      pozLeft2: tank.pozitionMap.left + 2,
    };
    arrAdd(missileDate);
  }
  if (desc === "left") {
    missileDate = {
      desc: "left",
      pozTop: tank.pozitionMap.top + 1,
      pozTop2: tank.pozitionMap.top + 2,
      pozLeft: tank.pozitionMap.left - 1,
      pozLeft2: tank.pozitionMap.left - 2,
    };
    arrAdd(missileDate);
  }
  if (desc === "right") {
    missileDate = {
      desc: "right",
      pozTop: tank.pozitionMap.top + 1,
      pozTop2: tank.pozitionMap.top + 2,
      pozLeft: tank.pozitionMap.left + 4,
      pozLeft2: tank.pozitionMap.left + 5,
    };
    arrAdd(missileDate);
  }
  // console.log(tank.enemies, missileDate.enimies);
  missile(tank, missileDate);
  missileDate["elDom"] = document.querySelector(`#${missileDate.idShoot}`);
  missileAll.push(missileDate);
}

export function shootFlight() {
  missileAll.forEach((e, k, arr) => {
    if (e.stop === false) {
      const section10 = levelMap[e.pozTop][e.pozLeft];
      const section11 = levelMap[e.pozTop][e.pozLeft2];
      const section20 = levelMap[e.pozTop2][e.pozLeft];
      const section21 = levelMap[e.pozTop2][e.pozLeft2];
      const sectionAll = [section10, section11, section20, section21];
      let el = e.elDom.style;
      let top = parseFloat(el.top);
      let left = parseFloat(el.left);
      missileAll.forEach((el2) => {
        if (e.pozLeft === el2.pozLeft && e.tankNum !== el2.tankNum) {
          if (
            e.pozTop === el2.pozTop ||
            e.pozTop === el2.pozTop - 1 ||
            e.pozTop - 1 === el2.pozTop
          ) {
            e.controlDesc = false;
            removeShotAddArr(e, [arr]);
            removeShotAddArr(el2, [arr]);
          }
        }
        if (e.pozTop === el2.pozTop && e.tankNum !== el2.tankNum) {
          if (
            e.pozLeft === el2.pozLeft ||
            e.pozLeft === el2.pozLeft - 1 ||
            e.pozLeft - 1 === el2.pozLeft
          ) {
            e.controlDesc = false;
            removeShotAddArr(e, [arr]);
            removeShotAddArr(el2, [arr]);
          }
        }
      });
      tanks.forEach((tank) => {
        if (
          sectionAll[0] === tank.randomNum ||
          sectionAll[1] === tank.randomNum ||
          sectionAll[2] === tank.randomNum ||
          sectionAll[3] === tank.randomNum
        ) {
          if (e.enimies === tank.enemies) {
            e.controlDesc = false;
            removeShotAddArr(e, [arr]);
          } else if (e.enimies !== tank.enemies) {
            if (tank.invulnerability === true) {
              removeShotAddArr(e, [arr]);
            } else {
              e.controlDesc = false;
              conflictTank(e, tank, [arr, k]);
            }
          }
        }
      });
      if (
        sectionAll[0] === 1 ||
        sectionAll[1] === 1 ||
        sectionAll[2] === 1 ||
        sectionAll[3] === 1
      ) {
        e.controlDesc = false;
        map1(e, [arr, k]);
      }
      if (
        sectionAll[0] === 2 ||
        sectionAll[1] === 2 ||
        sectionAll[2] === 2 ||
        sectionAll[3] === 2
      ) {
        e.controlDesc = false;
        removeShotAddArr(e, [arr]);
      }
      sectionAll.forEach((el) => {
        if (el === 19) {
          map19(e, [arr, k]);
        }
      });
      if (e.desc === "up") {
        let topNew = top - topBlok / 2;
        e.elDom.style.top = `${topNew}px`;
        if (e.controlDesc === true) {
          e.pozTop = e.pozTop - 2;
          e.pozTop2 = e.pozTop2 - 2;
        }
      }
      if (e.desc === "down") {
        let topNew = top + topBlok / 2;
        e.elDom.style.top = `${topNew}px`;
        if (e.controlDesc === true) {
          e.pozTop = e.pozTop + 2;
          e.pozTop2 = e.pozTop2 + 2;
        }
      }
      if (e.desc === "left") {
        let leftNew = left - topBlok / 2;
        e.elDom.style.left = `${leftNew}px`;
        if (e.controlDesc === true) {
          e.pozLeft = e.pozLeft - 2;
          e.pozLeft2 = e.pozLeft2 - 2;
        }
      }
      if (e.desc === "right") {
        let leftNew = left + topBlok / 2;
        e.elDom.style.left = `${leftNew}px`;
        if (e.controlDesc === true) {
          e.pozLeft = e.pozLeft + 2;
          e.pozLeft2 = e.pozLeft2 + 2;
        }
      }
    }
  });
}

function map1(e, [arr, k]) {
  if (e.desc === "up" || e.desc === "down") {
    if (
      levelMap[e.pozTop][e.pozLeft] === 1 ||
      levelMap[e.pozTop][e.pozLeft2] === 1
    ) {
      e["pozAnim"] = [e.pozTop, e.pozLeft - 1];
      conflict(e, e.pozTop, e.pozLeft);
      delBlock(e);
      removeShotAddArr(e, [arr]);
    } else if (
      levelMap[e.pozTop2][e.pozLeft] === 1 ||
      levelMap[e.pozTop2][e.pozLeft2] === 1
    ) {
      e["pozAnim"] = [e.pozTop2, e.pozLeft - 1];
      conflict(e, e.pozTop2, e.pozLeft2);
      delBlock(e);
      removeShotAddArr(e, [arr]);
    }
  } else if (e.desc === "left" || e.desc === "right") {
    if (
      levelMap[e.pozTop][e.pozLeft] === 1 ||
      levelMap[e.pozTop2][e.pozLeft] === 1
    ) {
      e["pozAnim"] = [e.pozTop - 1, e.pozLeft];
      conflict(e, e.pozTop, e.pozLeft);
      delBlock(e);
      removeShotAddArr(e, [arr]);
    } else if (
      levelMap[e.pozTop][e.pozLeft2] === 1 ||
      levelMap[e.pozTop2][e.pozLeft2] === 1
    ) {
      e["pozAnim"] = [e.pozTop - 1, e.pozLeft2];
      conflict(e, e.pozTop2, e.pozLeft2);
      delBlock(e);
      removeShotAddArr(e, [arr]);
    }
  }
}

function map19(e, [arr, k]) {
  if (e.desc === "up") {
    explosionAnimation([1, e.pozLeft - 1], e.desc);
  }
  if (e.desc === "down") {
    explosionAnimation([58, e.pozLeft - 1], e.desc);
  }
  if (e.desc === "left") {
    explosionAnimation([e.pozTop - 1, 1], e.desc);
  }
  if (e.desc === "right") {
    explosionAnimation([e.pozTop - 1, 58], e.desc);
  }
  removeShotAddArr(e, [arr, k]);
}

function removeShotAddArr(e, [arr]) {
  setTimeout(() => {
    e.elDom.remove();
  }, 50);
  setTimeout(() => {
    tanks.forEach((el) => {
      if (el.id === e.idTank) {
        el.stop = false;
        e.controlDesc = false;
      }
    });
  }, 500);
  setTimeout(() => {
    tanks.forEach((el) => {
      if (el.id === e.idTank && el.id !== "#tank1User") {
        el.stop ? null : shooting(el);
      }
    });
  }, 1000);
  e.stop = true;
  arr.forEach((el, key) => {
    if (el.stop === true) {
      arr.splice(key, 1);
    }
  });
}

function conflict(e, pozTop, pozLeft) {
  if (e.desc === "up" || e.desc === "down") {
    e.conflict = [
      [pozTop, e.pozLeft - 1],
      [pozTop, e.pozLeft - 0],
      [pozTop, e.pozLeft + 1],
      [pozTop, e.pozLeft + 2],
    ];
  }
  if (e.desc === "right" || e.desc === "left") {
    e.conflict = [
      [e.pozTop - 1, pozLeft],
      [e.pozTop - 0, pozLeft],
      [e.pozTop + 1, pozLeft],
      [e.pozTop + 2, pozLeft],
    ];
  }
}

function conflictTank(e, tank, [arr, k]) {
  tank.elDOM.remove();
  tank.life = false;
  levelMapMovement(tank);
  explosionAnimation([tank.pozitionMap.top, tank.pozitionMap.left], "tank");
  removeShotAddArr(e, [arr, k]);
}

function delBlock(el) {
  el.conflict.forEach((e) => {
    if (levelMap[e[0]][e[1]] === 1) {
      const block = document.querySelector(`#${levelMapIdBloks[e[0]][e[1]]}`);
      setTimeout(() => {
        block.remove();
        levelMap[e[0]][e[1]] = 0;
        levelMapIdBloks[e[0]][e[1]] = 0;
        explosionAnimation(el.pozAnim, el.desc);
      }, 50);
    }
  });
}
