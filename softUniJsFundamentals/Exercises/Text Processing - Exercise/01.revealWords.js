function revealWords(words, text) {
  words = words.split(", ");
  text = text.split(" ");

  for (const info of text) {
    if (info.startsWith("*") && info.endsWith("*")) {
      for (const word of words) {
        if (info.length === word.length) {
          text = text.toString();
          text = text.replace(info, word);
        }
      }
      text = text.split(",");
    }
  }
  console.log(text.join(" "));
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages");
