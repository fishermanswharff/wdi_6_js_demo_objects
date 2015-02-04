'use strict';
describe('Prototypical inheritance in Javascript',function(){
  describe('The `person` object',function(){
    it('is an object',function(){
      expect(person).toEqual(jasmine.any(Object));
    });
    it('has a `type` property with a string value of "person"',function(){
      expect(person.type).toEqual(jasmine.any(String));
      expect(person.type).toEqual('person');
    });
    it('has a `name` property with a string value of "person"',function(){
      expect(person.name).toEqual(jasmine.any(String));
      expect(person.name).toEqual('person');
    });
    it('has a `sayHi` property with a value of a function that takes one parameter and returns a string composed with the object’s name, the word "says" and the parameters passed into the function',function(){
      spyOn(person, 'sayHi').and.callThrough();
      expect(person.sayHi).toEqual(jasmine.any(Function));
      person.sayHi('hello world');
      expect(person.sayHi).toHaveBeenCalled();
      expect(person.sayHi).toHaveBeenCalledWith('hello world');
      expect(person.sayHi('hello world')).toEqual('person says hello world');
      expect(person.sayHi('the dude abides')).toEqual('person says the dude abides');
      expect(person.sayHi('I like turtles')).toEqual('person says I like turtles');
    });
  });

  describe('The `jeff` object',function(){
    it('has a `name` property with a string value of "Jeff Horn"',function(){
      expect(jeff.name).toEqual(jasmine.any(String));
      expect(jeff.name).toEqual("Jeff Horn");
    });
    it('has an `age` property with a number value of 23',function(){
      expect(jeff.age).toEqual(jasmine.any(Number));
      expect(jeff.age).toEqual(23);
    });
    it('has a `describe` property with a value of a function',function(){
      expect(jeff.describe).toEqual(jasmine.any(Function));
    });
    it('returns a description when the `describe` property is invoked',function(){
      spyOn(jeff,'describe').and.callThrough();
      jeff.describe();
      expect(jeff.describe).toHaveBeenCalled();
      expect(jeff.describe()).toEqual('Jeff Horn is 23 years old');
    });
    it('inherits from the person object',function(){
      expect(jeff.__proto__).toEqual(person);
    });
    it('also inherits all the properties of the person object',function(){
      expect(jeff.sayHi('hello')).toEqual('Jeff Horn says hello');
    });
  });
});