import { map, createElement, createBlocks } from "./elements.js";
import { id } from "./elements.js";
import { animation } from "./movement.js";
import { blocks, level1 } from "../data/levels.js";
import { randomNumber, topBlok } from "../data/data.js";

export function createTank1User() {
  createElement(
    ["tank", map, `${topBlok * 12}px`, `${topBlok * 4}px`, "tank1User"],

    // ["tank", map, "6%", "40%", "tank1User"],
    [`${topBlok}px`, `${topBlok}px`],
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

export function levelLoad() {
  level1.forEach((element, key) => {
    element.forEach((el, k) => {
      if (el === 1) {
        createBlocks(
          blocks.block1,
          map,
          [topBlok / 4, topBlok / 4],
          [key, k, el],
          ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
          ["shooting"]
        );
      } else if (el === 2) {
        createBlocks(
          blocks.block2,
          map,
          [topBlok / 4, topBlok / 4],
          [key, k, el],
          ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
          ["shooting"]
        );
      } else if (el === 3) {
        createBlocks(
          blocks.block3,
          map,
          [topBlok / 4, topBlok / 4],
          [key, k, el],
          ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
          ["shooting"]
        );
      } else if (el === 4) {
        createBlocks(
          blocks.block4,
          map,
          [topBlok / 4, topBlok / 4],
          [key, k, el],
          ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
          ["shooting"]
        );
      } else if (el === 5) {
        createBlocks(
          blocks.block5,
          map,
          [topBlok / 4, topBlok / 4],
          [key, k, el],
          ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
          ["shooting"]
        );
      } else if (el === 6) {
        createBlocks(
          blocks.block6,
          map,
          [topBlok / 4, topBlok / 4],
          [key, k, el],
          ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
          ["shooting"]
        );
      } else if (el === 7) {
        createBlocks(
          blocks.block7,
          map,
          [topBlok / 4, topBlok / 4],
          [key, k, el],
          ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
          ["shooting"]
        );
      } else if (el === 12) {
        createBlocks(
          blocks.block12,
          map,
          [topBlok / 2, topBlok / 2],
          [key, k, el],
          ["./img/block/concrete(8x8).png"],
          []
        );
      } else if (el === 111) {
        createBlocks(
          blocks.block111,
          map,
          [topBlok, topBlok],
          [key, k, el],
          ["./img/block/eagle.png"],
          []
        );
      }
    });
  });
}
