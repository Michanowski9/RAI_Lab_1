"use strict";

export default function Vehicle(id, maxSpeed){
    this.id = id;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
}

Vehicle.prototype = {};

Vehicle.prototype.GetStatus = function(){
    return this.speed;
};

Vehicle.prototype.Start = function(newSpeed){
    if (newSpeed < this.maxSpeed) {
        this.speed = newSpeed;
    }
    else{
        this.speed = this.maxSpeed;
    }
};

Vehicle.prototype.Stop = function(){
    this.speed = 0;
};
