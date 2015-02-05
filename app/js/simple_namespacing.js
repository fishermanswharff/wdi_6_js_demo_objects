'use strict';
/*
Namespacing in Javascript
————————————————————————————————————————————————————————————————————————
Javascript namespaces are used to disambiguate names in an
application and prevent polluting the global namespace.
This is so that names in an application do not conflict.
Typically, name conflicts may happen when using a third-party
library or plug-in, such as Bootstrap, jQuery, AngularJS,
EmberJS, BackboneJS, or any other Javascript/CSS framework.

create a namespace for this PersonApp
If PersonApp object already exist than set it to itself.
Otherwise set it to an empty object literal.
*/
var PersonApp = PersonApp || {};

// Namespace an object literal
PersonApp.joe = { name: 'joe', age: 23 };

// Namespace a Factory
PersonApp.createPerson = function(name,age){
  // This method is private it is NOT exposed outside
  // the createPerson function.
  var display =  function(){
    return this.name + " is " + this.age + " years old";
  };
  return {
    name: name,
    age: age,
  };
};
var joe = PersonApp.createPerson('joe', 23);

// Namespace a Constructor Function
PersonApp.Person = function Person(name, age){
  this.name = name;
  this.age = age;
  return this;
};
var joemamma = new PersonApp.Person('joemamma', 34);
var jasonwharff = new PersonApp.Person('jasonwharff',18);
/*
Note:
The var PersonApp = PersonApp || {}; will be set in each file that uses the namespace. Only the first file will actually set the PersonApp to {}. The other files will just assign PersonApp to itself.
*/
