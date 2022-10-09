const { expect } = require('chai');
const { carService } = require('./carService');

describe('Tests', () => {
    describe('isItExpensive', () => {
        it('is more expensive', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });
        it('is a bit cheaper', () => {
            expect(carService.isItExpensive('Windshield')).to.equal('The overall price will be a bit cheaper');
            expect(carService.isItExpensive('Tyres')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe('discount', () => {
        it('applies discount', () => {
            expect(carService.discount(3, 20)).to.equal('Discount applied! You saved 3$');
            expect(carService.discount(4, 20)).to.equal('Discount applied! You saved 3$');
            expect(carService.discount(5, 20)).to.equal('Discount applied! You saved 3$');
            expect(carService.discount(3, 20)).to.equal('Discount applied! You saved 3$');
            expect(carService.discount(7, 20)).to.equal('Discount applied! You saved 3$');
            expect(carService.discount(8, 20)).to.equal('Discount applied! You saved 6$');
            expect(carService.discount(9, 20)).to.equal('Discount applied! You saved 6$');
        });

        it('cannot apply discount', () => {
            expect(carService.discount(2, 20)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 20)).to.equal('You cannot apply a discount');
            expect(carService.discount(-1, 20)).to.equal('You cannot apply a discount');
            expect(carService.discount(0, 20)).to.equal('You cannot apply a discount');
        });

        it('is invalid input', () => {
            expect(carService.discount('gosho', 'pesho')).to.throw("Invalid input");
            expect(carService.discount([], {})).to.throw("Invalid input");
            expect(carService.discount('', '')).to.throw("Invalid input");
            expect(carService.discount(',', '$')).to.throw("Invalid input");
        });
    });

    describe('partsToBuy', () => {
        it('is valid input', () => {
            expect(carService.partsToBuy([{
                part: 'valve',
                price: 145
            },
            {
                part: 'spring',
                price: 230
            }, 
            {
                part: 'tyre',
                price: 200
            }
            ], ['valve', 'spring', 'tyre'])).to.equal(575);
        });

        it('is invalid input', () => {
            expect(carService.partsToBuy([{
                part: 125,
                price: 'pesho'
            },
            {
                part: 'spring',
                price: 230
            }, 
            {
                part: 'tyre',
                price: 200
            }
            ], ['valve', 'spring', 'tyre'])).to.throw("Invalid input");
        });

        it('is empty array', () => {
            expect(carService.partsToBuy([{}], 
            ['valve', 'spring', 'tyre'])).to.throw("Invalid input");
        });
    });
});