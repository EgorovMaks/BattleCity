// import { shootingIdMap } from "../data/levels.js";
// import { levelMapConstructorId } from "../data/levels.js";
import { levelMapConstructorId } from "../data/levels.js";
import { id } from "./elements.js";
import { animation } from "./movement.js";

import { movement } from "./movement.js";
import { shotFlight } from "./shooting.js";

export let tank1 = "";

export let loopStart = setInterval(function () {

  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    gameLoop();
    animation(tank1);
    clearInterval(loopStart);
    levelMapConstructorId()
    // shootingIdMap();
  }
}, 10);

async function gameLoop() {
  setInterval(function () {
    movement(tank1);
    shotFlight()
  }, 50);
}

// 58
