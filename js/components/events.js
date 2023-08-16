import { movementUp } from "../data/data.js";
import { adjustmentUp, dataAdjustment, startDown, startLeft, startRight, startUp } from "./surveillance.js";

export let eventUp = "";
export let eventDown = "";
export let eventLeft = "";
export let eventRight = "";

export const keyPress = document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    eventUp = "up";
  } else if (e.key === "ArrowDown") {
    eventDown = "down";
  } else if (e.key === "ArrowLeft") {
    eventLeft = "left";
  } else if (e.key === "ArrowRight") {
    eventRight = "right";
  }
});

export const keyup = document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp") {
    eventUp = "";
    adjustmentUp([dataAdjustment, ".adjustmentUpLEFT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentUpRIGHT"], [true, true]);
  } else if (e.key === "ArrowDown") {
    eventDown = "";
    adjustmentUp([dataAdjustment, ".adjustmentDounlLEFT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounRIGHT"], [false, true]);
  } else if (e.key === "ArrowLeft") {
    eventLeft = "";
    adjustmentUp([dataAdjustment, ".adjustmentLeftUP"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftDOWN"], [true, false]);
  } else if (e.key === "ArrowRight") {
    eventRight = "";
    adjustmentUp([dataAdjustment, ".adjustmentRightUP"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentRightDOWN"], [false, false]);
  }

      startUp();
      startDown();
      startLeft();
      startRight();
});

// movementUp(dataDown, ".trackDownTank");
// movementUp(dataLeft, ".trackLeftTank");
// movementUp(dataRight, ".trackRightTank");
