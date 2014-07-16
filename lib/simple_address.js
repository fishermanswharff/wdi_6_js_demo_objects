// Creating Object Literals

// OLD and not often used syntax
// var jill = new Object();

var jill = {
  name: 'jill',
  age: 32,
};

var fred = {
  name: 'fred',
  age: 23
};

var joe = {
  name: 'joe',
  age: 27,
  // siblings property's value is an Array
  siblings: [
    jill,
    fred,
  ],  // address property's value is a Object Literal
  address: {
    street: '33 Elm St',
    city: 'Boston',
    state: 'MA',
    country: 'US',
    display: function(){
      return this.street + " " + this.city + " " + this.state +  ", "  + this.country;
    }      
  },
  describe: function(){
   return this.name + " is " + this.age + " years old";
  }
};

console.log(joe.name + "'s address is: " + joe.address.display());

// REDEFINE the describe method for joe ONLY
// Can change the describe function later, at runtime.
// by setting the describe property
joe.describe = function(showDetail){
  var info;
  if(showDetail){
    info = this.name + " age is " + this.age + ", address is: " + this.address.display();
  }else{
    info = this.name + " is " + this.age + " years old";
  }
  return info
};

debugger;

// describe joe.
console.log(joe.describe(true));

// describe joe in detail
console.log(joe.describe(false));





