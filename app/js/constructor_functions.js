'use strict';

/*  Constructor functions in javascript
————————————————————————————————————————
Defining a constructor function starts by declaring
a variable in camel case. There is a strong convention,
with good reason, to use a capital initial letter.

To define an object type, create a function
for the object type that specifies its name,
properties, and methods. For example, suppose
you want to create an object type for a Person.
You want this type of object to be called Person,
and you would want it to have some properties
like name, age, and sex. You would write this like:
*/

var Person = function(name, age, sex){
  this.name = name;
  this.age = age;
  this.sex = sex;

  /* Notice the use of this to assign
  values to the object's properties
  based on the values passed to the
  function.*/
};


/*  You instantiate new objects from constructors with
the 'new' syntax, like so:  */
var ozamataz = new Person('Ozamataz Buckshank', 23, 'male');
var beezer = new Person('Beezer Twelve Washingbeard', 19, 'male');

/*  These statements create ozamataz and beezer objects
and assign the specified values for its properties.
The value of ozamataz.name is 'Ozamataz Buckshank' and the value
of beezer.age is 34.  */


var Computer = function(make, model, owner, name){
  this.make = make;
  this.model = model;
  this.owner = owner;
};

/* Objects can have properties that are themselves another object */
var mbp = new Computer('MacBookPro', '15inch Retina', beezer, 'Mean Silver Machine');

/* You can then access the property: */
mbp.owner.name

/*  You can also assign prototypes functions.
This will allow all instances of a Person to use
the describe method. This will point ozamataz and beezer's
__proto__ to this object literal */
Person.prototype.describe = function(){
  return this.name + ' identifies as ' + this.sex + ' and is ' + this.age + ' years old.';
};

// console.log(beezer.__proto__);
// console.log(beezer.describe());

/*  BIG NOTE
————————————————————————————————————————
The __proto__ property is NOT the same as the `prototype` property.
The __proto__ property is ONLY used for object property lookup.
The Function.prototype property will only exist for functions.
*/