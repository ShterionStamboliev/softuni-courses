function biggerHalf(input) {
    if (input.length % 2 === 1) {
        let len = input.length;
        let sliced = Math.round(len / 2);
        let result = input.sort((a, b) => a - b).slice(-sliced);
        return result;
    } else {
        input = input.sort((a, b) => a - b).slice(-input.length / 2);
        return input;
    }
}
biggerHalf([4, 7, 2, 5]);