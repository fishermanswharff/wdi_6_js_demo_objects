'use strict';
describe('There are 4 ways you can add properties on an object',function(){
  it('Using the dot syntax to get and set properties',function(){
    expect(newObjectWithProperties).toBeDefined();
    expect(newObjectWithProperties.someKey).toBe("Hello World");
    expect(someNewVariable).toEqual("Hello World");
  });
  it('Using square bracket syntax',function(){
    expect(newObjectWithProperties["anotherKey"]).toBe("Hello World");
    expect(anotherNewVariable).toBe("Hello World");
  });
  it('Using Object.defineProperty (ECMA 5)',function(){
    expect(newObjectWithProperties["oneMoreKey"]).toBe("for more control of the property's behavior");
  });
  it('Using Object.defineProperties',function(){
    expect(newObjectWithProperties.aNewKey).toBe("I like turtles");
    expect(newObjectWithProperties.anOldKey).toBe("Foo bar");
  });
});