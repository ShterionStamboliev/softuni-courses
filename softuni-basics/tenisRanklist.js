function tenisRanklist(input) {
    let index = 0;
    let numOfTournament = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
    let winCount = 0;
    for (let i = 0; i < numOfTournament; i++) {
        let tournament = input[index];
        index++;
        
        if (tournament == 'F') {
            tempPoints += 1200;
        } else if (tournament == 'SF') {
            tempPoints += 720;
        } else if (tournament == 'W') {
            tempPoints += 2000;
            winCount++;
        }
    }
    let finalPoints = startingPoints + tempPoints;
    let avgPoints = ((Math.floor(tempPoints / numOfTournament)));
    let winRate = winCount / numOfTournament * 100
    
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${winRate.toFixed(2)}%`);
}
tenisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
