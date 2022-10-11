function extendPrototype(c) {
    c.prototype.species = 'Human';
    c.prototype.toSpeciesString = function () {
        return `I am ${this.species}. ${this.toString()}`;
    };
}
