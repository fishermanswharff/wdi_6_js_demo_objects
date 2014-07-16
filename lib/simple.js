var joe = {
  name: 'joe',
  age: 23,
  describe: function(){
    return this.name + " is "  + this.age + " years old";
  }
}

console.log(joe.describe());

// OR 
var jill = {};
jill.name = "Jill Smill";
jill.age = 32;

// Property value is a function
jill.describe = function(){
  return this.name + " is " + this.age + " years old";
};

console.log("Hey " + jill.name +  " where you going with that gun in your hand");
console.log("Hey " + joe.name + " are you really " + joe['age'] + " years old?");
