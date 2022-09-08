function heroicInventory(input) {
  const heroInfo = [];
  for (const info of input) {
    let [name, level, items] = info.split(" / ");
    level = Number(level);
    items = items ? items.split(', ') : [];
    if (items.length !== 0) {
        const heroObj = {
            name: name,
            level: level,
            items: items
        };
        heroInfo.push(heroObj)
    } else {
        const heroObj = {
            name: name,
            level: level,
            items: [],
        }
        heroInfo.push(heroObj);
    }
  }
  return JSON.stringify(heroInfo);
}
heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
