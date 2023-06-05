//the class syntax makes creation of constructors easier
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)


//another class
function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;//return the class
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
