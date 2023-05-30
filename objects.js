
//javascript objects have curly brackets to hold their values
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "drink": "water"
};

//here we are using bracket notation bacause there's a space in the name
var entreeValue = testObj["an entree"];

//we can update object properties as follows, from water to tequilla
testObj.drink = "tequilla";

//here we are using dot notation as there's no space in the name though it can also work in the same case
var drinkValue = testObj.drink;//drinkValue = tequilla

console.log(drinkValue);//this will print out the new drink value "tequilla"


//you can add new properties to an object using bracket or dot notations as follows
testObj['condiment'] = "coleslaw";

//properties can be deleted from the object
delete testObj["an entree"];





