function store(currentStock, orderedProducts) {
  let stock = {};

for (let i = 0; i < currentStock.length; i+=2) {
  let currentProduct = currentStock[i];
  let quantityAmount = Number(currentStock[i + 1]);
  stock[currentProduct] = quantityAmount;
}

for (let i = 0; i < orderedProducts.length; i+=2) {
  let ordered = orderedProducts[i];
  let orderedQuantity = Number(orderedProducts[i + 1]);
  if (stock.hasOwnProperty(ordered)) {
    stock[ordered] += orderedQuantity;
  } else {
    stock[ordered] = orderedQuantity;
  }
}
for (const [key, val] of Object.entries(stock)) {
  console.log(`${key} -> ${val}`);
}
}
store([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30 ']);