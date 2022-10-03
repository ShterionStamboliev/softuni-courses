const { expect } = require('chai');
const { isOddOrEven } = require('./evenOdd.js');

describe('Even odd', () => {
    it('runs with odd length strings', () => {
        expect(isOddOrEven('gosho')).to.equal('odd');
    });

    it('runs with even length strings', () => {
        expect(isOddOrEven('goshoo')).to.equal('even');
    });

    it('returns undefined if type is not string', () => {
        expect(isOddOrEven(123)).to.be.undefined;
    });

    it('returns undefined if input is an object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
});