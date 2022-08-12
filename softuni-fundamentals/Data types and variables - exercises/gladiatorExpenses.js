function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let brokenShield = 0;
  let brokenArmor = 0;
  let brokenHelmet = 0;
  let brokenSword = 0;

  for (let i = 1; i <= lostFights; i++) {
    let helmet = false;
    let sword = false;
    if (i % 2 === 0) {
      helmet = true;
      brokenHelmet++;
    }
    if (i % 3 === 0) {
      sword = true;
      brokenSword++;
    }
    if (helmet && sword) {
      brokenShield++;
      if (brokenShield % 2 === 0) {
        brokenArmor++;
      }
    }
  }
  expenses =
    brokenHelmet * helmetPrice +
    brokenSword * swordPrice +
    brokenShield * shieldPrice +
    brokenArmor * armorPrice;
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
