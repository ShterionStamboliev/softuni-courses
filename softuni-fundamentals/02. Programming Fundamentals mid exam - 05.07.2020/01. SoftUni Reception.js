function reception(arr) {
  let students = arr.pop();
  let firstEmployee = arr.shift();
  let secondEmployee = arr.shift();
  let thirdEmployee = arr.shift();
  let totalAnswerTime = Number(firstEmployee) + Number(secondEmployee) + Number(thirdEmployee);
  let count = 0;

  while (students > 0) {
    students -= totalAnswerTime;
    count++;
  
  if (count % 4 === 0) {
    count++;
  }
  }
  console.log(`Time needed: ${count}h.`);
}
// reception(["5", "6", "4", "20"]);
reception(["1", "2", "3", "45"]);
