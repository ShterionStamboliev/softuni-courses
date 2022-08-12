function train(arr) {
  let numberOfPassengers = arr.shift().split(" ").map(Number);
  let maxCapacityOfWagon = arr.shift();
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let [command, passengers] = arr.shift().split(" ");
    command = command;
    passengers = Number(passengers);
    if (command === "Add") {
      numberOfPassengers.push(passengers);
    } else {
      command = Number(command);
      for (let i = 0; i < numberOfPassengers.length; i++) {
        if (numberOfPassengers[i] + command <= maxCapacityOfWagon) {
          numberOfPassengers[i] += command;
          break;
        }
      }
    }
  }
  console.log(numberOfPassengers.join(" "));
}
// train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
