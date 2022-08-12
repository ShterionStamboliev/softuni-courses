function sums(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);

    if (arr1[i] == arr2[i]) {
      sum += arr1[i];
    } else if (arr1[i] >= arr2[i]) {
      sum = arr1[i] + arr2[i];
    }
  }
  console.log(sum);
}
// sums(["10", "20", "30"], ["10", "20", "30"]);
sums(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
