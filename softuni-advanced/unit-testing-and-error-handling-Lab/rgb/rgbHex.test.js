<<<<<<< HEAD
const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbHex');

describe('rgb hex', () => {
    it('red is valid', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('blue is valid', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('green is valid', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });
    
    it('is out of boundary', () => {
        expect(rgbToHexColor(-256, 255, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -256)).to.be.undefined;
        expect(rgbToHexColor(256, 255, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('contains floating int', () => {
        expect(rgbToHexColor(1.2, 123, 5)).to.be.undefined;
        expect(rgbToHexColor(255, 1.23, 1)).to.be.undefined;
        expect(rgbToHexColor(255, 123, 1.21)).to.be.undefined;
    });

    it('contains string parameters', () => {
        expect(rgbToHexColor(255, 123, 'pesho')).to.be.undefined;
        expect(rgbToHexColor(255, 'pesho', '1')).to.be.undefined;
        expect(rgbToHexColor('pesho', 123, '2')).to.be.undefined;
    });
=======
const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbHex');

describe('rgb hex', () => {
    it('red is valid', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('blue is valid', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('green is valid', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });
    
    it('is out of boundary', () => {
        expect(rgbToHexColor(-256, 255, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -256)).to.be.undefined;
        expect(rgbToHexColor(256, 255, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('contains floating int', () => {
        expect(rgbToHexColor(1.2, 123, 5)).to.be.undefined;
        expect(rgbToHexColor(255, 1.23, 1)).to.be.undefined;
        expect(rgbToHexColor(255, 123, 1.21)).to.be.undefined;
    });

    it('contains string parameters', () => {
        expect(rgbToHexColor(255, 123, 'pesho')).to.be.undefined;
        expect(rgbToHexColor(255, 'pesho', '1')).to.be.undefined;
        expect(rgbToHexColor('pesho', 123, '2')).to.be.undefined;
    });
>>>>>>> 3fdb681f237e87d7885bda775b5bb1c4887a4b8e
});