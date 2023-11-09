export const blocks = {
  block0: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  block1: [
    [1, 2, 1, 2],
    [2, 1, 2, 1],
    [1, 2, 1, 2],
    [2, 1, 2, 1],
  ],
  block2: [
    [1, 2, 1, 2],
    [2, 1, 2, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  block3: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 2, 1, 2],
    [2, 1, 2, 1],
  ],
  block4: [
    [0, 0, 1, 2],
    [0, 0, 2, 1],
    [0, 0, 1, 2],
    [0, 0, 2, 1],
  ],
  block5: [
    [1, 2, 0, 0],
    [2, 1, 0, 0],
    [1, 2, 0, 0],
    [2, 1, 0, 0],
  ],
  block6: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 2],
    [0, 0, 2, 1],
  ],
  block7: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 2, 0, 0],
    [2, 1, 0, 0],
  ],
  block12: [
    [1, 1],
    [0, 0],
  ],
  block111: [[1]],
};

export let level1 = [
  [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
  [19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19],
  [19, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 19],
  [19, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 19],
  [19, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 19],
  [19, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 19],
  [19, 0, 2, 0, 2, 0, 3, 0, 3, 0, 2, 0, 2, 0, 19],
  [19, 3, 0, 3, 3, 0, 2, 0, 2, 0, 3, 3, 0, 3, 19],
  [19, 12, 0, 2, 2, 0, 3, 0, 3, 0, 2, 2, 0, 12, 19],
  [19, 0, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0, 3, 0, 19],
  [19, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 19],
  [19, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 19],
  [19, 0, 1, 0, 1, 0, 6, 3, 7, 0, 1, 0, 1, 0, 19],
  [19, 0, 0, 0, 0, 0, 4, 111, 5, 0, 0, 0, 0, 0, 19],
  [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
];

export function mobileMap() {
  let arr = [];
  level1.forEach((elem) => arr.push([]));
  level1.forEach((e, k) => {
    e.forEach((el, key) => {
      arr[key].push(el);
    });
  });
  level1 = arr;
  let arrObj = [];
  for (var key in blocks) {
    // blocks[key].forEach((e) => arrObj.push([]));
    blocks[key].forEach((e) => arrObj.push([]));
    blocks[key].forEach((e) => e.forEach((el, k) => arrObj[k].push(el)));
    blocks[key] = arrObj;
    arrObj = [];
  }
}

function deg90(params) {}

export const levelMap = [];

export const levelMapIdBloks = [];

export function levelMapConstructor(array) {
  function arrayCopy(array, num) {
    const b = [[], [], [], []];
    array.forEach((element, key) => {
      element.forEach((el) => {
        if (el === 0) {
          b[key].push(0);
        } else {
          b[key].push(num);
        }
      });
    });
    return b;
  }
  function arrayConstructor(
    a,
    b,
    c,
    d,
    [[a0, a1, a2, a3], [b0, b1, b2, b3], [c0, c1, c2, c3], [d0, d1, d2, d3]]
  ) {
    a[0].push(a0);
    a[0].push(a1);
    a[0].push(a2);
    a[0].push(a3);
    b[0].push(b0);
    b[0].push(b1);
    b[0].push(b2);
    b[0].push(b3);
    c[0].push(c0);
    c[0].push(c1);
    c[0].push(c2);
    c[0].push(c3);
    d[0].push(d0);
    d[0].push(d1);
    d[0].push(d2);
    d[0].push(d3);
  }

  array.forEach((element) => {
    let a = [[]];
    let b = [[]];
    let c = [[]];
    let d = [[]];
    element.forEach((e) => {
      if (e === 0) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block0, 1));
      } else if (e === 1) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block1, 1));
      } else if (e === 2) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block2, 1));
      } else if (e === 3) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block3, 1));
      } else if (e === 4) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block4, 1));
      } else if (e === 5) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block5, 1));
      } else if (e === 6) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block6, 1));
      } else if (e === 7) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block7, 1));
      } else if (e === 12) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block2, 2));
      } else if (e === 111) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block1, 3));
      } else if (e === 19) {
        arrayConstructor(a, b, c, d, arrayCopy(blocks.block1, 19));
      }
    });
    levelMap.push(...a);
    levelMap.push(...b);
    levelMap.push(...c);
    levelMap.push(...d);
    a = [[]];
    b = [[]];
    c = [[]];
    d = [[]];
    a = [[]];
  });
  levelMap.forEach((e, k) => {
    levelMapIdBloks.push([])
    e.forEach((el, key) => {
      if (el === 19 || el === 0) {
        levelMapIdBloks[k][key] = el;
      } else {
        levelMapIdBloks[k][key] = 0;
      }
    });
  });

}
setTimeout(() => {
  levelMapConstructor(level1);
}, 100);

export function levelMapMovement(tank) {
  // levelMapMovement(e, e.pozitionMap.top, e.pozitionMap.left);
  const top = tank.pozitionMap.top;
  const left = tank.pozitionMap.left;
  if (tank.id === "#tank1User") {
    // console.log(top, left);
  }
  const numsTankMap = [0, 1, 2, 3];
  const numsDelX = [
    [-1, 0, 1, 2, 3, 4],
    [-1, 0, 1, 2, 3, 4],
    [-1, 0, 1, 2, 3, 4],
    [-1, 0, 1, 2, 3, 4],
    [-1, 0, 1, 2, 3, 4],
    [-1, 0, 1, 2, 3, 4],
  ];
  const numsDelY = [
    [-1, -1, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4],
  ];
  numsDelX.forEach((e, k) =>
    e.forEach((el, key) => {
      if (levelMap[top + el][left + numsDelY[k][key]] === tank.randomNum) {
        levelMap[top + el][left + numsDelY[k][key]] = 0;
      }
    })
  );

  numsTankMap.forEach((e) => {
    if (levelMap[top + e][left + 0] === 0) {
      levelMap[top + e][left + 0] = tank.randomNum;
    }
  });
  numsTankMap.forEach((e) => {
    if (levelMap[top + e][left + 1] === 0) {
      levelMap[top + e][left + 1] = tank.randomNum;
    }
  });
  numsTankMap.forEach((e) => {
    if (levelMap[top + e][left + 2] === 0) {
      levelMap[top + e][left + 2] = tank.randomNum;
    }
  });
  numsTankMap.forEach((e) => {
    if (levelMap[top + e][left + 3] === 0) {
      levelMap[top + e][left + 3] = tank.randomNum;
    }
  });
}

// export function shotShoting(tank) {
//   let numShot = tank.randomNum + 100;
//   const topPoz = tank.shot.pozitionMap[0];
//   const topLeft = tank.shot.pozitionMap[1];
//   if (tank.shootingDirection === "up") {
//     shotArr(numShot, topPoz, topLeft);
//     shotArr(numShot, topPoz, topLeft - 1);
//     shotArr(numShot, topPoz + 1, topLeft);
//     shotArr(numShot, topPoz + 1, topLeft - 1);
//   } else if (tank.shootingDirection === "down") {
//     shotArr(numShot, topPoz - 2, topLeft);
//     shotArr(numShot, topPoz - 2, topLeft - 1);
//     shotArr(numShot, topPoz - 1, topLeft);
//     shotArr(numShot, topPoz - 1, topLeft - 1);
//   } else if (tank.shootingDirection === "left") {
//     shotArr(numShot, topPoz, topLeft);
//     shotArr(numShot, topPoz, topLeft + 1);
//     shotArr(numShot, topPoz - 1, topLeft);
//     shotArr(numShot, topPoz - 1, topLeft + 1);
//   } else if (tank.shootingDirection === "right") {
//     shotArr(numShot, topPoz, topLeft - 2);
//     shotArr(numShot, topPoz, topLeft - 1);
//     shotArr(numShot, topPoz - 1, topLeft - 2);
//     shotArr(numShot, topPoz - 1, topLeft - 1);
//   }
//   // console.log(levelMap);
// }

// export function levelMapMovementDel(tank) {
//   let pozTop = Math.floor(tank.pozitionMap.top);
//   let pozLeft = Math.floor(tank.pozitionMap.left);
//   const arr = [
//     [-1, 0, 1, 2, 3, 4],
//     [-1, 0, 1, 2, 3, 4],
//     [-1, 0, 1, 2, 3, 4],
//     [-1, 0, 1, 2, 3, 4],
//     [-1, 0, 1, 2, 3, 4],
//     [-1, 0, 1, 2, 3, 4],
//   ];
//   const arr2 = [
//     [-1, -1, -1, -1, -1, -1],
//     [0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1],
//     [2, 2, 2, 2, 2, 2],
//     [3, 3, 3, 3, 3, 3],
//     [4, 4, 4, 4, 4, 4],
//   ];
//   arr.forEach((e, k) => {
//     e.forEach((el, key) => {
//       if (levelMap[pozTop + el][pozLeft + arr2[k][key]] === tank.randomNum) {
//         levelMap[pozTop + el][pozLeft + arr2[k][key]] = 0;
//       }
//     });

//     // console.log(levelMap[poz.top + e][poz.left + arr2[k]]);
//   });
// }

// export function shotShotingDel(tank) {
//   let numShot = tank.randomNum + 100;
//   const num = 0;
//   if (tank.shootingDirection === "up") {
//     shotArrDel(numShot, topPoz, topLeft);
//     shotArrDel(numShot, topPoz - 1, topLeft);
//     shotArrDel(numShot, topPoz - 1, topLeft + 1);
//     shotArrDel(numShot, topPoz, topLeft + 1);
//   } else if (tank.shootingDirection === "down") {
//     shotArrDel(numShot, topPoz + 2, topLeft);
//     shotArrDel(numShot, topPoz + 2, topLeft + 1);
//     shotArrDel(numShot, topPoz + 1, topLeft);
//     shotArrDel(numShot, topPoz + 1, topLeft + 1);
//   } else if (tank.shootingDirection === "left") {
//     shotArrDel(numShot, topPoz, topLeft);
//     shotArrDel(numShot, topPoz, topLeft + 1);
//     shotArrDel(numShot, topPoz + 1, topLeft);
//     shotArrDel(numShot, topPoz + 1, topLeft + 1);
//   } else if (tank.shootingDirection === "right") {
//     shotArrDel(numShot, topPoz, topLeft);
//     shotArrDel(numShot, topPoz, topLeft + 1);
//     shotArrDel(numShot, topPoz + 1, topLeft);
//     shotArrDel(numShot, topPoz + 1, topLeft + 1);
//   }
//   // console.log(levelMap);
// }

function shotArr(numShot, topPoz, topLeft) {
  const num = 0;
  if (levelMap[topPoz][topLeft] === num) {
    levelMap[topPoz][topLeft] = numShot;
  }
  setTimeout(() => {
    if (levelMap[topPoz][topLeft] === numShot) {
      levelMap[topPoz][topLeft] = num;
    }
  }, 70);
}

function shotArrDel(numShot, topPoz, topLeft) {
  if (levelMap[topPoz][topLeft] === numShot) {
    levelMap[topPoz][topLeft] = 0;
  }
}
