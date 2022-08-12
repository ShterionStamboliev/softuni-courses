function sumDigits(n) {
  let sum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  console.log(sum);
}

sumDigits(543);
