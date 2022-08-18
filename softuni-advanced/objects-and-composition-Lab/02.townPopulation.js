function townPopulation(input) {
  let obj = {};
  for (const info of input) {
    let [city, population] = info.split(' <-> ');
    population = Number(population);
    !obj[city] ? obj[city] = population : obj[city] += population;
  }
  Object.keys(obj).forEach(town => {
    console.log(`${town} : ${obj[town]}`);
  });
}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
