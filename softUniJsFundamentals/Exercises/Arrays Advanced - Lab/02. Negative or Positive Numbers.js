function negativeOrPositiveNumbers(arr) {
  arr = arr.map(Number);
  let arg = [];
  for (let nums of arr) {
    if (nums < 0) {
      arg.unshift(nums);
    } else {
        arg.push(nums);
    }
  }
  console.log(arg.join("\n"));
}
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
