function numberModification(input) {
  let str = input.toString();
  let nums = [];

  for (let i = 0; i < str.length; i++) {
    nums.push(Number(str[i]));
  }
  for (let i = 0; i < nums.length; i++) {
    let avg = nums.reduce((a, b) => a + b, 0) / nums.length;
    if (avg < 5) {
      nums.push(9);
      str += "9";
    } else if (avg >= 5) {
      break;
    }
  }
  console.log(str);
}
numberModification(101);
numberModification(5835);
