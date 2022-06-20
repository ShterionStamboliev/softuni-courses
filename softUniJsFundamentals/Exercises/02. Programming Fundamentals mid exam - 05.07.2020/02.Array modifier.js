function modifier(arr) {
  let newArr = arr.shift().split(" ");
  let temp;

  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");
    let command = currentCommand[0];

    if (command === "end") {
      break;
    }
    while (command !== "end") {
      if (command === "swap") {
        let firstCommand = currentCommand[1];
        let secondCommand = currentCommand[2];
        temp = newArr[firstCommand];
        newArr[firstCommand] = newArr[secondCommand];
        newArr[secondCommand] = temp;
        break;
      } else if (command === "multiply") {
        firstCommand = currentCommand[1];
        secondCommand = currentCommand[2];
        newArr[firstCommand] = newArr[firstCommand] * newArr[secondCommand];
        break;
      } 
      if (command === "decrease") {
        newArr = newArr.map((e) => e = e - 1);
      break;
      }
    }
  }
  console.log(newArr.join(", "));
}
modifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
