function comission(input) {
    const town = input[0];
    const sells = Number(input[1]);
    let amountOfSells = 0;

    if (town == 'Sofia') {
        if (sells <= 500) {
            amountOfSells = sells * 0.05;
        } else if (sells <= 1000) {
            amountOfSells = sells * 0.07;
        } else if (sells <= 10000) {
            amountOfSells = sells * 0.08;
        } else if (sells > 10000) {
            amountOfSells = sells * 0.12;
        }
    }
    if (town == 'Varna') {
        if (sells <= 500) {
            amountOfSells = sells * 0.045;
        } else if (sells <= 1000) {
            amountOfSells = sells * 0.075;
        } else if (sells <= 10000) {
            amountOfSells = sells * 0.1;
        } else if (sells > 10000) {
            amountOfSells = sells * 0.13;
        }
    }
    if (town == 'Plovdiv') {
        if (sells <= 500) {
            amountOfSells = sells * 0.055;
        } else if (sells <= 1000) {
            amountOfSells = sells * 0.08;
        } else if (sells <= 10000) {
            amountOfSells = sells * 0.12;
        } else if (sells > 10000) {
            amountOfSells = sells * 0.145;
        }
    }
    if (amountOfSells <= 0) {
        console.log('error');
    } else {
    console.log(amountOfSells.toFixed(2));
}
}
comission(['Varna','3874.50']); 
// comission(['Plovdiv','499.99']);
// comission(['Plovdiv','499.99']);
// comission(['Plovdiv','499.99']);