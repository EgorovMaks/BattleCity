import { map, createElement } from "./elements.js";
import { id } from "./elements.js";
import { animation } from "./createElFunc.js";
import { level1 } from "../data/levels.js";

let tank1 = "";

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    clearInterval(loopStart);
    animation(tank1);
  }
}, 10);

export function createTank1User() {
  createElement(
    ["tank", map, "584px", "194px", "tank1User"],

    // ["tank", map, "6%", "40%", "tank1User"],
    ["39px", "39px"],
    // ["40%", "40%"],
    [
      "./img/tank1/tank1-up.png",
      "./img/tank1/tank2-up.png",
      "./img/tank1/tank1-down.png",
      "./img/tank1/tank2-down.png",
      "./img/tank1/tank1-left.png",
      "./img/tank1/tank2-left.png",
      "./img/tank1/tank1-right.png",
      "./img/tank1/tank2-right.png",
    ],
    [],
    []
  );
}

let topBlok = 48

export function levelLoad() {
  level1.forEach((element, key) => {
    element.forEach((el, k) => {
      if (el === 1) {
        let top = key * topBlok;
        let left = k * topBlok;
        let width = topBlok;
        let height = topBlok;
        createBlocks(top, left, width, height, 1);
      } else if (el === 2) {
        let top = key * topBlok;
        let left = k * topBlok;
        let width = topBlok;
        let height = topBlok/2;
        createBlocks(top, left, width, height, 2);
      } else if (el === 3) {
        let top = key * topBlok + topBlok/2;
        let left = k * topBlok;
        let width = topBlok;
        let height = topBlok/2;
        createBlocks(top, left, width, height, 2);
      } else if (el === 4) {
        let top = key * topBlok;
        let left = k * topBlok + topBlok/2;
        let width = topBlok/2;
        let height = topBlok;
        createBlocks(top, left, width, height, 4);
      } else if (el === 5) {
        let top = key * topBlok;
        let left = k * topBlok;
        let width = topBlok/2;
        let height = topBlok;
        createBlocks(top, left, width, height, 4);
      } else if (el === 6) {
        let top = key * topBlok + topBlok/2;
        let left = k * topBlok + topBlok/2;
        let width = topBlok/2;
        let height = topBlok/2;
        createBlocks(top, left, width, height, 6);
      } else if (el === 7) {
        let top = key * topBlok + topBlok/2;
        let left = k * topBlok;
        let width = topBlok/2;
        let height = topBlok/2;
        createBlocks(top, left, width, height, 6);
      } else if (el === 12) {
        let top = key * topBlok;
        let left = k * topBlok;
        let width = topBlok;
        let height = topBlok/2;
        createBlocks(top, left, width, height, 12);
      } else if (el === 111) {
        let top = key * topBlok;
        let left = k * topBlok;
        let width = topBlok;
        let height = topBlok;
        createBlocks(top, left, width, height, 111);
      }
    });
  });
}

export function createBlocks(top, left, width, height, num) {
  createElement(
    ["block", map, `${top}px`, `${left}px`, null, "block"],
    [`${width}px`, `${height}px`],
    [],
    [
      "./img/block/brick(16x16).png",
      "./img/block/brick(16x8).png",
      "./img/block/brick(8x16).png",
      "./img/block/brick(8x8).png",
      "./img/block/concrete(16x8).png",
      "./img/block/eagle.png",
    ],
    [num]
  );
}
