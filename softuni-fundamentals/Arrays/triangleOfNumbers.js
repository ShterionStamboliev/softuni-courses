function triangleOfNums(n) {
  let a = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= i; k++) {
      a += i + " ";
    }
    a += "\n";
  }
  console.log(a);
}
triangleOfNums(3);
triangleOfNums(5);
triangleOfNums(6);
