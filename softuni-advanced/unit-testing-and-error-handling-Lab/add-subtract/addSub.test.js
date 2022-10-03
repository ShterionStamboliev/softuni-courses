const { expect } = require('chai');
const { createCalculator } = require('./addSub');

describe('calculator', () => {
    it('equals to 0', () => {
        const calc = createCalculator();
        expect(calc.get()).to.equal(0);
    });

    it('adds', () => {
        const calc = createCalculator();
        calc.add(10);
        expect(calc.get()).to.equal(10);
    });

    it('adds to return NaN with strings', () => {
        const calc = createCalculator();
        calc.add('gosho');
        expect(calc.get()).to.be.NaN;
    });

    it('subtracts', () => {
        const calc = createCalculator();
        calc.subtract(10);
        expect(calc.get()).to.equal(-10);
    });

    it('subtract to return NaN with string', () => {
        const calc = createCalculator();
        calc.subtract('gosho');
        expect(calc.get()).to.be.NaN;
    });






})