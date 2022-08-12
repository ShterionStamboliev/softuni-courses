function swimmingRecord(input) {
    const recordInSeconds = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeInSeconds = Number(input[2]);
    const distanceToSwim = distanceInMeters * timeInSeconds; // 15175.51
    const addedTime = Math.floor(distanceInMeters / 15) * 12.5; // 2512.50
    const totalTime = distanceToSwim + addedTime; // 15175.51 + 2512.50 = 17688.01

    if (recordInSeconds <= totalTime) {
        let secondsNeeded = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    } else {
        let ivanTime = distanceToSwim + addedTime;
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
    }
}
swimmingRecord(['10464','1500','20']);
// swimmingRecord(['55555.67','3017','5.03']);