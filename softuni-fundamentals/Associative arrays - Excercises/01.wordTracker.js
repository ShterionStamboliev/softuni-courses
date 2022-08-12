function wordTracker(arr) {
  let obj = [];
  let count = 0;

  let firstStack = arr.shift().split(" ");

  for (let i = 0; i < firstStack.length; i++) {
    arr.forEach(el => {
        if (firstStack[i] === el) {
            count++;
        }
    });
    let word = firstStack[i];
    let wordCount = count;
    obj.push({word, wordCount})
    count = 0;
  }
  obj.sort((a, b) => b.wordCount - a.wordCount);

  for (let i = 0; i < obj.length; i++) {
    console.log(`${obj[i].word} - ${obj[i].wordCount}`);
  }
}
wordTracker([
  "this to",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
