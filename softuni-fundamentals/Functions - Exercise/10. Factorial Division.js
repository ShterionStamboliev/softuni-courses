function factorialDivision(a, b) {
    let sumA = a;
    let sumB = b;
  while (a > 1) {
    a--;
    sumA *= a;
  }
  while (b > 1) {
      b--;
      sumB *= b;
  }
  let result = sumA / sumB;
  console.log(sumA.toFixed(2));
  console.log(result.toFixed(2));
}
factorialDivision(5, 2);
