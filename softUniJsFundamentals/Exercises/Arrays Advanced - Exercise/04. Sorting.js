function sorting(arr) {
  arr = arr.sort((a, b) => b - a);
  let box = [];

  for (let i = 0; i < arr.length; i++) {
    let biggest = arr[i];
    arr.shift();
    box.push(biggest);
    let smallest = arr[arr.length - 1];
    arr.pop();
    box.push(smallest)
    i--
  }
  console.log(box.join(' '));
}
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
