function numbersWithStepOf3(input) {
    const n = Number(input[0]);

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}
numbersWithStepOf3(['10']);