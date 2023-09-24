import { levelMap } from "../data/levels.js";
import { id, widthMrdgn } from "./elements.js";
import { adjustment } from "./movement.js";
import { shooting } from "./shooting.js";
import { JoyStick } from "./joy.js";

export let eventUp = "";
export let eventDown = "";
export let eventLeft = "";
export let eventRight = "";
export let shootingDirection = "up";

// var joy = new JoyStick("joyDiv");

let joystick = "";

let joystickFun = setInterval(function () {
  if (id("#joyDiv") !== null) {
    joystick = new JoyStick(
      "joyDiv",
      {
        width: widthMrdgn,
        height: widthMrdgn,
        internalStrokeColor: "#d9e4f5",
        internalFillColor: "#C0C0C0",
        externalStrokeColor: "#C0C0C0",
      },
      function (stickData) {
        joystick = stickData.cardinalDirection;
        console.log(stickData.y);
        if (stickData.y > 80) {
          joystick = "N";
        } else if (stickData.y < -80) {
          joystick = "S";
        } else if (stickData.x < -80) {
          joystick = "W";
        } else if (stickData.x > 80) {
          joystick = "E";
        }

        if (joystick === "N") {
          shootingDirection = "up";
          reassignment(true);
          eventUp = "up";
        } else if (joystick === "S") {
          shootingDirection = "down";
          reassignment(true);
          eventDown = "down";
        } else if (joystick === "W") {
          shootingDirection = "left";
          reassignment(true);
          eventLeft = "left";
        } else if (joystick === "E") {
          shootingDirection = "right";
          reassignment(true);
          eventRight = "right";
        } else if (joystick === "C") {
          eventUp = "";
          eventDown = "";
          eventLeft = "";
          eventRight = "";
        }
      }
    );

    // eventClickJoystick();
    clearInterval(joystickFun);
  }
}, 10);

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
