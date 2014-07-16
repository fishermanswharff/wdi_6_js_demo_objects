// Factory to create people.
var createPerson = function(new_name, new_age){

  // Private method
  // Local ONLY to this function.
  var _display = function(){
    return this.name + " is " + this.age + " yrs old";
  };

  return {
    name: new_name,
    age: new_age,
    display: _display
  };
};

debugger;
var joe = createPerson('joe', 23);
var jill = createPerson('jill', 32);

console.log(joe.display());
console.log(jill.display());
