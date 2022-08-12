function listOfProducts(arr) {
  let arg = arr.sort();

  for (let i = 0; i < arg.length; i++) {
    console.log(`${i + 1}.${arg[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
