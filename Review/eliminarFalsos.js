const bouncer = (arr) => {
  const falsy = [false, null, 0, "", undefined, NaN];
  let newArr = [];

  for(let elem of arr) {
    if (!falsy.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));