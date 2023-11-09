import { map, createElement, createBlocks } from "./elements.js";
import { id } from "./elements.js";
import { blocks, level1 } from "../data/levels.js";
import { randomNumber, stopMovement, topBlok } from "../data/data.js";
import {
  tankNumAll,
  tankNumAllEnemies,
  tankNumAllPlay,
  tanks,
} from "../data/tankAll.js";
// import { tank1 } from "./game.js";

export function createTank1User() {
  tanks.forEach((e, k) => {
    e["id"] = `#${e.tank[0][4]}`;
    e.tank[1][2] ? (e["desc"] = true) : (e["desc"] = false);
    e["randomNum"] = randomNumber();
    createElement(e.tank[0], e.tank[1], e.tank[2], e.randomNum);
    e["elDOM"] = id(e.id);
    tankNumAll.push(e.randomNum);
    stopMovement.push(e.randomNum);
    e.tank[1][2]
      ? (e["shootingDirection"] = "up")
      : (e["shootingDirection"] = "down");
    e["eventUp"] = "";
    e["eventDown"] = "";
    e["eventLeft"] = "";
    e["eventRight"] = "";
    e["eventUpPermission"] = true;
    e["eventDownPermission"] = true;
    e["eventLeftPermission"] = true;
    e["eventRightPermission"] = true;
    e["stop"] = false;
    e["stopMovement"] = false;
    e["arr"] = [];
    e["life"] = true;
    e["shootingDirectionDesc"] = "";
    e.tank[1][2] ? null : tankNumAllEnemies.push(e);
    e.tank[1][2] ? tankNumAllPlay.push(e) : null;
    const top = parseFloat(e.elDOM.style.top);
    const left = parseFloat(e.elDOM.style.left);
    const topMap = (parseFloat(e.elDOM.style.top) / topBlok) * 4;
    const leftMap = (parseFloat(e.elDOM.style.left) / topBlok) * 4;
    e["pozition"] = { top: top, left: left };
    e["pozitionMap"] = { top: topMap, left: leftMap };
    e["pozitionMapTop"] = [];
    e["pozitionMapDown"] = [];
    e["pozitionMapLeft"] = [];
    e["pozitionMapRight"] = [];
    e["pozDesc"] = "";
    e["startGame"] = true;
    e["controlPress"] = false;
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
