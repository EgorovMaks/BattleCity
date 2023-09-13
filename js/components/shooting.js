import { topBlok } from "../data/data.js";
import { levelMap } from "../data/levels.js";
import { explosionAnimation, map, missile, missileTrack } from "./elements.js";
import { shootingDirection } from "./events.js";
import { tank1 } from "./game.js";
let stop = false;
let pozitionTop = false;
let pozitionDown = false;
let pozitionLeft = false;
let pozitionRight = false;
let explosion = null;
let arr = [
  [[], [], [], []],
  [[], [], [], []],
  [[], [], [], []],
  [[], [], [], []],
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
    pozitionTop = true;
  } else if (shootingDirection === "down" && stop === false) {
    stop = true;
    missile(map, [
      ((leftPozCenter + 2) * topBlok) / 4,
      ((topPozCenter + 5) * topBlok) / 4,
    ]);
    pozitionDown = true;
  } else if (shootingDirection === "left" && stop === false) {
    stop = true;
    missile(
      map,
      [((leftPozCenter - 1) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      "left"
    );
    pozitionLeft = true;
  } else if (shootingDirection === "right" && stop === false) {
    stop = true;
    missile(
      map,
      [((leftPozCenter + 4) * topBlok) / 4, ((topPozCenter + 2) * topBlok) / 4],
      "left"
    );
    pozitionRight = true;
  }
}

function shotIntersection() {
  if (pozitionTop === true) {
    shot(true, true, "up");
  } else if (pozitionDown === true) {
    shot(false, true, "down");
  } else if (pozitionLeft === true) {
    shot(true, false, "left");
  } else if (pozitionRight === true) {
    shot(false, false,"right");
  }
}

function shot(plusTrueFalse, topLeftPoz, desc) {
  let missile = topLeftPoz
    ? document.querySelector("#missile")
    : document.querySelector("#missileLeft");
  if (missile !== null) {
    let missilePozTop = parseFloat(missile.style.top);
    let missilePozLeft = parseFloat(missile.style.left);

    let missilePozNew = topLeftPoz
      ? plusTrueFalse
        ? missilePozTop - 8
        : missilePozTop + 8
      : plusTrueFalse
      ? missilePozLeft - 8
      : missilePozLeft + 8;
    let topPoz = missilePozTop / (topBlok / 4) - 1;
    let topLeft = missilePozLeft / (topBlok / 4) - 1;
    arrey(desc, topPoz, topLeft);
    // console.log(arr)
    if (
      arr[0][1] === 1 ||
      arr[0][2] === 1 ||
      arr[1][1] === 1 ||
      arr[1][2] === 1
    ) {
      console.log(arr);
      missile.remove();
      stop = false;
      pozitionTop = false;
      pozitionDown = false;
      pozitionLeft = false;
      pozitionRight = false;
    } else if (
      arr[0][1] === 19 ||
      arr[0][2] === 19 ||
      arr[1][1] === 19 ||
      arr[1][2] === 19
    ) {
      missile.remove();
      topLeftPoz
        ? plusTrueFalse
          ? explosionAnimation(4, topLeft - 1)
          : explosionAnimation(52, topLeft - 1)
        : plusTrueFalse
        ? explosionAnimation(topPoz, 4)
        : explosionAnimation(topPoz, 52);
      stop = false;
      pozitionTop = false;
      pozitionDown = false;
      pozitionLeft = false;
      pozitionRight = false;
    } else if (arr[0][1] || arr[0][2] === 0) {
      topLeftPoz
        ? (missile.style.top = `${missilePozNew}px`)
        : (missile.style.left = `${missilePozNew}px`);
    }
  }
}

function arrey(desc, topPoz, topLeft) {
  if (desc === "up") {
    arr = [
      [
        levelMap[topPoz][topLeft - 1],
        levelMap[topPoz][topLeft - 0],
        levelMap[topPoz][topLeft + 1],
        levelMap[topPoz][topLeft + 2],
      ],
      [
        levelMap[topPoz + 1][topLeft - 1],
        levelMap[topPoz + 1][topLeft - 0],
        levelMap[topPoz + 1][topLeft + 1],
        levelMap[topPoz + 1][topLeft + 2],
      ],
      [
        levelMap[topPoz + 2][topLeft - 1],
        levelMap[topPoz + 2][topLeft + 0],
        levelMap[topPoz + 2][topLeft + 1],
        levelMap[topPoz + 2][topLeft + 2],
      ],
      [
        levelMap[topPoz + 3][topLeft - 1],
        levelMap[topPoz + 3][topLeft + 0],
        levelMap[topPoz + 3][topLeft + 1],
        levelMap[topPoz + 3][topLeft + 2],
      ],
    ];
  } else if (desc === "down") {
    arr = [
      [
        levelMap[topPoz][topLeft + 2],
        levelMap[topPoz][topLeft + 1],
        levelMap[topPoz][topLeft + 0],
        levelMap[topPoz][topLeft - 1],
      ],
      [
        levelMap[topPoz - 1][topLeft + 2],
        levelMap[topPoz - 1][topLeft + 1],
        levelMap[topPoz - 1][topLeft + 0],
        levelMap[topPoz - 1][topLeft - 1],
      ],
      [
        levelMap[topPoz - 2][topLeft + 2],
        levelMap[topPoz - 2][topLeft + 1],
        levelMap[topPoz - 2][topLeft + 0],
        levelMap[topPoz - 2][topLeft - 1],
      ],
      [
        levelMap[topPoz - 3][topLeft + 2],
        levelMap[topPoz - 3][topLeft + 1],
        levelMap[topPoz - 3][topLeft + 0],
        levelMap[topPoz - 3][topLeft - 1],
      ],
    ];
  } else if (desc === "left") {
    arr = [
      [
        levelMap[topPoz + 2][topLeft],
        levelMap[topPoz + 1][topLeft],
        levelMap[topPoz + 0][topLeft],
        levelMap[topPoz - 1][topLeft],
      ],
      [
        levelMap[topPoz + 2][topLeft + 1],
        levelMap[topPoz + 1][topLeft + 1],
        levelMap[topPoz + 0][topLeft + 1],
        levelMap[topPoz - 1][topLeft + 1],
      ],
      [
        levelMap[topPoz + 2][topLeft + 2],
        levelMap[topPoz + 1][topLeft + 2],
        levelMap[topPoz - 0][topLeft + 2],
        levelMap[topPoz - 1][topLeft + 2],
      ],
      [
        levelMap[topPoz + 2][topLeft + 3],
        levelMap[topPoz + 1][topLeft + 3],
        levelMap[topPoz - 0][topLeft + 3],
        levelMap[topPoz - 1][topLeft + 3],
      ],
    ];
  } else if (desc === "right") {
    arr = [
      [
        levelMap[topPoz -1][topLeft+1],
        levelMap[topPoz + 0][topLeft+1],
        levelMap[topPoz + 1][topLeft+1],
        levelMap[topPoz +2][topLeft+1],
      ],
      [
        levelMap[topPoz -1][topLeft + 0],
        levelMap[topPoz + 0][topLeft + 0],
        levelMap[topPoz + 1][topLeft + 0],
        levelMap[topPoz +2][topLeft + 0],
      ],
      [
        levelMap[topPoz -1][topLeft -1],
        levelMap[topPoz + 0][topLeft -1],
        levelMap[topPoz - 1][topLeft -1],
        levelMap[topPoz +2][topLeft -1],
      ],
      [
        levelMap[topPoz -1][topLeft -2],
        levelMap[topPoz + 0][topLeft -2],
        levelMap[topPoz - 1][topLeft -2],
        levelMap[topPoz +2][topLeft -2],
      ],
    ];
  }
  
}
