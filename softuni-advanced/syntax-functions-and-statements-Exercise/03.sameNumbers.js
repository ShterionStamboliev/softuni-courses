function sameNumbers(input) {
    input = input.toString().split('');
    const all = new Set(input).size == 1;
    const result = input.map(Number).reduce((sum, value) => sum + value, 0);
    return `${all}\n${result}`;
}
sameNumbers(2222222);
sameNumbers(1234);