var person = {
    type: 'person',
    sayHi: function(msg){
      return this.name + " says " + msg;
    }
};

// Create an Object literal representing one person.
var joe = {
  name: "Joe Smoe",
  age: 23,
  // Property value is a function
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

console.log("Hey " + joe.name + " are you really " + joe['age'] + " years old?");

debugger
joe.__proto__ = person;

console.log(joe.sayHi("hey there"));