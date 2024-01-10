export let stopMovement = [1, 2, 19];

export let missileAll=[]

export let windowWidth = 16;
export let heightMap = 0;

function window() {
  const windowInnerWidth = Math.floor(document.documentElement.clientWidth);
  const windowInnerHeight = document.documentElement.clientHeight;
  if (windowInnerWidth <= windowInnerHeight) {
    windowWidth = Math.floor(windowInnerWidth / 15);
  } else {
    windowWidth = Math.floor(windowInnerHeight / 15);
  }
  const a = windowWidth % 4;
  windowWidth = windowWidth - a;
  heightMap = windowInnerHeight;
}

export function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window();

export let topBlok = Math.floor(windowWidth);

export let tankSpeed = topBlok / 8;

// 48

export function randomNumber() {
  return parseInt(Math.random() * (999999999999 - 1) + 1);
}
