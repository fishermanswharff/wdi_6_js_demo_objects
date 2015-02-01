'use strict';
// Using a Object Literal. Preferred
var newObjectWithProperties = {};

// ECMAScript 3 compatible approaches
// 1 Dot syntax
newObjectWithProperties.someKey = "Hello World"; // Set properties
var someNewVariable = newObjectWithProperties.someKey; // Get properties

// 2 Square bracket syntax 
newObjectWithProperties["anotherKey"] = "Hello World"; // Set properties
var anotherNewVariable = newObjectWithProperties["anotherKey"]; // Get properties

// ECMAScript 5 only compatible approaches

// 3 Object.defineProperty
// Set properties
Object.defineProperty(newObjectWithProperties, "oneMoreKey", {
  value: "for more control of the property's behavior", writable: true,
  enumerable: true,
  configurable: true
});

// 4 ObjectdefineProperties // Set properties
Object.defineProperties( newObjectWithProperties, {
  "aNewKey": {
    value: "I like turtles", writable: true
  },
  "anOldKey": { value: "Foo bar", writable: false }
});
