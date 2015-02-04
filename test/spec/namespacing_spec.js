'use strict';
describe('Namespacing in Javascript',function(){
  describe('PersonApp',function(){
    expect(PersonApp).toEqual(jasmine.any(Object));
    expect(PersonApp).toEqual({});
  });
});


/*
describe('',function(){
  it('',function(){
    expect().toEqual();
  });
});
*/

/*
Expectations/Matchers
————————————————————
expect().toBe();
expect().not.toBe();
expect().toMatch(//);
expect().toBeDefined();
expect().toBeUndefined();
expect().not.toBeUndefined();
expect().toBeNull();
expect().toBeTruthy();
expect().toBeFalsy();
expect().toContain("");
expect().toBeLessThan();
expect().toBeGreaterThan();
expect(pi).toBeCloseTo(e, 2);
expect().toThrow();
*/