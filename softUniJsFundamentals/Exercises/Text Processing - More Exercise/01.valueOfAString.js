function valueOfAString(input) {
  const text = input[0];
  const wordCase = input[1];
  let sum = 0;

  for (const ch of text) {
    if (wordCase === "LOWERCASE") {
      if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
        sum += ch.charCodeAt();
      }
    } else if (wordCase === "UPPERCASE") {
      if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
        sum += ch.charCodeAt();
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
valueOfAString(["AC/DC", "UPPERCASE"]);
