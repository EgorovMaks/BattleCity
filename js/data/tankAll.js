// import { map } from "../components/elements.js";
import { id } from "../components/elements.js";
import { randomNumber, topBlok } from "./data.js";

const map = document.querySelector("#BattleCity");

export let tanks = [
  {
    tank: [
      ["tank", map, `${topBlok * 13}px`, `${topBlok * 5}px`, "tank1User"],
      [`${topBlok}px`, `${topBlok}px`, true],
      [
        "./img/tank1/tank1-up.png",
        "./img/tank1/tank2-up.png",
        "./img/tank1/tank1-down.png",
        "./img/tank1/tank2-down.png",
        "./img/tank1/tank1-left.png",
        "./img/tank1/tank2-left.png",
        "./img/tank1/tank1-right.png",
        "./img/tank1/tank2-right.png",
      ],
    ],
  },
  {
    tank: [
      ["tank", map, `${topBlok * 1}px`, `${topBlok * 1}px`, "tank2"],
      [`${topBlok}px`, `${topBlok}px`, false],
      [
        "./img/tank1/tank1-up.png",
        "./img/tank1/tank2-up.png",
        "./img/tank1/tank1-down.png",
        "./img/tank1/tank2-down.png",
        "./img/tank1/tank1-left.png",
        "./img/tank1/tank2-left.png",
        "./img/tank1/tank1-right.png",
        "./img/tank1/tank2-right.png",
      ],
    ],
  },
  {
    tank: [
      ["tank", map, `${topBlok * 1}px`, `${topBlok * 7}px`, "tank3"],
      [`${topBlok}px`, `${topBlok}px`, false],
      [
        "./img/tank1/tank1-up.png",
        "./img/tank1/tank2-up.png",
        "./img/tank1/tank1-down.png",
        "./img/tank1/tank2-down.png",
        "./img/tank1/tank1-left.png",
        "./img/tank1/tank2-left.png",
        "./img/tank1/tank1-right.png",
        "./img/tank1/tank2-right.png",
      ],
    ],
  },
  {
    tank: [
      ["tank", map, `${topBlok * 1}px`, `${topBlok * 13}px`, "tank4"],
      [`${topBlok}px`, `${topBlok}px`],
      [
        "./img/tank1/tank1-up.png",
        "./img/tank1/tank2-up.png",
        "./img/tank1/tank1-down.png",
        "./img/tank1/tank2-down.png",
        "./img/tank1/tank1-left.png",
        "./img/tank1/tank2-left.png",
        "./img/tank1/tank1-right.png",
        "./img/tank1/tank2-right.png",
      ],
    ],
  },
];

export function arrTanksAdd() {
  tanks.forEach(e=>{
    e["id"] = `#${e.tank[0][4]}`;
    e["elDOM"]=id(e.id)
    e["randomNum"]=randomNumber()
  })
}
