'use strict';
/*  Create an object `newObjectWithProperties` by using object literal notation.
—————————————————————————————————————————————————————————————————————————————————
Create a new object called newObjectWithProperties.
This is the preferred method of creating objects in javascript.
*/
var newObjectWithProperties = {};

/*  1 Dot syntax
——————————————————————————————————————————————————————
Use dot syntax to create a property called someKey
and set the value to "Hello World";
This is ECMAScript 3 compatible */

newObjectWithProperties.someKey = "Hello World"; // Set properties
var someNewVariable = newObjectWithProperties.someKey; // Get properties

/*  2 Square bracket syntax
——————————————————————————————————————————————————————
set another key/value pair on the newObjectWithProperties by using
the square bracket notation. The key should be "anotherKey" and the
value should be "Hello World"
This is ECMAScript 3 compatible
*/
newObjectWithProperties["anotherKey"] = "Hello World"; // Set properties
var anotherNewVariable = newObjectWithProperties["anotherKey"]; // Get properties


/* ========================================
  ECMAScript 5 only compatible approaches
=========================================== */

/*  3 Object.defineProperty
——————————————————————————————————————————————————————
Use the Object.defineProperty method to set a new key "oneMoreKey"
on newObjectWithProperties. The value should be "for more control of the property's behavior"
*/
Object.defineProperty(newObjectWithProperties, "oneMoreKey", {
  value: "for more control of the property's behavior", writable: true,
  enumerable: true,
  configurable: true
});

/*  4 Object.defineProperties
—————————————————————————————————————————————————————— 
Use the Object.defineProperties method to set new key/value
pairs on the newObjectWithProperties object. 
set a new key "aNewKey" with value "I like turtles"
set a new key "anOldKey" with value "Foo bar"
*/
Object.defineProperties( newObjectWithProperties, {
  "aNewKey": {
    value: "I like turtles", writable: true
  },
  "anOldKey": { value: "Foo bar", writable: false }
});
