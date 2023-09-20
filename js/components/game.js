// import { shootingIdMap } from "../data/levels.js";
// import { levelMapConstructorId } from "../data/levels.js";
// import { levelMapConstructorId } from "../data/levels.js";
import { topBlok } from "../data/data.js";
import { id } from "./elements.js";
import { animation } from "./movement.js";
import { movement } from "./movement.js";
import { shotFlight } from "./shooting.js";

export let windowWidth = 16;

function window() {
  const windowInnerWidth = document.documentElement.clientWidth;

  const windowInnerHeight = document.documentElement.clientHeight;
  if (windowInnerWidth < windowInnerHeight) {
    windowWidth = windowInnerWidth / 15;
  } else {
    windowWidth = windowInnerHeight / 15;
  }
}

window();

export let tank1 = "";

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    gameLoop();
    animation(tank1);
    clearInterval(loopStart);
    // levelMapConstructorId()
    // shootingIdMap();
  }
}, 10);

async function gameLoop() {
  setInterval(function () {
    // window();
    // console.log(topBlok)
    movement(tank1);
    shotFlight();
  }, 50);
}

// 58
