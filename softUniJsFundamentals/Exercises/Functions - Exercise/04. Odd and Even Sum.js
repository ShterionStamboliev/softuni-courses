function oddEvenSum(n) {
  n = n.toString();
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < n.length; i++) {
    let sum = Number(n[i]);
    if (sum % 2 === 0) {
      sumEven += sum;
    } else {
      sumOdd += sum;
    }
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddEvenSum(1000435);
