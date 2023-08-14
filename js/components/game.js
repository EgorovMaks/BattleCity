import { id } from "./elements.js";
import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";
import { movementUp } from "./../data/data.js";
import { surveillance, surveillanceUp, stop } from "./surveillance.js";

let tank1 = "";

let dataUp = {};
let dataDown = {};
let dataLeft = {};
let dataRight = {};

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
      surveillance();
    if (eventUp === "up" && surveillanceUp === false) {
      up = up - 1;
      if (up < 0) {
        up = 0;
      }
      tank1.style.top = `${up}%`;
    } else if (eventDown === "down") {
      up = up + 1;
      if (up > 94) {
        up = 94;
      }
      tank1.style.top = `${up}%`;

      stop();
    } else if (eventLeft === "left") {
      let up1 = left - 1;
      if (up1 < 0) {
        up1 = 0;
      }
      tank1.style.left = `${up1}%`;

      stop();
    } else if (eventRight === "right") {
      let up1 = left + 1;
      if (up1 > 93.5) {
        up1 = 93.5;
      }
      tank1.style.left = `${up1}%`;

      stop();
    }
  }, 58);
}
