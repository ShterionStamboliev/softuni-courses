function cardGame(arr) {
    let cardPower = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
    let cardType = {
      S: 4,
      H: 3,
      D: 2,
      C: 1,
    };
  
    let obj = new Map();
  
    for (const info of arr) {
      let [playerName, playerDeck] = info.split(": ");
      playerDeck = playerDeck.split(", ");
      if (!obj.has(playerName)) {
        obj.set(playerName, new Set());
      }
  
      for (const deck of playerDeck) {
        obj.get(playerName).add(deck);
      }
    }
    let entries = obj.entries();
    for (let [player, cardValue] of entries) {
      let totalCardValue = 0;
      for (let card of cardValue) {
        let deckValues = card.split(""); 
        let type = deckValues.pop(); 
        let power = deckValues.join(""); 
        let cardPowerTotal = cardPower[power];
        let cardTypeTotal = cardType[type];
        totalCardValue += cardPowerTotal * cardTypeTotal;
      }
      console.log(`${player}: ${totalCardValue}`);
    }
  }
  cardGame([
      'John: 2C, 4H, 9H, AS, QS',
      'Slav: 3H, 10S, JC, KD, 5S, 10S',
      'Alex: 6H, 7S, KC, KD, 5S, 10C',
      'Thomas: QH, QC, JS, JD, JC',
      'Slav: 6H, 7S, KC, KD, 5S, 10C',
      'Thomas: QH, QC, JS, JD, JC',
      'Alex: 6H, 7S, KC, KD, 5S, 10C',
      'Thomas: QH, QC, JS, JD, JC',
      'John: JD, JD, JD, JD'
      ]
      );
  