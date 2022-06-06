function sum(num1, num2) {
  let sum = 0;
  let a = "";
  for (let i = num1; i <= num2; i++) {
    sum += i;
    a += i + " ";
  }
  console.log(a);
  console.log(`Sum: ${sum}`);
}
sum(5, 10);
sum(0, 26);
sum(50, 60);
