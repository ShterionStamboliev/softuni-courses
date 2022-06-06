function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let actorPoints = Number(input[index]);
    index++;
    let numOfJudges = Number(input[index]);
    index++;

    let isNominee = false;

    for (let i = 0; i < numOfJudges; i++) {
        let judgeName = input[index];
        index++;
        let judgePoints = Number(input[index]);
        index++;
        
        actorPoints += judgeName.length * judgePoints / 2;

        if (actorPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
            isNominee = true;
            break;
        }
    }

    if (!isNominee) {
        let diff = Math.abs(actorPoints - 1250.5);
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
    
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
