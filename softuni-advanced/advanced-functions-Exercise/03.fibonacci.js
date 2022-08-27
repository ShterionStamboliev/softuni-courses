function getFibonator() {
  let f1 = 0;
  let f2 = 1;

  const getFib = () => {
    let nextFib = f1 + f2;
    f1 = f2;
    f2 = nextFib;
    return f1;
  };
  return getFib;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
