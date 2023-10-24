import { randomNumber, topBlok } from "../data/data.js";
import { levelMapMovement } from "../data/levels.js";
import { heightMap } from "../data/data.js";
import { enemyMovement } from "./events.js";
import { tankNumAllEnemies } from "../data/tankAll.js";
import { shooting } from "./shooting.js";

export const map = document.querySelector("#BattleCity");
map.style.cssText = `width: ${topBlok * 15}px; height: ${topBlok * 15}px`;

export function createElement(
  [type, canvas, top, left, id, className],
  [width, height, desc],
  [urlUp, urlUp2, urlDown, urlDown2, urlLeft, urlLeft2, urlRight, urlRight2],
  num
) {
  const div = document.createElement("div");
  createTankAnim(top, left, div);
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;
  setTimeout(() => {
    levelMapMovement(
      Math.round(parseFloat(top) / (topBlok / 4)),
      Math.round(parseFloat(left) / (topBlok / 4))
    );
  }, 100);
  div.id = `${id}`;
  div.classList.add(className, "tank");
  div.classList.add("none");
  const ranNum = `class${randomNumber()}`;
  div.innerHTML = `
  <img src="./img/${urlUp}/tank1-up.png" alt=${type} class="${
    desc ? "active" : null
  }  up ${type}" style="width: 100%; height:  100%;"> 
  <img src="./img/${urlUp2}/tank2-up.png" alt=${type} class="up ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlDown}/tank1-down.png" alt=${type} class="${
    desc ? null : "active"
  } down ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlDown2}/tank2-down.png" alt=${type} class="down ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlLeft}/tank1-left.png" alt=${type} class=" left ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlLeft2}/tank2-left.png" alt=${type} class="left ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlRight}/tank1-right.png" alt=${type} class=" right ${type}" style="width: 100%; height:  100%;">
  <img src="./img/${urlRight2}/tank2-right.png" alt=${type} class="right ${type}" style="width: 100%; height:  100%;">`;
  const newDiv = canvas.appendChild(div);
}

const tankAnim = document.createElement("div");
tankAnim.id = "createTank";
tankAnim.classList.add("createTank");

tankAnim.innerHTML = `
  <img src= "./img/createTankAnim/img-1.png" alt="img" class="createTankAnim activeAnim" style="width: 100%; height:  100%;">
  <img src= "./img/createTankAnim/img-2.png" alt="img" class="createTankAnim noneAnim" style="width: 100%; height:  100%;">
  <img src= "./img/createTankAnim/img-3.png" alt="img" class="createTankAnim noneAnim" style="width: 100%; height:  100%;">
  <img src= "./img/createTankAnim/img-4.png" alt="img" class="createTankAnim noneAnim" style="width: 100%; height:  100%;">`;

export async function createTankAnim(top, left, tank) {
  const num = 100;
  const tankClone = tankAnim.cloneNode(true);
  const classRand = `id${randomNumber()}`;
  const tankChild = tankClone.childNodes;
  tankChild.forEach((e) => {
    // console.log(e.classList);
    if (e.classList !== undefined) {
      e.id = classRand;
    }
  });
  tankClone.style.cssText = `width: ${topBlok}px; height: ${topBlok}px; top: ${top}; left: ${left};`;
  let newDiv = map.appendChild(tankClone);
  const anim = document.querySelectorAll(`#${classRand}`);
  setTimeout(function () {
    setTimeout(function () {
      anim[0].classList.remove("activeAnim");
      anim[1].classList.add("activeAnim");
    }, num);
    setTimeout(function () {
      anim[1].classList.remove("activeAnim");
      anim[2].classList.add("activeAnim");
    }, num * 2);
    setTimeout(function () {
      anim[2].classList.remove("activeAnim");
      anim[3].classList.add("activeAnim");
    }, num * 3);
    setTimeout(function () {
      anim[3].classList.remove("activeAnim");
      anim[0].classList.add("activeAnim");
    }, num * 4);
    setTimeout(function () {
      anim[0].classList.remove("activeAnim");
      anim[1].classList.add("activeAnim");
    }, num * 5);
    setTimeout(function () {
      anim[1].classList.remove("activeAnim");
      anim[2].classList.add("activeAnim");
    }, num * 6);
    setTimeout(function () {
      anim[2].classList.remove("activeAnim");
      anim[3].classList.add("activeAnim");
    }, num * 7);
    setTimeout(function () {
      anim[3].classList.remove("activeAnim");
      anim[0].classList.add("activeAnim");
    }, num * 8);
    setTimeout(function () {
      anim[0].classList.remove("activeAnim");
      anim[1].classList.add("activeAnim");
    }, num * 9);
    setTimeout(function () {
      anim[1].classList.remove("activeAnim");
      anim[2].classList.add("activeAnim");
    }, num * 10);
    setTimeout(function () {
      anim[2].classList.remove("activeAnim");
      anim[3].classList.add("activeAnim");
    }, num * 11);
    setTimeout(function () {
      anim[3].classList.remove("activeAnim");
      // anim[0].classList.add("activeAnim");
      enemyMovement()
      tank.classList.remove("none");
    }, num * 12);
  }, 500);
}
export function createBlocks(
  array,
  canvas,
  [width, height],
  [top, left, element],
  [url, url2],
  [className]
) {
  const div = document.createElement("div");
  let topPozBox = top * topBlok;
  let leftPozBox = left * topBlok;
  div.classList.add(`wrap`);
  div.classList.add(`box${element}`);
  div.style.cssText = `width: ${topBlok}px; height: ${topBlok}px; top:${topPozBox}px; left:${leftPozBox}px`;
  const newDiv = canvas.appendChild(div);
  div.id = `${randomNumber()}`;
  array.forEach((el, key) => {
    el.forEach((e, k) => {
      if (e === 1) {
        let topPoz = key * height;
        let leftPoz = k * width;
        div.innerHTML += `<div id=${randomNumber()} class="block ${className}" style=" left:${leftPoz}px; top:${topPoz}px; width:${width}px; height:${height}px">
        <img src=${url} alt="img" class="active style="width: 100%; height:  100%;">
        </div>`;
      } else if (e === 2) {
        let topPoz = key * height;
        let leftPoz = k * width;
        div.innerHTML += `<div id=${randomNumber()} class="block ${className}" style=" left:${leftPoz}px; top:${topPoz}px; width:${width}px; height:${height}px">
        <img src=${url2} alt="img" class="active style="width: 100%; height:  100%;">
        </div>`;
      }
    });
  });
}

export function missile(canvas, [x, y], poz, tank) {
  const div = document.createElement("div");
  const canvasMargin = parseFloat(window.getComputedStyle(canvas).marginLeft);
  const width = topBlok / 5.3;
  const height = topBlok / 4;
  div.classList.add(`missile${tank.randomNum + 100}`);
  div.id = "missile";
  if (poz === "up") {
    div.style.cssText = `width: ${width}px; height: ${height}px; top: ${y}px; left: ${x}px;`;
    div.classList.add("missileLeft");
  } else if (poz === "down") {
    div.style.cssText = `width: ${width}px; height: ${height}px; top: ${y}px; left: ${x}px; transform: translateX(-50%) translateY(-100%);`;
  } else if (poz === "left") {
    div.style.cssText = `width: ${topBlok / 4}px; height: ${
      topBlok / 5.3
    }px; top: ${y}px; left: ${x}px; transform: translateX(0px) translateY(-50%);`;
  } else if (poz === "right") {
    div.style.cssText = `width: ${topBlok / 4}px; height: ${
      topBlok / 5.3
    }px; top: ${y}px; left: ${x}px; transform: translateX(0px) translateY(-50%);`;
  }
  const newDiv = canvas.appendChild(div);
}
export let divId = "";

export function missileTrack(x, y) {
  const div = document.createElement("div");
  div.id = "missileTrack";
  div.style.cssText = `width: 1px; height: 1px; top: ${
    x * (topBlok / 4)
  }px; left: ${y * (topBlok / 4)}px`;
  let newDiv = map.appendChild(div);
  divId = document.elementFromPoint(
    div.getBoundingClientRect().x,
    div.getBoundingClientRect().y
  );
}

export function id(i) {
  return document.querySelector(i);
}

export function explosionAnimation(top, left, desc, tank) {
  let topPOz = top * (topBlok / 4);
  let leftPoz = left * (topBlok / 4);
  const div = document.createElement("div");
  div.id = "explosion";
  div.classList.add("explosionAnimation");
  if (desc === "up") {
    div.classList.add("explosionUp");
  }
  if (desc === "down") {
    div.classList.add("explosionDown");
  }
  if (desc === "left") {
    div.classList.add("explosionLeft");
  }
  if (desc === "right") {
    div.classList.add("explosionRight");
  }
  div.style.cssText = `width: ${topBlok}px; height: ${topBlok}px; top: ${topPOz}px; left: ${leftPoz}px;`;

  div.innerHTML = `<img src= "./img/shot/shot-1.png" alt="img" class="active"  style="width: 100%; height:  100%;">`;
  setTimeout(function () {
    div.innerHTML = `<img src= "./img/shot/shot-2.png" alt="img" class="active" style="width: 100%; height:  100%;">`;
  }, 80);
  setTimeout(function () {
    div.innerHTML = `<img src= "./img/shot/shot-3.png" alt="img" class="active" style="width: 100%; height:  100%;">`;
  }, 160);
  let newDiv = map.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 200);
  setTimeout(() => {
    tank.stop = false;
  }, 500);
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
