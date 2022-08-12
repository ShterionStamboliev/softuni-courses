function modernTimes(text) {
  text = text.split(" ");

  for (const info of text) {
    if (info.startsWith("#") && info.length > 1) {
      let currentWord = info;
      let result = "";

      for (let i = 0; i < currentWord.length; i++) {
        let char = currentWord[i];
        if (char >= 0) {
          result = "";
          break;
        } else {
          result += char;
        }
      }
      if (result.length === 0) {
        continue;
      }
      console.log(result.substring(1).trim());
    }
  }
}
modernTimes("#v123 #regions #number");
modernTimes("The symbol # is known #variously in English-speaking #regions as the #number sign");
