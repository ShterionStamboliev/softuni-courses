function loadingBar(n) {
    let percentSymbol = String.fromCharCode(37).repeat(n / 10);
    let dots = String.fromCharCode(46).repeat((100 - n) / 10);
    if (n < 100) {
      console.log(`${n}% [${percentSymbol}${dots}]`);
      console.log(`Still loading...`);
    } else {
      console.log(`${n}% Complete!`);
      console.log(`[${percentSymbol}]`);
    }
  }
  loadingBar(30);