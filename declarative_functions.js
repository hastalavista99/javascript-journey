const bicycle = {
    gear : 2,
    //we set a new function without using the function keyword as follows
    //setGear: function(newGear) {} - instead of this we use;
    setGear(newGear) {
        "use strict";
        this.gear = newGear
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
