function garage(arr) {
    let obj = new Map();

    for (const info of arr) {
        let [garageNumber, garageProperties] = info.split(' - ');
        garageProperties.split(', ');
        if (!obj.hasOwnProperty(garageNumber)) {
            obj[garageNumber] = new Map();
        }
        obj[garageNumber].set(garageProperties);
    }
    let entries = Object.entries(obj);

    for (const info of entries) {
        console.log(info);
    }
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
