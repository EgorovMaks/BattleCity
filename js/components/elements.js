import { randomNumber, topBlok } from "../data/data.js";
import { heightMap } from "../data/data.js";
import { levelMapIdBloks } from "../data/levels.js";
import { tanks } from "../data/tankAll.js";
import { eventStart } from "./events.js";
// import { enemyMovement } from "./events.js";

export const map = document.querySelector("#BattleCity");
map.style.cssText = `width: ${topBlok * 15}px; height: ${topBlok * 15}px`;

export function createElement(
  [type, canvas, top, left, id, className],
  [width, height, desc],
  [urlUp, urlUp2, urlDown, urlDown2, urlLeft, urlLeft2, urlRight, urlRight2],
  [num, invulnerability]
) {
  const div = document.createElement("div");
  createTankAnim(top, left, div, invulnerability);
  div.id = `${id}`;
  div.classList.add(className, "tank", "none");
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;

  const imageClasses = desc
    ? { active: "active", inactive: null }
    : { active: null, inactive: "active" };

  div.innerHTML = `
  <img src="./img/${urlUp}/tank1-up.png" alt=${type} class="${imageClasses.active} up ${type}" style="width: 100%; height:  100%;"> 
  <img src="./img/${urlUp2}/tank2-up.png" alt=${type} class="up ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlDown}/tank1-down.png" alt=${type} class="${imageClasses.inactive} down ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlDown2}/tank2-down.png" alt=${type} class="down ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlLeft}/tank1-left.png" alt=${type} class="left ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlLeft2}/tank2-left.png" alt=${type} class="left ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlRight}/tank1-right.png" alt=${type} class="right ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlRight2}/tank2-right.png" alt=${type} class="right ${type}" style="width: 100%; height:  100%;">`;

  const newDiv = canvas.appendChild(div);
}

const tankAnim = document.createElement("div");
const invulnerabilityDiv = document.createElement("div");
(() => {
  tankAnim.id = "createTank";
  tankAnim.classList.add("createTank");

  tankAnim.innerHTML = `
  <img src= "./img/createTankAnim/img-1.png" alt="img" class="createTankAnim activeAnim" style="width: 100%; height:  100%;">
  <img src= "./img/createTankAnim/img-2.png" alt="img" class="createTankAnim noneAnim" style="width: 100%; height:  100%;">
  <img src= "./img/createTankAnim/img-3.png" alt="img" class="createTankAnim noneAnim" style="width: 100%; height:  100%;">
  <img src= "./img/createTankAnim/img-4.png" alt="img" class="createTankAnim noneAnim" style="width: 100%; height:  100%;">`;

  invulnerabilityDiv.classList.add("invulnerability");

  invulnerabilityDiv.innerHTML = `<img src= "./img/invulnerability/invulnerability-1.png" alt="img" class="invulnerabilityActive invulnerabilityDivinvulnerabilityImg" style="width: 100%; height:  100%;">
<img src= "./img/invulnerability/invulnerability-2.png" alt="img" class="invulnerabilityNoActive invulnerabilityDivinvulnerabilityImg" style="width: 100%; height:  100%;">`;
})();

function invulnerability(tank) {
  const elInvul = [];
  tank.appendChild(invulnerabilityDiv);
  invulnerabilityDiv.childNodes.forEach((e) => {
    if (e.classList !== undefined) {
      elInvul.push(e);
    }
  });
  let loopAnim = setInterval(() => {
    elInvul.forEach((e) => {
      e.classList.toggle("invulnerabilityActive");
      e.classList.toggle("invulnerabilityNoActive");
    });
  }, 50);
  setTimeout(() => {
    const img = document.querySelector(".invulnerabilityActive");
    img.classList.toggle("invulnerabilityActive");
    img.classList.toggle("invulnerabilityNoActive");
    clearInterval(loopAnim);
    tanks.forEach((e) => {
      console.log(e);
      if (`#${tank.id}` === e.id) {
        e.invulnerability = false;
      }
    });
  }, 4000);
}

export async function createTankAnim(top, left, tank, invulnerabilityConst) {
  const num = 10;
  const tankClone = tankAnim.cloneNode(true);
  const classRand = `id${randomNumber()}`;
  const tankChild = tankClone.childNodes;

  tankChild.forEach((e) => {
    if (e.classList !== undefined) {
      e.id = classRand;
    }
  });

  tankClone.style.cssText = `width: ${topBlok}px; height: ${topBlok}px; top: ${top}; left: ${left};`;
  let newDiv = map.appendChild(tankClone);
  const anim = document.querySelectorAll(`#${classRand}`);

  for (let i = 0; i < 12; i++) {
    await delayFunc(num * i);
    anim[i % 4].classList.remove("activeAnim");
    anim[(i + 1) % 4].classList.add("activeAnim");
  }

  await delayFunc(num * 12);
  anim.forEach((e) => {
    e.classList.remove("activeAnim");
  });
  eventStart();

  if (invulnerabilityConst === true) {
    invulnerability(tank);
  }

  tank.classList.remove("none");
}

export function createBlocks(
  array,
  canvas,
  [width, height],
  [top, left, element],
  [url, url2],
  [className]
) {
  function createBlockHTML(
    [id, className, top],
    [left, width, height, imageUrl]
  ) {
    return `
    <div id=${id} class="block ${className}" style="left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px;">
      <img src=${imageUrl} alt="img" class="active" style="width: 100%; height: 100%;">
    </div>
  `;
  }
  const div = document.createElement("div");
  const topPozBox = top * topBlok;
  const leftPozBox = left * topBlok;

  div.classList.add("wrap");
  div.classList.add(`box${element}`);
  div.style.cssText = `width: ${topBlok}px; height: ${topBlok}px; top: ${topPozBox}px; left: ${leftPozBox}px;`;

  array.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === 1 || cell === 2) {
        const id = `id${randomNumber()}id`;
        const topPoz = rowIndex * height;
        const leftPoz = colIndex * width;
        const imageUrl = cell === 1 ? url : url2;

        div.innerHTML += createBlockHTML(
          [id, className, topPoz],
          [leftPoz, width, height, imageUrl]
        );

        if (className === "shooting") {
          const x = ((topPozBox + topPoz) / topBlok) * 4;
          const y = ((leftPozBox + leftPoz) / topBlok) * 4;
          levelMapIdBloks[x][y] = id;
        }
      }
    });
  });

  canvas.appendChild(div);
}

export function missile(tank, missileDate) {
  const div = document.createElement("div");
  const { idShoot, desc, pozTop, pozLeft } = missileDate;
  const widthHeight = topBlok / 5.3333;
  const heightWidth = topBlok / 4;
  const top = (pozTop * topBlok) / 4;
  const left = (pozLeft * topBlok) / 4;

  div.id = idShoot;
  div.style.cssText = `width: ${widthHeight}px; height: ${heightWidth}px; top: ${top}px; left: ${left}px;`;

  const directionClasses = {
    up: "shootUp",
    down: "shootDown",
    left: "shootLeft",
    right: "shootRight",
  };

  div.classList.add(directionClasses[desc]);
  div.innerHTML = `<img src="./img/shot/${directionClasses[desc]}.png" alt="img" class="active"  style="width: 100%; height:  100%;">`;

  map.appendChild(div);
}
export let divId = "";

export function id(i) {
  return document.querySelector(i);
}

export function explosionAnimation([top, left], desc) {
  const EXPLOSION_IMAGES = [
    "./img/shot/shot-1.png",
    "./img/shot/shot-2.png",
    "./img/shot/shot-3.png",
    "./img/shot/shot-4.png",
    "./img/shot/shot-5.png",
  ];
  const EXPLOSION_DURATION_SHORT = 80;
  const EXPLOSION_DURATION_LONG = 200;
  const topPOz = top * (topBlok / 4);
  const leftPoz = left * (topBlok / 4);
  const div = createExplosionDiv(topPOz, leftPoz, desc);
  function createExplosionDiv(top, left, desc) {
    const div = document.createElement("div");
    div.id = "explosion";
    div.classList.add(
      "explosionAnimation",
      `explosion${desc.charAt(0).toUpperCase() + desc.slice(1)}`
    );
    div.style.cssText = `width: ${topBlok}px; height: ${topBlok}px; top: ${top}px; left: ${left}px;`;
    map.appendChild(div);
    return div;
  }
  async function playAnimationWithDelay(div, images, delay) {
    for (let i = 0; i < images.length; i++) {
      div.innerHTML = `<img src="${images[i]}" alt="img" class="active" style="width: 100%; height:  100%;">`;
      await delayFunc(delay);
    }
  }

  (async () => {
    await playAnimationWithDelay(
      div,
      EXPLOSION_IMAGES,
      EXPLOSION_DURATION_SHORT
    );

    if (desc === "tank") {
      div.style.cssText = `width: ${topBlok * 2}px; height: ${
        topBlok * 2
      }px; top: ${topPOz - topBlok / 2}px; left: ${leftPoz - topBlok / 2}px;`;
      await playAnimationWithDelay(
        div,
        EXPLOSION_IMAGES.slice(3),
        EXPLOSION_DURATION_LONG
      );
    }

    div.remove();
  })();
}

function delayFunc(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function animationDirection(globalArray, firstValue, arrayDirection) {
  globalArray.forEach((element) => {
    element.classList.remove("active");
  });
  firstValue.classList.add("active");
  setTimeout(function () {
    arrayDirection.forEach((element) => {
      element.classList.toggle("active");
    });
  }, 30);
}

export let widthMrdgn = (heightMap - topBlok * 15) / 2;
export function mobileManagement() {
  map.style.cssText = `width: ${topBlok * 15}px; height: ${
    topBlok * 15
  }px;margin-top: ${widthMrdgn}px;`;

  let joystick = document.createElement("div");
  // joystick.id = "joyDiv";
  document.querySelector("body").appendChild(joystick);
  let joystickBtn = document.createElement("div");
  joystickBtn.id = "joyDivBtn";
  joystick.classList.add("joystick");
  joystick.innerHTML = `<div class="joystick-handle" id="joystickHandle"></div>`;
  joystick.style.cssText = `width : ${widthMrdgn}px; height: ${widthMrdgn}px`;
  document.querySelector("body").appendChild(joystickBtn);
  setTimeout(() => {
    document
      .querySelectorAll(".block")
      .forEach((e) => e.classList.add("divMobil"));
  }, 200);
}
