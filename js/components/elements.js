export const map = document.querySelector("#BattleCity");

export function createElement(el, canvas, urlUp, urlUp2, top, left, id) {
  const div = document.createElement(el);
  div.style.width = "16px";
  div.style.height = "16px";
  div.style.top = top;
  div.style.left = left;
  div.setAttribute("id", id);
  const img = document.createElement("img");
  const img2 = document.createElement("img");
  img.setAttribute("src", urlUp);
  img2.setAttribute("src", urlUp2);
  img.style.width = "16px";
  img.style.height = "16px";
  img2.style.width = "16px";
  img2.style.height = "16px";
  img.setAttribute("alt", "Tank");
  img2.setAttribute("alt", "Tank");
  img.setAttribute("class", "active up tank");
  img2.setAttribute("class", "up tank");
  const newDiv = canvas.appendChild(div);
  newDiv.appendChild(img);
  newDiv.appendChild(img2);
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
