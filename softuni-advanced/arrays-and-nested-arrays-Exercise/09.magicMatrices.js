function matrices(matrix) {

  for (let i = 0; i < matrix.length - 1; i++) {
    let mRow = matrix[i].reduce((a, b) => a + b, 0);
    let rCol = matrix[i + 1].reduce((a, b) => a + b, 0);
    let sumRow = 0;
    let sumCol = 0;

    for (let j = 0; j < matrix.length; j++) {
      sumRow += matrix[i][j];
      sumCol += matrix[i + 1][j];
    }
    if (mRow !== rCol || sumRow !== sumCol) {
        return false;
    }
  }
  return true;
}
matrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
