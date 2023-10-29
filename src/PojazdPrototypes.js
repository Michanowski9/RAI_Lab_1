"use strict";

module.exports = function(id, max_predkosc, predkosc){

    this.id = id;
    this.max_predkosc = max_predkosc;
    this.predkosc = predkosc;

    this.prototype = {};
    this.prototype.GetStatus = function(){
        return this.predkosc;
    };

    /*this.prototypeStart = function(new_predkosc){
        if (new_predkosc < this.max_predkosc) {
            this.predkosc = new_predkosc;
        }
        else{
            predkosc = this.max_predkosc;
        }
    };

    this.prototype.Stop = function(){
        this.predkosc = 0;
    };*/
}
