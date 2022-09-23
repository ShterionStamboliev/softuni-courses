function cards(face, suit) {
    const cardFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const cardSuits = {
        "C": "♣",
        "S": "♠",
        "D": "♦",
        "H": "♥",
    }
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
}
console.log(cards('A','S').toString());
console.log(cards('5','S').toString());
console.log(cards('10','H').toString());
console.log(cards('1','S').toString());
console.log(cards('A','D').toString());