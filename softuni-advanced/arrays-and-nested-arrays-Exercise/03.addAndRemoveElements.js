function addAndRemoveElements(input) {
  const arr = [];
  let count = 0;

  for (const command of input) {
    command === 'add' ? count++ : arr.pop(count);
    command === 'remove' ? count++ : arr.push(count);
  }
  arr.length === 0 ? console.log('Empty') : console.log(arr.join('\n'));
}
addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
