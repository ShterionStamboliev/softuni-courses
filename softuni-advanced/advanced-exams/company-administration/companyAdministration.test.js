const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('Tests', () => {
    describe('hiringEmployee tests', () => {
        it('checks if the string position is Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('Pesho', 'rabotnik', 3)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('Pesho', 'asd', 3)).to.throw('We are not looking for workers for this position.');
        });
        it('checks for yearsExperience to meet the requirement', () => {
            expect(companyAdministration.hiringEmployee('Pesho','Programmer', 3)).to.equal('Pesho was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Kiro','Programmer', 4)).to.equal('Kiro was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Bot','Programmer', 5)).to.equal('Bot was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee('Gosho','Programmer', 6)).to.equal('Gosho was successfully hired for the position Programmer.');
        });
        it('checks for appropriate inputs', () => {
            expect(companyAdministration.hiringEmployee('Pesho','Programmer', 1)).to.equal('Pesho is not approved for this position.')
            expect(companyAdministration.hiringEmployee('Gosho','Programmer', 2)).to.equal('Gosho is not approved for this position.')
            expect(companyAdministration.hiringEmployee('Bot','Programmer', -5)).to.equal('Bot is not approved for this position.')
        });
    });
    describe('calculateSalary tests', () => {
        it('calcualtes the employee salary', () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
        it('checks for valid inputs', () => {
            expect(() => companyAdministration.calculateSalary(-5)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary('5')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary('')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary({})).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary('Pesho')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary([1])).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(['1'])).to.throw('Invalid hours');
        });
    });
    describe('firedEmployee tests', () => {
        it('removes employee from the array on index X and checks for valid inputs', () => {
            expect(companyAdministration.firedEmployee(
                ['Petar', 'Ivan', 'Gosho'], 2
            )).to.equal('Petar, Ivan');
            expect(companyAdministration.firedEmployee(
                ['Petar'], 0
            )).to.equal('');
            expect(companyAdministration.firedEmployee(
                ['Petar', 'Ivan', 'Gosho'], 1
            )).to.equal('Petar, Gosho');
            expect(companyAdministration.firedEmployee(
                ['Petar', 'Ivan', 'Gosho'], 0
            )).to.equal('Ivan, Gosho');
            expect(() => companyAdministration.firedEmployee({}, 'Pesho')).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee([], 1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee([], 'Pesho')).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(1, [], 1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee('Gosho', 1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(123, -1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee([1,2,3,4,5], -1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['1,2,3,4,5'], 2)).to.throw('Invalid input')
        });
    });
});