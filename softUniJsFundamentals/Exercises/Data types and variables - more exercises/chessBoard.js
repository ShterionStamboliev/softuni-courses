function chessBoard(n) {
  let num = Number(n);
  let current = "black";
  let last = "";
  console.log('<div class="chessboard">');

  for (let i = 1; i <= num; i++) {
    console.log("  <div>");

    for (let j = 1; j <= num; j++) {
      console.log(`    <span class="${current}"></span>`);

      last = current;
      current = last === "black" ? "white" : "black";
    }

    console.log(`  </div>`);

    if (num % 2 === 0) {
      last = current;
      current = last === "black" ? "white" : "black";
    }
  }
  console.log("</div>");
}
chessBoard(3);
