function decreasingSubset(arr) {
  let currentBiggest = arr[0];
  let maxNum = arr.filter((num) => { if (num >= currentBiggest) { currentBiggest = num}
  return num >= currentBiggest;
});
  console.log(maxNum.join(" "));
}
decreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
