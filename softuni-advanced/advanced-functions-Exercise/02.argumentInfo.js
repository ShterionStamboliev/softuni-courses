function argumentInfo(...input) {
  const obj = {};
  input.forEach(text => {
    const textType = typeof text;
    console.log(`${textType}: ${text}`);
    if (!obj[textType]) {
        obj[textType] = 0;
      }
      obj[textType]++;
  });
Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(textInfo => {
    console.log(`${textInfo[0]} = ${textInfo[1]}`);
  });
}
argumentInfo("cat", 42, function () {console.log("Hello world!");});
