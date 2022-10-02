const { expect } = require('chai');
const { sum } = require('./sumNums');

describe('Sum of nums', () => {
    it('works with positive int', () => {
        expect(sum([10,100,1000])).to.be.equal(1110)
    });

    it('return an empty array', () => {
        expect(sum([])).to.be.equal(0);
    });

    it('to be text', () => {
        expect(sum(['str'])).to.be.NaN;
    });

    it('to return NaN', () => {
        expect(sum(['gosho','pesho','ivan'])).to.be.NaN;
    });
});