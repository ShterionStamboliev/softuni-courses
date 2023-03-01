class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    sayHi() {
        console.log(`${this.name}, ${this.age} says hi!`);
    }
};

class Student extends Person {
    constructor(name, age, degree) {
        super(name, age, degree);
        this.degree = degree;
    };
    sayHi() {
        console.log(`${this.degree} says hi`);
    }
};

class Teacher extends Person {
    constructor(name, age, skill) {
        super(name, age, skill);
        this.skill = skill;
    };
};

let newPerson = new Person('Peter', 18);
let newStudent = new Student('Pesho', 18, 2);
let newTeacher = new Teacher('Gosho', 30, 'Math class');

newStudent.sayHi();

console.log(newPerson);
console.log(newStudent);
console.log(newTeacher);