function schoolRegister(arr) {
    let register = {};

    for (let text of arr) {
        let info = text.split(', ');
        let studentName = info[0].split(': ')[1];
        let studentGrade = Number(info[1].split(': ')[1]) + 1;
        let studentAverageGrade = Number(info[2].split(': ')[1]);
        if (studentAverageGrade >= 3) {
            let student = {studentName, studentGrade}
            if (!register.hasOwnProperty(studentGrade)) {
                register[studentGrade] = [];
            }
            register[studentGrade].push(student);
        }
    }
        let sortedRegister = Object.keys(register).sort((a, b) => a - b);

        for (let studentGrade of sortedRegister) {
            let student = register[studentGrade];
            console.log(`${studentGrade} Grade`);
            console.log(`List of students: ${student.map(student => student.studentName).join(', ')}`);
            console.log(`Average annual grade from last year: ${averageScore(student.map(s => s.studentAverageGrade)).toFixed(2)}`);
            console.log();
        }
        function averageScore(sortedRegister) {
            return sortedRegister.reduce((a, b) => a + b, 0) / sortedRegister.length;
        }
    }
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]);