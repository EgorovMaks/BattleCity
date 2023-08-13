import { id } from "./elements.js";
import { eventDown, eventLeft, eventRight, eventUp } from "./events.js";

let tank1 = "";

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    gameLoop();
    clearInterval(loopStart);
  }
}, 10);

function gameLoop() {
  setInterval(function () {
    if (eventUp === "up") {
      let up = tank1.style.top;
      let up1 = parseInt(up.match(/\d+/)) - 1;
      tank1.style.top = `${up1}px`;
    } else if (eventDown === "down") {
      let up = tank1.style.top;
      let up1 = parseInt(up.match(/\d+/)) + 1;
      tank1.style.top = `${up1}px`;
    } else if (eventLeft === "left") {
      let up = tank1.style.left;
      let up1 = parseInt(up.match(/\d+/)) - 1;
      tank1.style.left = `${up1}px`;
    } else if (eventRight === "right") {
      let up = tank1.style.left;
      let up1 = parseInt(up.match(/\d+/)) + 1;
      tank1.style.left = `${up1}px`;
    }
  }, 16);
}
