function magicSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let next = arr[j];
      let sum = 0;
      sum = arr[i] + arr[j];
      if (sum === n) {
        console.log(`${current} ${next}`);
      }
    }
  }
}
// magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
