function lettersChangeNumbers(input) {
  input = input.split(" ").filter(n => n );
  let alphabet = {
    A: 1,
    a: 1,
    B: 2,
    b: 2,
    C: 3,
    c: 3,
    D: 4,
    d: 4,
    E: 5,
    e: 5,
    F: 6,
    f: 6,
    G: 7,
    g: 7,
    H: 8,
    h: 8,
    I: 9,
    i: 9,
    J: 10,
    j: 10,
    K: 11,
    k: 11,
    L: 12,
    l: 12,
    M: 13,
    m: 13,
    N: 14,
    n: 14,
    O: 15,
    o: 15,
    P: 16,
    p: 16,
    Q: 17,
    q: 17,
    R: 18,
    r: 18,
    S: 19,
    s: 19,
    T: 20,
    t: 20,
    U: 21,
    u: 21,
    V: 22,
    v: 22,
    W: 23,
    w: 23,
    X: 24,
    x: 24,
    Y: 25,
    y: 25,
    Z: 26,
    z: 26,
  };
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let text = input[i].split("");
    let firstLetter = text.shift();
    let lastLetter = text.pop();
    let number = Number(text.join(""));
    if (firstLetter === firstLetter.toUpperCase()) {
      number /= alphabet[firstLetter];
    } else if (firstLetter === firstLetter.toLowerCase()) {
      number *= alphabet[firstLetter];
    }
    if (lastLetter === lastLetter.toUpperCase()) {
        number -= alphabet[lastLetter];
    } else if (
        lastLetter = lastLetter.toLowerCase()) {
        number += alphabet[lastLetter];
    }
    sum += number
}
  console.log(sum.toFixed(2));
}
lettersChangeNumbers('P34562Z q2576f   H456z');
