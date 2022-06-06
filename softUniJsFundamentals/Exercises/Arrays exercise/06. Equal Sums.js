function equalSum(arr) {
  let areEqual = false;

  for (let i = 0; i < arr.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = i - 1; j >= 0; j--) {
        sumLeft += arr[j];
    }
    for (let k = i + 1; k < arr.length;k++){
        sumRight += arr[k];
    }

    if (sumLeft === sumRight) {
        areEqual = true;
        console.log(i);
    }
  }
  if (!areEqual) {
      console.log('no');
  }
}
equalSum([1, 2, 3, 3]);
