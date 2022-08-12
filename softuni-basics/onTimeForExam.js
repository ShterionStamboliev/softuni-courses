function onTimeForExam(input) {
    const examHour = Number(input[0]);
    const examMin = Number(input[1]);
    const hourArrival = Number(input[2]);
    const minutesArrival = Number(input[3]);

    const examMinutes = (examHour * 60) + examMin;
    const arrivalMinutes = (hourArrival * 60) + minutesArrival;
    const timeDifference = Math.abs(examMinutes - arrivalMinutes);
    const hourDifference = Math.floor(timeDifference / 60);
    let minutesDifference = timeDifference % 60;

    if (minutesDifference === 0 || minutesDifference < 10 && hourDifference > 0) {
        minutesDifference = `0${minutesDifference}`;
    }

    if (arrivalMinutes  === examMinutes) {
        console.log(`On time`);
    } else if (arrivalMinutes > examMinutes && timeDifference < 60) {
        console.log(`Late`);
        console.log(`${minutesDifference} minutes after the start`);
    } else if (arrivalMinutes > examMinutes && timeDifference >= 60) {
        console.log(`Late`);
        console.log(`${hourDifference}:${minutesDifference} hours after the start`);
    } else if (timeDifference <= 30) {
        console.log(`On time`);
        console.log(`${minutesDifference} minutes before the start`);
    } else if (timeDifference > 30 && timeDifference < 60) {
        console.log(`Early`);
        console.log(`${minutesDifference} minutes before the start`);
    } else {
        console.log(`Early`);
        console.log(`${hourDifference}:${minutesDifference} hours before the start`);
    }
}

onTimeForExam(['9','30','9','50']);