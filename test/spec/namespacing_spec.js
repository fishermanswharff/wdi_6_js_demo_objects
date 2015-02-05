'use strict';
describe('Namespacing in Javascript',function(){
  describe('PersonApp namespace',function(){
    it('creates a new object for namespacing',function(){
      expect(PersonApp).toEqual(jasmine.any(Object));
    });
    it('has a property called "joe" that has an object for a value',function(){
      expect(PersonApp.joe).toEqual({name: 'joe', age: 23});
    });
    it('has a createPerson property that is a namespaced factory',function(){
      expect(PersonApp.createPerson).toEqual(jasmine.any(Function));
    });
    it('returns a new object literal from the createPerson factory',function(){
      expect(PersonApp.createPerson('joe',23)).toEqual({name: 'joe', age: 23})
    });
    it('has a constructor function called Person',function(){
      expect(PersonApp.Person).toEqual(jasmine.any(Function));
    });
    it('returns the newly constructed objects',function(){
      expect(joemamma).toEqual(jasmine.any(PersonApp.Person));
      expect(jasonwharff).toEqual(jasmine.any(PersonApp.Person));
      expect(joemamma.name).toEqual('joemamma');
      expect(jasonwharff.name).toEqual('jasonwharff');
      expect(joemamma.age).toEqual(34);
      expect(jasonwharff.age).toEqual(18);
    });
  });
});

