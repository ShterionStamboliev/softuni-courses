function houseParty(arr) {
  let guests = [];

  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");
    let name = currentCommand[0];
    let command = currentCommand[2];

    if (command === "not") {
      if (guests.includes(name)) {
        let nameToRemove = guests.indexOf(name);
        guests.splice(nameToRemove, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else if (!guests.includes(name)) {
      guests.push(name);
    } else {
      console.log(`${name} is already in the list!`);
    }
  }
  console.log(guests.join("\n"));
}
houseParty(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!']);
// houseParty(["Allie is going!","George is going!","John is not going!","George is not going!"]);
