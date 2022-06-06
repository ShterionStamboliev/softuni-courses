function addRemove(array) {
  let sum = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "add") {
      sum.push(i + 1);
    } else if (array[i] === "remove") {
      sum.pop(i);
    }
  }
  if (sum.length === 0) {
    console.log("Empty");
  } else {
    console.log(sum.join(" "));
  }
}
addRemove(["add", "add", "remove", "add", "add"]);
