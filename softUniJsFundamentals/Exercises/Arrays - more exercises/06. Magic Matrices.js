function magicMatrice(matrix) {
    let rowTotal = matrix[0].reduce((a, b) => a + b);
    let colTotal = 0;

    matrix.forEach(row => {colTotal += row[0]});

    let result = true;

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i].reduce((element, i) => element + i);
        let currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            let num = matrix[j][i];
            currentCol += num;
        }
        if (currentRow !== rowTotal || currentCol !== colTotal) {
            result = false;
          	break;
        }
    }
    console.log(result);
}
magicMatrice([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
