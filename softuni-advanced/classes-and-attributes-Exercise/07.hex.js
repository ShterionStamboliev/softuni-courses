class Hex {
    constructor(n) {
        this.n = +n;
    }
    valueOf() {
        return this.n;
    };
    toString() {
        return '0x' + this.n.toString(16).toUpperCase();
    };
    plus(n) {
        const addN = this.n + +n.valueOf();
        return new Hex(addN);
    };
    minus(n) {
        const subN = this.n - +n.valueOf();
        return new Hex(subN);
    };
    parse(str) {
        return parseInt(str, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
