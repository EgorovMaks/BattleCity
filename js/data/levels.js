export const block0 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export const block1 = [
  [1, 2, 1, 2],
  [2, 1, 2, 1],
  [1, 2, 1, 2],
  [2, 1, 2, 1],
];
export const block2 = [
  [1, 2, 1, 2],
  [2, 1, 2, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
export const block3 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 1, 2],
  [2, 1, 2, 1],
];
export const block4 = [
  [0, 0, 1, 2],
  [0, 0, 2, 1],
  [0, 0, 1, 2],
  [0, 0, 2, 1],
];
export const block5 = [
  [1, 2, 0, 0],
  [2, 1, 0, 0],
  [1, 2, 0, 0],
  [2, 1, 0, 0],
];
export const block6 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 2],
  [0, 0, 2, 1],
];
export const block7 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 0, 0],
  [2, 1, 0, 0],
];

export const block12 = [
  [1, 1],
  [0, 0],
];
export const block111 = [[1]];

export let level1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0],
  [0, 2, 0, 2, 0, 3, 0, 3, 0, 2, 0, 2, 0],
  [3, 0, 3, 3, 0, 2, 0, 2, 0, 3, 3, 0, 3],
  [12, 0, 2, 2, 0, 3, 0, 3, 0, 2, 2, 0, 12],
  [0, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0, 3, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 6, 3, 7, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 4, 111, 5, 0, 0, 0, 0, 0],
];

const levelMap = [];

function levelMapConstructor(array) {
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

  array.forEach((element, key) => {
    let a = [[]];
    let b = [[]];
    let c = [[]];
    let d = [[]];
    element.forEach((e) => {
      if (e === 0) {
        arrayConstructor(a, b, c, d, arrayCopy(block0, 1));
      } else if (e === 1) {
        arrayConstructor(a, b, c, d, arrayCopy(block1, 1));
      } else if (e === 2) {
        arrayConstructor(a, b, c, d, arrayCopy(block2, 1));
      } else if (e === 3) {
        arrayConstructor(a, b, c, d, arrayCopy(block3, 1));
      } else if (e === 4) {
        arrayConstructor(a, b, c, d, arrayCopy(block4, 1));
      } else if (e === 5) {
        arrayConstructor(a, b, c, d, arrayCopy(block5, 1));
      } else if (e === 6) {
        arrayConstructor(a, b, c, d, arrayCopy(block6, 1));
      } else if (e === 7) {
        arrayConstructor(a, b, c, d, arrayCopy(block7, 1));
      } else if (e === 12) {
        arrayConstructor(a, b, c, d, arrayCopy(block2, 2));
      } else if (e === 111) {
        arrayConstructor(a, b, c, d, arrayCopy(block1, 3));
      }
    });
    // console.log(a,b,c,d);
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
  console.log(levelMap);
}
levelMapConstructor(level1);
// export let levelConstruktor = [{}];
