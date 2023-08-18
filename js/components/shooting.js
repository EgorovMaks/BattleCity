import { movementUp } from "../data/data.js";
import { id, map, missile } from "./elements.js";
import { tank1 } from "./game.js";

let aGun = {};
let fireGun = false;
let fireData = {};

export function shooting(params) {
  fireGun = true;
  const el = id("#aGunTop").getBoundingClientRect();
  aGun = { x: el.x, y: el.y };
  missile(map, [aGun.x, aGun.y]);
}

export function fire() {
  if (fireGun === true) {
    let bullet = id("#missile");
    console.log(parseInt(bullet.style.top));
    bullet.style.top = `${parseInt(bullet.style.top) - 8}px`;
    if (parseInt(bullet.style.top) < 0) {
      console.log("fdhfdhdhdfhdfh");
      fireGun = false;
      let allBulet = document.querySelectorAll("#missile");
      allBulet.forEach((e) => {
        e.remove();
      });
    }
  }
}
