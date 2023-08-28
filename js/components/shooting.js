import { topBlok } from "../data/data.js";
import { levelMap } from "../data/levels.js";
import { divId, map, missile, missileTrack } from "./elements.js";
import { shootingDirection } from "./events.js";
import { tank1 } from "./game.js";
let stop = false;
let top = 0;
let shotMap = [
  [[1], [1], [1]],
  [[1], [1], [1]],
  [[1], [1], [1]],
];

export function shooting() {
  let topPozCenter = (parseFloat(tank1.style.top) / topBlok) * 4;
  let leftPozCenter = (parseFloat(tank1.style.left) / topBlok) * 4;
  if (shootingDirection === "up") {
    if (stop === false) {
      missile(map, [(leftPozCenter + 2) * 4, topPozCenter * 4]);
    }
    stop = true;
    while (topPozCenter >= 0) {
      let shot = [];
      if (topPozCenter !== 0 && topPozCenter % 1 === 0) {
        shot = [
          levelMap[topPozCenter - 1][leftPozCenter + 1],
          levelMap[topPozCenter - 1][leftPozCenter + 2],
        ];
      }
      if (shot[0] === 1 || shot[1] === 1) {
        shotMap = [
          [
            // [topPozCenter - 2, leftPozCenter + 1],
            // [topPozCenter - 2, leftPozCenter + 2],
          ],
          [
            [topPozCenter - 1, leftPozCenter],
            [topPozCenter - 1, leftPozCenter + 1],
            [topPozCenter - 1, leftPozCenter + 2],
            [topPozCenter - 1, leftPozCenter + 3],
          ],
          [
            // [topPozCenter, leftPozCenter],
            // [topPozCenter, leftPozCenter + 1],
            // [topPozCenter, leftPozCenter + 2],
            // [topPozCenter, leftPozCenter + 3],
          ],
        ];
        if (stop === true) {
          // console.log(topPozCenter);
          top = topPozCenter * 4;
        }
        break;
      }
      topPozCenter--;
      top = 0;
    }
  }
}

export function shotFlight(params) {
  if (stop === true && shootingDirection === "up") {
    let shotVizible = document.querySelector("#missile");
    let shotVizibleTop = parseFloat(shotVizible.style.top);
    if (shotVizibleTop <= top) {
      shotVizible.remove();
      stop = false;
      if (
        levelMap[shotMap[1][1][0]][shotMap[1][1][1]] === 1 ||
        levelMap[shotMap[1][2][0]][shotMap[1][2][1]] === 1
      ) {
        document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
        shotMap.forEach((e) => {
          e.forEach((el) => {
            let x = el[0] * 4;
            let y = el[1] * 4;
            missileTrack(x, y);
            levelMap[el[0]][el[1]] = 0;
          });
        });
        document.querySelectorAll("#missileTrack").forEach((e) => {
          let x = e.getBoundingClientRect().x;
          let y = e.getBoundingClientRect().y;
          let divs = document.elementFromPoint(x, y);
          if (divs.classList.contains("shooting")) {
            divs.remove();
          }
        });
      }
      shotMap = [
        [[1], [1], [1]],
        [[1], [1], [1]],
        [[1], [1], [1]],
      ];
    }
    shotVizible.style.top = `${shotVizibleTop - 8}px`;
  }
}
