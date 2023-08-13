import { keyPress } from "./components/events.js";
import { createTank1User, levelLoad } from "./components/createElements.js";
import "./components/game.js";

function gameStart() {
  createTank1User();
  levelLoad();
  // gameLoop()
}

gameStart();
