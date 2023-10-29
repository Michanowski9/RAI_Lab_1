"use strict";

export default class Car {
    #number;
    #mileage;
    #passangerCount;
    #pricePerDay;
    #defects=[];
    #rentals=[];
    #returns=[];

    constructor(number, mileage, passangerCount, pricePerDay) {
        this.#number = number;
        this.#mileage = mileage;
        this.#passangerCount = passangerCount;
        this.#pricePerDay = pricePerDay;
    }

    Rent(start, end){
        this.#rentals.push([start,end]);
    }

    Return(){

    }

    WhenAvailable(){

    }

    AddDefect(defect){
        this.#defects.push(defect);
    }

    GetRentalsCount(){
        return this.#rentals.length;
    }
    GetDefectsCount(){
        return this.#defects.length;
    }
}
