import { map, createElement, createBlocks } from "./elements.js";
import { id } from "./elements.js";
import { animation } from "./movement.js";
import { blocks, level1 } from "../data/levels.js";
import { randomNumber, topBlok } from "../data/data.js";
import { tankNumAll, tanks } from "../data/tankAll.js";
// import { tank1 } from "./game.js";

export function createTank1User() {
  tanks.forEach((e, k) => {
    e["id"] = `#${e.tank[0][4]}`;
    e.tank[1][2] ? (e["desc"] = true) : (e["desc"] = false);
    e["randomNum"] = randomNumber();
    createElement(e.tank[0], e.tank[1], e.tank[2], e.randomNum);
    e["elDOM"] = id(e.id);
    tankNumAll.push(e.randomNum);
    e.tank[1][2]
      ? (e["shootingDirection"] = "up")
      : (e["shootingDirection"] = "down");
    e["eventUp"] = "";
    e["eventDown"] = "";
    e["eventLeft"] = "";
    e["eventRight"] = "";
    e["stop"] = false;
    e["pozitionTop"] = false;
    e["pozitionDown"] = false;
    e["pozitionLeft"] = false;
    e["pozitionRight"] = false;
    e["arr"] = [];
    // console.log(e);
  });
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
      } else if (el === 19) {
        createBlocks(
          blocks.block111,
          map,
          [topBlok, topBlok],
          [key, k, el],
          ["./img/block/eagle.png"],
          ["bcgr"]
        );
      }
    });
  });
}
