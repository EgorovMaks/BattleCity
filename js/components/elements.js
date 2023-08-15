export const map = document.querySelector("#BattleCity");

export function createElement(
  [type, canvas, top, left, id, className],
  [width, height],
  [urlUp, urlUp2, urlDown, urlDown2, urlLeft, urlLeft2, urlRight, urlRight2],
  [
    urlBrick16x16,
    urlBrick16x8,
    urlBrick8x16,
    urlBrick8x8,
    urlConcrete16x8,
    eagle,
  ],
  [num]
) {
  const div = document.createElement("div");
  div.style.cssText = `width: ${width}; height: ${height}; top: ${top}; left: ${left}`;
  div.id = `${id}`;
  div.classList.add(className)
  if (type === "tank") {
    div.innerHTML = `
    <div id="trackTopLeftTank" class=" trackUpTank track1tank"></div>
    <div id="trackTopCenterTank" class="  trackUpTank track2tank"></div>
    <div id="trackTopRightTank" class=" trackUpTank track3tank"></div>
    <div id="trackDownLeftTank" class=" trackDownTank track4tank"></div>
    <div id="trackDownCenterTank" class=" trackDownTank track5tank"></div>
    <div id="trackDownRightTank" class=" trackDownTank track6tank"></div>
    <div id="trackLeftTopTank" class=" trackLeftTank track7tank"></div>
    <div id="trackLeftCenteTank" class=" trackLeftTank track8tank"></div>
    <div id="trackLeftDownTank" class=" trackLeftTank track9tank"></div>

    <div id="trackRightTopTank" class="trackRightTank track10tank"></div>

    <div id="trackRightCenteTank" class="trackRightTank track11tank"></div>

    <div id="trackRightDownTank" class="trackRightTank track12tank"></div>
  <img src=${urlUp} alt=${type} class="active up ${type}" style="width: 100%; height:  100%;"> 
  <img src=${urlUp2} alt=${type} class="up ${type}" style="width: 100%; height:  100%;">
  <img src=${urlDown} alt=${type} class=" down ${type}" style="width: 100%; height:  100%;">
  <img src=${urlDown2} alt=${type} class="down ${type}" style="width: 100%; height:  100%;">
  <img src=${urlLeft} alt=${type} class=" left ${type}" style="width: 100%; height:  100%;">
  <img src=${urlLeft2} alt=${type} class="left ${type}" style="width: 100%; height:  100%;">
  <img src=${urlRight} alt=${type} class=" right ${type}" style="width: 100%; height:  100%;">
  <img src=${urlRight2} alt=${type} class="right ${type}" style="width: 100%; height:  100%;">`;
  } else if (type === "block") {
    div.innerHTML = `
  <img src=${urlBrick16x16} alt=${type} class="${
      num === 1 ? "active" : null
    }  up ${type}" style="width: 100%; height: 100%;">
  <img src=${urlBrick16x8} alt=${type} class="${
      num === 2 ? "active" : null
    } up ${type}" style="width: 100%; height: 100%;">
    <img src=${urlBrick8x16} alt=${type} class="${
      num === 4 ? "active" : null
    } up ${type}" style="width: 100%; height: 100%;">
    <img src=${urlBrick8x8} alt=${type} class="${
      num === 6 ? "active" : null
    } up ${type}" style="width: 100%; height: 100%;">
    <img src=${urlConcrete16x8} alt=${type} class="${
      num === 12 ? "active" : null
    } up ${type}" style="width: 100%; height: 100%;">
    <img src=${eagle} alt=${type} class="${
      num === 111 ? "active" : null
    } up ${type}" style="width: 100%; height: 100%;"> `;
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
