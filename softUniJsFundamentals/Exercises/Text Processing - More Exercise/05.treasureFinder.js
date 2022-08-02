function treasureFinder(input) {
  let numKeys = input.shift().split(" ").map(Number);
  let text = input.shift().toString();
  let res = "";
  let box = [];

  while (text !== "find") {
    for (let i = 0; i < numKeys.length; i++) {
      for (let j = 0; j < text.length; j++) {
        res += String.fromCharCode(text[j].charCodeAt() - numKeys[i]);
        i++;
        if (i === numKeys.length) {
          i = 0;
          continue;
        }
      }
      box.push(res);
      res = "";
      i = -1;
      text = input.shift();
      break;
    }
  }
  while (box.length > 0) {
    let itemName = box.shift().toString().split('&');
    let itemType = itemName[1];
    let coordinates = itemName[2].toString().split('<')[1].slice(0, -1)
    console.log(`Found ${itemType} at ${coordinates}`);
  }
}
treasureFinder([
  "1 4 2 5 3 2 1",
  `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
  "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
  "'stj)>34W68Z@",
  "find",
]);
console.log("***********");
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
