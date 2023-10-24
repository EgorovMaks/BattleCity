import { topBlok } from "../data/data.js";
import {
  levelMap,
  levelMapMovement,
  levelMapMovementDel,
  shotShoting,
  shotShotingDel,
} from "../data/levels.js";
import { tankNumAll, tanks } from "../data/tankAll.js";
import { explosionAnimation, map, missile, missileTrack } from "./elements.js";
import { adjustment } from "./movement.js";

export let shotNumsArr = [];

export function shooting(tank) {
  if (tank.life === true) {
    tank.shootingDirectionDesc = tank.shootingDirection;
    shotNumsArr.push(tank.randomNum + 100);
    if (tank.shootingDirectionDesc === "up") {
      shotDescription(tank.shootingDirectionDesc, tank);
    } else if (tank.shootingDirectionDesc === "down") {
      shotDescription(tank.shootingDirectionDesc, tank);
    } else if (tank.shootingDirectionDesc === "left") {
      shotDescription(tank.shootingDirectionDesc, tank);
    } else if (tank.shootingDirectionDesc === "right") {
      shotDescription(tank.shootingDirectionDesc, tank);
    }
  }
}

export function shotFlight(tank) {
  if (tank.pozitionTop === true) {
    shotIntersection(tank.shootingDirectionDesc, tank);
  } else if (tank.pozitionDown === true) {
    shotIntersection(tank.shootingDirectionDesc, tank);
  } else if (tank.pozitionLeft === true) {
    shotIntersection(tank.shootingDirectionDesc, tank);
  } else if (tank.pozitionRight === true) {
    shotIntersection(tank.shootingDirectionDesc, tank);
  } else if (tank.stop === false) {
    setTimeout(() => {
      // shooting(tank);
    }, 500);
  }
}

function shotDescription(shootingDirection, tank) {
  let topPozCenter = Math.floor(
    (parseFloat(tank.elDOM.style.top) / topBlok) * 4
  );
  let leftPozCenter = Math.floor(
    (parseFloat(tank.elDOM.style.left) / topBlok) * 4
  );
  console.log(topPozCenter,leftPozCenter)
  if (shootingDirection === "up" && tank.stop === false) {
    tank.stop = true;
    missile(
      map,
      [((leftPozCenter + 2) * topBlok) / 4, (topPozCenter + 1) * (topBlok / 4)],
      shootingDirection,
      tank
    );
    tank.pozitionTop = true;
  } else if (shootingDirection === "down" && tank.stop === false) {
    tank.stop = true;
    missile(
      map,
      [((leftPozCenter + 2) * topBlok) / 4, ((topPozCenter + 4) * topBlok) / 4],
      shootingDirection,
      tank
    );
    tank.pozitionDown = true;
  } else if (shootingDirection === "left" && tank.stop === false) {
    tank.stop = true;
    missile(
      map,
      [((leftPozCenter + 1) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      shootingDirection,
      tank
    );
    tank.pozitionLeft = true;
  } else if (shootingDirection === "right" && tank.stop === false) {
    tank.stop = true;
    missile(
      map,
      [((leftPozCenter + 3) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      shootingDirection,
      tank
    );
    tank.pozitionRight = true;
  }
}

function shotIntersection(tankDer, tank) {
  if (tank.pozitionTop === true) {
    shot(true, true, tank.shootingDirectionDesc, tank);
  } else if (tank.pozitionDown === true) {
    shot(false, true, tank.shootingDirectionDesc, tank);
  } else if (tank.pozitionLeft === true) {
    shot(true, false, tank.shootingDirectionDesc, tank);
  } else if (tank.pozitionRight === true) {
    shot(false, false, tank.shootingDirectionDesc, tank);
  }
}

function shot(plusTrueFalse, topLeftPoz, desc, tank) {
  let missile = document.querySelector(`.missile${tank.randomNum + 100}`);
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
    arrey(desc, topPoz, topLeft, tank);
    if (tank.id === "#tank1User") {
      // console.log(
      //   tank.arr[0][1][0],
      //   tank.arr[0][2][0],
      //   tank.arr[1][1][0],
      //   tank.arr[1][2][0]
      // );
    }

    shotNumsArr.forEach((e) => {
      if (
        tank.arr[0][1][0] === e ||
        tank.arr[0][2][0] === e ||
        tank.arr[1][1][0] === e ||
        tank.arr[1][2][0] === e
      ) {
        const b = document.querySelector(`.missile${tank.randomNum + 100}`);
        if (e !== tank.randomNum + 100) {
          const a = document.querySelector(`.missile${e}`);
          if (a !== null || b !== null) {
            a.remove();
            b.remove();
            explosionAnimation(
              topPoz + 1,
              topLeft - 1,
              tank.shootingDirectionDesc,
              tank
            );
            tanks.forEach((el) => {
              if (el.randomNum === e - 100 || el.randomNum === tank.randomNum) {
                delArrShot(el.randomNum + 100);
                el.stop = false;
                el.pozitionTop = false;
                el.pozitionDown = false;
                el.pozitionLeft = false;
                el.pozitionRight = false;
              }
            });
          }
        }
      }
    });
    tankNumAll.forEach((e) => {
      if (
        tank.arr[0][1][0] === e ||
        tank.arr[0][2][0] === e ||
        tank.arr[1][1][0] === e ||
        tank.arr[1][2][0] === e
      ) {
        if (e !== tank.randomNum) {
          delTank(tank, e);
        }
      }
    });

    if (
      tank.arr[0][1][0] === 2 ||
      tank.arr[0][2][0] === 2 ||
      tank.arr[1][1][0] === 2 ||
      tank.arr[1][2][0] === 2
    ) {
      missile.remove();
      delArrShot(tank.randomNum + 100);
      tank.stop = false;
      tank.pozitionTop = false;
      tank.pozitionDown = false;
      tank.pozitionLeft = false;
      tank.pozitionRight = false;
    } else if (
      tank.arr[0][1][0] === 1 ||
      tank.arr[0][2][0] === 1 ||
      tank.arr[1][1][0] === 1 ||
      tank.arr[1][2][0] === 1
    ) {
      deletingBlocks(tank.arr, desc, tank);
      delArrShot(tank.randomNum + 100);
      missile.remove();
      tank.pozitionTop = false;
      tank.pozitionDown = false;
      tank.pozitionLeft = false;
      tank.pozitionRight = false;
    } else if (
      tank.arr[0][1][0] === 19 ||
      tank.arr[0][2][0] === 19 ||
      tank.arr[1][1][0] === 19 ||
      tank.arr[1][2][0] === 19
    ) {
      if (tank.shootingDirectionDesc === "left") {
        explosionAnimation(topPoz - 1, 1, tank.shootingDirectionDesc, tank);
      } else if (tank.shootingDirectionDesc === "right") {
        explosionAnimation(topPoz - 1, 58, tank.shootingDirectionDesc, tank);
      } else if (tank.shootingDirectionDesc === "up") {
        explosionAnimation(1, topLeft - 1, tank.shootingDirectionDesc, tank);
      } else if (tank.shootingDirectionDesc === "down") {
        explosionAnimation(58, topLeft - 1, tank.shootingDirectionDesc, tank);
      }
      missile.remove();
      delArrShot(tank.randomNum + 100);
      tank.pozitionTop = false;
      tank.pozitionDown = false;
      tank.pozitionLeft = false;
      tank.pozitionRight = false;
    } else if (tank.arr[0][1] || tank.arr[0][2] === 0) {
      shotShoting(topPoz, topLeft, tank);
      topLeftPoz
        ? (missile.style.top = `${missilePozNew}px`)
        : (missile.style.left = `${missilePozNew}px`);

      // setTimeout(() => {
      //   shotShotingDel(topPoz, topLeft, tank);
      // }, 50);
    }
  }
  // console.log(tank.desc);
}

function arrey(desc, topPoz, topLeft, tank) {
  const numsArr = [0, 1, 2, 3, 4];
  if (desc === "up") {
    const nums = [-1, 0, 1, 2];
    const num = [0, 1, 2, 3, -1];
    tank.arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        tank.arr[el].push([
          levelMap[topPoz + num[k]][topLeft + e],
          { top: topPoz + num[k], left: topLeft + e },
        ])
      );
    });
  } else if (desc === "down") {
    const nums = [-1, 0, 1, 2];
    const num = [0, -1, -2, -3, 1];
    tank.arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        tank.arr[el].push([
          levelMap[topPoz + num[k]][topLeft + e],
          { top: topPoz + num[k], left: topLeft + e },
        ])
      );
    });
  } else if (desc === "left") {
    const nums = [-1, 0, 1, 2];
    const num = [0, 1, 2, 3, -1];
    tank.arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        tank.arr[el].push([
          levelMap[topPoz + e][topLeft + num[k]],
          { top: topPoz + e, left: topLeft + num[k] },
        ])
      );
    });
  } else if (desc === "right") {
    const nums = [-1, 0, 1, 2];
    const num = [1, 0, -1, -2, 2];
    tank.arr = [[], [], [], [], [], [], [], []];
    numsArr.forEach((el, k) => {
      nums.forEach((e) =>
        tank.arr[el].push([
          levelMap[topPoz + e][topLeft + num[k]],
          { top: topPoz + e, left: topLeft + num[k] },
        ])
      );
    });
  }
}

function deletingBlocks(arr, desc, tank) {
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
    explosionAnimation(point10.top, point10.left, desc, tank);
    delArrBlock(point11);
    delArrBlock(point10);
    delArrBlock(point12);
    delArrBlock(point13);
  } else {
    explosionAnimation(point00.top, point00.left, desc, tank);
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

function delTank(tank, num) {
  // console.log(num);
  tanks.forEach((e) => {
    if (num === e.randomNum) {
      if (tank.id === "#tank1User") {
        e.life = false;
        adjustment("delete", e);
        levelMapMovementDel(e);
        e.elDOM.remove();
      }
      // e.elDOM.remove();
    }
  });
}

function delArrShot(num) {
  let a = [];
  shotNumsArr.forEach((e) => {
    if (e !== num) {
      a.push(e);
    }
  });
  // console.log(a);
  shotNumsArr = a;
}

// elementFromPoint(x, y);
