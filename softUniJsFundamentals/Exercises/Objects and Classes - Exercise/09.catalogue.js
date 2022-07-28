function catalogue(arr) {
  let cart = [];
  let letter = '';

  for (let item of arr) {
    let info = item.split(' : ');
    let product = {
        productName: info[0],
        productPrice: Number(info[1]),
    };
    cart.push(product);
    cart.sort((a, b) => a.productName.localeCompare(b.productName));
}
    for (let text of cart) {
        let firstLetter = text.productName.charAt(0).toUpperCase();
        if (firstLetter === letter) {
            console.log(`  ${text.productName}: ${text.productPrice}`);
        } else {
            letter = firstLetter;
            console.log(letter);
            console.log(`  ${text.productName}: ${text.productPrice}`);
        }
    }
}
catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
