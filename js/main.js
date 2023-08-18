import  "./components/events.js";

import { createTank1User, levelLoad } from "./components/createElements.js";
// import { surveillance } from "./components/surveillance.js";
import "./components/game.js";

async function gameStart() {
  createTank1User();
  // surveillance()
  levelLoad();
  // gameLoop()
}

gameStart();
