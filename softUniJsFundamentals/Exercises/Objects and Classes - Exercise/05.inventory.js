function inventory(arr) {
  let heroes = [];

  for (let hero of arr) {
    let info = hero.split(" / ");
    heroes.push({ hero: info[0], level: Number(info[1]), items: info[2] });
  }
  let sorted = heroes.sort((a, b) => a.level - b.level);

  for (let obj of sorted) {
      console.log(`Hero: ${obj.hero}\nlevel => ${obj.level}\nitems => ${obj.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
