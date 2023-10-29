var expect = require('chai').expect;
var Pojazd = require('../src/Pojazd');

describe('pojazd-test', function()
{
    it('SettingInConstructor_GetStatus_ReturnsCorrectValue', function()
    {
        var pojazd = new Pojazd(0,10, 2);
        expect(pojazd.GetStatus()).to.eql(2);
    });

    it('SettingInConstructor_UsePrivateVariable_ThrowError', function()
    {
        var pojazd = new Pojazd(0,10, 2);

        expect(
            function(pojazd){
                pojazd.id = 0;
            }
        ).to.throw();
        expect(
            function(pojazd){
                pojazd.max_predkosc = 0;
            }
        ).to.throw();
        expect(
            function(pojazd){
                pojazd.predkosc = 0;
            }
        ).to.throw();
    });


});
