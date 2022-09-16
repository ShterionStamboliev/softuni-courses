function diagonAlley(matrix) {
    let row = 0;
    let col = 0;
    let res = [];
    const matrixLen = matrix.length;

    for (let i = 0; i < matrixLen; i++) {
            row += matrix[i][i]
            col += matrix[i][matrixLen - i - 1]
        }
        res.push(row, col);
        console.log(res.join(' '));
}
diagonAlley([
    [20, 40],
    [10, 60]]
   )