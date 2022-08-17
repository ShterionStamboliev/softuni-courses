function aggregateElements(arr) {
  const sum = arr.reduce((sum, val) => sum + val, 0);
  const inverseValue = arr.reduce((a, b) => a + 1 / b, 0);
  const arrConcat = arr.join("");
  console.log(sum);
  console.log(inverseValue);
  console.log(arrConcat);
}
aggregateElements([2, 4, 8, 16]);
