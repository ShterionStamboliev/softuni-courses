function amazingNumbers(n) {
  n = n.toString();
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  let str = sum.toString();

  if (str.includes("9")) {
    console.log(`${n} Amazing? True`);
  } else {
    console.log(`${n} Amazing? False`);
  }
}
amazingNumbers(1233);
amazingNumbers(999);
