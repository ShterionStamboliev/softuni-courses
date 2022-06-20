function bombNumbers(arr1, arr2) {
  let targetNum = arr2.shift();
  let numPower = arr2.shift();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(targetNum)) {
      let indexOfTarget = arr1.indexOf(targetNum);
      let leftIndexes = arr1.indexOf(targetNum) - numPower;
      let rightIndexes = arr1.indexOf(targetNum) + numPower;

      for (let j = indexOfTarget; j <= rightIndexes; j++) {
        arr1.splice(leftIndexes, rightIndexes);
      }
    }
  }
  arr1 = arr1.reduce((acc, num) => acc + num, 0);
  console.log(arr1);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1, 2, 3, 4, 5], [9, 3]);
