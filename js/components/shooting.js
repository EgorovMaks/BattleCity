import { topBlok } from "../data/data.js";
import { levelMap, levelMapId } from "../data/levels.js";
import { divId, map, missile, missileTrack } from "./elements.js";
import { shootingDirection } from "./events.js";
import { tank1 } from "./game.js";
let stop = false;
let top = 0;
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

  if (shootingDirection === "up") {
    while (topPozCenter >= 0) {
      if (
        levelMap[topPozCenter - 1][leftPozCenter + 1] === 1 ||
        levelMap[topPozCenter - 1][leftPozCenter + 2] === 1
      ) {
        shotMap = [
          [
            [topPozCenter - 2, leftPozCenter],
            [topPozCenter - 2, leftPozCenter + 1],
            [topPozCenter - 2, leftPozCenter + 2],
            [topPozCenter - 2, leftPozCenter + 3],
          ],
          [
            [topPozCenter - 1, leftPozCenter],
            [topPozCenter - 1, leftPozCenter + 1],
            [topPozCenter - 1, leftPozCenter + 2],
            [topPozCenter - 1, leftPozCenter + 3],
          ],
          [
            [topPozCenter, leftPozCenter],
            [topPozCenter, leftPozCenter + 1],
            [topPozCenter, leftPozCenter + 2],
            [topPozCenter, leftPozCenter + 3],
          ],
        ];
        shotMap.forEach((e) =>
          e.forEach((el) => {
            missileTrack((el[0] * topBlok) / 4, (el[1] * topBlok) / 4);
          })
        );
        break;
      }
      topPozCenter--;
    }
    pozitionTop = true;
  } else if (shootingDirection === "down") {
    while (topPozCenter <= 52) {
      if (
        levelMap[topPozCenter + 3][leftPozCenter + 1] === 1 ||
        levelMap[topPozCenter + 3][leftPozCenter + 2] === 1
      ) {
        shotMap = [
          [
            [topPozCenter + 2, leftPozCenter],
            [topPozCenter + 2, leftPozCenter + 1],
            [topPozCenter + 2, leftPozCenter + 2],
            [topPozCenter + 2, leftPozCenter + 3],
          ],
          [
            [topPozCenter + 3, leftPozCenter],
            [topPozCenter + 3, leftPozCenter + 1],
            [topPozCenter + 3, leftPozCenter + 2],
            [topPozCenter + 3, leftPozCenter + 3],
          ],
          [
            [topPozCenter + 4, leftPozCenter],
            [topPozCenter + 4, leftPozCenter + 1],
            [topPozCenter + 4, leftPozCenter + 2],
            [topPozCenter + 4, leftPozCenter + 3],
          ],
        ];
        shotMap.forEach((e) =>
          e.forEach((el) => {
            missileTrack((el[0] * topBlok) / 4, (el[1] * topBlok) / 4);
          })
        );
        break;
      }
      topPozCenter++;
    }
    pozitionDown = true;
  } else if (shootingDirection === "left") {
    while (leftPozCenter >= 0) {
      console.log(leftPozCenter);
      if (
        levelMap[topPozCenter + 1][leftPozCenter] === 1 ||
        levelMap[topPozCenter + 2][leftPozCenter] === 1
      ) {
        console.log();
        shotMap = [
          [
            [topPozCenter, leftPozCenter + 1],
            [topPozCenter + 1, leftPozCenter + 1],
            [topPozCenter + 2, leftPozCenter + 1],
            [topPozCenter + 3, leftPozCenter + 1],
          ],
          [
            [topPozCenter, leftPozCenter],
            [topPozCenter + 1, leftPozCenter],
            [topPozCenter + 2, leftPozCenter],
            [topPozCenter + 3, leftPozCenter],
          ],
          [
            [topPozCenter, leftPozCenter - 1],
            [topPozCenter + 1, leftPozCenter - 1],
            [topPozCenter + 2, leftPozCenter - 1],
            [topPozCenter + 3, leftPozCenter - 1],
          ],
        ];
        shotMap.forEach((e) =>
          e.forEach((el) => {
            missileTrack((el[0] * topBlok) / 4, (el[1] * topBlok) / 4);
          })
        );
        break;
      }
      leftPozCenter--;
    }
    pozitionLeft = true;
  } else if (shootingDirection === "right") {
    while (leftPozCenter <= 54) {
      if (
        levelMap[topPozCenter + 1][leftPozCenter + 4] === 1 ||
        levelMap[topPozCenter + 2][leftPozCenter + 4] === 1
      ) {
        console.log();
        shotMap = [
          [
            [topPozCenter, leftPozCenter + 3],
            [topPozCenter + 1, leftPozCenter + 3],
            [topPozCenter + 2, leftPozCenter + 3],
            [topPozCenter + 3, leftPozCenter + 3],
          ],
          [
            [topPozCenter, leftPozCenter + 4],
            [topPozCenter + 1, leftPozCenter + 4],
            [topPozCenter + 2, leftPozCenter + 4],
            [topPozCenter + 3, leftPozCenter + 4],
          ],
          [
            [topPozCenter, leftPozCenter + 5],
            [topPozCenter + 1, leftPozCenter + 5],
            [topPozCenter + 2, leftPozCenter + 5],
            [topPozCenter + 3, leftPozCenter + 5],
          ],
        ];
        shotMap.forEach((e) =>
          e.forEach((el) => {
            missileTrack((el[0] * topBlok) / 4, (el[1] * topBlok) / 4);
          })
        );
        break;
      }
      leftPozCenter++;
    }
    pozitionRight = true;
  }
}

function shotIntersection(shootingDirection) {
  if (pozitionTop === true) {
  } else if (pozitionDown === true) {
  } else if (pozitionLeft === true) {
  } else if (pozitionRight === true) {
  }

  // pozitionTop = false;
  // pozitionDown = false;
  // pozitionLeft = false;
  // pozitionRight = false;
}
