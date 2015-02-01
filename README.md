![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

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

```javascript
// Using an Object constructor
var newObjectFromContructor = new Object();

// Using an Object Literal. Preferred
var newObjectFromLiteral = {};
```

#### Four ways that properties can be added.

_js/object_properties.js_

```javascript
// Using an Object Literal. Preferred
var newObjectWithProperties = {};

// ECMAScript 3 compatible approaches
// 1. Dot syntax
// Set properties
newObjectWithProperties.someKey = "Hello World"; // Set properties
var someNewVariable = newObjectWithProperties.someKey; // Get properties

// 2. Square bracket syntax // Set properties
newObjectWithProperties["anotherKey"] = "Hello World"; // Set properties
var anotherNewVariable = newObjectWithProperties["anotherKey"]; // Get properties

// ECMAScript 5 only compatible approaches
// 3. Object.defineProperty
// Set properties
Object.defineProperty(newObjectWithProperties, "oneMoreKey", {
  value: "for more control of the property's behavior", writable: true,
  enumerable: true,
  configurable: true
});

// 4. Object.defineProperties // Set properties
Object.defineProperties( newObjectWithProperties, {
  "aNewKey": {
    value: "I like turtles", writable: true
  },
  "anOldKey": { value: "Foo bar", writable: false }
});
```
## Object Literals.

An Object literal is the simplest way to create an object in javacript. It looks and behaves somewhat like a Ruby hash but has some key differences.


__Create a file js/simple_object_literals.js with the below code__

```javascript
// Create an Object literal representing one person.
var joe = {
  name: "Joe Schmoe",
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
};

```

An Object Literal:

* Has properties.
* Each property has a name and a value, name/value pairs.
* A property is typically a string, but can be it can be a number _(rare)_.
* A value can be a __Primitive__ or an __Object__, aka reference type.
* A value can be a __function__. We call these properties methods.
* A value can be based on the built-in Object, see above, or a user defined object.
* By default is based on the built-in Javascript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).


### Object Literals with properties that are objects.

Object literals can have properties that are objects.

__Create a file js/simple_object_literals_address.js with the below code__

```javascript
var judy = {
  name: "Judy Dench",
  age: 32
};
var fred = {
  name: "Fred Armison",
  age: 27
};

/*
Objects can have objects.
The siblings property's value is an Array
The address property's value is a Object literal.
The describe property's value is a Function, which is also an object.
*/

var jason = {
  name: "Jason Wharff",
  age: 34,
  occupation: "Software Developer",
  siblings: [judy,fred],
  address: {
    street: '44 Warren St.',
    city: 'Stoneham',
    state: 'MA',
    zip: 01345,
    display: function(){
       return this.street + ", " + this.city + ", " + this.state;
    }
  },
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};
```

### Objects properties and methods can change anytime.

Here we are setting the `jason` object literal's describe property with another (different) function.

There is no test for this, we just want you to be aware that you can update a property's value at any time.

```javascript
// Can change the describe function later, at runtime.
// by setting the describe property
jason.describe = function(showDetail){
  var info;
  if(showDetail){
    info = this.name + " age is " + this.age + ", address is: " + this.address.display();
  }else{
    info = this.name + " is " + this.age + " years old";
  }
  return info
};

// describe jason.
console.log(jason.describe(true));

// describe jason in detail
console.log(jason.describe(false));
```

### Prototypical Inheritence

Each object will have an internal ``__proto__`` property that can point to another object. An Object Literal's ``__proto_`` property will point to the [Object.prototype](http://goo.gl/C568wU) by default.

An object's ``__proto__`` pointer will be used to lookup properties, _(values and methods)_.

![Object Literal Prototype](images/object_literal_prototype.png)

For the example above:
* When one calls jason.toString().
* js will look for the property toString in the jason object literal.
* It will __not__ be found.
* js will look for the property toString in the object pointed to by ``jason.__proto__``. _This is the Object.prototype._
* js will find the toString method on Object.prototype and execute it.

__By setting this ``__proto_`` property we can _simulate_ object inheritance.__

___Create a file js/simple_prototype.js with the below code__

```javascript
// The person object inherits from the base javascript Object.prototype
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

/*  The sayHi property for jeff will be found by following jeff's __proto___ property. */
jeff.sayHi('hello world');
```
<!-- ![Object Literal Inheritance](images/object_literal_inherit.png) -->

For the example above:
* When one calls jeff.sayHi("hey there").
* js will look for the property sayHi in the jeff object literal.
* It will not be found.
* js will look for the property sayHi in the object pointed to by ``jeff.__proto__``. This is the person object.
* js will find the sayHi method on the person object and execute it.

### Use Object Literals for objects that are only created once.

What if we want to create a lot of people?

We will have to create lots of object literals and each time a property or method changes we'll have to change each object literal in the program. *Makes maintainence very difficult and the code not DRY*. For example, what if we want to change each person to have an occupation that is shown in the describe function?

Use Object literals for instances that will exist only once, or *Singletons*, in your application. For example, CarLot or RecordCompany.

Later, we will see how to emulate a class in Javascript that will be used to create instances, or objects, of something.

### Using Object Literals to create a Namespace.

Javascript namespaces are used to disambiguate names in an application. This is so that names in an application do not conflict.

Typically, name conflict may happen when using a third-party library or plug-in.

_We will use namespaces later when we create objects._

__Note:__
_The var PersonApp = PersonApp || {}; will be set in each file that uses the namespace._

_Only the first file will actually set the PersonApp to {}. The other files will just assign PersonApp to itself._

```javascript
// create a namespace for this PersonApp
// If PersonApp object already exist than set it to itself.
// Otherwise set it to an empty object literal.
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

```html
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


### The Factory Pattern (optional).

The Factory Pattern will use a function to create object literals. The arguments to the factory function will be used to initialize and set the object being created.

[Factory Pattern](FactoryPattern.md)


## LAB

Redo the Car Lot Lab above using the Factory pattern. __Do all your work in the cars_factory_pattern branch__

## Demo

### The Constructor Function Pattern.

This is the most common way to create objects in Javascript. It's the most common way to implement Classes. This pattern is used with the javascript _new_ keyword to create objects.

Many environments, including browsers, are optimized to use this kind of constructor. The *convention* is to uppercase the first name of a function that will be used as a constructor.


__Create a file js/constructor_function.js with the below code and reference it from index.html.__


```javascript
debugger;

// Constructor Function object creation
// Constructor function is camel cased by convention.
var Person = function(name, age){
  // When new Person(...) is invoked
  // this = {};
  // this.__proto_ = Person.prototype
  debugger;

  this.name = name;
  this.age = age;

  // return the this pointer
  // return this;
};

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

__BIG NOTE:__ The _``__proto__``_ property is NOT the same as the _``prototype``_ property.
The ``__proto__ `` property is __ONLY__ used for object property lookup.
The ``Function.prototype`` property will only exist for functions.

##### Property Lookup and the Prototype.

Whats happening when we call joe.describe().

For the example above:
* When one calls joe.describe();
* js will look for the property describe in the joe object literal.
* It will not be found.
* js will look for the property describe in the object pointed to by ``joe.__proto__``. This is the Person.prototype object.
* js will find the describe method on the Person.prototype object and execute it.


![Constructor function](images/constructor_function1.png)


__Run the above code and look at the Person.prototype and object ``__proto__``  properties.__


## LAB
Redo the Car Lot Lab above using Constructor Functions. __Do all your work in the cars_constructor_function branch.__

## Demo
### Object.create (optional)

ECMAScript 5 defined a new way to create an object. Object.create(...).

You will be seeing this more as time goes on and developers make use of this. For now, we will be using the Constructor Function to create objects.

[Object.create](ObjectCreate.md)

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



