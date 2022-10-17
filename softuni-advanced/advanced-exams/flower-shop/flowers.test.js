const { flowerShop } = require('./flowers');
const { expect } = require('chai');

describe('Tests', () => {
    describe('priceOfFlowers tests', () => {
        it('returns multiplied price and quantity', () => {
            expect(flowerShop.calcPriceOfFlowers('roza', 2, 5)).to.equal('You need $10.00 to buy roza!');
            expect(flowerShop.calcPriceOfFlowers('roza', 1, 2)).to.equal('You need $2.00 to buy roza!');
        });
        it('checks for valid inputs', () => {
            expect(() => flowerShop.calcPriceOfFlowers(2, 'roza', [])).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers({}, [], 2)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers('', -2, {})).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers('!', [], 2)).to.throw('Invalid input!')
        });
    });

    describe('availableFlowers', () => {
        it('returns the available flower', () => {
            expect(flowerShop.checkFlowersAvailable('Roza', ['Roza', 'Kokiche', 'Lale'])).to.equal('The Roza are available!')
            expect(flowerShop.checkFlowersAvailable('Lale', ['Roza', 'Lale'])).to.equal('The Lale are available!')
            expect(flowerShop.checkFlowersAvailable('Lale', ['Lale'])).to.equal('The Lale are available!')
        });
        it('returns an alert if flower is not found', () => {
            expect(flowerShop.checkFlowersAvailable('Roza', ['Kokiche', 'Lale', 'Begonia'])).to.equal('The Roza are sold! You need to purchase more!')
            expect(flowerShop.checkFlowersAvailable('Roza', ['Begonia'])).to.equal('The Roza are sold! You need to purchase more!')
        });
    });

    describe('sellFlowers', () => {
        it('checks for valid inputs', () => {
            expect(() => flowerShop.sellFlowers('', [])).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers([], '')).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers({}, [])).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers({}, '')).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(1, 'Pesho')).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(['Roza', 'Lale', 'Begonia'], -1)).to.throw('Invalid input!')
            expect(() => flowerShop.sellFlowers(['Roza', 'Lale', 'Begonia'], 4)).to.throw('Invalid input!')
        });
        it('removes an element from the array', () => {
            expect(flowerShop.sellFlowers(['Roza', 'Lale', 'Begonia'], 2)).to.equal('Roza / Lale');
            expect(flowerShop.sellFlowers(['Roza', 'Lale', 'Begonia'], 0)).to.equal('Lale / Begonia');
            expect(flowerShop.sellFlowers(['Roza'], 0)).to.equal('');
        })
    })
})