
// Create a Person Construtor function
var Person = function(name, age){
  this.name = name;
  this.age = age;
};

// Put methods that you want each object 
// created with Person on the Person prototype.

// When you set a property on a constructor function
// prototype, like below, that property is AVAILABLE 
// to all instance created.

// Set the prototype property for the above Construtor function
Person.prototype = {
  type: 'person',
  describe: function(){
    return this.name + " is " + this.age + " yrs old";
  }
};

// Alternative syntax to the above
Person.prototype.type = 'person';
Person.prototype.describe = function(){
    return this.name + " is " + this.age + " yrs old";
};

debugger;
// Create a new object using the Person Constructor Function
// joe will point to this new object.
var joe = new Person('joe', 23);
// jill will point to this new object.
var jill = new Person('jill', 32);

// Lookup name property
// joe has the name property, DONE.
console.log(joe.name);

// Lookup the describe property.
// joe do you have the describe property?
// NOPE I don't
// joe do you have a __proto__ property
// YES, I do
// Does this __proto__ property point to an object 
// that has a describe property.
// YES. We set in on line 9 above.
console.log(joe.describe());













