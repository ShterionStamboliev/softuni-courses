function multiplicationTable(input) {
    const n = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let sum = i * n;
        console.log(`${i} * ${n} = ${sum}`);
    }
}
multiplicationTable('5');