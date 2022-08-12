function fruitShop(input) {
    let fruit = input[0];
    let dayOfTheWeek = input[1];
    let priceTag = Number(input[2]);
    let sum = -1;

    if (dayOfTheWeek == 'Monday' || dayOfTheWeek == 'Tuesday' || dayOfTheWeek == 'Wednesday' || dayOfTheWeek == 'Thursday' || dayOfTheWeek == 'Friday') {
        if (fruit == 'banana') {
            sum = priceTag * 2.50;
        } else if (fruit == 'apple') {
            sum = priceTag * 1.20;
        } else if (fruit == 'orange') {
            sum = priceTag * 0.85;
        } else if (fruit == 'grapefruit') {
            sum = priceTag * 1.45;
        } else if (fruit == 'kiwi') {
            sum = priceTag * 2.70;
        } else if (fruit == 'pineapple') {
            sum = priceTag * 5.50;
        } else if (fruit == 'grapes') {
            sum = priceTag * 3.85;
        } 
    }
        if (dayOfTheWeek == 'Saturday' || dayOfTheWeek == 'Sunday') {
            if (fruit == 'banana') {
                sum = priceTag * 2.70;
            } else if (fruit == 'apple') {
                sum = priceTag * 1.25;
            } else if (fruit == 'orange') {
                sum = priceTag * 0.90;
            } else if (fruit == 'grapefruit') {
                sum = priceTag * 1.60;
            } else if (fruit == 'kiwi') {
                sum = priceTag * 3.00;
            } else if (fruit == 'pineapple') {
                sum = priceTag * 5.60;
            } else if (fruit == 'grapes') {
                sum = priceTag * 4.20;
        } 
    }
    if (sum >= 0) {
        console.log(sum.toFixed(2));
    } else {
        console.log('error');
    }
}
fruitShop(['apple','Tuesday','2']);
