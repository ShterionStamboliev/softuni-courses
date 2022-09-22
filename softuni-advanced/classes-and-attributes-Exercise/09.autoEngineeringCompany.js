function cars(input) {
    const car = {};
    input.forEach(c => {
        let [brand, model, produce] = c.split(' | ');
        produce = +produce;
        if (!car[brand]) {
            car[brand] = {};
        }
        if (!car[brand][model]) {
            car[brand][model] = 0;
        }
            car[brand][model] += produce;
    });
    for (const [cars, model] of Object.entries(car)) {
        console.log(cars);
        for (const [a, prod] of Object.entries(model)) {
            console.log(`###${a} -> ${prod}`);
        }
    }
}
cars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])