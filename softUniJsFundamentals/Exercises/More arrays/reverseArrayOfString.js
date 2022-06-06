function reverse(ar) {
  for (let i = 0; i < ar.length / 2; i++) {
      let a = ar.length - 1 - i;
      let temp = ar[i];
      ar[i] = ar[a];
      ar[a] = temp
  }
  console.log(ar.join(' '));
}
// reverse(["a", "b", "c", "d", "e"]);
reverse(['abc', 'def', 'hig', 'klm', 'nop'])
// reverse(['33', '123', '0', 'dd'])
