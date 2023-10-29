import { expect } from 'chai';
import Car from '../src/Car.js';

describe('car-test', function()
{
    it('RentCar', () =>
    {
        let car = new Car(1, 100_000_000, 4, 1_000);

        car.Rent("2023-10-1", "2023-10-15");

        expect(car.GetRentalsCount()).to.eql(1);

    });

    it('AddDefect', () =>
    {
        let car = new Car(1, 100_000_000_000_000_000_000_000, 4, 1_000);

        car.AddDefect("Destroyed front of the car");

        expect(car.GetDefectsCount()).to.eql(1);
    });
});

