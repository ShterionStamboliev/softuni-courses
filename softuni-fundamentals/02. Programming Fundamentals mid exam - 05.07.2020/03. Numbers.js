function topFive(arr) {
  let arg = arr.split(" ").map(Number);
  let sum = 0;
  let avg = 0;
  let count = 0;
  let greaterThanAvg = [];
  
  for (let i = 0; i < arg.length; i++) {
    count++;
    sum += arg[i];
    avg = sum / count;
  }
  for (let nums of arg) {
    if (nums > avg) {
      greaterThanAvg.push(nums);
      greaterThanAvg.sort((a, b) => b - a);
    }
    if (greaterThanAvg.length > 5) {
      greaterThanAvg.pop();
    }
  }
  if (greaterThanAvg.length < 1) {
    console.log("No");
  }
  console.log(greaterThanAvg.join(" "));
}
// topFive("10 20 30 40 50");
topFive("5 2 3 4 -10 30 40 50 20 50 60 60 51");
topFive("10 20 30 40 50");
topFive("-1 -2 -3 -4 -5 -6");
topFive("1");
