import { id } from "./elements.js";
import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { movementUp } from "./../data/data.js";
import {
  surveillance,
  surveillanceUp,
  surveillanceDown,
  surveillanceLeft,
  surveillanceright,
  startUp,
  startDown,
  startLeft,
  startRight,
} from "./surveillance.js";

let tank1 = "";

let dataUp = {};
let dataDown = {};
let dataLeft = {};
let dataRight = {};

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    console.log(1)
    gameLoop();
    clearInterval(loopStart);
  }
}, 10);

async function gameLoop() {
  setInterval(function () {
    let up = parseFloat(tank1.style.top);
    let left = parseFloat(tank1.style.left);
    surveillance();
    if (eventUp === "up" && surveillanceUp === false) {
      up = up - 1;
      if (up < 0) {
        up = 0;
      }
      tank1.style.top = `${up}%`;
      startDown();
      startLeft();
      startRight();
    } else if (eventDown === "down" && surveillanceDown === false) {
      up = up + 1;
      if (up > 94) {
        up = 94;
      }
      tank1.style.top = `${up}%`;

      startUp();
      startLeft();
      startRight();
    } else if (eventLeft === "left" && surveillanceLeft === false) {
      let up1 = left - 1;
      if (up1 < 0) {
        up1 = 0;
      }
      tank1.style.left = `${up1}%`;

      startUp();
      startDown();
      startRight();
    } else if (eventRight === "right" && surveillanceright === false) {
      let up1 = left + 1;
      if (up1 > 93.5) {
        up1 = 93.5;
      }
      tank1.style.left = `${up1}%`;
      startUp();
      startDown();
      startLeft();
    }
  }, 58);
}

// 58
