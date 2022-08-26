const solution = () => {
    let str = '';

    const append = text => str += text;
    const removeStart = n => str = str.slice(n);
    const removeEnd = n => str = str.slice(0, -n);
    const print = () => console.log(str);
    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
