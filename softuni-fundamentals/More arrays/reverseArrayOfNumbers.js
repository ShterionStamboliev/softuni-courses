function reverseNums(n, nums) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
  }
  let calc = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    calc += arr[i];
    calc += " ";
  }
  console.log(calc);
}

reverseNums(3, [10, 20, 30, 40, 50]);
reverseNums(4, [-1, 20, 99, 5]);
reverseNums(2, [66, 43, 75, 89, 47]);
