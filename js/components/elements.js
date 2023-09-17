import { randomNumber, topBlok } from "../data/data.js";
import { levelMapMovement } from "../data/levels.js";

export const map = document.querySelector("#BattleCity");

export function createElement(
  [type, canvas, top, left, id, className],
  [width, height],
  [urlUp, urlUp2, urlDown, urlDown2, urlLeft, urlLeft2, urlRight, urlRight2]
) {
  const div = document.createElement("div");
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;
  levelMapMovement(
    parseFloat(top) / (topBlok / 4),
    parseFloat(left) / (topBlok / 4)
  );
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
  div.style.cssText = `width: 3px; height: 4px; top: ${y}px; left: ${x}px;`;
  // const body = document.querySelector("body");
  if (poz === "left") {
    div.id = "missileLeft";
  } else {
    div.id = "missile";
  }
  const newDiv = canvas.appendChild(div);
}
export let divId = "";

export function missileTrack(x, y) {
  const div = document.createElement("div");
  div.id = "missileTrack";
  div.style.cssText = `width: 1px; height: 1px; top: ${x*(topBlok/4)}px; left: ${y*(topBlok/4)}px`;
  let newDiv = map.appendChild(div);
  divId = document.elementFromPoint(
    div.getBoundingClientRect().x,
    div.getBoundingClientRect().y
  );
}

export function id(i) {
  return document.querySelector(i);
}

export function explosionAnimation(top, left) {
  let topPOz = top * (topBlok / 4);
  let leftPoz = left * (topBlok / 4);
  const div = document.createElement("div");
  div.id = "explosion";
  div.style.cssText = `width: ${topBlok}px; height: ${topBlok}px; top: ${topPOz}px; left: ${leftPoz}px;`;
  div.innerHTML = `<img src= "../../img/shot/shot-1.png" alt="img" class="active style="width: 100%; height:  100%;">`;
  setTimeout(function () {
    div.innerHTML = `<img src= "../../img/shot/shot-2.png" alt="img" class="active style="width: 100%; height:  100%;">`;
  }, 80);
  setTimeout(function () {
    div.innerHTML = `<img src= "../../img/shot/shot-3.png" alt="img" class="active style="width: 100%; height:  100%;">`;
  }, 160);
  let newDiv = map.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 200);
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
