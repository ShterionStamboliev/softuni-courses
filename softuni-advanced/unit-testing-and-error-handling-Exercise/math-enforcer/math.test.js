const { expect } = require('chai');
const { mathEnforcer } = require('./math');

describe('add five', () => {
    it('add five to a positive integer', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
    });

    it('add five to a negative integer', () => {
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(-1.5)).to.equal(3.5);
    });

    it('should return undefined if the param is not an integer', () => {
        expect(mathEnforcer.addFive('pesho')).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
    });
});

describe('subtract ten', () => {
    it('subtract ten from a positive integer', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(50)).to.equal(40);
    });

    it('subtract ten from a negative integer', () => {
        expect(mathEnforcer.subtractTen(-10.50)).to.equal(-20.50);
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it('returns undefined if the param is not an integer', () => {
        expect(mathEnforcer.subtractTen('pesho')).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

describe('sum of two integers', () => {
    it('returns the sum if params are integers', () => {
        expect(mathEnforcer.sum(10, 20)).to.equal(30);
        expect(mathEnforcer.sum(1.5, 2.5)).to.equal(4);
        expect(mathEnforcer.sum(-1.5, -2.5)).to.equal(-4);
        });
    });

    it('returns undefined if any of the params are NaN', () => {
        expect(mathEnforcer.sum([], {})).to.be.undefined;
        expect(mathEnforcer.sum('pesho', 2)).to.be.undefined;
        expect(mathEnforcer.sum(-2, 'pesho')).to.be.undefined;
    });
});