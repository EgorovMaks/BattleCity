// import { topBlok } from "../data/data.js";
// import { tanks } from "../data/tankAll.js";
import { arrTanksAdd } from "../data/tankAll.js";
import { id } from "./elements.js";
import { eventStart } from "./events.js";
import { animation } from "./movement.js";
import { movement } from "./movement.js";
import { shotFlight } from "./shooting.js";

export let tank1 = "";

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    arrTanksAdd();
    gameLoop();
    animation(tank1);
    eventStart();
    clearInterval(loopStart);
  }
}, 10);

async function gameLoop() {
  setInterval(function () {
    movement(tank1);
    shotFlight();
  }, 50);
}



// 58
