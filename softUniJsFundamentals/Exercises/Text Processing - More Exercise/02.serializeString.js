function serializeString(input) {
  const text = input[0];
  let box = {};

  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    if (text[i] === ch) {
      if (!box[ch]) {
        box[ch] = [];
      }
    }
  }
  let keys = Object.keys(box);
  if (keys.length > 0) {
    let current = keys.shift();
    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < text.length; j++) {
        if (current === text[j]) {
          box[current].push(j);
        }
      }
      current = keys.shift();
    }
  }
  let entr = Object.entries(box);
  for (const ch of entr) {
    console.log(`${ch[0]}:${ch[1].join("/")}`);
  }
}
serializeString(["avjavamsdmcalsdm"]);