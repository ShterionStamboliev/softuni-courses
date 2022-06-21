function dungeons(arr) {
  let dungeon = arr[0].split("|");
  let initialHealth = 100;
  let coinsCount = 0;
  let bitcoins = 0;
  let roomIndex = 0;

  for (let i = 0; i < dungeon.length; i++) {
    let room = dungeon[i].split(" ");
    let itemOrMonster = room[0];
    let num = Number(room[1]);
    roomIndex++;

    if (itemOrMonster === "potion") {
      if (initialHealth + num > 100) {
        num = 100 - initialHealth;
        initialHealth = 100;
      } else {
        initialHealth += num;
      }
      console.log(`You healed for ${num} hp.`);
      console.log(`Current health: ${initialHealth} hp.`);

    } else if (itemOrMonster === "chest") {
      bitcoins = num;
      coinsCount += num;
      console.log(`You found ${bitcoins} bitcoins.`);

    } else if (itemOrMonster !== "potion" && itemOrMonster !== "chest") {
      initialHealth -= num;
      if (initialHealth > 0) {
        console.log(`You slayed ${itemOrMonster}.`);
      } else {
        console.log(`You died! Killed by ${itemOrMonster}.`);
        console.log(`Best room: ${roomIndex}`);
        break;
      }
    }
  }
  if (initialHealth > 0) {
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coinsCount}`);
    console.log(`Health: ${initialHealth}`);
  }
}
dungeons(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
