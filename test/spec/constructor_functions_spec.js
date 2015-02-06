'use strict';

describe('Constructor Functions in javascript',function(){
  it('first of all, it is a function',function(){
    expect(Person).toEqual(jasmine.any(Function));
    expect(Person).toBeDefined();
  });
  it('second, it creates a new object with the parameters passed',function(){
    var jenna = new Person('Jenna', 30, 'female');
    expect(jenna).toBeDefined();
    expect(jenna.name).toEqual('Jenna');
    expect(jenna.age).toEqual(30);
    expect(jenna.sex).toEqual('female');
  });
  describe('Prototypical inheritance with constructor functions',function(){

    var anna = new Person('Anna Tsykalova', 22, 'female');
    var david = new Person('David Fisher',32,'male');
    var mbp = new Computer('MacBookPro','13in',david,'Pinky Ring');

    it('inherits from the Person.prototype',function(){
      expect(anna.__proto__).toBeDefined();
      expect(anna.__proto__).toEqual(jasmine.any(Object));
      expect(anna.describe).toEqual(jasmine.any(Function));
      expect(anna.describe()).toEqual('Anna Tsykalova identifies as female and is 22 years old.');
      expect(david.describe()).toEqual('David Fisher identifies as male and is 32 years old.');
    });
    it('An object can have a property that is itself another object.',function(){
      expect(mbp.owner).toEqual(jasmine.any(Object));
      expect(mbp.owner.name).toMatch(/David Fisher/);
    });
  });
});

