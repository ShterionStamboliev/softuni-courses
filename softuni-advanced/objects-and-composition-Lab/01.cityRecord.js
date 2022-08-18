function cityRecord(...input) {
  let obj = {
    name: input[0],
    population: +input[1],
    treasury: +input[2],
  };
  return obj;
}
cityRecord("Tortuga", 7000, 15000);
cityRecord("Santo Domingo", 12000, 23500);
