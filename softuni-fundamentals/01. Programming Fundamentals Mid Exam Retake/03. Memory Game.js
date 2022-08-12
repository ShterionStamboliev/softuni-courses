function memoryGame(arr) {
  let arg = arr.shift().split(" ")
  let movesCount = 0;
    
  while (arg.length > 0 && arr[0] !== "end") {
    let [firstNum, secondNum] = arr.shift().split(' ');
    firstNum = Number(firstNum)
    secondNum = Number(secondNum)
    movesCount++;

    if (firstNum < 0 || firstNum >= arg.length || firstNum === secondNum || secondNum < 0 ||secondNum >= arg.length) {
      let halfArr = Math.trunc(arg.length / 2);
      let symbols = "-" + movesCount + "a";
      arg.splice(halfArr, 0, symbols, symbols);
      console.log("Invalid input! Adding additional elements to the board");
    } else {
      let numOne = arg[firstNum];
      let numTwo = arg[secondNum];
      if (numOne === numTwo) {
        arg.splice(firstNum, 1);
        secondNum = arg.indexOf(numTwo);
        arg.splice(secondNum, 1);
        console.log(`Congrats! You have found matching elements - ${numOne}!`);
      } else if (numOne !== numTwo) {
        console.log("Try again!");
      }
    }
  }
  if (arg.length === 0 || arg.length === 1) {
    console.log(`You have won in ${movesCount} turns!`);
  } else {
    console.log("Sorry you lose :(");
    console.log(`${arg.join(" ")}`);
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
