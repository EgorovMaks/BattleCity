export const map = document.querySelector("#BattleCity");

export function createElement(
  el,
  type,
  canvas,
  top,
  left,
  id,
  width,
  height,
  urlUp,
  urlUp2,
  urlDown,
  urlDown2,
  urlLeft,
  urlLeft2,
  urlRight,
  urlRight2
) {
  const div = document.createElement(el);
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;
  div.id = `${id}`;
  div.innerHTML = `
  <img src=${urlUp} alt=${type} class="active up ${type}" style="width: ${width}; height: ${height};"> 
  <img src=${urlUp2} alt=${type} class="up ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlDown} alt=${type} class="down ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlDown2} alt=${type} class="down ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlLeft} alt=${type} class="left ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlLeft2} alt=${type} class="left ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlRight} alt=${type} class="right ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlRight2} alt=${type} class="right ${type}" style="width: ${width}; height: ${height};">`;
  const newDiv = canvas.appendChild(div);
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
