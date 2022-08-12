function pascalCaseSplitter(input) {
  input = input.split("");
  let result = "";
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];
    count++;
    let nextChar = input[i + 1];
    if (currentChar === currentChar.toUpperCase()) {
      result += currentChar;
    } else if (currentChar === currentChar.toLowerCase()) {
      result += currentChar;
    }
    if (count === input.length) {
      break;
    }
    if (nextChar === nextChar.toUpperCase()) {
      result += ", ";
    }
  }
  console.log(result);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
