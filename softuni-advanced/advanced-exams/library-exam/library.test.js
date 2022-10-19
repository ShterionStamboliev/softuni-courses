const { expect } = require('chai');
const { library } = require('./library');

describe('Tests', () => {
    describe('caclulate book price tests', () => {
        it('sums book price', () => {
            expect(library.calcPriceOfBook('Peter Pan', 1980)).to.equal('Price of Peter Pan is 10.00');
            expect(library.calcPriceOfBook('Peter Pan', 1979)).to.equal('Price of Peter Pan is 10.00');
            expect(library.calcPriceOfBook('Peter Pan', 1981)).to.equal('Price of Peter Pan is 20.00');
            expect(library.calcPriceOfBook('Peter Pan', 1982)).to.equal('Price of Peter Pan is 20.00');
        });
        it('checks for valid input data', () => {
            expect(() => library.calcPriceOfBook(1, '2')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('1', '2.2')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1, 2.2)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1, 2)).to.throw('Invalid input');
        });
    });
    describe('find book test', () => {
        it('return the found book', () => {
            expect(library.findBook(['Troy', 'Life', 'Toronto'], 'Life')).to.equal('We found the book you want.');
            expect(library.findBook(['Troy', 'Life'], 'Troy', )).to.equal('We found the book you want.');
        });
        it('throws an error if book is not found', () => {
            expect(library.findBook(['Troy', 'Torontoo'], 'Toronto')).to.equal('The book you are looking for is not here!');
        });
        it('checks if the array is empty', () => {
            expect(() => library.findBook([], 'Life')).to.throw('No books currently available');
        });
    });
    describe('arrange books tests', () => {
        it('checks for valid input', () => {
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks([1])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(['1'])).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('Test')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('-1')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('!')).to.throw('Invalid input');
        });
        it('checks for arranged books', () => {
            let shelves = 5;
            expect(library.arrangeTheBooks(8 * shelves)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(7 * shelves)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(1 * shelves)).to.equal('Great job, the books are arranged.');
        });
        it('checks for book space', () => {
            let shelves = 5;
            expect(library.arrangeTheBooks(9 * shelves)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(10 * shelves)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(11 * shelves)).to.equal('Insufficient space, more shelves need to be purchased.');
        })
    })
})