function AMinerTask(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i += 2) {
    let resource = arr[i];
    let quantity = Number(arr[i + 1]);
    if (!obj.hasOwnProperty(resource)) {
      obj[resource] = new Set();
    }
    obj[resource].add(quantity);
  }
  for (const [resource, value] of Object.entries(obj)) {
    let newValues = new Set(value);
    let sum = 0;
    for (const value of newValues) {
      sum += value;
    }
    console.log(`${resource} -> ${sum}`);
  }
}
AMinerTask([
  "gold",
  "155",
  "gold",
  "155",
  "silver",
  "10",
  "copper",
  "17",
  "gold",
  "15",
]);
