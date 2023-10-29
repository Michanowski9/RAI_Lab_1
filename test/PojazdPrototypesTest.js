var expect = require('chai').expect;
var Pojazd = require('../src/PojazdPrototypes');

describe('pojazd-prototypes-test', function()
{
    it('SettingInConstructor_UsePrivateVariable_ThrowError', function()
    {
        var pojazd = new Pojazd(0,10, 2);

        expect(pojazd.id).to.eql(0)
        expect(pojazd.max_predkosc).to.eql(10)
        expect(pojazd.predkosc).to.eql(2)

    });

    it('SettingInConstructor_GetStatus_ReturnsCorrectValue', function()
    {
        var pojazd = new Pojazd(0,10, 2);
        expect(pojazd.GetStatus()).to.eql(2);
    });

    /*it('PredkoscCorrectValueBySetter_GetStatus_ReturnsCorrectValue', function()
    {
        var pojazd = new Pojazd(0,10, 0);

        pojazd.Start(2);

        expect(pojazd.GetStatus()).to.eql(2);
    });

    it('PredkoscHigherThanMaximumValueBySetter_GetStatus_ReturnsMaximumValue', function()
    {
        const MAXIMUM = 10;
        var pojazd = new Pojazd(0, MAXIMUM, 0);

        pojazd.Start(15)

        expect(pojazd.GetStatus()).to.eql(MAXIMUM);
    });

    it('Stop_GetStatuts_ReturnZero', function()
    {
        var pojazd = new Pojazd(0, 10, 2);

        pojazd.Stop()

        expect(pojazd.GetStatus()).to.eql(0);
    });*/
});
