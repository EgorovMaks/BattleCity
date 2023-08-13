import { keyPress } from "./components/events.js";
import { createTank1User } from "./components/createElements.js";
import "./components/game.js";

function gameStart() {
  createTank1User();
  // gameLoop()
}

gameStart();

window.onload = function () {
}
