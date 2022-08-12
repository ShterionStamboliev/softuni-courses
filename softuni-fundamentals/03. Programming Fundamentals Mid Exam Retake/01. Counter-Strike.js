function counterStrike(arr) {
  let initialEnergy = arr.shift().split(" ").map(Number);
  let battlesWonCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let distance = arr[i];
    if (distance === "End of battle") {
      console.log(`Won battles: ${battlesWonCount}. Energy left: ${initialEnergy}`);
        break;
    }
    if (initialEnergy < Number(distance)) {
      console.log(`Not enough energy! Game ends with ${battlesWonCount} won battles and ${initialEnergy} energy`);
      break;

    } else {
      initialEnergy -= Number(distance);
      battlesWonCount++;
    }
    if (battlesWonCount % 3 === 0) {
      initialEnergy += battlesWonCount;
    }
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
