function stringSubstring(word, text) {
  let sentence = text.split(" ");

  for (const info of sentence) {
    if (info.toLowerCase() === word.toLowerCase()) {
      console.log(word);
      return;
    }
  }
  console.log(`${word} not found!`);
}
stringSubstring("javascript", "JavaScript is the best programming language");
