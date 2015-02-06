'use strict';

/*  Animal properties and method encapsulation  */
var Animal = {
  type: "Invertebrates", // Default value of properties
  displayType : function(){  // Method which will display type of Animal
    console.log(this.type);
    return this.type;
  }
}

/*  Create new animal type called animal1 */
var animal1 = Object.create(Animal);
// animal1.displayType(); // Output:Invertebrates

/*  Create new animal type called Fishes  */
var fish = Object.create(Animal);
fish.type = "Fishes";
// fish.displayType(); // Output:Fishes

/*  Human properties and method encapsulation   */
var HumanBeing = {
    numOfLegs: 2,
    canSpeak: true,
    hasBrain: true,
    talk: function(msg){
      if(this.canSpeak && this.hasBrain) return this.name + ' said ' + msg + ' when he/she turned ' + this.age;
    }
};

/* Use Object.create() to create a new object
based on the person object literal */
var sue = Object.create(HumanBeing, {name: {value: "Susan"}, age: {value: '34'} });

/*
console.log(sue.name + " has " + sue.numOfLegs + " legs ");
console.log(sue.said('oh no!!!'));

// Look at sue in chrome inspector
console.log(sue.__proto__);  // person object literal defined above

console.log(sue.hasOwnProperty('name')); // true
console.log(sue.__proto__.hasOwnProperty('name')); // false

console.log(sue.hasOwnProperty('numOfLegs')); // false
console.log(sue.__proto__.hasOwnProperty('numOfLegs')); // true
*/