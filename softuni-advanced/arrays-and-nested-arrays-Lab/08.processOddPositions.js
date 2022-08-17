function processOddPositions(input) {
    // return input.filter((el, index) => index % 2 === 1).map((a) => a * 2).reverse().join(' ');
    const result = input.reduce((sum, val, index) => {
        if (index % 2 === 1) {
            sum.push(val * 2);
        }
        return sum;
    }, []);
    console.log(result.reverse().join(' '));
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);