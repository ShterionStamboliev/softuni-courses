const { expect } = require('chai');
const { lookupChar } = require('./char');

describe('char lookup', () => {
    it('is invalid type', () => {
        expect(lookupChar(2, 'gosho')).to.be.undefined;
        expect(lookupChar('gosho', '')).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
        expect(lookupChar({}, 'gosho')).to.be.undefined;
        expect(lookupChar([], 'gosho')).to.be.undefined;
        expect(lookupChar('', 'gosho')).to.be.undefined;
        expect(lookupChar('gosho', '1.25')).to.be.undefined;
        expect(lookupChar('gosho', 1.25)).to.be.undefined;
        expect(lookupChar('gosho', -1.25)).to.be.undefined;
    });

    it('index is bigger than the string', () => {
        expect(lookupChar('gosho', 22)).to.equal('Incorrect index');
        expect(lookupChar('gosho', -22)).to.equal('Incorrect index');
        expect(lookupChar('gosho', 5)).to.equal('Incorrect index');
    });

    it('returns the character', () => {
        expect(lookupChar('gosho', 3)).to.equal('h');
    });
});