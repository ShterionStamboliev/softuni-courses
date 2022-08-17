function negativePositive(input) {
    const box = [];

    for (const int of input) {
        int >= 0 ? box.push(int) : box.unshift(int);
    }
    console.log(box.join('\n'));
}
negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);