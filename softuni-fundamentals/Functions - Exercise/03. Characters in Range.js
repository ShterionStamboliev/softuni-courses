function charsInRange(charA, charB) {
  let firstSymbol = charA.charCodeAt();
  let secondSymbol = charB.charCodeAt();
  let symbols = [];

  if (firstSymbol < secondSymbol) {
    for (let i = firstSymbol + 1; i < secondSymbol; i++) {
      let char = String.fromCharCode(i);
      symbols.push(char);
    }
  } else if (secondSymbol < firstSymbol) {
    for (let i = secondSymbol + 1; i < firstSymbol; i++) {
      let symbol = String.fromCharCode(i);
      symbols.push(symbol);
    }
  }
  console.log(symbols.join(" "));
}
charsInRange("C", "#");
