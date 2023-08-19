import { map, createElement, createBlocks } from "./elements.js";
import { id } from "./elements.js";
import { animation } from "./movement.js";
import {
  block1,
  block111,
  block12,
  block2,
  block3,
  block4,
  block5,
  block6,
  block7,
  level1,
} from "../data/levels.js";
import { randomNumber } from "../data/data.js";

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
    ]
  );
}

let topBlok = 48;

export function levelLoad() {
  level1.forEach((element, key) => {
    element.forEach((el, k) => {
      if (el === 1) {
        createBlocks(
          block1,
          map,
          [24, 12],
          [key, k, el],
          ["./img/block/brick(8*4)-1.png", "./img/block/brick(8*4)-2.png"]
        );
      } else if (el === 2) {
        createBlocks(
          block2,
          map,
          [24, 12],
          [key, k, el],
          ["./img/block/brick(8*4)-1.png", "./img/block/brick(8*4)-2.png"]
        );
      } else if (el === 3) {
        createBlocks(
          block3,
          map,
          [24, 12],
          [key, k, el],
          ["./img/block/brick(8*4)-1.png", "./img/block/brick(8*4)-2.png"]
        );
      } else if (el === 4) {
        createBlocks(
          block4,
          map,
          [24, 12],
          [key, k, el],
          ["./img/block/brick(8*4)-1.png", "./img/block/brick(8*4)-2.png"]
        );
      } else if (el === 5) {
        createBlocks(
          block5,
          map,
          [24, 12],
          [key, k, el],
          ["./img/block/brick(8*4)-1.png", "./img/block/brick(8*4)-2.png"]
        );
      } else if (el === 6) {
        createBlocks(
          block6,
          map,
          [24, 12],
          [key, k, el],
          ["./img/block/brick(8*4)-1.png", "./img/block/brick(8*4)-2.png"]
        );
      } else if (el === 7) {
        createBlocks(
          block7,
          map,
          [24, 12],
          [key, k, el],
          ["./img/block/brick(8*4)-1.png", "./img/block/brick(8*4)-2.png"]
        );
      } else if (el === 12) {
        createBlocks(
          block12,
          map,
          [24, 24],
          [key, k, el],
          ["../img/block/concrete(8x8).png"]
        );
      } else if (el === 111) {
        createBlocks(
          block111,
          map,
          [48, 48],
          [key, k, el],
          ["./img/block/eagle.png"]
        );
      }
    });
  });
}

// export function createBlocks(top, left, width, height, num) {
//   createElement(
//     ["block", map, `${top}px`, `${left}px`, randomNumber(), "block"],
//     [`${width}px`, `${height}px`],
//     [],
//     [
//       "./img/block/brick(16x16).png",
//       "./img/block/brick(16x8).png",
//       "./img/block/brick(8x16).png",
//       "./img/block/brick(8x8).png",
//       "./img/block/concrete(16x8).png",
//       "./img/block/eagle.png",
//     ],
//     [num]
//   );
// }
