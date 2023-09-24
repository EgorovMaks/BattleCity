import { randomNumber, topBlok } from "../data/data.js";
import { levelMapMovement } from "../data/levels.js";
import { heightMap } from "./game.js";
import { stopTrue } from "./shooting.js";

export const map = document.querySelector("#BattleCity");
map.style.cssText = `width: ${topBlok * 15}px; height: ${topBlok * 15}px`;

export function createElement(
  [type, canvas, top, left, id, className],
  [width, height],
  [urlUp, urlUp2, urlDown, urlDown2, urlLeft, urlLeft2, urlRight, urlRight2]
) {
  const div = document.createElement("div");
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;
  setTimeout(() => {
    levelMapMovement(
      Math.round(parseFloat(top) / (topBlok / 4)),
      Math.round(parseFloat(left) / (topBlok / 4))
    );
  }, 100);

  div.id = `${id}`;
  div.classList.add(className);
  div.innerHTML = `
  <img src=${urlUp} alt=${type} class="active up ${type}" style="width: 100%; height:  100%;"> 
  <img src=${urlUp2} alt=${type} class="up ${type}" style="width: 100%; height:  100%;">
  <img src=${urlDown} alt=${type} class=" down ${type}" style="width: 100%; height:  100%;">
  <img src=${urlDown2} alt=${type} class="down ${type}" style="width: 100%; height:  100%;">
  <img src=${urlLeft} alt=${type} class=" left ${type}" style="width: 100%; height:  100%;">
  <img src=${urlLeft2} alt=${type} class="left ${type}" style="width: 100%; height:  100%;">
  <img src=${urlRight} alt=${type} class=" right ${type}" style="width: 100%; height:  100%;">
  <img src=${urlRight2} alt=${type} class="right ${type}" style="width: 100%; height:  100%;">`;

  const newDiv = canvas.appendChild(div);
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

export function missile(canvas, [x, y], poz) {
  const div = document.createElement("div");
  const canvasMargin = parseFloat(window.getComputedStyle(canvas).marginLeft);
  const width = topBlok / 5.3;
  const height = topBlok / 4;
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

export function explosionAnimation(top, left, desc) {
  let topPOz = top * (topBlok / 4);
  let leftPoz = left * (topBlok / 4);
  const div = document.createElement("div");
  div.id = "explosion";
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

  div.innerHTML = `<img src= "./img/shot/shot-1.png" alt="img" class="active style="width: 100%; height:  100%;">`;
  setTimeout(function () {
    div.innerHTML = `<img src= "./img/shot/shot-2.png" alt="img" class="active style="width: 100%; height:  100%;">`;
  }, 80);
  setTimeout(function () {
    div.innerHTML = `<img src= "./img/shot/shot-3.png" alt="img" class="active style="width: 100%; height:  100%;">`;
  }, 160);
  let newDiv = map.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 200);
  setTimeout(() => {
    stopTrue();
  }, 230);
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

export  let widthMrdgn = (heightMap - topBlok * 15) / 2;
export function mobileManagement() {
  map.style.cssText = `width: ${topBlok * 15}px; height: ${
    topBlok * 15
  }px;margin-top: ${widthMrdgn}px;`;

  let joystick = document.createElement("div");
  // joystick.classList.add("joystick");
  joystick.id = "joyDiv";
  // joystick.setAttribute("ontouchstart", "multitouch(event)");
  // joystick.style.cssText = `width: ${widthMrdgn}px; height: ${widthMrdgn}px; `;
  document.querySelector("body").appendChild(joystick);
}
