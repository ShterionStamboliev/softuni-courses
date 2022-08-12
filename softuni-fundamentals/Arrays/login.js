function login(input) {
  let index = 0;
  let username = input[index];
  index++;
  let password = '';
  let count = 0;

  for (let i = username.length - 1; i >= 0; i--) {
      password += username[i];
  }
  while (input[index] !== password) {
      count++;
      if (count === 4) {
        console.log(`User ${username} blocked!`);
        break;
      } else {
          console.log('Incorrect password. Try again.');
      }
      index++;
  }
  if (input[index] === password) {
    console.log(`User ${username} logged in.`);
}
}

login(["Acer", "login", "go", "let me in", "recA"]);
// login(["sunny", "rainy", "cloudy", "sunny", "not sunny"])
