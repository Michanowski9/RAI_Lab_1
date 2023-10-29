"use strict";

module.exports = function(id, max_predkosc, predkosc){

    this.GetStatus = function(){
        return predkosc;
    };

    this.Start = function(new_predkosc){
        if (new_predkosc < max_predkosc) {
            predkosc = new_predkosc;
        }
        else{
            predkosc = max_predkosc;
        }
    };

    this.Stop = function(){
        predkosc = 0;
    };
}
