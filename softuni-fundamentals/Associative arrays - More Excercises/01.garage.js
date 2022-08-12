function garage(arr) {
  let obj = {};

  for (const info of arr) {
    let [garage, carInfo] = info.split(" - ");

    if (!obj[garage]) {
      obj[garage] = [];
    }
    obj[garage].push(carInfo);
  }
  Object.entries(obj).forEach(([garageNum, cars]) => {
    console.log(`Garage № ${garageNum}`);
    for (let info of cars) {
      info = info.split(': ').join(' - ')
      console.log(`--- ${info}`);
    }
  });
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
