import { getRandomArbitrary } from "../data/data.js";
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
      tanks[0].shootingDirection = "up";
      reassignment(true, e);
      tanks[0].eventUp = "up";
    } else if (e.code === "ArrowDown" || e.code === "KeyS") {
      tanks[0].shootingDirection = "down";
      reassignment(true, e);
      tanks[0].eventDown = "down";
    } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
      tanks[0].shootingDirection = "left";
      reassignment(true, e);
      tanks[0].eventLeft = "left";
    } else if (e.code === "ArrowRight" || e.code === "KeyD") {
      tanks[0].shootingDirection = "right";
      reassignment(true, e);
      tanks[0].eventRight = "right";
    } else if (e.code === "Space") {
      document.querySelectorAll("#missileTrack").forEach((e) => e.remove());
      tanks.forEach((e) => shooting(e));
    }
  });

  const keyup = document.addEventListener("keyup", function (e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      reassignment(false, tanks[0]);
      tanks[0].eventUp = "";
      adjustment("top", tank1);
    } else if (e.code === "ArrowDown" || e.code === "KeyS") {
      reassignment(false, tanks[0]);
      tanks[0].eventDown = "";
      adjustment("top", tank1);
    } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
      reassignment(false, tanks[0]);
      tanks[0].eventLeft = "";
      adjustment("left", tank1);
    } else if (e.code === "ArrowRight" || e.code === "KeyD") {
      reassignment(false, tanks[0]);
      tanks[0].eventRight = "";
      adjustment("left", tank1);
    }
  });
}

export function enemyMovement(tank) {
  const desc = ["up", "down", "left", "right"];
  enemyMovementTankAll(desc, tank);
}

function enemyMovementTankAll(desc, tank) {
  tanks.forEach((e, k) => {
    if (e.id !== "#tank1User") {
      const random = getRandomArbitrary(0, desc.length - 1);
      if (desc[random] === "up") {
        // adjustment("top", e.elDOM, tanks);
        e.eventUp = "up";
        e.eventDown = "";
        e.eventLeft = "";
        e.eventRight = "";
        e.shootingDirection = "up";
      } else if (desc[random] === "down") {
        // adjustment("top", e.elDOM, tanks);
        e.eventUp = "";
        e.eventDown = "down";
        e.eventLeft = "";
        e.eventRight = "";
        e.shootingDirection = "down";
      } else if (desc[random] === "left") {
        // adjustment("left", e.elDOM, tanks);
        e.eventUp = "";
        e.eventDown = "";
        e.eventLeft = "left";
        e.eventRight = "";
        e.shootingDirection = "left";
      } else if (desc[random] === "right") {
        // adjustment("left", e.elDOM, tanks);
        e.eventUp = "";
        e.eventDown = "";
        e.eventLeft = "";
        e.eventRight = "right";
        e.shootingDirection = "right";
      }
    }
  });

      // adjustment("left", tank1, tanks);
      // adjustment("top", tank1, tanks);
}

export function enemyMovementTank(tank) {
  const desc = ["up", "down", "left", "right"];
  if (tank.id !== "#tank1User") {
    const random = getRandomArbitrary(0, desc.length - 1);
    if (desc[random] === "up") {
      // adjustment("top", tank.elDOM);
      tank.eventUp = "up";
      tank.eventDown = "";
      tank.eventLeft = "";
      tank.eventRight = "";
      tank.shootingDirection = "up";
    } else if (desc[random] === "down") {
      // adjustment("top", tank.elDOM);
      tank.eventUp = "";
      tank.eventDown = "down";
      tank.eventLeft = "";
      tank.eventRight = "";
      tank.shootingDirection = "down";
    } else if (desc[random] === "left") {
      // adjustment("left", tank.elDOM);
      tank.eventUp = "";
      tank.eventDown = "";
      tank.eventLeft = "left";
      tank.eventRight = "";
      tank.shootingDirection = "left";
    } else if (desc[random] === "right") {
      // adjustment("left", tank.elDOM);
      tank.eventUp = "";
      tank.eventDown = "";
      tank.eventLeft = "";
      tank.eventRight = "right";
      tank.shootingDirection = "right";
    }
  }
}
// export function getRandomArbitrary(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
