function armies(input) {
    let obj = {};

    for (let info of input) {
        if (info.includes('arrives')) {
            let arrivesIndex = info.indexOf('arrives');
            let leader = info.slice(0, arrivesIndex).trim();
            if (!obj[leader]) {
                obj[leader] = { armyName: {}, armyCount: 0 }
            }
        } else if (info.includes(': ')) {
            let [armyLeader, army] = info.split(': ');
            army = army.split(', ');
            let armyName = army[0];
            let armyCount = Number(army[1]);
            if (obj[armyLeader]) {
                obj[armyLeader].armyName[armyName] = armyCount;
            }
        } else if (info.includes(' + ')) {
            info = info.split(' + ');
            let armyName = info[0];
            let armyAmount = Number(info[1]);
            if (obj[armyName]) {
                obj[armyName].armyName[armyName] += armyAmount;
            }
        }
    }
    console.log(obj);
}

armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
