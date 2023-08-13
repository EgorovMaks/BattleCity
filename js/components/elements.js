export const map = document.querySelector("#BattleCity");

export function createElement(
  [type, canvas, top, left, id],
  [width, height],
  [urlUp, urlUp2, urlDown, urlDown2, urlLeft, urlLeft2, urlRight, urlRight2],
  [urlBrick16x16, urlBrick16x8, urlConcrete16x8],[num]
) {
  
  const div = document.createElement("div");
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;
  div.id = `${id}`;
  if (type === "tank") {
    div.innerHTML = `
  <img src=${urlUp} alt=${type} class="active up ${type}" style="width: ${width}; height: ${height};"> 
  <img src=${urlUp2} alt=${type} class="up ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlDown} alt=${type} class="down ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlDown2} alt=${type} class="down ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlLeft} alt=${type} class="left ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlLeft2} alt=${type} class="left ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlRight} alt=${type} class="right ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlRight2} alt=${type} class="right ${type}" style="width: ${width}; height: ${height};">`;
  } else if (type === "block") {
    div.innerHTML = `
  <img src=${urlBrick16x16} alt=${type} class="${
      num === 1 ? "active" : null
    } up ${type}" style="width: ${width}; height: ${height};">
  <img src=${urlBrick16x8} alt=${type} class="${
      num === 2 ? "active" : null
    } up ${type}" style="width: ${width}; height: ${height};">
    <img src=${urlConcrete16x8} alt=${type} class="${
      num === 12 ? "active" : null
    } up ${type}" style="width: ${width}; height: ${height};"> `;
  }

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
