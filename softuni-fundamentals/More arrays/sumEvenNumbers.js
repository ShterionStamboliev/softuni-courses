function sumEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Number(nums[i]);
  }
  let sum = 0;
  for (let num of nums) {
    if (num % 2 == 1) {
      sum += num;
    }
  }
  console.log(sum);
}

sumEven(["1", "2", "3", "4", "5", "6"]);
sumEven(["3", "5", "7", "9"]);
sumEven(["2", "4", "6", "8", "10"]);
