function toyShop(input) {
    const puzzle = 2.60;
    const doll = 3;
    const teddyBear = 4.10;
    const minion = 8.20;
    const truck = 2;
    const vacationCost = Number(input[0]);
    const puzzleQuantity = Number(input[1]);
    const dollQuantity = Number(input[2]);
    const teddyBearQuantity = Number(input[3]);
    const minionQuantity = Number(input[4]);
    const truckQuantity = Number(input[5]);

    const toyCount = puzzleQuantity + dollQuantity + teddyBearQuantity + minionQuantity + truckQuantity;

    let totalCost = (puzzleQuantity * puzzle) + 
    (dollQuantity * doll) + 
    (teddyBearQuantity * teddyBear) + 
    (minionQuantity * minion) + 
    (truckQuantity * truck);
    

    if (toyCount >= 50) {
        totalCost *= 0.75;
    }

    totalCost *= 0.90;

    const difference = Math.abs(totalCost - vacationCost);
    
    if (totalCost >= vacationCost) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`); 
    }
}
toyShop(['40.8','20','25','30','50','10']);