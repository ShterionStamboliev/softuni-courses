function meetings(arr) {
  let obj = {};

  for (let info of arr) {
    let [weekday, person] = info.split(' ');
    if (obj.hasOwnProperty(weekday)) {
        console.log(`Conflict on ${weekday}!`);
    } else {
        obj[weekday] = person;
        console.log(`Scheduled for ${weekday}`);
    }
}
for (const [day, name] of Object.entries(obj)) {
    console.log(`${day} -> ${name}`);
}
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
