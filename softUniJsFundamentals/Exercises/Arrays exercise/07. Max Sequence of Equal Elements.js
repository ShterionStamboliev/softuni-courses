function maxSequence(arr) {
  let newArr = [];
  let box = [];

  for (let i = 0; i < arr.length; i++) {
    box = [];
    for (let k = i; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        box.push(arr[k]);
      } else {
        break;
      }
      if (box.length > newArr.length) {
        newArr = box;
      }
    }
  }
  console.log(newArr.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
