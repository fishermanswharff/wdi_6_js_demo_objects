'use strict';
describe('Two Ways to create a new Object',function(){
  it('Using an Object constructor',function(){
    expect(newObjectFromContructor).toEqual({});
    expect(newObjectFromContructor).toBeDefined();
  });

  it('Using an Object literal (Preferred)',function(){
    expect(newObjectFromLiteral).toEqual({});
    expect(newObjectFromLiteral).toBeDefined();
  });
});