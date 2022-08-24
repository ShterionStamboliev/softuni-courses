function solve(area, vol, input) {
    let box = JSON.parse(input);
    let res = box.map(value => ({
        area: area.apply(value),
        volume: vol.apply(value),
    }));
    return res;
}


const info = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`;

solve(area, vol, info);

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
