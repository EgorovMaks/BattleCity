

export function movementUp(date, className) {
  const dataElem = document.querySelectorAll(className);
  dataElem.forEach((e) => {
    const id = e.id;
    const top = e.getBoundingClientRect().top;
    const left = e.getBoundingClientRect().left;
    date[`${id}`] = { top, left };
  });
  console.log(date)
}

  // console.log(datedocument.elementFromPoint());
