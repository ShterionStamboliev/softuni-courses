function buildAWall(arr) {
  arr = arr.map(Number);
  let concrete = 0;
  let cubicYards = 195;
  let totalPesos = 0;
  const cubicYardCost = 1900;
  const relieved = 30;
  let allConcrete = 0;
  let concretePerDay = [];
  let workers = arr.filter(n => n < 30).length;

  while (workers !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== relieved) {
        arr[i]++;
        concrete += cubicYards;
      }
      if (arr[i] === 30) {
        workers--;
      }
    }
  }
  allConcrete += concrete;
  concretePerDay.push(concrete);
  totalPesos = cubicYardCost * allConcrete;

  console.log(concretePerDay.join(", "));
  console.log(`${totalPesos} pesos`);
}
buildAWall([17, 22, 17, 19, 17]);
