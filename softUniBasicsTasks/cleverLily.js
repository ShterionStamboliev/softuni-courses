function cleverLily(input) {
    const lilyAge = Number(input[0]);
    const washerCost = Number(input[1]);
    const toyCost = Number(input[2]);
    let tempMoney = 10;
    let money = 0;
    let toyCounter = 0;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 == 0) {
            money += tempMoney;
            tempMoney += 10;
            money -= 1;
        } else {
            toyCounter++;
        }
    }
    money += toyCounter * toyCost;
    let diff = Math.abs(money - washerCost);
    if (money >= washerCost) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(['10','170','6']);