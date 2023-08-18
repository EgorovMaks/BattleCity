import { movementUp } from "../data/data.js";
import {
  adjustmentUp,
  dataAdjustment,
  startDown,
  startLeft,
  startRight,
  startUp,
} from "./surveillance.js";

export let eventUp = "";
export let eventDown = "";
export let eventLeft = "";
export let eventRight = "";

function movement() {
  if (eventUp === "up") {
    eventUp = "press";
  } else if (eventDown === "down") {
    eventDown = "press";
  } else if (eventLeft === "left") {
    eventLeft = "press";
  } else if (eventRight === "right") {
    eventRight = "press";
  }
}

function movement2() {
  if (eventUp === "press") {
    eventUp = "up";
  } else if (eventDown === "press") {
    eventDown = "down";
  } else if (eventLeft === "press") {
    eventLeft = "left";
  } else if (eventRight === "press") {
    eventRight = "right";
  }
  console.log(eventUp);
}

export const keyPress = document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    movement();
    eventUp = "up";
  } else if (e.key === "ArrowDown") {
    movement();
    eventDown = "down";
  } else if (e.key === "ArrowLeft") {
    movement();
    eventLeft = "left";
  } else if (e.key === "ArrowRight") {
    movement();
    eventRight = "right";
  }
});

export const keyup = document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp") {
    eventUp = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentUpLEFT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentUpRIGHT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounlLEFT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounRIGHT"], [false, true]);
  } else if (e.key === "ArrowDown") {
    eventDown = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentUpLEFT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentUpRIGHT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounlLEFT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounRIGHT"], [false, true]);
  } else if (e.key === "ArrowLeft") {
    eventLeft = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentRightUP"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentRightDOWN"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftUP"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftDOWN"], [true, false]);
  } else if (e.key === "ArrowRight") {
    eventRight = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentRightUP"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentRightDOWN"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftUP"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftDOWN"], [true, false]);
  }
  setInterval(function () {
    startUp();
    startDown();
    startLeft();
    startRight();
  }, 15);
});
