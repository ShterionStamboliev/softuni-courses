const { expect } = require('chai');
const { bookSelection }  = require('./bookSelection');

describe('Tests', () => {
    describe('isSuitable tests', () => {
        it('is suitable', () => {
                expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
                expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        });

        it('is not suitable', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 1)).to.equal(`Books with Thriller genre are not suitable for kids at 1 age`);
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`);
        })
    });

    describe('isItAffordable tests', () => {
        it('is affordable', () => {
            expect(bookSelection.isItAffordable(10, 20)).to.equal('Book bought. You have 10$ left');
            expect(bookSelection.isItAffordable(10, 10)).to.equal('Book bought. You have 0$ left');
        });
        it('is not affordable', () => {
            expect(bookSelection.isItAffordable(20, 10)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(20, -10)).to.equal("You don't have enough money");
        });
        it('is a valid input', () => {
            expect(() => bookSelection.isItAffordable('gosho', 1)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(1, 'gosho')).to.throw("Invalid input");
        });
    });

    describe('suitableTitles tests', () => {
        it('is suitable', () => {
            expect(bookSelection.suitableTitles([{
                title: 'gosho', 
                genre: 'pesho'
            }], 'pesho')).to.deep.equal(['gosho']);
        });

        it('is suitable', () => {
            expect(bookSelection.suitableTitles([{
                title: 'gosho',
                genre: 'Ave, Pesho!'
            }, 
            {
                title: 'Pesho the gladiator',
                genre: 'Ave, Pesho!'
            }], 'Ave, Pesho!')).to.deep.equal(['gosho', 'Pesho the gladiator']);
        });

        it('is invalid parameters', () => {
            expect(() => bookSelection.suitableTitles('gosho', 'pesho')).to.throw();
            expect(() => bookSelection.suitableTitles([{
                title: 'gosho', 
                genre: '10'
            }], 20)).to.throw();
        });
    });
});