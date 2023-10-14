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
        "tank1Standard",
        "tank1Standard",
        "tank1Standard",
        "tank1Standard",
        "tank1Standard",
        "tank1Standard",
        "tank1Standard",
        "tank1Standard",
      ],
    ],
  },
  {
    tank: [
      ["tank", map, `${topBlok * 1}px`, `${topBlok * 1}px`, "tank2"],
      [`${topBlok}px`, `${topBlok}px`, false],
      [
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
      ],
    ],
  },
  {
    tank: [
      ["tank", map, `${topBlok * 1}px`, `${topBlok * 7}px`, "tank3"],
      [`${topBlok}px`, `${topBlok}px`, false],
      [
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
      ],
    ],
  },
  {
    tank: [
      ["tank", map, `${topBlok * 1}px`, `${topBlok * 13}px`, "tank4"],
      [`${topBlok}px`, `${topBlok}px`],
      [
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
        "tankStandardEnemy",
      ],
    ],
  },
];


