function deserializeString(input) {
  let numBox = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "end") {
      break;
    }
    let [currentChar, currentIndexes] = input[i].split(":");
    currentChar = currentChar;
    currentIndexes = currentIndexes.split("/").map(Number);
    numBox = numBox.concat(currentIndexes).sort((a, b) => a - b);
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "end") {
      break;
    }
    let [char, index] = input[i].split(":");
    index = index.split("/").map(Number);
    let charIndex = [];
    charIndex.push(char);
    charIndex = charIndex.concat(index);
    let ch = charIndex.shift();
    for (const word of charIndex) {
        numBox.includes(word) ? numBox.splice(word, 1, ch) : ''
    }
  }
  console.log(numBox.join(""));
}
deserializeString([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);
