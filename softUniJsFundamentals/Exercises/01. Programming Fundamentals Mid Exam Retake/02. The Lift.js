function lift(input) {
  let ppl = Number(input.shift());
  let wagons = input.shift().split(" ").map(Number);

  for (let i = 0; i < wagons.length; i++) {
    if (wagons[i] < 4) {
      if (ppl >= 4 - wagons[i]) {
        ppl -= 4 - wagons[i];
        wagons[i] = 4;
      } else {
        wagons[i] += ppl;
        ppl = 0;
      }
    }
  }
  let isFull = false;

  for (let i = 0; i < wagons.length;i++) {
    let currentWagon = wagons[i];
    if (currentWagon < 4) {
      isFull = true;
    }
  }
  if (!isFull && ppl > 0) {
    console.log(`There isn't enough space! ${ppl} people in a queue!`);
  }
  if (isFull && ppl === 0) {
    console.log('The lift has empty spots!');
  }
  console.log(wagons.join(' '));
}
lift(["15", "0 0 0 0 0"]);
