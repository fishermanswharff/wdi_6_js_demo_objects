debugger;

// Constructor Function object creation
// Constructor function is camel cased by convention. 
var Person = function(name, age){
  // 4. Create a new object literal
  //  {}

  // 5. Set 'this' to point to this new object literal. 
  //  this = {};

  // 6. Set the new object literal's internal __proto__ pointer 
  //    to point to the same object created in Step 2.
  //   this.__proto__ = Person.prototype
  debugger;
  this.name = name;
  this.age = age;
  // 7. Execute the body of this Constructor Function, Person.

  // 8. Return the this pointer
  // return this;
};

// 1.0 Defined a Constructor Function.
// 1.1 A global variable Person is set to this Constructor Function.
// 1.2 A new object literal, {}, is created and pointed to by 
// the Person prototype property. 
//  Person.prototype = {};

Person.prototype = {
   describe: function(){
    return this.name + " is " + this.age + " years old";
   }
};
// 2. Replace the object literal pointed to by the Person 
// prototype property. 
// 2.1 Define a method, describe, on the Person.property.
// This will allow all instances of a Person to use the describe method.

// 3. Invoke the Constructor Function to create two instances.
var joe = new Person('joe', 23), 
  jill = new Person('jill', 32);

// 9. Now the joe and jill variables will be pointing to 
// the this pointers returned from Person Constructor Function.

console.log(joe.describe());
// Property/Method Lookup
// 10. Look in the joe object for the property/method describe. Not found.
// 11. Look in the object pointed to by joe's __proto__ pointer. Found.
// 12. Invoke the describe method and set the this pointer for the method 
// to be the joe object.

console.log(jill.describe());
// Same as above

