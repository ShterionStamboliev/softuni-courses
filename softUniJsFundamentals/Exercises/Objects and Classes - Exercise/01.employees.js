function employees(employeeName) {
  let listOfEmployees = {};

  for (let i = 0; i < employeeName.length; i++) {
    let [personName] = employeeName[i].split(", ");
    let personNumber = personName.length;

    listOfEmployees.name = personName;
    listOfEmployees.number = personNumber;
    console.log(`Name: ${personName} -- Personal Number: ${personNumber}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
