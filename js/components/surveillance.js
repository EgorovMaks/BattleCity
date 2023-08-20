import { topBlok } from "../data/data.js";
import { tank1 } from "./game.js";
import { trackDataTop } from "./movement.js";

export let block = [];
export let topPoz = 0;
export let bottomPoz = 585;
export let leftPoz = 0;
export let rightPoz = 585;
let widthCanvas = topBlok * 13 - topBlok / 1.14;

export function pointTracking(data) {
  block = [];
  for (var key in data) {
    const a = document.elementFromPoint(data[key].x, data[key].y);
    block.push(a);
  }
  // console.log(block);
}
export function upStop(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.top);
      let child = parseFloat(e.style.top);
      let height = parseFloat(e.style.height);
      topPoz = topParent + child + height;
      tank1.style.top = `${topPoz + 1}px`;
    }
  });
  leftPoz = 0;
  bottomPoz = widthCanvas;
  rightPoz = widthCanvas;
}
export function searchStopUp(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.top);
      let child = parseFloat(e.style.top);
      let height = parseFloat(e.style.height);
      topPoz = topParent + child + height;
    }
  });
  leftPoz = 0;
  bottomPoz = widthCanvas;
  rightPoz = widthCanvas;
}

export function searchStopDown(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      console.log(e);
      let topParent = parseFloat(e.parentElement.style.top);
      let child = parseFloat(e.style.top);
      console.log(topParent, child);
      console.log(e.parentElement);

      bottomPoz = topParent + child - topBlok / 1.14;
    }
  });
  leftPoz = 0;
  topPoz = 0;
  rightPoz = widthCanvas;
}

export function DownStop(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.top);
      let child = parseFloat(e.style.top);
      console.log(topParent, child);
      console.log(e.parentElement);

      bottomPoz = topParent + child - topBlok / 1.14;
      tank1.style.top = `${bottomPoz}px`;
    }
  });
  leftPoz = 0;
  topPoz = 0;
  rightPoz = widthCanvas;
}

export function searchStopLeft(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.left);
      let child = parseFloat(e.style.left);
      let width = parseFloat(e.style.width);
      leftPoz = topParent + child + width;
    }
  });
  bottomPoz = widthCanvas;
  topPoz = 0;
  rightPoz = widthCanvas;
}

export function LeftStop(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.left);
      let child = parseFloat(e.style.left);
      let width = parseFloat(e.style.width);
      leftPoz = topParent + child + width;

      tank1.style.left = `${leftPoz}px`;
    }
  });
  bottomPoz = widthCanvas;
  topPoz = 0;
  rightPoz = widthCanvas;
}

export function searchStopRight(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.left);
      let child = parseFloat(e.style.left);
      let width = parseFloat(e.parentElement.style.width);
      let width2 = parseFloat(e.style.width);
      rightPoz = topParent + child - width;
    }
  });
  topPoz = 0;
  bottomPoz = widthCanvas;
  leftPoz = 0;
}

export function rightStop(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.left);
      let child = parseFloat(e.style.left);
      let width2 = parseFloat(e.style.width);
      let width = parseFloat(e.parentElement.style.width);
      leftPoz = topParent + child - width;
      tank1.style.left = `${leftPoz + 1}px`;
    }
  });
  topPoz = 0;
  bottomPoz = widthCanvas;
  leftPoz = 0;
}
