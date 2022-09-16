function diagonAlley(matrix) {
    let leftDiagonalley = 0;
    let rightDiagonalley = 0;
    let res = [];
    const matrixLen = matrix.length;

    for (let i = 0; i < matrixLen; i++) {
        leftDiagonalley += matrix[i][i]
            rightDiagonalley += matrix[i][matrixLen - i - 1]
        }
        res.push(leftDiagonalley, rightDiagonalley);
        console.log(res.join(' '));
}
diagonAlley([
    [20, 40],
    [10, 60]
])