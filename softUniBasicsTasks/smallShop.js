function smallShop(input) {
    const product = input[0];
    const town = input[1];
    const price = Number(input[2]);

    let cost = 0;

    if (product == 'coffee' && town == 'Sofia') {
        cost = price * 0.5;
    } else if (product == 'water' && town == 'Sofia') {
        cost = price * 0.8;
    } else if (product == 'beer' && town == 'Sofia') {
        cost = price * 1.2;
    } else if (product == 'sweets' && town == 'Sofia') {
        cost = price * 1.45;
    } else if (product == 'peanuts' && town == 'Sofia') {
        cost = price * 1.60;
    } else if (product == 'coffee' && town == 'Plovdiv') {
        cost = price * 0.4;
    } else if (product == 'water' && town == 'Plovdiv') {
        cost = price * 0.7;
    } else if (product == 'beer' && town == 'Plovdiv') {
        cost = price * 1.15;
    } else if (product == 'sweets' && town == 'Plovdiv') {
        cost = price * 1.30;
    } else if (product == 'peanuts' && town == 'Plovdiv') {
        cost = price * 1.50;
    } else if (product == 'coffee' && town == 'Varna') {
        cost = price * 0.45;
    } else if (product == 'water' && town == 'Varna') {
        cost = price * 0.7;
    } else if (product == 'beer' && town == 'Varna') {
        cost = price * 1.10;
    } else if (product == 'sweets' && town == 'Varna') {
        cost = price * 1.35;
    } else if (product == 'peanuts' && town == 'Varna') {
        cost = price * 1.55;
    }
    console.log(cost);
}
smallShop(['coffee','Varna','2']);