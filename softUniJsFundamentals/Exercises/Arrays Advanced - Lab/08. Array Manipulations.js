function arrayManipulations(arr) {
  let arrNew = arr.shift().split(" ").map(Number);
  for (let i = 0; i < arr.length; i++) {
    let [command, index1, index2] = arr[i].split(" ");
    command = command;
    index1 = Number(index1);
    index2 = Number(index2);

    switch (command) {
      case "Add":
        arrNew.push(index1);
        break;
      case "Remove":
        arrNew = arrNew.filter(num => num !== index1);
        break;
      case "RemoveAt":
        arrNew.splice(index1, 1);
        break;
      case "Insert":
        arrNew.splice(index2, 0, index1);
        break;
    }
  }
  console.log(arg.join(' '));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
