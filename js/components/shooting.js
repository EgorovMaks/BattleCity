import { topBlok } from "../data/data.js";
import { levelMap } from "../data/levels.js";
import { divId, map, missile, missileTrack } from "./elements.js";
import { shootingDirection } from "./events.js";
import { tank1 } from "./game.js";
let stop = false;
let top = 4;
let left = 0;
let right = (52 * topBlok) / 4;
let down = (52 * topBlok) / 4;
let pozitionTop = false;
let pozitionDown = false;
let pozitionLeft = false;
let pozitionRight = false;

let shotMap = [
  [[1], [1], [1]],
  [[1], [1], [1]],
  [[1], [1], [1]],
];

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
  let topPozCenter = Math.floor(
    ((parseFloat(tank1.style.top) / topBlok) * topBlok) / 4
  );
  let leftPozCenter = Math.floor(
    ((parseFloat(tank1.style.left) / topBlok) * topBlok) / 4
  );

  if (shootingDirection === "up" && stop === false) {
    stop = true;
    missile(map, [
      ((leftPozCenter + 2) * topBlok) / 4,
      (topPozCenter * topBlok) / 4,
    ]);
    while (topPozCenter > 0) {
      // if (
      //   levelMap[topPozCenter - 1][leftPozCenter + 1] === 1 ||
      //   levelMap[topPozCenter - 1][leftPozCenter + 2] === 1
      // ) 
      {
        // top = ((topPozCenter - 1) * topBlok) / 4;
        break;
      }
      // topPozCenter--;
    }
    pozitionTop = true;
  } else if (shootingDirection === "down" && stop === false) {
    stop = true;
    missile(map, [
      ((leftPozCenter + 2) * topBlok) / 4,
      ((topPozCenter + 5) * topBlok) / 4,
    ]);
    while (topPozCenter <= 48) {
      if (
        levelMap[topPozCenter + 3][leftPozCenter + 1] === 1 ||
        levelMap[topPozCenter + 3][leftPozCenter + 2] === 1
      ) {
        down = ((topPozCenter + 3) * topBlok) / 4;
        break;
      }
      topPozCenter++;
    }
    pozitionDown = true;
  } else if (shootingDirection === "left" && stop === false) {
    stop = true;
    missile(
      map,
      [((leftPozCenter - 1) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      "left"
    );
    while (leftPozCenter >= 0) {
      if (
        levelMap[topPozCenter + 1][leftPozCenter] === 1 ||
        levelMap[topPozCenter + 2][leftPozCenter] === 1
      ) {
        left = ((leftPozCenter + 1) * topBlok) / 4;
        break;
      }
      leftPozCenter--;
    }
    pozitionLeft = true;
  } else if (shootingDirection === "right") {
    stop = true;
    missile(
      map,
      [((leftPozCenter +3) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      "left"
    );
    while (leftPozCenter <= 54) {
      if (
        levelMap[topPozCenter + 1][leftPozCenter + 4] === 1 ||
        levelMap[topPozCenter + 2][leftPozCenter + 4] === 1
      ) {
        right = ((leftPozCenter + 4) * topBlok) / 4;
        break;
      }
      leftPozCenter++;
    }
    pozitionRight = true;
  }
}

function shotIntersection(shootingDirection) {
  if (pozitionTop === true) {
    let missile = document.querySelector("#missile");
    if (missile !== null) {
      let missilePoz = parseFloat(missile.style.top);
      let missilePozNew = missilePoz - 8;
      if (missilePoz <= top) {
        missilePozNew = top;
        missile.style.top = `${missilePozNew}px`;
        missile.remove();
        top = 4;
        stop = false;
        pozitionTop = false;
        pozitionDown = false;
        pozitionLeft = false;
        pozitionRight = false;
      } else {
        missile.style.top = `${missilePozNew}px`;
      }
    }
  } else if (pozitionDown === true) {
    let missile = document.querySelector("#missile");
    if (missile !== null) {
      let missilePoz = parseFloat(missile.style.top);
      let missilePozNew = missilePoz + 8;
      if (missilePoz >= down) {
        missilePozNew = down;
        missile.style.top = `${missilePozNew}px`;
        missile.remove();
        down = (52 * topBlok) / 4;
        stop = false;
        pozitionTop = false;
        pozitionDown = false;
        pozitionLeft = false;
        pozitionRight = false;
      } else {
        missile.style.top = `${missilePozNew}px`;
      }
    }
  } else if (pozitionLeft === true) {
    let missile = document.querySelector("#missileLeft");
    if (missile !== null) {
      let missilePoz = parseFloat(missile.style.left);
      let missilePozNew = missilePoz - 8;
      if (missilePoz <= left) {
        missilePozNew = left;
        missile.style.left = `${missilePozNew}px`;
        missile.remove();
        left = 0;
        stop = false;
        pozitionTop = false;
        pozitionDown = false;
        pozitionLeft = false;
        pozitionRight = false;
      } else {
        missile.style.left = `${missilePozNew}px`;
      }
    }
  } else if (pozitionRight === true) {
    let missile = document.querySelector("#missileLeft");
    if (missile !== null) {
      let missilePoz = parseFloat(missile.style.left);
      let missilePozNew = missilePoz + 8;
    console.log(missilePoz)
      if (missilePoz >= right) {
        missilePozNew = right;
        missile.style.left = `${missilePozNew}px`;
        missile.remove();
        right = (52 * topBlok) / 4;
        stop = false;
        pozitionTop = false;
        pozitionDown = false;
        pozitionLeft = false;
        pozitionRight = false;
      } else {
        missile.style.left = `${missilePozNew}px`;
      }
    }
  }

  // pozitionTop = false;
  // pozitionDown = false;
  // pozitionLeft = false;
  // pozitionRight = false;
}
