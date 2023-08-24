import { topBlok } from "../data/data.js";
import { levelMap } from "../data/levels.js";
import { divId, map, missile, missileTrack } from "./elements.js";
import { tank1 } from "./game.js";

export function shooting() {
  let topPozCenter = (parseFloat(tank1.style.top) / topBlok) * 4;
  let leftPozCenter = (parseFloat(tank1.style.left) / topBlok) * 4;
  // let poz = topPoz;

  while (topPozCenter >= 0) {
    let poz = [
      levelMap[topPozCenter][leftPozCenter],
      levelMap[topPozCenter][leftPozCenter + 1],
      levelMap[topPozCenter][leftPozCenter + 2],
      levelMap[topPozCenter][leftPozCenter + 3],
    ];
    if (poz[1] || poz[2] === 1) {
      let y = ((leftPozCenter + 1) * topBlok) / 4;
      let x = (topPozCenter * topBlok) / 4;
      missileTrack(x, y);
      console.log(divId)
      if (divId.classList.contains("shooting") === true) {
        divId.remove();
        document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
        levelMap[topPozCenter][leftPozCenter + 1] = 0;
      }
       y = ((leftPozCenter + 2) * topBlok) / 4;
       x = (topPozCenter * topBlok) / 4;
      missileTrack(x, y);
      console.log(divId);
      if (divId.classList.contains("shooting") === true) {
        divId.remove();
        document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
        levelMap[topPozCenter][leftPozCenter + 2] = 0;
      }
      y = ((leftPozCenter + 3) * topBlok) / 4;
      x = (topPozCenter * topBlok) / 4;
      missileTrack(x, y);
      console.log(divId);
      if (divId.classList.contains("shooting") === true) {
        divId.remove();
        document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
        levelMap[topPozCenter][leftPozCenter + 3] = 0;
      }
      y = ((leftPozCenter ) * topBlok) / 4;
      x = (topPozCenter * topBlok) / 4;
      missileTrack(x, y);
      console.log(divId);
      if (divId.classList.contains("shooting") === true) {
        divId.remove();
        document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
        levelMap[topPozCenter][leftPozCenter ] = 0;
      }
      break;
    }
    topPozCenter--;
  }
}
