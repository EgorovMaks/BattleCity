import { missileAll, randomNumber, tankSpeed, topBlok } from "../data/data.js";
import { blocks, levelMap, levelMapIdBloks } from "../data/levels.js";
import { tankNumAll, tanks } from "../data/tankAll.js";
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
  if (desc === "up") {
    missileDate = {
      desc: "up",
      pozTop: tank.pozitionMap.top - 1,
      pozTop2: tank.pozitionMap.top - 2,
      pozLeft: tank.pozitionMap.left + 1,
      pozLeft2: tank.pozitionMap.left + 2,
      idShoot: random,
      idTank: tank.id,
      controlDesc: true,
      conflict: [],
    };
  }
  if (desc === "down") {
    missileDate = {
      desc: "down",
      pozTop: tank.pozitionMap.top + 4,
      pozTop2: tank.pozitionMap.top + 5,
      pozLeft: tank.pozitionMap.left + 1,
      pozLeft2: tank.pozitionMap.left + 2,
      idShoot: random,
      idTank: tank.id,
      controlDesc: true,
      conflict: [],
    };
  }
  if (desc === "left") {
    missileDate = {
      desc: "left",
      pozTop: tank.pozitionMap.top + 1,
      pozTop2: tank.pozitionMap.top + 2,
      pozLeft: tank.pozitionMap.left - 1,
      pozLeft2: tank.pozitionMap.left - 2,
      idShoot: random,
      idTank: tank.id,
      controlDesc: true,
      conflict: [],
    };
  }
  if (desc === "right") {
    missileDate = {
      desc: "right",
      pozTop: tank.pozitionMap.top + 1,
      pozTop2: tank.pozitionMap.top + 2,
      pozLeft: tank.pozitionMap.left + 4,
      pozLeft2: tank.pozitionMap.left + 5,
      idShoot: random,
      idTank: tank.id,
      controlDesc: true,
      conflict: [],
    };
  }
  missile(tank, missileDate);
  missileDate["elDom"] = document.querySelector(`#${missileDate.idShoot}`);
  missileAll.push(missileDate);
}

export function shootFlight() {
  missileAll.forEach((e, k, arr) => {
    const id = e.idShoot;
    const section10 = levelMap[e.pozTop][e.pozLeft];
    const section11 = levelMap[e.pozTop][e.pozLeft2];
    const section20 = levelMap[e.pozTop2][e.pozLeft];
    const section21 = levelMap[e.pozTop2][e.pozLeft2];
    const sectionAll = [section10, section11, section20, section21];
    let el = e.elDom.style;
    let top = parseFloat(el.top);
    let left = parseFloat(el.left);
    if (
      sectionAll[0] === 1 ||
      sectionAll[1] === 1 ||
      sectionAll[2] === 1 ||
      sectionAll[3] === 1
    ) {
      e.controlDesc = false;
      map1(e, [arr, k]);
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
  });
}

function map1(e, [arr, k]) {
  if (e.desc === "up" || e.desc === "down") {
    if (
      levelMap[e.pozTop][e.pozLeft] === 1 ||
      levelMap[e.pozTop][e.pozLeft2] === 1
    ) {
    e["pozAnim"] = [e.pozTop, e.pozLeft-1];
      conflict(e, e.pozTop, e.pozLeft);
      delBlock(e);
      removeShotAddArr(e, [arr, k]);
    } else if (
      levelMap[e.pozTop2][e.pozLeft] === 1 ||
      levelMap[e.pozTop2][e.pozLeft2] === 1
    ) {
    e["pozAnim"] = [e.pozTop2, e.pozLeft-1];
      conflict(e, e.pozTop2, e.pozLeft2);
      delBlock(e);
      removeShotAddArr(e, [arr, k]);
    }
  } else if (e.desc === "left" || e.desc === "right") {
    if (
      levelMap[e.pozTop][e.pozLeft] === 1 ||
      levelMap[e.pozTop2][e.pozLeft] === 1
    ) {
    e["pozAnim"] = [e.pozTop-1, e.pozLeft];
      conflict(e, e.pozTop, e.pozLeft);
      delBlock(e);
      removeShotAddArr(e, [arr, k]);
    } else if (
      levelMap[e.pozTop][e.pozLeft2] === 1 ||
      levelMap[e.pozTop2][e.pozLeft2] === 1
    ) {
    e["pozAnim"] = [e.pozTop-1, e.pozLeft];
      conflict(e, e.pozTop2, e.pozLeft2);
      delBlock(e);
      removeShotAddArr(e, [arr, k]);
    }
  }
}

function map19(e, [arr, k]) {
  removeShotAddArr(e, [arr, k]);
}

function removeShotAddArr(e, [arr, k]) {
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
  arr.splice(k, 1);
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

function delBlock(el) {
  console.log(el);
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
