function replaceRepeatingChars(input) {
  input = input.split("");
  let box = [];

  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];
    box.push(currentChar);
  }
  for (let i = 1; i < box.length; i++) {
    let current = box[i];
    let previous = box[i - 1];
    if (previous === current) {
      box.splice(i, 1);
      i--;
    }
  }
  console.log(box.join(""));
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
