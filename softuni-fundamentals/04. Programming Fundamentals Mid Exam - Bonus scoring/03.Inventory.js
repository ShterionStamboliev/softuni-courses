function inventory(arr) {
  let inventoryList = arr.shift().split(", ");
  let commands = arr.shift();

  while (commands != "Craft!") {
    let text = commands.split(" - ");
    let command = text[0];
    let item = text[1];
    let index = inventoryList.indexOf(item);

    switch (command) {
      case "Collect":
        if (inventoryList.includes(item)) {
          break;
        } else if (index < 0) {
          inventoryList.push(item);
          break;
        }
      case "Drop":
        if (inventoryList.includes(item) == true) {
          let itemToDrop = inventoryList.indexOf(item);
          inventoryList.splice(itemToDrop, 1);
          break;
        }
      case "Combine Items":
        let secondItem = item.split(":");
        let oldItem = secondItem[0];
        let newItem = secondItem[1];
        index = inventoryList.indexOf(oldItem);
        if (index >= 0) {
          inventoryList.splice(index + 1, 0, newItem);
          break;
        }
      case "Renew":
        if (index >= 0) {
          inventoryList.splice(index, 1);
          inventoryList.push(item);
          break;
        }
      default:
    }
    commands = arr.shift();
  }
  console.log(inventoryList.join(", "));
}
// inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
