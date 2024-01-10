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

export function createTank1User() {
  tanks.forEach((tank) => {
    tank.id = `#${tank.tank[0][4]}`;
    tank.desc = tank.tank[1][2];
    tank.enemies = tank.id !== "#tank1User";
    tank.randomNum = randomNumber();
    tank.invulnerability = tank.tank[1][2];
    createElement(tank.tank[0], tank.tank[1], tank.tank[2], [
      tank.randomNum,
      tank.invulnerability,
    ]);
    tank.elDOM = id(tank.id);
    tank.shootingDirection = tank.tank[1][2] ? "up" : "down";
    setInitialPermissions(tank);
    initializeTankProperties(tank);
  });
}

function setInitialPermissions(tank) {
  tank.eventUp = "";
  tank.eventDown = "";
  tank.eventLeft = "";
  tank.eventRight = "";
  tank.eventUpPermission = true;
  tank.eventDownPermission = true;
  tank.eventLeftPermission = true;
  tank.eventRightPermission = true;
  tank.stop = false;
  tank.stopMovement = false;
  tank.arr = [];
  tank.life = true;
  tank.shootingDirectionDesc = "";
  tank.tank[1][2] ? null : tankNumAllEnemies.push(tank);
  tank.tank[1][2] ? null : (tank.stopEnemiLeft = false);
  tank.tank[1][2] ? null : (tank.stopEnemiRight = false);
  tank.tank[1][2] ? null : (tank.stopEnemiDown = false);
  tank.tank[1][2] ? null : (tank.stopEnemiUp = false);
  tank.tank[1][2] ? tankNumAllPlay.push(tank) : null;
  stopMovement.push(tank.randomNum);
}

function initializeTankProperties(tank) {
  const top = parseFloat(tank.elDOM.style.top);
  const left = parseFloat(tank.elDOM.style.left);
  const topMap = (top / topBlok) * 4;
  const leftMap = (left / topBlok) * 4;

  tank.pozition = { top, left };
  tank.pozitionMap = { top: topMap, left: leftMap };
  tank.pozitionMapTop = [];
  tank.pozitionMapDown = [];
  tank.pozitionMapLeft = [];
  tank.pozitionMapRight = [];
  tank.pozDesc = "";
  tank.startGame = true;
  tank.controlPress = false;
}

export function levelLoad(arr) {
  const blockMappings = {
    1: {
      block: blocks.block1,
      size: [topBlok / 4, topBlok / 4],
      urls: ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
      classes: ["shooting"],
    },
    2: {
      block: blocks.block2,
      size: [topBlok / 4, topBlok / 4],
      urls: ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
      classes: ["shooting"],
    },
    3: {
      block: blocks.block3,
      size: [topBlok / 4, topBlok / 4],
      urls: ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
      classes: ["shooting"],
    },
    4: {
      block: blocks.block4,
      size: [topBlok / 4, topBlok / 4],
      urls: ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
      classes: ["shooting"],
    },
    5: {
      block: blocks.block5,
      size: [topBlok / 4, topBlok / 4],
      urls: ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
      classes: ["shooting"],
    },
    6: {
      block: blocks.block6,
      size: [topBlok / 4, topBlok / 4],
      urls: ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
      classes: ["shooting"],
    },
    7: {
      block: blocks.block7,
      size: [topBlok / 4, topBlok / 4],
      urls: ["./img/block/brick(4*4)-1.png", "./img/block/brick(4*4)-2.png"],
      classes: ["shooting"],
    },
    10: {
      block: blocks.block10,
      size: [topBlok / 2, topBlok / 2],
      urls: ["./img/block/concrete(8x8).png", "./img/block/concrete(8x8).png"],
      classes: [],
    },
    15: {
      block: blocks.block15,
      size: [topBlok / 2, topBlok / 2],
      urls: ["./img/grass/grass.png"],
      classes: [],
    },
    12: {
      block: blocks.block12,
      size: [topBlok / 2, topBlok / 2],
      urls: ["./img/block/concrete(8x8).png"],
      classes: [],
    },
    111: {
      block: blocks.block111,
      size: [topBlok, topBlok],
      urls: ["./img/block/eagle.png"],
      classes: [],
    },
    19: {
      block: blocks.block111,
      size: [topBlok, topBlok],
      urls: ["./img/block/eagle.png"],
      classes: ["bcgr"],
    },
  };

  arr.forEach((element, key) => {
    element.forEach((el, k) => {
      if (blockMappings[el]) {
        const { block, size, urls, classes } = blockMappings[el];
        createBlocks(block, map, size, [key, k, el], urls, classes);
      }
    });
  });
}
