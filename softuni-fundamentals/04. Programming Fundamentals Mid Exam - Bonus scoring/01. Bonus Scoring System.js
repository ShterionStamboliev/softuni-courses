function bonusSystem(arr) {
  arr = arr.map(Number);
  let numberOfStudents = arr.shift();
  let numberOfLectures = arr.shift();
  let additionalBonus = arr.shift();
  let maxBonus = 0;
  let attended = 0;

  for (let i = 0; i < numberOfStudents; i++) {
    let attendance = arr.shift();
    let totalBonus = Math.round(
      (attendance / numberOfLectures) * (5 + additionalBonus)
    );
    if (totalBonus >= maxBonus) {
      maxBonus = totalBonus;
      attended = attendance;
    }
  }
  console.log(`Max Bonus: ${maxBonus}.`);
  console.log(`The student has attended ${attended} lectures.`);
}
bonusSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
