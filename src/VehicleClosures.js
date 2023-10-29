"use strict";

export default function Vehicle(id, maxSpeed, speed=0){

    this.GetStatus = function(){
        return speed;
    };

    this.Start = function(newSpeed){
        speed = (newSpeed < maxSpeed) ? newSpeed : maxSpeed;
    };

    this.Stop = function(){
        speed = 0;
    };
}
