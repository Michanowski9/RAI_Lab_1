import { expect } from 'chai';
import Vehicle from '../src/VehicleClosures.js';

describe('vehicle-closures-test', function()
{
    it('SettingInConstructor_TryToUsePrivateVariable_ThrowUndefined', () =>
    {
        let vehicle = new Vehicle(0, 10);

        expect(vehicle.id).to.be.undefined;
        expect(vehicle.maxSpeed).to.be.undefined;
        expect(vehicle.speed).to.be.undefined;
    });

    it('SettingInConstructor_GetStatus_ReturnsCorrectValue', function()
    {
        var vehicle = new Vehicle(0, 10);
        expect(vehicle.GetStatus()).to.eql(0);
    });

    it('SpeedCorrectValueBySetter_GetStatus_ReturnsCorrectValue', function()
    {
        var vehicle = new Vehicle(0, 10);

        vehicle.Start(2);

        expect(vehicle.GetStatus()).to.eql(2);
    });

    it('SpeedHigherThanMaximumValueBySetter_GetStatus_ReturnsMaximumValue', function()
    {
        const MAXIMUM = 10;
        var vehicle = new Vehicle(0, MAXIMUM);

        vehicle.Start(15)

        expect(vehicle.GetStatus()).to.eql(MAXIMUM);
    });

    it('Stop_GetStatuts_ReturnZero', function()
    {
        var vehicle = new Vehicle(0, 10);

        vehicle.Start(5)
        vehicle.Stop()

        expect(vehicle.GetStatus()).to.eql(0);
    });
});
