function carWash(input) {
  let clean = 0;

  for (const command of input) {
    switch (command) {
      case "soap":
        clean += 10;
        break;

      case "water":
        clean += clean * 0.2;
        break;

      case "vacuum cleaner":
        clean += clean * 0.25;
        break;

      case "mud":
        clean -= clean * 0.1;
        break;
    }
  }
  console.log(`The car is ${clean.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
