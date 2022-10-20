const { expect } = require('chai');
const { cinema } = require('./cinema');

describe('Tests', () => {
    describe('show movies tests', () => {
        it('returns all available movies', () => {
            expect(cinema.showMovies(['Joker', 'Tomorrow', 'Gosho', 'Pesho'])).to.equal('Joker, Tomorrow, Gosho, Pesho');
            expect(cinema.showMovies(['Joker'])).to.equal('Joker');
        });
        it('checks if array is empty', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
    });
    describe('ticket price tests', () => {
        it('checks if projection type is in the schedule', () => {
            expect(() => cinema.ticketPrice('Ujas')).to.throw('Invalid projection type');
            expect(() => cinema.ticketPrice(1)).to.throw('Invalid projection type');
            expect(() => cinema.ticketPrice('1')).to.throw('Invalid projection type');
            expect(() => cinema.ticketPrice([])).to.throw('Invalid projection type');
            expect(() => cinema.ticketPrice({})).to.throw('Invalid projection type');
            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type');
            expect(() => cinema.ticketPrice(-1)).to.throw('Invalid projection type');
        });
        it('returns the price accoring to projection type', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
    });
    describe('swap seats tests', () => {
        it('returns successful change of seats', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 2)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 19)).to.equal("Successful change of seats in the hall.");
        });
        it('returns unsuccessful change if input is incorrect', () => {
            expect(cinema.swapSeatsInHall([], '')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('', [])).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('test', 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('gosho', 'pesho')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('1', '2')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, '')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, -1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-2, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1, -2)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 1.2)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, -1.2)).to.equal("Unsuccessful change of seats in the hall.");
        })
    })
})
