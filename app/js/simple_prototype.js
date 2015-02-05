'use strict';

/* Prototypes and Inheritence in Javascript
——————————————————————————————————————————————
Create a `person` object literal with 3 properties: type: String, name: String, and sayHi: function(){}
*/
var person = {
  type: 'person',
  name: 'person',
  sayHi: function(msg){
    return this.name + " says " + msg;
  }
};

/* Create an Object literal called `jeff` representing one person.
————————————————————————————————————————————————————————————————————————
the `jeff` object should have three properties: name: String, age: Number, describe: function(){}
the `jeff` object inherits from the person object: jeff.__proto__ = person
*/
var jeff = {
  name: "Jeff Horn",
  age: 23,
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

jeff.__proto__ = person;