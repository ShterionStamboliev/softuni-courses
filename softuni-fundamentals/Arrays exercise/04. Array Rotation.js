function rotation(arr, n) {
  for (let i = 0; i < n; i++) {
    let firstNum = arr[0];

    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = firstNum;
  }
  console.log(arr.join(" ", arr));
}
rotation([51, 47, 32, 61, 21], 2);
