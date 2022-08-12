function lunchBreak(input) {
    const showName = (input[0]);
    const showDuration = Number(input[1]);
    const restDuration = Number(input[2]);

    const timeForLunch = (restDuration * 1) / 8;
    const timeForRest = (restDuration * 1) / 4;
    const restTime = Math.abs(restDuration - timeForLunch - timeForRest);

    if (restTime >= showDuration) {
        let timeLeft = Math.ceil(restTime - showDuration);
        console.log(`You have enough time to watch ${showName} and left with ${timeLeft} minutes free time.`);
    } else {
        (restTime < showDuration)
        let timeNeeded = Math.ceil(showDuration - restTime);
        console.log(`You don't have enough time to watch ${showName}, you need ${timeNeeded} more minutes.`);
    }
}
lunchBreak(['Game of Thrones','60','96']);
// lunchBreak(['Teen Wolf','48','60']);