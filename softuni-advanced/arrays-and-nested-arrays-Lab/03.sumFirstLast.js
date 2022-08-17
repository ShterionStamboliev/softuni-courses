function sumFirstLast(input) {
  return input
    .map(Number)
    .filter((el, i) => i == 0 || i == input.length - 1)
    .reduce((a, b) => a + b, 0);
}
sumFirstLast(["10", "20", "30", "40", "50"]);
