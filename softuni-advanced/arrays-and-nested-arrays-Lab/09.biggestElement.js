function biggestElement(arr) {

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > biggest) {
                biggest = arr[i][j]
            }
        }
    }
    console.log(biggest);
}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);