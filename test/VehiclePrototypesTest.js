import { expect } from 'chai';
import Vehicle from '../src/VehiclePrototypes.js';

describe('vehicle-prototypes-test', function()
{
    it('SettingInConstructor_UsePrivateVariable_ReturnsCorrectValues', function()
    {
        var vehicle = new Vehicle(0, 10);

        expect(vehicle.id).to.eql(0)
        expect(vehicle.maxSpeed).to.eql(10)
        expect(vehicle.speed).to.eql(0)

    });

    it('ChangingValuesWithoutSetters_Variables_SetsCorrectly', function()
    {
        var vehicle = new Vehicle(0, 10);

        vehicle.id = 4;
        vehicle.maxSpeed = 1000;
        vehicle.speed = 50;

        expect(vehicle.id).to.eql(4);
        expect(vehicle.maxSpeed).to.eql(1_000);
        expect(vehicle.speed).to.eql(50);
    });

    it('ConstructorPrototypVariableAccess_Variables_Accessed', function()
    {
        var vehicle = new Vehicle(1, 10);

        //expect(vehicle.constructor).to.eql(Vehicle);
        //expect(vehicle.prototyp).to.eql(Object.getPrototypeOf(vehicle));
        //expect(vehicle._prototyp).to.eql();
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

    it('AddingToPrototypeAfterInstantiate_AddToExistingObject', function()
    {
        var vehicle = new Vehicle(0, 10);

        Vehicle.prototype.ReturnHello = function(){
            return "Hello";
        };

        expect(vehicle.ReturnHello()).to.eql("Hello");
    });
});
