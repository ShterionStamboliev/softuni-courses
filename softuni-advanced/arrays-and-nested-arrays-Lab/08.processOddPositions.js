function processOddPositions(input) {
    return input.filter((el, index) => index % 2 === 1).map((a, b) => a * 2).reverse().join(' ');
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);