function smallestTwoNumbers(input) {
    return input.sort((a, b) => b - a).slice(-2).sort((a, b) => a - b).join(' ')
}
smallestTwoNumbers([30, 15, 50, 5]);
