const { rentCar } = require('./rentCar');
const { expect } = require('chai');

describe('Tests', () => {
    describe('searchCar tests', () => {
        it('checks for valid car model', () => {
            expect(rentCar.searchCar(['Audi','BMW','Lada'], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
            expect(rentCar.searchCar(['Audi','Audi','Audi'], 'Audi')).to.equal('There is 3 car of model Audi in the catalog!');
        });
        it('checks for valid inputs', () => {
            expect(() => rentCar.searchCar('BMW', 1)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar({}, -1)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar([1,2,3], 4)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar('1', 'Pesho')).to.throw('Invalid input!');
        });
        it('checks if there are no matching models', () => {
            expect(() => rentCar.searchCar(['Audi','BMW','Lada'], 'Mercedes')).to.throw('There are no such models in the catalog!');
            expect(() => rentCar.searchCar([], 'Mercedes')).to.throw('There are no such models in the catalog!');
        });
    });

    describe('calculatePrice', () => {
        it('checks for valid inputs', () => {
            expect(() => rentCar.calculatePriceOfCar([], '4')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({}, '4')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(1, [])).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('1', 'Pesho')).to.throw('Invalid input!');
        });
        it('returns the model and the price', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 5)).to.equal('You choose BMW and it will cost $225!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', 5)).to.equal('You choose Volkswagen and it will cost $100!');
        });
        it('throws error if there is no such car model', () => {
            expect(() => rentCar.calculatePriceOfCar('Lada', 5)).to.throw('No such model in the catalog!')
            expect(() => rentCar.calculatePriceOfCar('Moskvich', 5)).to.throw('No such model in the catalog!')
        });
    });

    describe('checkBudget', () => {
        it('checks if inputs are valid', () => {
            expect(() => rentCar.checkBudget([], 'asd', {})).to.throw('Invalid input!')
            expect(() => rentCar.checkBudget('asd', [], '!')).to.throw('Invalid input!')
            expect(() => rentCar.checkBudget('1', {}, '!')).to.throw('Invalid input!')
            expect(() => rentCar.checkBudget('asd', [], '2')).to.throw('Invalid input!')
        });
        it('checks for available budget', () => {
            expect(rentCar.checkBudget(5, 2, 10)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(5, 2, 20)).to.equal('You rent a car!');
        });
        it('returns error if budget is less', () => {
            expect(rentCar.checkBudget(5, 2, 5)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(5, 2, -5)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(5, 2, 0)).to.equal('You need a bigger budget!');
        })
    })
})
