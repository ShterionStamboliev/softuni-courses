const { expect } = require('chai');
const { chooseYourCar } = require('./car');

describe('Tests', () => {
    describe('choosingType tests', () => {
        it('returns Invalid Year!', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', -1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1899.9)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2023)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2023.1)).to.throw('Invalid Year!');
        });
        it('returns Invalid car model', () => {
            expect(() => chooseYourCar.choosingType('Sedann', 'blue', 2021)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('Combi', 'blue', 2021)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType(['Combi'], 'blue', 2021)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('blue', 2021)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('1', 2021)).to.throw('This type of car is not what you are looking for.');
            expect(() => chooseYourCar.choosingType('[]', 2021)).to.throw('This type of car is not what you are looking for.');
        });
        it('meets the requirements', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.equal('This blue Sedan meets the requirements, that you have.')
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2022)).to.equal('This blue Sedan meets the requirements, that you have.')
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2011)).to.equal('This blue Sedan meets the requirements, that you have.')
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2015)).to.equal('This blue Sedan meets the requirements, that you have.')
        });
        it('returns old car', () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).to.equal('This Sedan is too old for you, especially with that blue color.')
        });
    });
    describe('brandName tests', () => {
        it('returns invalid information', () => {
            expect(() => chooseYourCar.brandName('Mercedes', [1])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName('1', ['Mercedes'])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(1, ['Mercedes'])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['Mercedes'], -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['Mercedes'], '-1')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['Mercedes'], 1.1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['Mercedes'], [])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['Mercedes'], '')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['Mercedes'], 2)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['Mercedes'], '!')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName('', 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName({}, 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(2, 1)).to.throw('Invalid Information!');
        });
        it('returns valid information', () => {
            expect(chooseYourCar.brandName(['Mercedes', 'BMW-(winter is coming)', 'Lada'], 2)).to.equal('Mercedes, BMW-(winter is coming)');
            expect(chooseYourCar.brandName(['Mercedes', 'BMW-(winter is coming)', 'Lada'], 0)).to.equal('BMW-(winter is coming), Lada');
            expect(chooseYourCar.brandName(['Mercedes', 'BMW-(winter is coming)', 'Lada'], 1)).to.equal('Mercedes, Lada');
            expect(chooseYourCar.brandName(['Mercedes'], 0)).to.equal('');
        });
    });
    describe('carFuelConsumption test', () => {
        it('checks if car is efficient', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 6.99)).to.equal('The car is efficient enough, it burns 6.99 liters/100 km.');
        });
        it('returns that car burns too much fuel', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7.01)).to.equal('The car burns too much fuel - 7.01 liters!');
            expect(chooseYourCar.carFuelConsumption(100, 70)).to.equal('The car burns too much fuel - 70.00 liters!');
        });
        it('checks if input is valid', () => {
            expect(() => chooseYourCar.carFuelConsumption(-100, 7)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, -7)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('100', -7)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, '7')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption([100], '7')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, [7])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(['100'], 7)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(0, 7)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('Mercedes', 'BMW')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('Mercedes', 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(1, 'Mercedes')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(1, '')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('', 1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption([], [])).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(['Mercedes'], ['BMW'])).to.throw('Invalid Information!');
        })
    })
})