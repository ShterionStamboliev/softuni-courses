function store(input) {
  const obj = {};

  input.forEach((product) => {
    const [item, price] = product.split(" : ");
    const ch = item[0];
    if (!obj[ch]) {
      obj[ch] = {};
    }
    if (!obj[ch][item]) {
      obj[ch][item] = price;
    }
  });
  Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .forEach((ch) => {
      console.log(ch);
      Object.keys(obj[ch])
        .sort((a, b) => a.localeCompare(b))
        .forEach((item) => {
          console.log(`  ${item}: ${obj[ch][item]}`);
        });
    });
}
store([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
