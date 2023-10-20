import { tankNumAll, tanks } from "../data/tankAll.js";
import { id } from "./elements.js";
import { tank1 } from "./game.js";
import { adjustment } from "./movement.js";
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
  const keyPress = document.addEventListener("keydown", function (e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      tanks.forEach((e) => {
        e.shootingDirection = "up";
        reassignment(true, e);
        e.eventUp = "up";
      });
    } else if (e.code === "ArrowDown" || e.code === "KeyS") {
      tanks.forEach((e) => {
        e.shootingDirection = "down";
        reassignment(true, e);
        e.eventDown = "down";
      });
    } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
      tanks.forEach((e) => {
        e.shootingDirection = "left";
        reassignment(true, e);
        e.eventLeft = "left";
      });
    } else if (e.code === "ArrowRight" || e.code === "KeyD") {
      tanks.forEach((e) => {
        e.shootingDirection = "right";
        reassignment(true, e);
        e.eventRight = "right";
      });
    } else if (e.code === "Space") {
      document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
      tanks.forEach((e) => shooting(e));
    }
  });

  const keyup = document.addEventListener("keyup", function (e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      tanks.forEach((e) => {
        reassignment(false, e);
        e.eventUp = "";
      });
      adjustment("top", tank1, tanks);
    } else if (e.code === "ArrowDown" || e.code === "KeyS") {
      tanks.forEach((e) => {
        reassignment(false, e);
        e.eventDown = "";
      });
      adjustment("top", tank1, tanks);
    } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
      tanks.forEach((e) => {
        reassignment(false, e);
        e.eventLeft = "";
      });
      adjustment("left", tank1, tanks);
    } else if (e.code === "ArrowRight" || e.code === "KeyD") {
      tanks.forEach((e) => {
        reassignment(false, e);
        e.eventRight = "";
      });
      adjustment("left", tank1, tanks);
    }
  });
}
