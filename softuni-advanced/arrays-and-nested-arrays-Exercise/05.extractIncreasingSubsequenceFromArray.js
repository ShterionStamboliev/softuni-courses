function solve(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let result = input.reduce((previousNum, currentNum) => {
        if (currentNum >= biggestNum) {
            biggestNum = currentNum
            previousNum.push(biggestNum);
        }
        return previousNum;
    }, []);
    return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
