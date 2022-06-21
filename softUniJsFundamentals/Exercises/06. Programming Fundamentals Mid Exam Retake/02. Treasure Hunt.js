function treasureHunt(arr) {
  let loot = arr.shift().split("|");

  for (let text of arr) {
    let [command, ...items] = text.split(" ");
    if (command === "Yohoho!") {
      break;
    }

    switch (command) {
      case "Loot":
        for (let item of items) {
          if (!loot.includes(item)) {
            loot.unshift(item);
          }
        }
        break;

      case "Drop":
        let itemIndx = Number(items[0]);
        if (itemIndx < 0 || itemIndx > loot.length) {
          break;
        } else {
          let addItemToChest = loot[itemIndx];
          loot.splice(itemIndx, 1);
          loot.push(addItemToChest);
        }
        break;

      case "Steal":
        let indx = Number(items[0]);
        let stolenItems = loot.slice(-indx);
        loot.splice(-indx);
        console.log(stolenItems.join(", "));
        break;
    }
  }
  let sumOfTreasure = loot.reduce((acc, el) => acc + el.length, 0) / loot.length; 
  loot.length === 0 ? console.log("Failed treasure hunt.") : console.log(`Average treasure gain: ${sumOfTreasure.toFixed(2)} pirate credits.`);
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
console.log("**********");
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
