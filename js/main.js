import "./components/events.js";

import { createTank1User, levelLoad } from "./components/createElements.js";
// import { surveillance } from "./components/surveillance.js";
import "./components/game.js";
import { mobileManagement } from "./components/elements.js";
import { level2, mobileMap } from "./data/levels.js";
import { joystickFun } from "./components/events.js";

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  mobileManagement();
  mobileMap();
} else {
  clearInterval(joystickFun);
}

async function gameStart() {
  // surveillance()
  setTimeout(() => {
    levelLoad(level2);
    createTank1User();
  }, 2000);
  // gameLoop()
}

gameStart();
