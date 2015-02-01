'use strict';
describe('Object literals are the simplest way to create an object in javascript.',function(){
  describe('joe',function(){
    it('is an object',function(){
      expect(joe).toEqual(jasmine.any(Object));
    });
    it('has a name',function(){
      expect(joe.name).toEqual('Joe Smoe');
    });
    it('has an age',function(){
      expect(joe.age).toEqual(23);
    });
    it('describes itself with a function as a property value',function(){
      expect(joe.describe()).toEqual('Joe Smoe is 23 years old');
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
    it('describes itself with a function as a property value',function(){
      expect(jill.describe()).toEqual('Jill Smill is 32 years old');
    });
  });
});