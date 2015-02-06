'use strict';
describe('The Object.create() method', function(){
  var bird = Object.create(Animal);
  var matt = Object.create(HumanBeing, {name: {value: "Matt Brendzel"}, age: {value: '24'} });

  it('allows inheritance from the Animal Object Literal',function(){
    expect(bird).toBeDefined();
    expect(bird).toEqual(jasmine.any(Object));
  });
  it('allows inheritance from the HumanBeing Object Literal',function(){
    expect(matt).toBeDefined();
    expect(matt).toEqual(jasmine.any(Object));
    expect(matt.talk('hello world')).toEqual('Matt Brendzel said hello world when he/she turned 24');
  });
  it('can override the type property',function(){
    bird.type = "Birds";
    expect(bird.type).toMatch(/Birds/);
    expect(bird.displayType()).toMatch(/Birds/);
  });
});