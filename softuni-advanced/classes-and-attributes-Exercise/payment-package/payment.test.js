const { expect } = require('chai');
const PaymentPackage = require('./payment');

describe('payment package', () => {
    it('should work with valid input', () => {
        expect(() => new PaymentPackage('valid', 100)).not.throw(Error);
    });
});

describe('name prop', () => {
    it('throws an error if string is empty', () => {
        expect(() => new PaymentPackage('', 100)).to.throw(Error);
    });

    it('throws an error if string value is an integer', () => {
        expect(() => new PaymentPackage(1, 100)).to.throw(Error);
    });

    it('throws an error if value is a string', () => {
        expect(() => new PaymentPackage('valid', '100')).to.throw(Error);
    });

    it('throws an error if string is an object', () => {
        expect(() => new PaymentPackage({}, 100)).to.throw(Error);
    });
});

describe('value prop', () => {
    it('throws an error if value is not an integer', () => {
        expect(() => new PaymentPackage('valid', 'pesho')).to.throw(Error);
    });

    it('throws an error if value is a negative integer', () => {
        expect(() => new PaymentPackage('valid', -100)).to.throw(Error);
    });

    it('throws an error if value is a string', () => {
        expect(() => new PaymentPackage('valid', '100')).to.throw(Error);
    });

    it('returns true if arg value is equal', () => {
        expect(new PaymentPackage('valid', 100).value).to.equal(100);
    })
});

describe('VAT prop', () => {
    it('works with an integer', () => {
        expect(typeof new PaymentPackage('value', 10).VAT).to.equal('number');
    });

    it('throws an error if value is not an integer', () => {
        expect(() => new PaymentPackage('valid', 'gosho').VAT = 'gosho').to.throw(Error);
    });

    it('throws an error if value is a negative integer', () => {
        expect(() => new PaymentPackage('valid', 100).VAT = -100).to.throw(Error);
    });

    it('throws an error if value is a string', () => {
        expect(() => new PaymentPackage('valid', '100').VAT = '100').to.throw(Error);
    });
});

describe('active prop', () => {
    it('should be of a boolean value', () => {
        expect(typeof new PaymentPackage('valid', 10).active).to.equal('boolean');
    });

    it('throws an error if active value is an integer', () => {
        const notValid = new PaymentPackage('not valid', 10);
        expect(() => notValid.active = 10).to.throw(Error);
    });

    it('throws an error if active value is a negative integer', () => {
        const notValid = new PaymentPackage('valid', 10);
        expect(() => notValid.active = 'valid').to.throw(Error);
    });
});

describe('string prop', () => {
    it('return a proper string', () => {
        expect(new PaymentPackage('valid', 100).toString()).to.equal(`Package: valid
- Value (excl. VAT): 100
- Value (VAT 20%): 120`);
    });

    it('returns a proper string if active is false', () => {
        const notActive = new PaymentPackage('notvalid', 100);
        notActive.active = false;
        expect(notActive.toString()).to.equal(`Package: notvalid (inactive)
- Value (excl. VAT): 100
- Value (VAT 20%): 120`);
    });
});