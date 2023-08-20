import { trackDataTop } from "./movement.js";

export let block = [];
export let topPoz = 0;
export let bottomPoz = 585;
export let leftPoz = 0;
export let rightPoz = 585;

export function pointTracking(data) {
  block = [];
  for (var key in data) {
    const a = document.elementFromPoint(data[key].x, data[key].y);
    block.push(a);
  }
  // console.log(block);
}

export function searchStopUp(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.top);
      let child = parseFloat(e.style.top);
      let height = parseFloat(e.style.height);
      topPoz = topParent + child + height;
      console.log(height);
    }
  });
  leftPoz = 0;
  bottomPoz = 585;
  rightPoz = 585;
}

export function searchStopDown(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.top);
      let child = parseFloat(e.style.top);
      bottomPoz = topParent + child - 39;
    }
  });
  leftPoz = 0;
  topPoz = 0;
  rightPoz = 585;
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
  bottomPoz = 585;
  topPoz = 0;
  rightPoz = 585;
}

export function searchStopRight(className) {
  block.forEach((e) => {
    let stop = e.classList.contains(className);
    if (stop === true) {
      let topParent = parseFloat(e.parentElement.style.left);
      let child = parseFloat(e.style.left);
      let width = parseFloat(e.style.width);
      rightPoz = topParent + child -39;
      console.log(rightPoz)
    }
  });
  topPoz = 0;
  bottomPoz = 585;
  leftPoz = 0;
}
