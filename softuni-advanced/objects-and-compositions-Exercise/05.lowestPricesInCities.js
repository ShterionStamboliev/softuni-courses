function lowestPrices(input) {
  let box = [];

  input.forEach(prod => {
    let [town, product, price] = prod.split(' | ');
    if (box.filter(a => a.product === product).length > 0) {
      let obj = box.find(y => y.product === product);

      if (obj.price > +price) {
        obj.price = +price;
        obj.town = town;
      }
    } else {
      let obj = { product, town, price:+(price) };
      box.push(obj);
    }
  });
  box.forEach(product => {
    console.log(`${product.product} -> ${product.price} (${product.town})`)
  })
}
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

// lowestPrices([
//   "Sofia City | Audi | 100000",
//   "Sofia City | BMW | 100000",
//   "Sofia City | Mitsubishi | 10000",
//   "Sofia City | Mercedes | 10000",
//   "Sofia City | NoOffenseToCarLovers | 0",
//   "Mexico City | Audi | 1000",
//   "Mexico City | BMW | 99999",
//   "Mexico City | Mitsubishi | 10000",
//   "New York City | Mitsubishi | 1000",
//   "Washington City | Mercedes | 1000",
// ]);
