### Object.create

ECMAScript 5 defined a new way to create an object. Object.create(...).

You will be seeing this more as time goes on and developers make use of this. For now, we will be using the Constructor Function to create objects.

__Create a file js/object_create.js with the below code and reference it from index.html.__

```
// Define a person
var person = {
    numOfLegs: 2,
    canSpeak: true,
    said: function(msg){
       return this.name + " said \"" + msg + "\" when he/she turned " + this.age;
    }
};

debugger;
var sue = Object.create(person, {name: {value: "Susan"}, age: {value: '34'} });
console.log(sue.name + " has " + sue.numOfLegs + " legs ");
console.log(sue.said('oh no!!!'));

// Look at sue in chrome inspector
console.log(sue.__proto__);  // person object literal defined above

console.log(sue.hasOwnProperty('name')); // true
console.log(sue.__proto__.hasOwnProperty('name')); // false

console.log(sue.hasOwnProperty('numOfLegs')); // false
console.log(sue.__proto__.hasOwnProperty('numOfLegs')); // true

```
