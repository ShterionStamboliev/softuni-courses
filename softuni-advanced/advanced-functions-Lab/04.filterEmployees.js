function filterEmployees(data, criteria) {
  const [key, value] = criteria.split("-");
  let counter = 0;

  return JSON.parse(data).forEach((employee) =>
    sortByCriteria.call(employee)
  );

  function sortByCriteria() {
    if (this[key] === value || criteria === "all") {
      return console.log(
        `${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`
      );
    }
  }
}

const data = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;

const criteria = filterEmployees(data, "last_name-Johnson");
