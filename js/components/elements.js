export const map = document.querySelector("#BattleCity");

export function createElement(el, canvas, url, top, left, id) {
  const div = document.createElement(el);
  div.style.width = "16px";
  div.style.height = "16px";
  div.style.top = top;
  div.style.left = left;
  div.setAttribute("id", id);
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.style.width = "16px";
  img.style.height = "16px";
  img.setAttribute("alt", "Tank");
  const newDiv = canvas.appendChild(div);
  newDiv.appendChild(img);
}
