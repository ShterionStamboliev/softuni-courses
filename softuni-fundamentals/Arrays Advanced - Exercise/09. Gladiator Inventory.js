function gladiatorInventory(arr) {
  let inventory = arr.shift().split(" ");

  for (let i = 0; i < arr.length; i++) {
    let [command, firstItem] = arr.shift().split(" ");
    command = command;
    firstItem = firstItem;
    i--;

    switch (command) {
      case "Buy":
        if (!inventory.includes(firstItem)) {
          inventory.push(firstItem);
        }
        break;

      case "Trash":
        if (inventory.includes(firstItem)) {
          let firstItemIndx = inventory.indexOf(firstItem);
          inventory.splice(firstItemIndx, 1);
        }
        break;

      case "Repair":
        if (inventory.includes(firstItem)) {
          let firstItemIndx = inventory.indexOf(firstItem);
          inventory.splice(firstItemIndx, 1);
          inventory.push(firstItem);
        }
        break;

      case "Upgrade":
        let upgradedItem = firstItem.split("-");
        let upgradedFirstItem = upgradedItem[0];
        if (inventory.includes(upgradedFirstItem)) {
          let firstItemIndx = inventory.indexOf(upgradedFirstItem);
          let newUpgradedItem = upgradedItem[0] + ':' + upgradedItem[1];
          inventory.splice(firstItemIndx + 1, 0, newUpgradedItem);
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
