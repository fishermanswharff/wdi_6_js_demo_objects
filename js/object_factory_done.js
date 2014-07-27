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