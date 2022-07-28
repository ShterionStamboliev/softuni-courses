function schoolGrades(arr) {
  let obj = {};

  for (let info of arr) {
    let [student, ...score] = info.split(" ");
    student = student;
    score = score.map(Number);

    if (!obj.hasOwnProperty(student)) {
      obj[student] = score;
    } else {
      score.forEach((n) => {
        obj[student].push(n);
      });
    }
}
let output = Object.entries(obj).sort((a, b) => {
    return avg(a[1]) - avg(b[1]);
})
for (let [key, value] of output) {
    console.log(`${key}: ${value.join(', ')}`)
}
function avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
