function sortArray(input, str) {
    return input.sort((a, b) => str === "desc" ? b - a : a - b);
}
sortArray([14, 7, 17, 6, 8], 'desc');
sortArray([14, 7, 17, 6, 8], 'asc');


/*
function sortArrayTwo(input, str) {
   const result = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    }
    return input.sort(result[str]);
}
sortArrayTwo([14, 7, 17, 6, 8], 'desc');
sortArrayTwo([14, 7, 17, 6, 8], 'asc');
*/