function calculator(num1, num2, operator) {
  switch (operator) {
    case "add":
      let add = (num1, num2) => num1 + num2;
      console.log(add(num1, num2));
      break;
    case "subtract":
      let subtract = (num1, num2) => num1 - num2;
      console.log(subtract(num1, num2));
      break;
    case "multiply":
      let multiply = (num1, num2) => num1 * num2;
      console.log(multiply(num1, num2));
      break;
    case "divide":
      let divide = (num1, num2) => num1 / num2;
      console.log(divide(num1, num2));
      break;
  }
}
calculator(5, 5, "multiply");
