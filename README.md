## Object Oriented Javascript 

[Javascript Background](Background.md)
## Objectives

* Learn about the most common ways to create Javascript Objects.
	* Object Literal.  
	* Factory Pattern.  
	* Constructor Function.  
	* ECMAScript 5 Object.create  
* Use Javascript Namespaces.
* Learn about Prototypes and Prototypical Inheritence.
* How Object property lookup works.
* How Object method lookup works.


## No Classes in Javascript.

Javascript does not have classes. _At least not yet, they are coming in ECMAScript 6_. 

But, it does provide a way to create structures that behave like classes. We'll see the few ways that we can create a _"class"_ in javacript. 


#### Two Ways to create a new Object

_js/new_object.js_

```
// Using a Object constructor
var newObject = new Object();
  
// Using a Object Literal. Preferred
var newObject = {};
```

#### Four ways that properties can be added.

_js/object_properties.js_


```
// Using a Object Literal. Preferred                                                       
var newObject = {};

// ECMAScript 3 compatible approaches
// 1. Dot syntax
// Set properties
var  newObject.someKey = "Hello World"; // Get properties
var key = newObject.someKey;


// 2. Square bracket syntax // Set properties
newObject["someKey"] = "Hello World"; // Get properties
var key = newObject["someKey"];


// ECMAScript 5 only compatible approaches
// 3. Object.defineProperty
// Set properties
Object.defineProperty( newObject, "someKey", {
  value: "for more control of the property's behavior", writable: true,
  enumerable: true,
  configurable: true
});


// 4. Object.defineProperties // Set properties
Object.defineProperties( newObject, {
  "someKey": {
    value: "Hello World", writable: true
  },
  "anotherKey": { value: "Foo bar", writable: false }
});

```
## Object Literals.

And Object literal is the simplest way to create an object in javacript. It looks and behaves somewhat like a Ruby hash but has some key differences.


__Create a file js/simple.js with the below code and reference it from index.html.__

```
// Create an Object literal representing one person.
var joe = {
  name: "Joe Smoe",
  age: 23,
  // Property value is a function
  describe: function(){
	return this.name + " is " + this.age + " years old";
  }
};

// OR 
var jill = {};
jill.name = "Jill Smill";
jill.age = 32;

// Property value is a function
jill.describe = function(){
  return this.name + " is " + this.age + " years old";
}

console.log("Hey " + jill.name +  " where you going with that gun in your hand");
console.log("Hey " + joe.name + " are you really " + joe['age'] + " years old?");

```

An Object Literal:

* Has properties.js/
* Each property has a name and a value, name/value pairs.
* A property is typically a string, but can be it can be a number _(rare)_.
* A value can be a __Primitive__ or an __Object__, aka reference type.
* A value can be a __function__. We call these properties methods.
* A value can be based on the built-in Object, see above, or a user defined object.  
* By default is based on the build in Javascript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).  


__Inspect joe and jill in Chrome.__

### Object Literals with object properties.

Object literals can have properties that are objects.

__Create a file js/simple_address.js with the below code and reference it from index.html.__

```
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

// Show all the properties and their value.
for(var prop in joe){
  console.log(joe.name + " property = " + prop + ", value is " + joe[prop]);

}

```

__Inspect joe and jill in Chrome.__



### Objects properties and methods can change anytime.

Here we are pointing the the joe object literal's describe property at another function.


__Append the below code to js/simple_address.js.__

```
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

// describe joe.
console.log(joe.describe(true));

// describe joe in detail
console.log(joe.describe(false));

```

### Prototypical Inheritence

Each object will have an internal ``__proto__`` property that can point to another object. 

This is used to lookup a property or method on an object. 

By setting this property we can _simulate_ object inheritences.

___Create a file js/simple_prototype.js with the below code and reference it from index.html.__

```
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
```

### Use Object Literals for objects that are only created once.

What if we want to create a lot of people? 

We will have to create lots of object literals and each time a property or method changes we'll have to change each object literal in the program. _Makes maintainence very difficult and the code not DRY_

For example, we want to change each person to have an occupation
that is shown in the describe function?

Use Object literals for instances that will exist only once, Singletons, in your application. For example, CarLot or RecordCompany.

Later, we will see how to emulate a class in Javascript that will be used to creates instances, objects, of something.

### Using Object Literals to create a Namespace.

Javascript namespaces are used to disambiguate names in an application. This is so that names in an application do not conflict.

Typically, name conflict may happen when using a third-party library or plug-in.

_We will use namespaces later when we create objects._

```
// create a namespace for this PersonApp 
var PersonApp = PersonApp || {};

// Namespace an object literal
PersonApp.joe = { name: 'joe', age: 23 };

// Namespace a Factory 
PersonApp.createPerson = function(){ ... };
var joe = PersonApp.createPerson('joe', 23);

// Namespace a Constructor Function
PersonApp.Person = function Person(){ .. };
var jill = new PersonApp('jill', 33);

```

## LAB

Implement "Honest Tom's Used Car Lot" using object literals. __Do all your work in the cars_object_literal branch__

_The cars_object_literal_done branch has a completed version of this lab if you get stuck_.

* Create a couple addresses in js/addresses.js. 
	* Properties are street, city, state and country.  
	* Methods are display. This returns a string.  	 
* Create a couple of car makers in js/makers.js  
	* Properties are name, established date and address (use one of the addresses created above for this property).  
	* Methods are display. This returns a string.  

* Create a couple of cars in js/cars.js 
	* Properties are model, year, price and make (use one of the makes created above for this property).  
	* Methods are display. This returns a string.  

* Create One car lot in js/car_lot.js 
	* Properties are name and an array of cars.
	* Methods are:
		* addCar(car). This will add a car to the lot.
		* display. This returns a string. 
		* totalValue. This return the total value of all the cars in the lot.

* Log the cars in the lot to the chrome console usiing console.log.  
* Log the totalValue of all the cars in the lot to the chrome console.

_Note: you will have to create a cars.html that will use each of the above js files_

```
 ...
 <body>
      <h3>Car Lot</h3>
      <script src='js/addresses.js'> </script>
      <script src='js/makers.js'> </script>
      <script src='js/cars.js'> </script>
      <script src='js/car_lot.js'> </script>
  </body>
 ... 
```
 

## Object Creation Patterns.

The problem with Object Literals is that they can get very tedious. For example, if we have to create a new object literal for each Person and there are many people. 

Or I may want to add a property or change a method for a person then I MUST do this for every single person in the app!

__Use Object Literals for objects that are only created once.__

Let's look at some ways we can create Objects.

* Factory Pattern
* Constructor Function
* ECMAScript 5 Object.create


### The Factory Pattern.

The Factory Pattern will use a function to create object literals. The arguments to the factory function will be used to initialize and set the object being created. 
  
__Create a file js/object_factory.js with the below code and reference it from index.html.__


```
 // Person Factory
 var createPerson = function(name, age) {

  // This method is private it is NOT exposed outside 
  // the createPerson function.
  var display =  function(){
    return this.name + " is " + this.age + " years old";
  };

 // create an object literal return it.
 return {
   name: name,
   age: age,
   describe: display  // use the private display method
  };
 };

 var joe = createPerson("joe", 23);
 var jill = createPerson("jill", 32);

console.log(joe.describe());
console.log(jill.describe());
```


* Good so you can DRY up the creation of similar objects and save lines of code.	
* Factory Function is __NOT__ a constructor function.  
* It creates a new sayHi function for every instance, __not good!__  
* Don't use Factory function to create just one object, overkill.  


## LAB

Redo the Car Lot Lab above using the Factory pattern. __Do all your work in the cars_factory_pattern branch__

### The Constructor Function Pattern.

This is the most common way to create objects in Javascript. It's the most common way to implement Classes. This pattern is used with the javascript _new_ keyword to create objects.

Many environments, including browsers, are optimized to use this kind of constructor. The *convention* is to uppercase the first name of a function that will be used as a constructor.


__Create a file js/constructor_function.js with the below code and reference it from index.html.__


```
// Constructor Function object creation

// Constructor function is camel cased by convention.  
var Person = function(name, age){
	this.name = name;
	this.age = age;
};

// Define all the methods for Person in an object literal.
// A little faster than above, defining them individually.
Person.prototype = {
   describe: function(){
	return this.name + " is " + this.age + " years old";
   }
};

var joe = new Person('joe', 23), 
  jill = new Person('jill', 32);

console.log(joe.describe());
console.log(jill.describe());
```

##### Property Lookup and the Prototype.  

Whats happening when we call _new_ on a Constructor function? Heres some detailed info on what javascript is doing. _Same code as above with javascript implementation notes._


```
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

```

__Run the above code and look at the Person.prototype and object __proto__ properties.__


## LAB
Redo the Car Lot Lab above using Constructor Functions. __Do all your work in the cars_constructor_function branch.__

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


### References
* [MDN Object Oriented Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

* __Zakas, Nicholas C. (2011-12-20). Professional JavaScript for Web Developers__  
Chapter 6.  
	* The Factory Pattern.  
	* The Constructor Pattern  
	* Constructors as Functions  
	* The Prototype Pattern  
	* How Prototypes Work  
	* Alternative Prototype Syntax  
	* Dynamic Nature of Prototypes 
	* Problems with Prototypes  
	* Combination Constructor/ Prototype Pattern  

* [Object Playground](http://www.objectplayground.com/)
* [The Four Layers of Javascript OOP](https://www.youtube.com/watch?v=VJOTcUsD2kA&app=desktop)

## Summary.

* Javascript is standardized by ECMAScript. Currently we are using ECMA 5, but ECMA 6 is right around the corner with new functionality.
* Primitves Types are built-in and atomic.
* Some Primitves Types have object wrappers.
* Primitive Types are assigned to variables and properites by value.
* Reference Types, Objects, are assigned to variables and properties by reference.
* Object Literals are somewhat like Maps or Hashes in other languages.
* Object Literals should only be used when you ONLY need one instance of an object.
* Creating Objects with the Factory Pattern, or Factory method.
* Creating Objects with the new keyword and Constructor functions. __USE THIS METHOD__
* Creating Objects with Object.create(...).
* Most prevalant way to create objects is with the 'new' keyword and Constructor Functions.
* Learn about Prototypes and Prototypical Inheritance.
* Learn about property and method lookup.



