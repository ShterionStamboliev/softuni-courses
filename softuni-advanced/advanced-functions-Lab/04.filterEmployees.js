function filterEmployees(data, criteria) {
  const [key, value] = criteria.split("-");
  let index = 0;

  const sortByCriteria = employee => {
    if (employee[key] === value || criteria === "all") {
      console.log(
        `${index++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
      );
    }
  }
  return JSON.parse(data).map(employee => sortByCriteria(employee));
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