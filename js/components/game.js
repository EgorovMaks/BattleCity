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

export let topLeft = {};

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    gameLoop();
    clearInterval(loopStart);
  }
}, 10);

async function gameLoop() {
  setInterval(function () {
    let up = parseFloat(tank1.style.top);
    let left = parseFloat(tank1.style.left);
    topLeft = { up: up, left: left };
    surveillance(
    );
    console.log(
      surveillanceUp,
      surveillanceDown,
      surveillanceLeft,
      surveillanceright)
    if (eventUp === "up" && surveillanceUp === false) {
      console.log("up")
      up = up - 6;
      if (up < 0) {
        up = 0;
      }
      tank1.style.top = `${up}px`;
      startDown();
      startLeft();
      startRight();
    } else if (eventDown === "down" && surveillanceDown === false) {
      console.log("down");
      up = up + 6;
      if (up > 585) {
        up = 585;
      }
      tank1.style.top = `${up}px`;

      startUp();
      startLeft();
      startRight();
    } else if (eventLeft === "left" && surveillanceLeft === false) {
      console.log("left");
      let up1 = left - 6;
      if (up1 < 0) {
        up1 = 0;
      }
      tank1.style.left = `${up1}px`;

      startUp();
      startDown();
      startRight();
    } else if (eventRight === "right" && surveillanceright === false) {
      console.log("right");
      let up1 = left + 6;
      if (up1 > 585) {
        up1 = 585;
      }
      tank1.style.left = `${up1}px`;
      startUp();
      startDown();
      startLeft();
    }
  }, 58);
}

// 58
