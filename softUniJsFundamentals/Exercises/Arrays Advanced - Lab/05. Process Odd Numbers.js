function processOddNumbers(arr) {
  let oddElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      oddElements.push(arr[i] * 2);
    }
  }
  console.log(oddElements.reverse().join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
