function circleArea(input) {
    if (typeof input === 'string') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    } else {
        const res = Math.pow(input, 2) * Math.PI;
        console.log(res.toFixed(2));
    }
}
circleArea(5);