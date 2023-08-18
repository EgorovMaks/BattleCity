import { movementUp } from "../data/data.js";
import { shooting } from "./shooting.js";
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
}

export const keyPress = document.addEventListener("keydown", function (e) {
  // console.log(e)
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "ц") {
    movement();
    eventUp = "up";
  } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "ы") {
    movement();
    eventDown = "down";
  } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "ф") {
    movement();
    eventLeft = "left";
  } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "в") {
    movement();
    eventRight = "right";
  }
  else if(e.key===" "){
    shooting()
  }
});

export const keyup = document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp" || e.key === "w" || e.key === "ц") {
    eventUp = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentUpLEFT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentUpRIGHT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounlLEFT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounRIGHT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentRightUP"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentRightDOWN"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftUP"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftDOWN"], [true, false]);
  } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "ы") {
    eventDown = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentUpLEFT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentUpRIGHT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounlLEFT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounRIGHT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentRightUP"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentRightDOWN"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftUP"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftDOWN"], [true, false]);
  } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "ф") {
    eventLeft = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentRightUP"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentRightDOWN"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftUP"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftDOWN"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentUpLEFT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentUpRIGHT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounlLEFT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounRIGHT"], [false, true]);
  } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "в") {
    eventRight = "";
    movement2();
    adjustmentUp([dataAdjustment, ".adjustmentRightUP"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentRightDOWN"], [false, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftUP"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentLeftDOWN"], [true, false]);
    adjustmentUp([dataAdjustment, ".adjustmentUpLEFT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentUpRIGHT"], [true, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounlLEFT"], [false, true]);
    adjustmentUp([dataAdjustment, ".adjustmentDounRIGHT"], [false, true]);
  }
  setInterval(function () {
    startUp();
    startDown();
    startLeft();
    startRight();
  }, 15);
});
