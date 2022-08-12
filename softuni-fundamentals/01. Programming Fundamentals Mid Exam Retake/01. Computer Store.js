function computerStore(arr) {
  let taxes = 0;
  let sum = 0;
  let finalPrice = 0;
  let command = arr.pop().toLowerCase();
  
  if (arr.length === 0) {
   return console.log("Invalid order!");
  }

  for (let parts of arr) {
     parts = Number(parts);
    if (parts > 0) {
      sum += parts;
    } else {
        console.log('Invalid price!');
        continue;
    }
  }

  if (sum === 0) {
    return console.log('Invalid order!');
  }

  taxes = sum * 0.2
  finalPrice = taxes + sum;

  if (command === "special") {
    finalPrice = finalPrice - (finalPrice * 0.1)
  }
  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${sum.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${finalPrice.toFixed(2)}$`);
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);