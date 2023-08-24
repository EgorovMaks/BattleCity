import { randomNumber, topBlok } from "../data/data.js";

export const map = document.querySelector("#BattleCity");

export function createElement(
  [type, canvas, top, left, id, className],
  [width, height],
  [urlUp, urlUp2, urlDown, urlDown2, urlLeft, urlLeft2, urlRight, urlRight2]
) {
  const div = document.createElement("div");
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;
  div.id = `${id}`;
  div.classList.add(className);
  div.innerHTML = `
    <div id="aGunTop" class="  trackUpTank track2tank trackTank"></div>    
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

export function missile(canvas, [x, y]) {
  const div = document.createElement("div");
  div.id = "missile";
  div.style.cssText = `width: 4px; height: 4px; top: ${y}px; left: ${x}px;`;
  const body = document.querySelector("body");
  const newDiv = body.appendChild(div);
}
export let divId = "";

export function missileTrack(x, y) {
  const div = document.createElement("div");
  div.id = "missileTrack";
  div.style.cssText = `width: 1px; height: 1px; top: ${x}px; left: ${y}px`;
  let newDiv = map.appendChild(div);
  divId = document.elementFromPoint(
    div.getBoundingClientRect().x,
    div.getBoundingClientRect().y
  );
}

export function id(i) {
  return document.querySelector(i);
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
