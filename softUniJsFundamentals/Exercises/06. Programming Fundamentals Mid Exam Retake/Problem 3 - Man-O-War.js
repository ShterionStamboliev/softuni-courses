function manOWar(arr) {
  let pirateShipStatus = arr.shift().split(">").map(Number);
  let warshipStatus = arr.shift().split(">").map(Number);
  let maximumHealthCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let [command, indx1, indx2, indx3] = arr.shift().split(" ");
    command = command;
    indx1 = Number(indx1);
    indx2 = Number(indx2);
    indx3 = Number(indx3);
    i--;

    if (command === "Retire") {
      break;
    }

    switch (command) {
      case "Fire":
        if (indx1 >= 0 && indx1 <= warshipStatus.length - 1) {
          warshipStatus[indx1] -= indx2;
          if (warshipStatus[indx1] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            return;
          }
        }
        break;

      case "Defend":
        if (indx1 >= 0 && indx1 <= indx2 && indx2 <= pirateShipStatus.length - 1) {
          for (let i = indx1; i <= indx2; i++) {
            pirateShipStatus[i] -= indx3;
            if (pirateShipStatus[i] <= 0) {
                console.log("You lost! The pirate ship has sunken.");
                return;
            }
        }
    }
    break;

      case "Repair":
        if (indx1 >= 0 && indx1 <= pirateShipStatus.length - 1) {
             if (pirateShipStatus[indx1] + indx2 < maximumHealthCapacity) {
                pirateShipStatus[indx1] += indx2;
            } else {
                pirateShipStatus[indx1] = maximumHealthCapacity;
            }
        } 
        break;

      case "Status":
        let sectionCount = 0;
        for (let i = 0; i <= pirateShipStatus.length; i++) {
          if (pirateShipStatus[i] < maximumHealthCapacity * 0.2) {
            sectionCount++;
          }
        }
        console.log(`${sectionCount} sections need repair.`);
        break;
    }
  }
    console.log(`Pirate ship status: ${pirateShipTotalHealth.reduce((i, a) => i + a, 0)}`);
    console.log(`Warship status: ${warshipTotalHealth.reduce((i, a) => i + a, 0)}`);
}
manOWar(['2>3>4>5>2',
'6>7>8>9>10>11',
'20',
'Status',
'Fire 2 3',
'Defend 0 4 11',
'Repair 3 18',
'Retire']);
