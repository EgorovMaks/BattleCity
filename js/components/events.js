import { getRandomArbitrary } from "../data/data.js";
import { levelMap, levelMapIdBloks } from "../data/levels.js";
import { tankNumAll, tanks } from "../data/tankAll.js";
import { id } from "./elements.js";
import { tank1 } from "./game.js";
import { adjustment } from "./movement.js";
// import { correction } from "./movement.js";
// import { adjustment } from "./movement.js";
import { shooting } from "./shooting.js";
// import { JoyStick } from "./joy.js";

export let shootingDirection = "up";

export let joystickFun = setInterval(function () {
  if (id("#joystickHandle") !== null) {
    const joystick = document.querySelector(".joystick");
    const joystickHandle = document.getElementById("joystickHandle");

    let isDragging = false;

    // Рассчитываем центр `.joystick`
    const joystickCenterX = joystick.offsetWidth / 2;
    const joystickCenterY = joystick.offsetHeight / 2;

    joystickHandle.style.left = `${joystickCenterX}px`;
    joystickHandle.style.top = `${joystickCenterY}px`;

    joystickHandle.addEventListener("touchstart", (e) => {
      isDragging = true;
      joystickHandle.style.transition = "none";
    });

    document.addEventListener("touchmove", (e) => {
      if (isDragging) {
        const touch = e.touches[0];

        // Рассчитываем смещение относительно центра `.joystick`
        const offsetX =
          touch.clientX -
          joystick.getBoundingClientRect().left -
          joystickCenterX;
        const offsetY =
          touch.clientY -
          joystick.getBoundingClientRect().top -
          joystickCenterY;
        console.log(offsetX, offsetY);

        if (offsetX < -20) {
          shootingDirection = "left";
          reassignment(true);
          eventLeft = "left";
        } else if (offsetX > 20) {
          shootingDirection = "right";
          reassignment(true);
          eventRight = "right";
        } else if (offsetY < -20) {
          shootingDirection = "up";
          reassignment(true);
          eventUp = "up";
        } else if (offsetY > 20) {
          shootingDirection = "down";
          reassignment(true);
          eventDown = "down";
        }
        const maxDistance = joystick.offsetWidth / 2;

        // Ограничиваем расстояние
        const distance = Math.min(
          maxDistance,
          Math.sqrt(offsetX ** 2 + offsetY ** 2)
        );

        // Рассчитываем угол
        const angle = Math.atan2(offsetY, offsetX);

        // Преобразуем координаты в пикселях от центра
        const xPixels = distance * Math.cos(angle);
        const yPixels = distance * Math.sin(angle);

        joystickHandle.style.left = `${joystickCenterX + xPixels}px`;
        joystickHandle.style.top = `${joystickCenterY + yPixels}px`;
      }
    });

    document.addEventListener("touchend", () => {
      if (isDragging) {
        isDragging = false;
        reassignment(true);
        joystickHandle.style.transition = "left 0.2s ease, top 0.2s ease";
        joystickHandle.style.left = `${joystickCenterX}px`;
        joystickHandle.style.top = `${joystickCenterY}px`;
      }
    });
    let shot = document.querySelector("#joyDivBtn");
    shot.addEventListener("click", (e) => {
      document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
      shooting();
    });
    clearInterval(joystickFun);
  }
}, 10);

function reassignment(e, tank) {
  if (e === true) {
    if (tank.eventDown === "down") {
      tank.eventDown = "press";
    } else if (tank.eventUp === "up") {
      tank.eventUp = "press";
    } else if (tank.eventLeft === "left") {
      tank.eventLeft = "press";
    } else if (tank.eventRight === "right") {
      tank.eventRight = "press";
    }
  } else {
    if (tank.eventDown === "press") {
      tank.eventDown = "down";
    } else if (tank.eventUp === "press") {
      tank.eventUp = "up";
    } else if (tank.eventLeft === "press") {
      tank.eventLeft = "left";
    } else if (tank.eventRight === "press") {
      tank.eventRight = "right";
    }
  }
}

export function eventStart(params) {
  document.addEventListener("keydown", handleKeyPress);
  document.addEventListener("keyup", handleKeyUp);
}

function handleKeyPress(e) {
  const { code } = e;
  const tank = tanks[0];

  switch (code) {
    case "ArrowUp":
    case "KeyW":
      handleMovementPress(tank, "up");
      break;
    case "ArrowDown":
    case "KeyS":
      handleMovementPress(tank, "down");
      break;
    case "ArrowLeft":
    case "KeyA":
      handleMovementPress(tank, "left");
      break;
    case "ArrowRight":
    case "KeyD":
      handleMovementPress(tank, "right");
      break;
    case "KeyP":
      console.log(tank);
      break;
    case "Space":
      tank.stop ? null : shooting(tank);
      break;
    default:
      break;
  }
}

function handleKeyUp(e) {
  const { code } = e;
  const tank = tanks[0];

  switch (code) {
    case "ArrowUp":
    case "KeyW":
      handleMovementRelease(tank, "up");
      break;
    case "ArrowDown":
    case "KeyS":
      handleMovementRelease(tank, "down");
      break;
    case "ArrowLeft":
    case "KeyA":
      handleMovementRelease(tank, "left");
      break;
    case "ArrowRight":
    case "KeyD":
      handleMovementRelease(tank, "right");
      break;
    default:
      break;
  }
}

function handleMovementPress(tank, direction) {
  reassignment(true, tank);
  tank[`event${direction.charAt(0).toUpperCase()}${direction.slice(1)}`] =
    direction;
}

function handleMovementRelease(tank, direction) {
  reassignment(false, tank);
  adjustment(tank, direction);
  tank[`event${direction.charAt(0).toUpperCase()}${direction.slice(1)}`] = "";
  tank.controlPress = false;
}



