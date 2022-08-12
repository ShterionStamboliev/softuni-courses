function asciiSumator(input) {
  let firstSymbol = input.shift().charCodeAt();
  let secondSymbol = input.shift().charCodeAt();
  input = input.toString();
  let res = 0;

  for (const ch of input) {
    if (firstSymbol > secondSymbol) {
      if (ch.charCodeAt() < firstSymbol && ch.charCodeAt() > secondSymbol) {
        res += ch.charCodeAt();
      }
    }
    if (firstSymbol < secondSymbol) {
      if (ch.charCodeAt() > firstSymbol && ch.charCodeAt() < secondSymbol) {
        res += ch.charCodeAt();
      }
    }
  }
  console.log(res);
}
asciiSumator([".", "@", "dsg12gr5653feee5"]);
console.log("**********");
asciiSumator(["?", "E", "@ABCEF"]);
console.log("**********");
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
