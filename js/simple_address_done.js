var jill = {
  name: "Jill Smill",
  age: 32
};
var fred = {
  name: "Fred Smoe",
  age: 27
};

// Objects can have objects.
// The siblings property's value is an Array
// The address property's value is a Object literal.
// The describe property's value is a Function, which is also an object.
var joe = {
  name: "Joe Smoe",
  age: 23,
  occupation: "Software Developer", 
  siblings: [
    jill,
    fred,
  ], 
  address: {
    street: '44 Warren St.',
    city: 'Stoneham',
    state: 'MA',
    zip: 01345,
    display: function(){
       return this.street + " " + this.city + ", " + this.state;
    }
  },
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

console.log(joe.name + "'s address is: " + joe.address.display());

// describe joe.
console.log(joe.describe());

// Show all the properties and their value.
for(var prop in joe){
  console.log(joe.name + " property = " + prop + ", value is " + joe[prop]);

}
