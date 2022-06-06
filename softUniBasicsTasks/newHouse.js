function newHouse(input) {
    let flowerType = input[0];
    let flowerAmount = Number(input[1]);
    let budget = Number(input[2]);

    let rosesCost = 5;
    let dahliaCost = 3.80;
    let tulipCost = 2.80;
    let narcissusCost = 3;
    let gladiolusCost = 2.50;

    let cost = 0;
    let moneyLeft = 0;
    let moneyNeeded = 0;

    if (flowerType == 'Roses') {
        if (flowerAmount > 80) {
            cost -= (flowerAmount * rosesCost) * 0.1;
        }
            cost += flowerAmount * rosesCost;
    }   else if (flowerType == 'Dahlias') {
        if (flowerAmount > 90) {
            cost -= (flowerAmount * dahliaCost) * 0.15;
        }
            cost += flowerAmount * dahliaCost;
    }   else if (flowerType == 'Tulips') {
        if (flowerAmount > 80) {
            cost -= (flowerAmount * tulipCost) * 0.15;
        }
            cost += flowerAmount * tulipCost;
    }   else if (flowerType == 'Narcissus') {
        if (flowerAmount < 120) {
            cost += (flowerAmount * narcissusCost) * 0.15;
        }
            cost += flowerAmount * narcissusCost;
    }   else if (flowerType == 'Gladiolus') {
        if (flowerAmount < 80) {
            cost += (flowerAmount * gladiolusCost) * 0.2;
        }
            cost += flowerAmount * gladiolusCost;
    }
        if (budget >= cost) {
            moneyLeft = budget - cost;
            console.log(`Hey, you have a great garden with ${flowerAmount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
        } else {
            moneyNeeded = cost - budget;
            console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
        }
    }
 

newHouse(['Narcissus','119','360']);