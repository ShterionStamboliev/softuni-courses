function wordsUppercase(str) {
  const symbols = /\W/g;
  let result = "";
  str = str.replace(symbols, " ").toUpperCase().split(" ").filter(x => x);
  const len = str.length;
  let count = 0;

  for (const info of str) {
    count++;
    count === len ? result += info : result += info + ', ';
  }
  return(console.log(result));
}
wordsUppercase("Hi, how are you?");
wordsUppercase("Functions in JS can be nested, i.e. hold other functions");
