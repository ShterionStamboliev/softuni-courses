function blackFlag(arr){
    arr = arr.map(Number);
    let newArr = arr.slice();
    let days = newArr.shift();
    let dailyPlunder = newArr.shift();
    let expectedPlunder = newArr.shift();
    let totalPlunder = 0;
    let bonusPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
        bonusPlunder = dailyPlunder * 0.5;
        totalPlunder += bonusPlunder;
        }
        if (i % 5 === 0) {
            totalPlunder = totalPlunder - (totalPlunder * 0.3);
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let bountyPercentageLeft = (totalPlunder / expectedPlunder) * 100; 
        console.log(`Collected only ${bountyPercentageLeft.toFixed(2)}% of the plunder.`);
    }
}
// treasureHunt(["5",
// "40",
// "100"]);
blackFlag(["10",
"20",
"380"])
