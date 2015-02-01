'use strict';
describe('Simple object literals can have objects, arrays, primitives, functions and more as values',function(){
  describe('judy',function(){
    it('has a `name` key with a string value',function(){
      expect(judy.name).toEqual(jasmine.any(String));
      expect(judy.name).toEqual("Judy Dench");
    });
    it('has an `age` key with a Number value',function(){
      expect(judy.age).toEqual(jasmine.any(Number));
      expect(judy.age).toEqual(32);
    });
  });

  describe('fred',function(){
    it('has a `name` key with a String value',function(){
      expect(fred.name).toEqual(jasmine.any(String));
      expect(fred.name).toEqual('Fred Armison');
    });
    it('has an `age` key with a Number value',function(){
      expect(fred.age).toEqual(jasmine.any(Number));
      expect(fred.age).toEqual(27);
    });
  });

  describe('jason',function(){
    it('has a `name` key with a string value of "Jason Wharff"',function(){
      expect(jason.name).toEqual(jasmine.any(String));
      expect(jason.name).toEqual("Jason Wharff");
    });
    it('has an `age` key with the value as number 34',function(){
      expect(jason.age).toEqual(jasmine.any(Number));
      expect(jason.age).toEqual(34);
    });
    it('has an `occupation` key with the value of a string "Software Developer"',function(){
      expect(jason.occupation).toEqual(jasmine.any(String));
      expect(jason.occupation).toEqual("Software Developer");
    });
    it('has a key `siblings` with an array of objects as the value',function(){
      expect(jason.siblings).toEqual(jasmine.any(Array));
    });
    it('first sibling is the `judy` object',function(){
      expect(jason.siblings[0]).toEqual({name: "Judy Dench",age: 32});
    });
    it('second sibling is the `fred` object',function(){
      expect(jason.siblings[1]).toEqual({name: "Fred Armison",age: 27});
    });
    it('has an `address` key with an object as the value',function(){
      expect(jason.address).toEqual(jasmine.any(Object));
    });
    it('has a key of `street` with a string value of "44 Warren St."',function(){
      expect(jason.address.street).toEqual(jasmine.any(String));
      expect(jason.address.street).toEqual("44 Warren St.");
    });
    it('has a `city` key with a string value of "Stoneham"',function(){
      expect(jason.address.state).toEqual(jasmine.any(String));
      expect(jason.address.city).toEqual("Stoneham");
    });
    it('has a `state` key with a string value of "MA"',function(){
      expect(jason.address.state).toEqual(jasmine.any(String));
      expect(jason.address.state).toEqual("MA");
    });
    it('has a `zip` key with a number value of 21144',function(){
      expect(jason.address.zip).toEqual(jasmine.any(Number));
      expect(jason.address.zip).toEqual(21144);
    });
    it('has a `display` key with a method as a value',function(){
      expect(jason.address.display).toEqual(jasmine.any(Function));
    });
    it('`display`’s function returns a string of the address with comma separated values: "44 Warren St., Stoneham, MA"',function(){
      expect(jason.address.display()).toEqual("44 Warren St., Stoneham, MA");
    });
    it('has a `describe` key with a method as a the value',function(){
      expect(jason.describe).toEqual(jasmine.any(Function));
    });
    it('`describe` function returns a string "Jason Wharff is 34 years old"',function(){
      expect(jason.describe()).toEqual("Jason Wharff is 34 years old");
    });
  });
});