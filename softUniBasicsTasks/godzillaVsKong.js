function godzillaVsKong(input) {
    const budget = Number(input[0]);
    const statists = Number(input[1]);
    const statistsOutfit = Number(input[2]);
    const decorCost = budget * 0.1;
    let outfitCost = statists * statistsOutfit;
    
    if (statists > 150) {
        outfitCost *= 0.9;
    }

    const totalCost = decorCost + outfitCost;
    
    if (totalCost > budget) {
        let moneyNeeded = totalCost - budget;
        console.log('Not enough money!');
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - totalCost;
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(['15437.62','186','57.99']);