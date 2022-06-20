function passwordValidator(input) {
  let validator = input;
  let digitCount = 0;
  let current;

  for (let i = 0; i < validator.length; i++) {
    current = String(validator[i]);
    if (current >= 0) {
      digitCount++;
    }
  }
  if (digitCount >= 2 && validator.length >= 6 && validator.length <= 10) {
    console.log("Password is valid");
  } else if (digitCount >= 2 && validator.length > 10) {
    console.log("Password must be between 6 and 10 characters");
  } else if (
    (digitCount < 2 && validator.length < 6) ||
    validator.length > 10
  ) {
    console.log("Password must be between 6 and 10 characters");
    console.log("Password must have at least 2 digits");
  } else {
    console.log("Password must consist only of letters and digits");
    console.log("Password must have at least 2 digits");
  }
}

passwordValidator("logIn");
// console.log('******');
// passwordValidator("MyPass123");
// console.log('******');
passwordValidator("Pa$s$s");
