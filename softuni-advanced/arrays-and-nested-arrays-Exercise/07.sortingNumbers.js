function sortingNumbers(input) {
    input.sort((a, b) => a - b);
    let nums = [];
    for (let i = 0; i < input.length; i++) {
        let small = input.shift();
        nums.push(small);
        let bigger = input[input.length - 1];
        input.pop(bigger);
        nums.push(bigger);
        i--;
    }
    return nums;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);