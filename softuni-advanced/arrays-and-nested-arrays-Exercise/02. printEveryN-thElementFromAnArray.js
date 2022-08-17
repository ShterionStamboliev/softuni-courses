function solve(input, n) {
  return input.filter((_, i) => i % n === 0);
}
solve(["5", "20", "31", "4", "20"], 2);
solve(["1", "2", "3", "4", "5"], 6);
solve(["dsa", "asd", "test", "tset"], 2);
