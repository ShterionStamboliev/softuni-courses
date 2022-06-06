function cinema(input) {
    const type = (input[0]);
    const rows = Number(input[1]);
    const columns = Number(input[2]);
    let income = 0;

    if (type == 'Premiere') {
        income = rows * columns * 12.0;
    }
    else if (type == 'Normal') {
        income = rows * columns * 7.5;
    }
    else if (type == 'Discount') {
        income = rows * columns * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(['Premiere','10','12']);