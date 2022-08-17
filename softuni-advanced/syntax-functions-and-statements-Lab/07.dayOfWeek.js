function dayOfWeek(input) {
    let daysOfWeek = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    daysOfWeek[input] ? console.log(daysOfWeek[input]) : console.log('error');
}   
dayOfWeek('Invalid');