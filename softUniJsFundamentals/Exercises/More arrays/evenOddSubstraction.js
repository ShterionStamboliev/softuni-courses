function evenOdd(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Number(nums[i]);
  }
  let sumEven = 0;
  let sumOdd = 0;

  for (let sum of nums) {
    if (sum % 2 == 0) {
      sumEven += sum;
    } else {
      sumOdd += sum;
    }
  }
  console.log(sumEven - sumOdd);
}
evenOdd([1, 2, 3, 4, 5, 6]);
evenOdd([3, 5, 7, 9]);
evenOdd([2, 4, 6, 8, 10]);
