'use strict';
describe('Object literals are the simplest way to create an object in javascript.',function(){
  describe('joe',function(){
    it('is an object literal',function(){
      expect(joe).toEqual(jasmine.any(Object));
    });
    it('has a name property with value "Joe Schmoe"',function(){
      expect(joe.name).toEqual('Joe Schmoe');
    });
    it('has an age property with value 23',function(){
      expect(joe.age).toEqual(23);
    });
    it('describes itself with a method as a property value',function(){
      expect(joe.describe).toEqual(jasmine.any(Function));
      expect(joe.describe()).toEqual('Joe Schmoe is 23 years old');
    });
  });
  describe('Jill',function(){
    it('is an object',function(){
      expect(jill).toEqual(jasmine.any(Object));
    });
    it('has a name',function(){
      expect(jill.name).toEqual('Jill Smill');
    });
    it('has an age',function(){
      expect(jill.age).toEqual(32);
    });
    it('describes itself with a method as a property value',function(){
      expect(jill.describe()).toEqual('Jill Smill is 32 years old');
    });
  });
});