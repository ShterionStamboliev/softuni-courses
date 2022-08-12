function addAndSubtract(nums) {
  let arrSum = 0;
  let sumModified = 0;
 
  for (let i = 0; i < nums.length; i++) {
    arrSum += nums[i]
   if (nums[i] % 2 === 0) {
     nums[i] += i;
   } else {
     nums[i] -= i;
   }
   sumModified += nums[i]
  }
  console.log(nums);
  console.log(arrSum);
  console.log(sumModified);
}
addAndSubtract([5, 15, 23, 56, 35]);
// addAndSubtract([-5, 11, 3, 0, 2]);
