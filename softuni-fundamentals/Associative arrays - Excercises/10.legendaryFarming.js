function legendaryFarming(arr) {
  let obj = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };

  let trash = {};
  let obtainedLegendary = '';
  arr = arr.split(" ");

  for (let i = 0; i < arr.length; i += 2) {
    let itemQuantity = Number(arr[i]);
    let material = arr[i + 1].toLowerCase();
    if (material === 'shards' || material === 'fragments' || material === 'motes') {
        obj[material] += itemQuantity;
        if (obj[material] >= 250 && material === 'shards') {
            obtainedLegendary = 'Shadowmourne';
            obj[material] -= 250;
            break;
        } else if (obj[material] >= 250 && material === 'fragments') {
            obtainedLegendary = 'Valanyr';
            obj[material] -= 250;
            break;
        } else if (obj[material] >= 250 && material === 'motes') {
            obtainedLegendary = 'Dragonwrath';
            obj[material] -= 250;
            break;    
    } 
    } else {
        if (!trash[material]) {
            trash[material] = 0;
        }
        trash[material] += itemQuantity;
    }
}
    console.log(`${obtainedLegendary} obtained!`);

    let objEntries = Object.entries(obj);
    objEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let trashEntries = Object.entries(trash);
    trashEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [material, quantity] of objEntries) {
        console.log(`${material}: ${quantity}`);
    }
    for (const [trash, trashQuantity] of trashEntries) {
        console.log(`${trash}: ${trashQuantity}`);
    }
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
