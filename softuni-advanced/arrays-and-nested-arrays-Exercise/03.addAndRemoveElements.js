function addAndRemoveElements(input) {
  const arr = [];
  let count = 0;

  for (const command of input) {
    if (command === "add") {
      count++;
      arr.push(count);
    } else if (command === "remove") {
      count++;
      arr.pop(count);
    }
  }
  if (arr.length === 0) {
    console.log("Empty");
  } else {
    console.log(arr.join('\n'));
  }
}
addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
