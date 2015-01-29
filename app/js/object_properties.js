/*// Using a Object Literal. Preferred
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
*/