function squareOfStars(input) {
  let res = "";
  if (input === "undefined" || input === "null" || input === 0 || input === " ") {
    for (let row = 0; row < 5; row++) {
        for (let cols = 0; cols < 5; cols++) {
          res += "* ";
      }
      res += "\n";
    }
  } else {
    for (let row = 0; row < input; row++) {
        for (let cols = 0; cols < input; cols++) {
          res += "* ";
      }
      res += "\n";
    }
}
  console.log(res.trim());
}
squareOfStars(5);
