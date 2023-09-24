import { levelMap } from "../data/levels.js";
import { id, widthMrdgn } from "./elements.js";
import { adjustment } from "./movement.js";
import { shooting } from "./shooting.js";
import {JoyStick} from  "./joy.js"

export let eventUp = "";
export let eventDown = "";
export let eventLeft = "";
export let eventRight = "";
export let shootingDirection = "up";

// var joy = new JoyStick("joyDiv");

let joystick = "";

let joystickFun = setInterval(function () {
  if (id("#joyDiv") !== null) {
    joystick = new JoyStick("joyDiv", {
      width: widthMrdgn,
      height: widthMrdgn,
    });
    // eventClickJoystick();
    clearInterval(joystickFun);
  }
}, 10);

// function eventClickJoystick() {


//   console.log(joystick);
//   joystick.addEventListener("touchend", (e) => {
//     e.preventDefault();
//     console.log(e);
    
//     // document.querySelectorAll("h2").forEach((e) => e.remove());
//     // let h2 = document.createElement("h2");
//     // h2.innerHTML = `id: ${e.changedTouches[0].target.classList[0]}`;
//     // document.querySelector("body").appendChild(h2);
//     // eventUp = "up";
//   });
//   joystick.addEventListener("touchleave", (e) => {
//     e.preventDefault();
//     console.log(1);
//     eventUp = "";
//   });
// }

// function multitouch(event){  
//     event.preventDefault();
//     console.log(event)
// }

function reassignment(e) {
  if (e === true) {
    if (eventDown === "down") {
      eventDown = "press";
    } else if (eventUp === "up") {
      eventUp = "press";
    } else if (eventLeft === "left") {
      eventLeft = "press";
    } else if (eventRight === "right") {
      eventRight = "press";
    }
  } else {
    if (eventDown === "press") {
      eventDown = "down";
    } else if (eventUp === "press") {
      eventUp = "up";
    } else if (eventLeft === "press") {
      eventLeft = "left";
    } else if (eventRight === "press") {
      eventRight = "right";
    }
  }
}

export const keyPress = document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowUp" || e.code === "KeyW") {
    shootingDirection = "up";
    reassignment(true);
    eventUp = "up";
  } else if (e.code === "ArrowDown" || e.code === "KeyS") {
    shootingDirection = "down";
    reassignment(true);
    eventDown = "down";
  } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
    shootingDirection = "left";
    reassignment(true);
    eventLeft = "left";
  } else if (e.code === "ArrowRight" || e.code === "KeyD") {
    shootingDirection = "right";
    reassignment(true);
    eventRight = "right";
  } else if (e.code === "Space") {
    document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
    shooting();
  }
});

export const keyup = document.addEventListener("keyup", function (e) {
  if (e.code === "ArrowUp" || e.code === "KeyW") {
    reassignment();
    eventUp = "";
    adjustment("top");
  } else if (e.code === "ArrowDown" || e.code === "KeyS") {
    reassignment();
    eventDown = "";
    adjustment("top");
  } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
    reassignment();
    eventLeft = "";
    adjustment("left");
  } else if (e.code === "ArrowRight" || e.code === "KeyD") {
    reassignment();
    eventRight = "";
    adjustment("left");
  }
});
