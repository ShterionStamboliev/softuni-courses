function fruitShop(input) {
    let fruit = input[0];
    let dayOfTheWeek = input[1];
    let priceTag = Number(input[2]);
    let sum = 0;

    
    if (dayOfTheWeek === 'Monday' || dayOfTheWeek === 'Tuesday' || dayOfTheWeek === 'Wednesday' || dayOfTheWeek === 'Thursday' || dayOfTheWeek === 'Friday'
    && fruit === 'banana' || fruit === 'apple' || fruit === 'orange' || fruit === 'grapefruit' || fruit === 'kiwi' || fruit === 'pineapple' || fruit === 'grapes') {
       
    sum = priceTag * fruit;

} else if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday' && fruit === 'banana' || fruit === 'apple' || fruit === 'orange' || fruit === 'grapefruit' ||
 fruit === 'kiwi' || fruit === 'pineapple' || fruit === 'grapes') {
        

        sum = priceTag * fruit;
 }
 console.log(sum);
}
fruitShop(["apple", 'Tuesday','2']);