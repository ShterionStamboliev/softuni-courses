function largestNumber(...input) {
    return `The largest number is ${input.sort((a, b) => a - b).pop()}.`
}
largestNumber(5, -3, 16);