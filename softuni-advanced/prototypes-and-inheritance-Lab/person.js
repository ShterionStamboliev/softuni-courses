function Person(firstName, lastName) {
    const person = {
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName
    };
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            const [fName, lName] = value.split(' ');
            if (fName != undefined && lName != undefined) {
                this.firstName = fName;
                this.lastName = lName;
            }
        }
    });
    return person;
}
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
