function shootForTheWin(arr) {
  let targets = arr.shift().split(" ").map(Number);
  let targetsShotCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    let [command] = arr.shift().split(" ");
    if (command === 'End') {
        break;
    }
    command = Number(command);
    let temp = targets[command];
    if (command < 0 || command > targets.length - 1) {
        continue;
    }
    i--;
    
    if (targets[command] !== -1) {
        targets[command] = -1;
        targetsShotCounter++;
    }
    for (let i = 0; i < targets.length;i++) {
        if (targets[i] === -1) {
            continue;
        }
        if (targets[i] > temp) {
            targets[i] -= temp;
        } else if (targets[i] <= temp) {
            targets[i] += temp;
        }
    }
  }
  console.log(`Shot targets: ${targetsShotCounter} -> ${targets.join(' ')}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
console.log('*****');
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

