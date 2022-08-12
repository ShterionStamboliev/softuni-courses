function dayOfWeek(input) {
    const dayOfTheWeek = Number(input[0]);

    if (dayOfTheWeek == '1') {
        console.log('Monday');
    } else if (dayOfTheWeek == '2') {
        console.log('Tuesday');
    } else if (dayOfTheWeek == '3') {
        console.log('Wednesday');
    } else if (dayOfTheWeek == '4') {
        console.log('Thursday');
    } else if (dayOfTheWeek == '5') {
        console.log('Friday');
    } else if (dayOfTheWeek == '6') {
        console.log('Saturday');
    } else if (dayOfTheWeek == '7') {
        console.log('Sunday');
    } else {
        console.log('Error');
    }
}
dayOfWeek(['-8']);