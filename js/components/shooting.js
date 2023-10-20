import { topBlok } from "../data/data.js";
import { levelMap } from "../data/levels.js";
import { explosionAnimation, map, missile, missileTrack } from "./elements.js";


export function shooting(tank) {
  if (tank.shootingDirection === "up") {
    shotDescription(tank.shootingDirection, tank);
  } else if (tank.shootingDirection === "down") {
    shotDescription(tank.shootingDirection, tank);
  } else if (tank.shootingDirection === "left") {
    shotDescription(tank.shootingDirection, tank);
  } else if (tank.shootingDirection === "right") {
    shotDescription(tank.shootingDirection, tank);
  }
}

export function shotFlight(tank) {
  if (tank.pozitionTop === true) {
    shotIntersection(tank.shootingDirection, tank);
  } else if (tank.pozitionDown === true) {
    shotIntersection(tank.shootingDirection, tank);
  } else if (tank.pozitionLeft === true) {
    shotIntersection(tank.shootingDirection, tank);
  } else if (tank.pozitionRight === true) {
    shotIntersection(tank.shootingDirection, tank);
  }
}

function shotDescription(shootingDirection, tank) {
  let topPozCenter = Math.floor(
    (parseFloat(tank.elDOM.style.top) / topBlok) * 4
  );
  let leftPozCenter = Math.floor(
    (parseFloat(tank.elDOM.style.left) / topBlok) * 4
  );
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
    shot(true, true, tank.shootingDirection, tank);
  } else if (tank.pozitionDown === true) {
    shot(false, true, tank.shootingDirection, tank);
  } else if (tank.pozitionLeft === true) {
    shot(true, false, tank.shootingDirection, tank);
  } else if (tank.pozitionRight === true) {
    shot(false, false, tank.shootingDirection, tank);
  }
}

function shot(plusTrueFalse, topLeftPoz, desc, tank) {
  let missile = document.querySelector(`.missile${tank.randomNum}`);
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
    if (
      tank.arr[0][1][0] === 2 ||
      tank.arr[0][2][0] === 2 ||
      tank.arr[1][1][0] === 2 ||
      tank.arr[1][2][0] === 2
    ) {
      missile.remove();
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
      missile.remove();
      // stop = false;
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
      missile.remove();
      tank.stop = false;
      tank.pozitionTop = false;
      tank.pozitionDown = false;
      tank.pozitionLeft = false;
      tank.pozitionRight = false;
    } else if (tank.arr[0][1] || tank.arr[0][2] === 0) {
      topLeftPoz
        ? (missile.style.top = `${missilePozNew}px`)
        : (missile.style.left = `${missilePozNew}px`);
    }
  }
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

// elementFromPoint(x, y);
