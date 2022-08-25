function filterEmployees(data, criteria) {
  const [key, value] = criteria.split("-");
  let index = 0;

  const sortByCriteria = (employee) => {
    if (employee[key] === value || criteria === "all") {
      console.log(
        `${index++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
      );
    }
  };
  return JSON.parse(data)
  .forEach((employee) => sortByCriteria(employee));
}

const data = `[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`;

const criteria = filterEmployees(data, "gender-Female");
