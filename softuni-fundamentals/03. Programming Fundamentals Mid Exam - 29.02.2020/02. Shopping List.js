function shoppingList(arr) {
  let mainArr = arr.shift().split("!");
  let command = arr.shift();

  while (command !== "Go Shopping!") {
    let [text, item, newItem] = command.split(" ");

    switch (text) {
      case "Urgent":
        urgent(mainArr, item);
        break;
      case "Unnecessary":
        unnecessary(mainArr, item);
        break;
      case "Correct":
        correct(mainArr, item, newItem);
        break;
      case "Rearrange":
        rearrange(mainArr, item);
        break;
      default:
    }
    command = arr.shift();
  }
  console.log(mainArr.join(", "));

  function urgent(list, item) {
    if (!list.includes(item)) {
      list.unshift(item);
    }
  }
  function unnecessary(list, item) {
    if (list.includes(item)) {
      let index = list.indexOf(item);
      index.splice(index, 1);
    }
  }
  function correct(list, item, newItem) {
    if (list.includes(item)) {
      let index = list.indexOf(item);
      list[index] = newItem;
    }
  }
  function rearrange(list, item) {
    if (list.includes(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      list.push(item);
    }
  }
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
