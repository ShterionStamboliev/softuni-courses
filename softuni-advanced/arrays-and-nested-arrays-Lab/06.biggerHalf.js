function biggerHalf(input) {
    if (input.length % 2 === 1) {
        return input.sort((a, b) => a - b).slice(-Math.round(input.length / 2));
    } else {
        return input.sort((a, b) => a - b).slice(-input.length / 2);
    }
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);