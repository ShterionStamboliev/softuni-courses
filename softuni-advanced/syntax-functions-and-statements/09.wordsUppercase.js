function wordsUppercase(str) {
  let symbols = /\W/g;
  let result = "";
  str = str.replace(symbols, " ").toUpperCase();
  str = str.split(" ").filter((x) => x);
  let len = str.length;
  let count = 0;

  for (const info of str) {
    count++;
    if (count === len) {
      result += info;
    } else {
      result += info + ", ";
    }
  }
  console.log(result);
}
wordsUppercase("Hi, how are you?");
wordsUppercase("Functions in JS can be nested, i.e. hold other functions");
