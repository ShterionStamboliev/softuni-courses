function printCards(cards) {
    let res = '';
  
    for (const card of cards) {
      const cardFace = card.slice(0, -1);
      const cardSuit = card.slice(-1);
        
      try {
        const card = createCard(cardFace, cardSuit);
        res += card + ' ';
      } catch (error) {
        res = `Invalid card: ${card}`;
        break;
      }
    }

    console.log(res.trim());

    function createCard(face, suit) {
        const cardFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const cardSuits = {
            "C": "\u2663",
            "S": "\u2660",
            "D": "\u2666",
            "H": "\u2665",
        };

        if (!cardFaces.includes(face)) {
            throw new Error(`Invalid face: ${face}`);
        };
        if (!cardSuits[suit]) {
            throw new Error(`Invalid suit: ${suit}`);
        };
    
        if (cardSuits[suit]) {
            if (cardFaces.includes(face)) {
                return {
                    face,
                    suit: cardSuits[suit],
                    toString() {
                        return this.face + this.suit;
                    }
                };
            };
        };
    };
};
printCards(['AS', '10D', 'KH', '2C']);
printCards(['5S', '3D', 'QD', '1C']);