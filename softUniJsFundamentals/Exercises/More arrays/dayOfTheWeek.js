function dayOfTheWeek(day){
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let index = day - 1;

    if (day >= 1 && day <= 7) {
        console.log(days[index])
    } else {
        console.log(`Invalid day!`)
    }
}
dayOfTheWeek([3]);
dayOfTheWeek([6]);
dayOfTheWeek([7]);
dayOfTheWeek([-1]);
dayOfTheWeek([-2]);