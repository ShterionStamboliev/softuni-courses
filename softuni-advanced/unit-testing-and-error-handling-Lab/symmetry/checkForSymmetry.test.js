<<<<<<< HEAD
const { expect } = require('chai');
const { isSymmetric } = require('./checkForSymmetry');

describe('arr to be symmetric', () => {
    it('is symmetric ', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('return false if arr is not symmetric', () => {
        expect(isSymmetric([1, 3, 5])).to.be.false;
    });

    it('return false for string input', () => {
        expect(isSymmetric('qwe')).to.be.false;
    });

    it('return true if input elements are odd number', () => {
        expect(isSymmetric([1, 100, 1])).to.be.true;
    });

    it('returns true for empty arrays', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('return false if inputs doesnt match', () => {
        expect(isSymmetric([1, 100, '1000'])).to.be.false;
    });
});

=======
const { expect } = require('chai');
const { isSymmetric } = require('./checkForSymmetry');

describe('arr to be symmetric', () => {
    it('is symmetric ', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('return false if arr is not symmetric', () => {
        expect(isSymmetric([1, 3, 5])).to.be.false;
    });

    it('return false for string input', () => {
        expect(isSymmetric('qwe')).to.be.false;
    });

    it('return true if input elements are odd number', () => {
        expect(isSymmetric([1, 100, 1])).to.be.true;
    });

    it('returns true for empty arrays', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('return false if inputs doesnt match', () => {
        expect(isSymmetric([1, 100, '1000'])).to.be.false;
    });
});

>>>>>>> 3fdb681f237e87d7885bda775b5bb1c4887a4b8e
