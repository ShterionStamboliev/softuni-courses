function piccolo(arr) {
  let obj = {};

  for (const text of arr) {
    let [direction, carNumber] = text.split(", ");
    direction === "IN" ? (obj[carNumber] = direction) : delete obj[carNumber];
  }
  let entries = Object.keys(obj).sort(); 
  entries.length !== 0 ? console.log(entries.join("\n")) : console.log("Parking Lot is Empty");
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
