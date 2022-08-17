function lastKSequence(n, k) {
    const nums = [1];

    for (let i = 1; i < n; i++) {
        let indexToSlice = Math.max(0, i - k);
        const currentNumber = nums.slice(indexToSlice, indexToSlice + k).reduce((a, b) => a + b, 0);
        nums.push(currentNumber);
    }
    return nums;
}
lastKSequence(6, 3);