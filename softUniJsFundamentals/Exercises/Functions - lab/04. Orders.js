function orders(product, quantity) {
    let water = 1;
    let coffee = 1.5;
    let coke = 1.4;
    let snacks = 2;
    let totalSum = 0

  switch (product) {
      case 'water': totalSum =water * quantity; break;
      case 'coffee': totalSum = coffee * quantity; break;
      case 'coke': totalSum = coke * quantity; break;
      case 'snacks': totalSum = snacks * quantity; break;
  }
console.log(totalSum.toFixed(2));
}
orders("coffee", 2);