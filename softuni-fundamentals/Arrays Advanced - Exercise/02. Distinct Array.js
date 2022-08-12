function distinctArr(arr) {
  arr = arr.filter((el, idx) => arr.indexOf(el) === idx);
  return arr.join(" ");
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
