// import { topBlok } from "../data/data.js";
// import { tanks } from "../data/tankAll.js";
import { levelMapMovement } from "../data/levels.js";
import { tankNumAllEnemies, tanks } from "../data/tankAll.js";
import { id } from "./elements.js";
import { eventStart } from "./events.js";
import { animation } from "./movement.js";
import { movement } from "./movement.js";
import { shootFlight, shooting } from "./shooting.js";

export let tank1 = "";

export let loopStart = setInterval(function () {
  if (id("#tank1User") !== null) {
    tank1 = id("#tank1User");
    gameLoop();
    tanks.forEach((e) => animation(tank1, e));
    setTimeout(() => {
      tanks.forEach((e) => {
        levelMapMovement(e);
      });
    }, 200);
    setTimeout(() => {
      tanks.forEach((e) => {
        if (e.id !== "#tank1User") {
          tanks[0].stop ? null : shooting(e);
          e.eventDown = "down";
        }
      });
    }, 2000);
    clearInterval(loopStart);
  }
}, 10);

async function gameLoop() {
  setInterval(function () {
    tanks.forEach((e) => {
      movement(e);
    });
    shootFlight();
  }, 50);
}

// 58
