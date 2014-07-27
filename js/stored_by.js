// The primitive data type String is stored as a value
debugger;

var valuePerson = "Jane";  
var valueAnotherPerson = valuePerson; // anotherPerson = the value of person
valuePerson = "Joe"; // value of person changed

console.log(valueAnotherPerson); // Jane
console.log(valuePerson); // Joe

// Stored by Reference
var refPerson = {name: "Jane"};
var refAnotherPerson = refPerson;
refPerson.name = "Joe";

console.log(refAnotherPerson.name); // Joe
console.log(refPerson.name); // Joe