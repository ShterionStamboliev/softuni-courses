function bitcoin(input) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let day = 0;
    let firstDayBought = 0;
    let coinsBought = 0;
    let coinCount = 0;
    let totalCoins = 0;
    let sum = 0;
    let earnings = 0;

    for (let i = 0; i < input.length; i++) {
        day++;
        let current = input[i];
         if (day % 3 === 0) {
            current *= 0.7;
        }
        earnings = current * gold;
        sum += earnings;

        if (sum >= bitcoin) {
            coinCount++;
            coinsBought = Math.floor(sum / bitcoin);
            sum -= (bitcoin * coinsBought);
            totalCoins += coinsBought;
        }
        if (coinCount === 1) {
            firstDayBought = day;
        }
    }
        console.log(`Bought bitcoins: ${totalCoins}`);
        if (firstDayBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBought}`);
        }
        console.log(`Left money: ${sum.toFixed(2)} lv.`);
    }
bitcoin([100, 200, 300]);
